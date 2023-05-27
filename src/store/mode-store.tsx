import { observable, makeObservable, action } from "mobx";

class modeStoreImplementation {
  mode = "dark";

  constructor() {
    makeObservable(this, {
      mode: observable,
      setMode: action,
    });
  }

  setMode() {
    if (this.mode === "dark") {
      this.mode = "light";
    } else if (this.mode === "light") {
      this.mode = "dark";
    }
  }
}

const modeStore = new modeStoreImplementation();

export default modeStore;
