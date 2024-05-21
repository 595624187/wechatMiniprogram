import { createStoreBindings } from "mobx-miniprogram-bindings";
import { store } from "../../store/store";

Page({
  /**
   * 页面的初始数据
   */
  data: {},
  async getInfo() {
    const { data: res } = await wx.p.request({
      methods: "GET",
      url: "https://applet-base-api-t.itheima.net/api/get",
      data: {
        name: "zs",
        age: 18,
      },
    });
    console.log(res);
  },
  btnHandler1(e) {
    const { step } = e.target.dataset;
    this.updateNum1(step);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.storeBindings = createStoreBindings(this, {
      store,
      fields: ["numA", "numB", "sum"],
      actions: ["updateNum1", "updateNum2"],
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    this.storeBindings.destroyStoreBindings();
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
});
