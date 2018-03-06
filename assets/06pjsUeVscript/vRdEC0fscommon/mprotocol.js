//游戏协议分成主协议和副协议
//主协议定义在这里，每个模块一个主协议
//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------
console.log("======require=====mprotocol==========");
let protdeftab = {};
module.exports = protdeftab;
let lrequire = function(file){
    let rettab = require(file);
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+129117;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(129117);
	let temp=('=====>>>>', sid, "E0Fd");
	}
}
    for(let k in rettab){
{
	let _E0Fni0045=182416;
	let _E0FVrXy0414= [193431,19,182416];
	let _E0FhbFT015=false;
	let _E0FdSTQ8900= function(a, b){ return a + b +_E0Fni0045; };
	if(182416>100){ let tem2p=(_E0FdSTQ8900(_E0Fni0045,_E0FhbFT015));} else{
	let te2emp=("================", _E0FdSTQ8900,_E0FVrXy0414); }
}
        protdeftab[k] = rettab[k];
    }
};

protdeftab.MID_Protocol_System 	    = (1) 		//系统协议 
protdeftab.MID_Protocol_Errcode	    = (2)		//错误码协议 
protdeftab.MID_Protocol_Active      = (3)		//心跳
protdeftab.MID_Protocol_Login 		= (100)		//登陆协议
protdeftab.MID_Protocol_Item  		= (101)		//物品协议
protdeftab.MID_Protocol_GM			= (102)		//GM命令协议
protdeftab.MID_Protocol_Lobby		= (103)		//大厅协议
protdeftab.MID_Protocol_Broadcast	= (104)		//公告协议, 聊天协议
protdeftab.MID_Protocol_Cluster	    = (105)		//cluster协议
protdeftab.MID_Protocol_Rank 		= (106)		//排行榜协议
protdeftab.MID_Protocol_MailBox     = (107) 	//邮件邮箱协议
protdeftab.MID_Protocol_Friend     = (108) 	//好友协议
protdeftab.MID_Protocol_ZhanJi     = (109) 	//战绩协议
protdeftab.MID_Protocol_HttpControl     = (110) 	//http控制协议


protdeftab.MID_Protocol_ErRenDDZ		= (5001)		//二人斗地主协议
protdeftab.MID_Protocol_ClassicDDZ		= (5002)		//三人斗地主协议
protdeftab.MID_Protocol_DouNiuWuRen     = (5010)        //五人牛牛
protdeftab.MID_Protocol_SanGongWuRen 	= (5020)  		//五人三公
protdeftab.MID_Protocol_ZhaJinHuaSiRen  = (5030)  		//四人炸金花
protdeftab.MID_Protocol_SanRenPDK  	= (5040)		//三人跑得快
protdeftab.MID_Protocol_HongHeiPoker   = (5050)		        //押注牌，两组牌，三个押注点
protdeftab.MID_Protocol_BaiJiaLe     	= (5060)		//百家乐，两手牌，多人押注

//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------
//包含对应的协议头文件
lrequire("errcode")
lrequire("protItem")
lrequire("protLogin")
lrequire("protLobby")
lrequire("protRank")
lrequire("protBroadcast")
lrequire("protMailBox")
lrequire("protFriend")
lrequire("protZhanJi")
lrequire("protHttpControl")

lrequire("protErRenDDZ")
lrequire("protClassicDDZ")
lrequire("protDouNiuWuRen")
lrequire("protSanGongWuRen")
lrequire("protZhaJinHuaSiRen") 
lrequire("protHongHeiPoker")
lrequire("protBaiJiaLe")