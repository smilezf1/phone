const basePath=require("./config.js");
function http(method,url,datas,callback){
  wx.request({
    url:basePath+url,
    method,
    data:datas,
    header:{'Content-type':"application/x-www-form-urlencoded"},
    success:res=>{
      return callback(res.data)
    },
    fail:error=>{
      console.log(error)
    }
  })
}
module.exports={http}