// pages/my/my.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    swiperList: [
      { id: 3, image: "../../images/1.jpg", link: "" },
      {
        id: 4,
        image: "../../images/2.jpg",
        link: "",
      },
    ],
    gridList: [],
  },
  getSwiperList() {
    wx.request({
      url: "https://applet-base-api-t.itheima.net/slides",
      method: "GET",
      success: (res) => {
        console.log(res.data);
        this.setData({
          swiperList: [...this.data.swiperList, ...res.data],
        });
      },
    });
  },
  getGridList() {
    wx.request({
      url: "https://applet-base-api-t.itheima.net/categories",
      method: "GET",
      success: (res) => {
        console.log(res.data);
        this.setData({
          gridList: res.data,
        });
      },
    });
  },
  gotoInfo() {
    wx.navigateTo({
      url: "/pages/info/info?name=zhangsan&age=12",
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getSwiperList();
    this.getGridList();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {},
});
