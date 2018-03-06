//三人斗地主协议
let prottab = {}
module.exports = prottab

prottab.AClassicDDZ_C2SReady = 10  //准备游戏
prottab.AClassicDDZ_C2SCallLandlord = 12  //叫地主
prottab.AClassicDDZ_C2SOutCard    = 13    //出牌
prottab.AClassicDDZ_C2SBuChu  = 14   //不出
prottab.AClassicDDZ_C2SSendCardFinish  = 15  //发牌完成
prottab.AClassicDDZ_C2SGiveUp = 16   //认输
prottab.AClassicDDZ_C2STuoGuan = 17   //托管

prottab.AClassicDDZ_S2CReady  = 200     //准备
prottab.AClassicDDZ_S2CBeginOut = 201   //开始出牌
prottab.AClassicDDZ_S2CCallLandlord = 202  //叫地主
prottab.AClassicDDZ_S2COutCard    = 203    //出牌
prottab.AClassicDDZ_S2CBuChu  = 204   //不出
prottab.AClassicDDZ_S2CSendCard  = 205  //发牌
prottab.AClassicDDZ_S2CTuoGuan = 207   //托管
prottab.AClassicDDZ_S2CGameFinish = 208    //游戏结束
////////////////////////////////////////////////////////////-
////////////////////////////////////////////////////////////-
/*
//叫地主
local C2SCallLandlord_DTAB = {
    isCall = 0, //叫1，不叫0
}
local S2CCallLandlord_DTAB = {
    userId = 0,
    turnNo = 0,
    isCall = 0,
    isEnd = 0,
    curBeiShu = 0,
    qiangCount = 0,
}
////////////////////////////////////////////////////////////-
//出牌
local C2SOutCard_DTAB = {
    userId = 0,
    cardType = 0,
    cardCount= 0,
    cardTab= "",  //1_1
}
local S2COutCard_DTAB = {
    cardCount= 0,
    cardTab= "",
    cardType = 0,
    curSeatNo= 0,
    outSeatNo= 0,
}
////////////////////////////////////////////////////////////-
//不出
local C2SBuChu_DTAB = {
}
local S2CBuChu_DTAB = {
    BuChuSeatNo= 0,
    curSeatNo= 0,
}
////////////////////////////////////////////////////////////-
//请求发牌完成
local C2SSendCardFinish_DTAB = {
}
//发牌
local S2CSendCard_DTAB = {
    cardCount= "", //"20_17_17"
    cardTab= "",   //"1_1"|"2_2"|"4_2"
    mingCard= 0,
}
////////////////////////////////////////////////////////////-
//认输
local C2SGiveUp_DTAB = {
}
local S2CGiveUp_DTAB = {
    giveUpSeatNo= 0,
}
////////////////////////////////////////////////////////////-
//托管
local C2STuoGuan_DTAB = {
}
local S2CTuoGuan_DTAB = {
    userId = 0,
}
////////////////////////////////////////////////////////////-
//请求游戏结束
local S2CGameFinish_DTAB = {
    winScore= "",  //"100_100_-200"
    winSeatNo= 0,
    totalBeiShu= 0,
    dipaiBeiShu= 0,
    zhadanBeiShu= 0,
    springBeiShu= 0,  
}
local S2CGameStatus_DTAB = {
    status = 0,   //在哪种状态
    data = {}, //其他数据
}
*/