// custom-tab-bar/index.js
import { storeBindingsBehavior } from "mobx-miniprogram-bindings";
import { store } from "../store/store";

Component({
  /**
   * 组件的属性列表
   */
  behaviors: [storeBindingsBehavior],
  storeBindings: {
    store,
    fields: {
      sum: "sum",
      activeTabbarIndex: "active",
    },
    actions: {
      updateActive: "updateActive",
    },
  },
  properties: {},
  options: {
    styleIsolation: "shared",
  },
  /**
   * 组件的初始数据
   */
  data: {
    list: [
      {
        selectedIconPath: "/common/home-active.png",
        iconPath: "/common/home.png",
        pagePath: "/pages/index/index",
        text: "首页",
      },
      {
        selectedIconPath: "/common/message-active.png",
        iconPath: "/common/message.png",
        pagePath: "/pages/message/message",
        text: "消息",
        info: "2",
      },
      {
        selectedIconPath: "/common/email-active.png",
        iconPath: "/common/email.png",
        pagePath: "/pages/email/email",
        text: "邮箱",
      },
      {
        selectedIconPath: "/common/contact-active.png",
        iconPath: "/common/contact.png",
        pagePath: "/pages/contact/contact",
        text: "联系我们",
      },
    ],
  },
  observers: {
    sum: function (val) {
      if (val < 0) return;
      this.setData({
        "list[1].info": val,
      });
    },
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onChange(event) {
      this.updateActive(event.detail);
      wx.switchTab({
        url: this.data.list[event.detail].pagePath,
      });
    },
  },
});
