// pages/detail/detail.js
let detailList = require("../../datas/list-data.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
     index:0,
     list:'',
     isShow:false,
     musicPlay:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(this.data.isShow)
   
    
       this.setData({
         index:options.index,
         list: detailList.list_data[options.index]
       })
    let value = wx.getStorageSync('key')
    if(!value) {

    wx.setStorageSync('key', {})
    } else {

    this.setData({
      isShow : value[this.data.index] || false
    })
    }
   

  },
  // 收藏点击
  imgTap() {
   
    let isShow = !this.data.isShow
      this.setData({
        isShow
      })
      if(isShow) {
        wx.showToast({
          title: "收藏成功",
          icon: 'success',
        }) 
      } else {
        wx.showToast({
          title: "取消收藏",
          icon: 'success',
        }) 
      }
      let index = this.data.index;
    var value = wx.getStorageSync('key')
    console.log(index,value)
    value[index] = isShow
    console.log(value)
    
    wx.setStorageSync('key',value)
   
  },
  //转发
  zhuanfa() {
    wx.showActionSheet({
      itemList:['分享到朋友圈','分享到QQ空间','分享给QQ好友'],
      success(res) {
  console.log(res)
      }
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