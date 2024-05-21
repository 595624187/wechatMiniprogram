import { action, observable } from "mobx-miniprogram";

export const store = observable({
  //数据字段
  numA: 1,
  numB: 2,
  active: 0,
  //计算属性
  get sum() {
    return this.numA + this.numB;
  },
  //action函数，专门来修改store中数据的值
  updateNum1: action(function (step) {
    this.numA += step;
  }),
  updateNum2: action(function (step) {
    this.numB += step;
  }),
  updateActive: action(function (val) {
    this.active = val;
  }),
});
