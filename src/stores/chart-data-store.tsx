import { makeObservable, action, observable } from "mobx";
import { makePersistable } from "mobx-persist-store";
import DerivAPIBasic from "https://cdn.skypack.dev/@deriv/deriv-api/dist/DerivAPIBasic";

const app_id = 1089; // Replace with your app_id or leave as 1089 for testing.
const connection = new WebSocket(
  `wss://ws.binaryws.com/websockets/v3?app_id=${app_id}`
);
const api = new DerivAPIBasic({ connection });
const tickStream = () => api.subscribe({ ticks: "R_100" });

class AuthStoreImplementation {
  chart_data: any[] = []; // Assign an initial value of an empty array

  constructor() {
    makeObservable(this, {
      chart_data: observable,
      tickResponse: action.bound,
      subscribeTicks: action.bound,
      unsubscribeTicks: action.bound,
    });

    // // Make the store persistable
    // makePersistable(this, {
    //   name: "ChartDataStore",
    //   properties: ["chart_data"],
    //   storage: window.localStorage,
    // });
  }

  tickResponse = async (res: any) => {
    const data = JSON.parse(res.data);
    if (data.error !== undefined) {
      console.log("Error : ", data.error.message);
      connection.removeEventListener("message", this.tickResponse, false);
      await api.disconnect();
    }
    if (data.msg_type === "tick") {
      // console.log(data.tick);
      this.chart_data.push(data.tick);
    }
  };

  subscribeTicks = async () => {
    await tickStream();
    connection.addEventListener("message", this.tickResponse);
  };

  unsubscribeTicks = () => {
    connection.removeEventListener("message", this.tickResponse, false);
    tickStream().unsubscribe();
  };
}

const authStore = new AuthStoreImplementation();

export default authStore;
