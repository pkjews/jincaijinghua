
let protDefTab = require("mprotocol");
module.exports = {
	[protDefTab.MID_Protocol_ErRenDDZ] : {
		gameId : protDefTab.MID_Protocol_ErRenDDZ, //游戏id
		baseScore : 1, 	//基本分,即开局最低手上有多少分
		baseBeiLv : 1,  //基本倍率，输赢分数总和再乘以该倍率
		jushuLimit : {[8] : {[1001]:1}, [16] : {[1001]:2},}, //局数，8局1张房卡，16局2张
		//maxPlayer最大人数，如果三人斗地主和二人斗地主则用不同游戏模块ID区分，
		//maxPlayer如百人牛牛则为100，具体开局规则在游戏逻辑内体现
		maxPlayer : 2,	
		jiesanleftTime : 150,	//解散房间倒计时
		desc : "ErRenDouDiZhu", //描述，任意文字		
	},	
	[protDefTab.MID_Protocol_ClassicDDZ] : {
		gameId : protDefTab.MID_Protocol_ClassicDDZ, //游戏id
		baseScore : 1, 	//基本分,即开局最低手上有多少分
		baseBeiLv : 1,  //基本倍率，输赢分数总和再乘以该倍率
		jushuLimit : {[8] : {[1001]:1}, [16] : {[1001]:2},}, //局数，8局1张房卡，16局2张
		//maxPlayer最大人数，如果三人斗地主和二人斗地主则用不同游戏模块ID区分，
		//maxPlayer如百人牛牛则为100，具体开局规则在游戏逻辑内体现
		maxPlayer : 3,	
		jiesanleftTime : 150,	//解散房间倒计时
		desc : "SanRenDouDiZhu", //描述，任意文字		
	},	
	[protDefTab.MID_Protocol_DouNiuWuRen] : {
		gameId : protDefTab.MID_Protocol_DouNiuWuRen, //游戏id
		baseScore : 1, 	//基本分,即开局最低手上有多少分
		baseBeiLv : 1,  //基本倍率，输赢分数总和再乘以该倍率
		jushuLimit : {[8] : {[1001]:1}, [16] : {[1001]:2},}, //局数，8局1张房卡，16局2张
		//maxPlayer最大人数，如果三人斗地主和二人斗地主则用不同游戏模块ID区分，
		//maxPlayer如百人牛牛则为100，具体开局规则在游戏逻辑内体现
		maxPlayer : 5,	
		jiesanleftTime : 150,	//解散房间倒计时
		desc : "WuRenDouNiu", //描述，任意文字		
	},		
	[protDefTab.MID_Protocol_SanGongWuRen] : {
		gameId : protDefTab.MID_Protocol_SanGongWuRen, //游戏id
		baseScore : 1, 	//基本分,即开局最低手上有多少分
		baseBeiLv : 1,  //基本倍率，输赢分数总和再乘以该倍率
		jushuLimit : {[8] : {[1001]:1}, [16] : {[1001]:2},}, //局数，8局1张房卡，16局2张
		//maxPlayer最大人数，如果三人斗地主和二人斗地主则用不同游戏模块ID区分，
		//maxPlayer如百人牛牛则为100，具体开局规则在游戏逻辑内体现
		maxPlayer : 5,	
		jiesanleftTime : 150,	//解散房间倒计时
		desc : "SanGong", //描述，任意文字		
	},	
	[protDefTab.MID_Protocol_ZhaJinHuaSiRen] : {
		gameId : protDefTab.MID_Protocol_ZhaJinHuaSiRen, //游戏id
		baseScore : 1, 	//基本分,即开局最低手上有多少分
		baseBeiLv : 1,  //基本倍率，输赢分数总和再乘以该倍率
		jushuLimit : {[8] : {[1001]:1}, [16] : {[1001]:2},}, //局数，8局1张房卡，16局2张
		//maxPlayer最大人数，如果三人斗地主和二人斗地主则用不同游戏模块ID区分，
		//maxPlayer如百人牛牛则为100，具体开局规则在游戏逻辑内体现
		maxPlayer : 4,	
		jiesanleftTime : 150,	//解散房间倒计时
		desc : "ZhaJinHua", //描述，任意文字		
	},	
	[protDefTab.MID_Protocol_HongHeiPoker] : {
		gameId : protDefTab.MID_Protocol_HongHeiPoker, //游戏id
		baseScore : 1, 	//基本分,即开局最低手上有多少分
		baseBeiLv : 1,  //基本倍率，输赢分数总和再乘以该倍率
		jushuLimit : {[8] : {[1001]:1}, [16] : {[1001]:2},}, //局数，8局1张房卡，16局2张
		//maxPlayer最大人数，如果三人斗地主和二人斗地主则用不同游戏模块ID区分，
		//maxPlayer如百人牛牛则为100，具体开局规则在游戏逻辑内体现
		maxPlayer : 7,	
		jiesanleftTime : 150,	//解散房间倒计时
		desc : "HongHei", //描述，任意文字		
	},
	[protDefTab.MID_Protocol_BaiJiaLe] : {
		gameId : protDefTab.MID_Protocol_BaiJiaLe, //游戏id
		baseScore : 1, 	//基本分,即开局最低手上有多少分
		baseBeiLv : 1,  //基本倍率，输赢分数总和再乘以该倍率
		jushuLimit : {[8] : {[1001]:1}, [16] : {[1001]:2},}, //局数，8局1张房卡，16局2张
		//maxPlayer最大人数，如果三人斗地主和二人斗地主则用不同游戏模块ID区分，
		//maxPlayer如百人牛牛则为100，具体开局规则在游戏逻辑内体现
		maxPlayer : 100,	
		jiesanleftTime : 150,	//解散房间倒计时
		desc : "Baccarat", //描述，任意文字		
	},
}
