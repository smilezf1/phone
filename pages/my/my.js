// pages/my/my.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    authWindowHidden: true,
    nickName:"登录",
    avatarUrl:"/static/image/avator.png"
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //查看是否授权
    wx.getSetting({
      success(res) {
        if (res.authSetting["scope.userInfo"]) {
          wx.getUserInfo({
            success: res => {
              console.log(res.userInfo);
            }
          })
        } else {
          console.log("用户没有授权")
        }
      }
    })

  },
  getUserInfo(e) {
    const _this=this;
    let rawData = JSON.parse(e.detail.rawData);
    let {
      nickName,
      avatarUrl
    } = rawData;
    _this.setData({
      nickName,
      avatarUrl
    })
    //同步
    wx.setStorageSync('nickName', nickName);
    wx.setStorageSync("avatar", avatarUrl);
  },
  login() {
    this.setData({
      authWindowHidden: false
    })

  },
  consent() {
    this.setData({
      authWindowHidden: true
    })

  },
  reject() {
    this.setData({
      authWindowHidden: true
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})