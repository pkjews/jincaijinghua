//好友协议
////////////////////////////////////////////////////////////-
let prottab = {}
module.exports = prottab

prottab.AFriend_C2SQueryFriend = 10   //查询所有好友信息
prottab.AFriend_C2SReqAddFriend = 11   //申请添加好友
prottab.AFriend_C2SDeleteFriend = 12  //删除好友
prottab.AFriend_C2SQueryUser = 13  //查找玩家
prottab.AFriend_C2SAcceptFriend = 14  //接受好友申请
////////////////////////////////////////////////////////////-
prottab.AFriend_S2CQueryFriend = 200  //查询好友
prottab.AFriend_S2CDeleteFriend = 202  //删除好友
prottab.AFriend_S2CQueryUser = 203      //查找玩家
prottab.AFriend_S2CLoginStatus = 204	//好友登入登出状态通知

////////////////////////////////////////////////////////////-
////////////////////////////////////////////////////////////-
//协议结构体
/*
local C2SQueryFriend = {
	
}
local S2CQueryFriend = {
	limit = 0,  //好友上限
	ftab = {},   //朋友列表{{userId=0, userName="", online=0, headurl="", isBoy=0,}}
	reqtab = {},  //申请好友列表{{userId=0, userName="", online=0, headurl="", isBoy=0,}}
}
////////////////////////////////////////////-
local C2SReqAddFriend = { //申请添加好友
    userId = 0,	//用户id，主动请求
}
local S2CReqAddFriend = { //申请添加好友
	info = {}, //用户信息表{userId=0, userName="", online=0, headurl="", isBoy=0,}
}
////////////////////////////////////////////-
local C2SDeleteFriend = { // 请求删除好友
    userId = 0,
}
local S2CDeleteFriend = { //删除的好友
    userId = 0,
}
////////////////////////////////////////////-
local S2CLoginStatus = { //好友登入登出状态通知
	userId = 0,
	online = 0, //0登出，1登入
}
////////////////////////////////////////////-
local C2SQueryUser = { //查询一个玩家信息
	userId = 0,
}
local S2CQueryUser = {
	info = {}, //用户信息表{userId=0, userName="", online=0, headurl="", isBoy=0,}
}
////////////////////////////////////////////-
local C2SAcceptFriend = { //接受好友申请, 返回S2CQueryFriend
    userId = 0, 
	accept = 0,  //1表示同意，0表示拒绝
}

*/