//index.js
//获取应用实例
import {
  http
} from '../../utils/http.js';
Page({
  data: {
    imgList: [],
    navList: [],
    navListItem: []
  },
  onLoad: function() {
    const _this = this;
    http("get", "amouse.index.getFlList", {}, function(res) {
      _this.setData({
        navList: res.list
      })
      _this.chooseData();
    })
    http("get","amouse.index.banner",{},function(res){
      console.log(res.banner);
      let data=res.banner;
      _this.setData({
        imgList:data
      })
    })
  },
  //根据数据动态生成页码
  chooseData() {
    const _this = this;
    let arr = [];
    _this.data.navList.forEach((v, i) => {
      let num = parseInt(i / 10); /* 页码 */
      if (!arr[num]) {
        arr[num] = []
      }
      arr[num].push(v);
    })
    _this.setData({
      navListItem: arr
    });

  },
  onShareAppMessage: function() {},
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