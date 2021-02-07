import { observable, computed, action } from "mobx";

export default class SampleStore {
    @observable num = 0;
    @computed get double() {
        return this.num * 2;
    }

    @action changeNum = (newNum) => this.num = Number(newNum);
}