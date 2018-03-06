//登录协议
let prottab = {}
module.exports = prottab

prottab.ALogin_C2SSignIN = 10       //正常流程登陆
prottab.ALogin_C2SRegAccount = 11   //正常注册
prottab.ALogin_C2SCheckSignIN = 12  //断线重连时候发送账号密码验证
prottab.ALogin_C2SUpdateInfo = 13   //更新用户信息

prottab.ALogin_S2CSignIN = 100    //正常登陆返回
prottab.ALogin_S2CRegAccount = 101  //注册返回
prottab.ALogin_S2CReplaceLogin = 102  //被替换下线
prottab.ALogin_S2CReDoLogin = 103     //请重新登陆
prottab.ALogin_S2CCheckSignIN = 104   //断线重连时候发送账号密码验证

////////////////////////////////////////////////////////////-
////////////////////////////////////////////////////////////-
/*
//正常登陆
local C2SSignIN = {
    accName = "ffy", //登录用户名，base64加密成字符串
    accPwd = "111111", //用户密码, md5
    platform = 0, //描述platform=1表示微信平台,platform=0表示普通登陆
}
local S2CSignIN = {
    isSuccess = 0,    //成功返回1，失败返回0
    platform = 0, //描述platform=1表示微信平台,platform=0表示普通登陆
    addr = "", //登陆ip
}
//正常注册
local C2SRegAccount = {
    accName = "",   //注册账户名，base64加密成字符串
    accPwd = "",    //注册密码，md5加密
    userName = "",  //用户名称
    headUrl = "",
    isBoy = 0,
    platform = 0, //描述platform=1表示微信平台,platform=0表示普通登陆
}
local S2CRegAccount = {
    isSuccess = 0,  //成功返回1，失败返回0
}
//已登录却掉线，重新验证登陆
local C2SCheckSignIN = C2SSignIN
local S2CCheckSignIN = S2CSignIN

//被替换下线, 被谁替换下线
local S2CReplaceLogin = {
    rpUserId = 0,       //用户id
    rpUserName = "",    //用户名
    rpUserAddr = "",    //替换的ip
}
//服务器告诉客户端重新输入密码或微信授权登陆，如在和上次登陆不同的ip进行登陆操作
local S2CReDoLogin = {

}
//更新用户信息, 比如微信昵称
local C2SUpdateInfo = {
    userName = "",  //更新用户名
    hearUrl = "",
    isBoy = 0,
}
*/