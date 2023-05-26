import {observable, makeObservable, action} from "mobx";

class modeStoreImplementation {
    dark_mode = true;

    constructor() {
        makeObservable(this,{
            dark_mode: observable,
            setMode: action,
        })
    }

    setMode() {
        this.dark_mode = !this.dark_mode;
    }
}

const modeStore = new modeStoreImplementation();

export default modeStore;