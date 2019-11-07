// pages/log/log.js
let logListJs = require("../../datas/list-data.js") ;
Page({

  /**
   * 页面的初始数据
   */
  data: {
      logListJss:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.setData({
        logListJss: logListJs.list_data
      })
  },
  // 跳转
  toDetail(e) {
    console.log(e.currentTarget.dataset.todetail
)
    let index = e.currentTarget.dataset.todetail
    wx.navigateTo({
      url:"/pages/detail/detail?index="+index
    })
  },
  // 点击轮播图跳转
  sToDetail(e) {
    console.log(e)
    let idx = e.target.dataset.list
    wx.navigateTo({
      url: '/pages/detail/detail?index=' + idx,
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})