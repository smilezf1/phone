//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgList: [{
        src: "https://yanxuan.nosdn.127.net/2757140ee59e2c53de1fafba7fd876df.jpg?imageView&quality=75&thumbnail=750x0"
      },
      {
        src: "https://yanxuan.nosdn.127.net/7315aafff3368de1aa4262b168518051.jpg?imageView&quality=75&thumbnail=750x0"
      },
      {
        src: "https://yanxuan.nosdn.127.net/45081b3e4e78484247ce176a053bf971.jpg?imageView&quality=75&thumbnail=750x0"
      }
    ],
    navList: [{
        id: 1,
        icon: "icon-dibudaohanglan",
        content: "新闻教育"
      },
      {
        id: 2,
        icon: "icon-fuzhuang",
        content: "服装纺织"
      },
      {
        id: 3,
        icon: "icon-zhijin",
        content: "造纸印刷"
      },
      {
        id: 4,
        icon: "icon-yiqiyibiao01",
        content: "电子仪器"
      },
      {
        id: 5,
        icon: "icon-nongye",
        content: "食品农业"
      }, {
        id: 6,
        icon: "icon-richangxuncha",
        content: "日常服务"
      },
      {
        id: 7,
        icon: "icon-jiaju",
        content: "家具门窗"
      },
      {
        id: 8,
        icon: "icon-tongxun",
        content: "电力通讯"
      },
      {
        id: 9,
        icon: "icon-huaxue",
        content: "化学化工"
      },
      {
        id: 10,
        icon: "icon-jianzhu",
        content: "建筑房产"
      },
      {
        id: 11,
        icon: "icon-dibudaohanglan",
        content: "新闻教育"
      },
      {
        id: 12,
        icon: "icon-fuzhuang",
        content: "服装纺织"
      },
      {
        id: 13,
        icon: "icon-zhijin",
        content: "造纸印刷"
      },
      {
        id: 14,
        icon: "icon-yiqiyibiao01",
        content: "电子仪器"
      },
      {
        id: 15,
        icon: "icon-nongye",
        content: "食品农业"
      }, {
        id: 16,
        icon: "icon-richangxuncha",
        content: "日常服务"
      },
      {
        id: 17,
        icon: "icon-jiaju",
        content: "家具门窗"
      },
      {
        id: 18,
        icon: "icon-tongxun",
        content: "电力通讯"
      },
      {
        id: 19,
        icon: "icon-huaxue",
        content: "化学化工"
      },
      {
        id: 20,
        icon: "icon-jianzhu",
        content: "建筑房产"
      }

    ],
    placeholderHint: "请输入帖子内容搜索"
  },
  onLoad: function() {},
  onShareAppMessage: function() {

  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
  },
  deletePlaceholder() {
    this.setData({
      placeholderHint: ""
    })
  },
  setPlaceholder() {
    this.setData({
      placeholderHint: "请输入帖子内容搜索"
    })
  }

})