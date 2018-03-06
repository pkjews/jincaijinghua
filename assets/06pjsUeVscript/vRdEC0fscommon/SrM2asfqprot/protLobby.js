//大厅协议
let prottab = {}
module.exports = prottab

prottab.ALobby_C2SReqLoginIn = 1  //登陆大厅
prottab.ALobby_C2SQueryMyDesk = 11         //玩家查询属于自己创建的桌子房间状态
prottab.ALobby_C2SCreatDesk = 12          //创建桌子房间
prottab.ALobby_C2SReqJieSanDesk = 13       //请求解散桌子房间
prottab.ALobby_C2SReqEnterDesk = 14        //请求进入房间
prottab.ALobby_C2SReqGameStatus = 15        //请求游戏场景协议
prottab.ALobby_C2SReqLeaveDesk = 16        //请求离开房间，正在玩离开则托管

prottab.ALobby_S2CReqLoginIn = 100  //登陆大厅返回
prottab.ALobby_S2CReqUserInfo = 101  //登陆大厅返回用户数据
prottab.ALobby_S2CQueryMyDesk = 102         //玩家查询属于自己创建的桌子房间状态
prottab.ALobby_S2CCreatDesk = 103           //创建桌子房间
prottab.ALobby_S2CReqJieSanDesk = 104       //请求解散桌子房间
prottab.ALobby_S2CReqEnterDesk = 105        //请求进入房间
prottab.ALobby_S2CGameStatus = 106         //游戏状态
prottab.ALobby_S2CReqLeaveDesk = 107        //请求离开房间，正在玩离开则托管
prottab.ALobby_S2CUpdateJuShu = 108      //更新房间局数
////////////////////////////////////////////////////////////-
/*
//在登陆成功后，还要主动请求进入大厅
local C2SReqLoginIn = {
    
}
//返回进入大厅成功
local S2CReqLoginIn = {
    isSuccess = 1, //1表示成功，其他表示失败
}
//玩家登陆大厅的用户信息
local S2CReqUserInfo = {
    userId = 0,
    userName = "",
    addr = "",
    platform = 0,
    headurl = "",
    isBoy = 0,
}
--主动请求场景协议
local C2SReqGameStatus = {
    gameId = 0,
    roomId = 0,
}
////////////////////////////////////////////////////////////-
//查询属于自己所有房间
local C2SQueryMyDesk = { 
}
local S2CQueryMyDesk = {
    roomTab = {},   //房间基本信息, 和创建房间返回的消息一样,如{{S2CCreatDesk1}, ...}
}
////////////////////////////////////////////////////////////-
//创建桌子房间
local C2SCreatDesk = {
    gameId = 0, //游戏名称
    pwd = "", //房间密码
    maxJuShu=1,     //最大局数
    baseScore = 0,  //基本分数，nil or 0
    baseBeiLv = 1,  //基本倍率， nil or 1
    config = {},    //创建配置
}
local S2CCreatDesk = {
    gameId = 0,
    roomId = 0,
    baseScore = 0,
    baseBeiLv = 0,
    curJuShu =  0,
    maxJuShu = 0,
    ownUserId = 0,
    roomPwd = 0,
    playertab = {},
    config = {},
}
////////////////////////////////////////////////////////////-
//------------------------------------------------------------
//请求离开桌子房间
local C2SReqLeaveDesk = {
    gameId = 0, --游戏id
    roomId = 0, --桌子号
}
local S2CReqLeaveDesk = {
    gameId = 0, --游戏id
    roomId = 0, --桌子号
    userId = 0,  --请求离开的用户Id
}

--请求删除桌子房间, 只有房主能解散房间，其他的人都只能申请离开房间
local C2SReqJieSanDesk = {
    gameId = 0, --游戏id
    roomId = 0,	--桌子号
}
local S2CReqJieSanDesk = {
    gameId = 0, --游戏id
    roomId = 0,	--桌子号
    userId = 0,  --房主
}

////////////////////////////////////////////////////////////-
//请求进入房间
local C2SReqEnterDesk = {
    gameId = 0, //游戏id
    roomId = -1, //若为-1表示快速加入，否则进入对应的桌子号
}
local S2CReqEnterDesk = {
    gameId = 0, //游戏id
    roomId = -1, //若为-1表示快速加入，否则进入对应的桌子号
    seatNo = 0, //进入桌子后，所分配的座位号
}
*/