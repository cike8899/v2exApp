//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    about: "关于",
    sideOpen: false,
    sideData: this.buildSideData()
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  handleAboutClick() {
    wx.navigateTo({
      url: '../about/about',
    })
  },
  handleMoveClick(params) {
    console.info(params);
    wx.navigateTo({
      url: '../move/move',
    })
  },
  handleTabViewClick(params) {
    wx.navigateTo({
      url: '../scrollableTabView/index',
    })
  },
  handleTextClick(e) {
    console.info(e);
    var key = e.currentTarget.dataset.key;
    var skipTo = "";
    if (key === "drawer") {
      skipTo = "/pages/wxDrawer/index";
    }
    wx.navigateTo({
      url: skipTo,
    })
  },
  showSidebar(e) {
    console.info(e);
    var open = !this.data.sideOpen;
    this.setData({ sideOpen: open });
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  },
  buildSideData() {
    return [
      "浏览",
      "节点",
      "设置",
      "反馈",
    ]
  }
})
