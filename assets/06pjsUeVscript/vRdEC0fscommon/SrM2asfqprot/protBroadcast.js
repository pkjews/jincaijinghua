//公告
//广告
let prottab = {}
module.exports = prottab

////////////////////////////////////////////////////////////-
prottab.ABroadcast_C2SlobbyNotice = 11  //请求大厅公告
prottab.ABroadcast_C2SSendChatMsg = 12 //发送聊天信息
prottab.ABroadcast_C2SReqChatMsg = 13 //请求离线聊天信息

prottab.ABroadcast_S2CLoginNotice = 100 //主动发送登陆界面公告
prottab.ABroadcast_S2ClobbyNotice = 101 //请求大厅公告
prottab.ABroadcast_S2CSendChatMsg = 102 //发送聊天信息
prottab.ABroadcast_S2CNoticePoint = 103  //提示有信息要操作

////////////////////////////////////////////////////////////-
////////////////////////////////////////////////////////////-
//协议结构体
/*
local C2SlobbyNotice ={
}
local S2ClobbyNotice = { //所有公告结构体都是这个
	title = "",
	content = "", 
	itype = 0, //什么类型的公告, 0表示跑马灯，内容只有content
	repeatnum = 0, //循环多少次，0或者不存在表示无限循环
}	
local S2CLoginNotice = S2CReqlobbyNotice //在登陆界面连上服务器，服务器推送公告

//所有聊天信息的结构体
local C2SGameChatMsg = {
	toUserId = 0,  //只有私人聊天才有字段
	ctype = 0,		//聊天类型，语音1、表情2、玩家输入3、文字语音4
	cindex = 0,	    //对应的聊天下标，如表情聊天中表情的下标，文字语音聊天中文字语音的下标
	content = "",   //玩家入伏的内容、语音聊天录音内容。最好用basecode加密
	msgtype = 0,   //世界聊天信息1、房间聊天信息2、私人聊天信息3
	gameId = 0,   //房间聊天专用
	roomId = 0,   //房间聊天专用
}
local S2CGameChatMsg = {
	fromId = 0,  //只有私人聊天才有字段
	fromName = "", //只有私人聊天才有字段
	fromHeadUrl = "", //头像
	toUserId = 0,  //只有私人聊天才有字段
	ctype = 0,		//聊天类型，语音1、表情2、玩家输入3、文字语音4
	cindex = 0,	    //对应的聊天下标，如表情聊天中表情的下标，文字语音聊天中文字语音的下标
	content = "",   //玩家入伏的内容、语音聊天录音内容。最好用basecode加密
	msgtype = 0,   //世界聊天信息1、房间聊天信息2、私人聊天信息3
	gameId = 0,   //房间聊天专用
	roomId = 0,   //房间聊天专用
}
local S2CNoticePoint = {
	--如[moduleId1] = 1, 表示该模块有在线信息通知，提醒玩家注意
}
*/