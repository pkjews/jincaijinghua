//三公 五人 协议
let prottab = {}
module.exports = prottab

prottab.ASanGongWuRen_C2SReady = 10  //准备游戏
prottab.ASanGongWuRen_C2SXiaZhu = 11  //下注
prottab.ASanGongWuRen_C2SShowCard  = 13  //摊牌
prottab.ASanGongWuRen_C2STuoGuan = 14   //托管
prottab.ASanGongWuRen_C2SQiangZhuang = 15  //抢庄

prottab.ASanGongWuRen_S2CReady  = 200     //准备
prottab.ASanGongWuRen_S2CGameBegin = 201  //游戏开始
prottab.ASanGongWuRen_S2CXiaZhu = 202  //下注
prottab.ASanGongWuRen_S2CSendCard  = 203  //发牌
prottab.ASanGongWuRen_S2CShowCard  = 204   //摊牌
prottab.ASanGongWuRen_S2CTuoGuan = 205   //托管
prottab.ASanGongWuRen_S2CQiangZhuang = 206  //抢庄
prottab.ASanGongWuRen_S2CGameFinish = 208    //游戏结束
////////////////////////////////////////////////////////////-
////////////////////////////////////////////////////////////-
/*
//准备
local C2SReady = {
    
}
local S2CReady = {
    readytab = {},   //所有玩家准备为1，没准备为0 {1, 0, 1}
}
////////////////////////////////////////////////////////////-
//下注
local C2SXiaZhu = {
    isCall = 0, //下注1，不下注0
}
local S2CXiaZhu = {
    userId = 0,
    isCall = 0,
    isEnd = 0,
}
////////////////////////////////////////////////////////////-
//请求发牌完成
local C2SSendCardFinish = {
}
//发牌
local S2CSendCard = {
    handCardTab= {},   //"{{card1, card2},{card1, card2},}"
}
////////////////////////////////////////////////////////////-
//摊牌
local C2SShowCard = {
    
}
local S2CShowCard = {
    cardtype = 0,  //牛几
    cardtab = {},  //手牌
    userId = 0,    //摊牌玩家
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
local S2CGameFinish = {
    handCardTab= {},   //手牌"{{card1, card2},{card1, card2},}"
    handTypeTab = {},  //手牌牛几
    bankerUserId = 0,  //庄家
    winScoreTab = {},  //输赢
}
*/