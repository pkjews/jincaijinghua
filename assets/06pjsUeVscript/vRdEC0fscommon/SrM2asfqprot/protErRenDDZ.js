//斗地主协议

let prottab = {}
module.exports = prottab

prottab.AErRenDDZ_C2SReady = 10  //准备游戏
prottab.AErRenDDZ_C2SCallLandlord = 12  //叫地主
prottab.AErRenDDZ_C2SOutCard    = 13    //出牌
prottab.AErRenDDZ_C2SBuChu  = 14   //不出
prottab.AErRenDDZ_C2SSendCardFinish  = 15  //发牌完成
prottab.AErRenDDZ_C2SGiveUp = 16   //认输
prottab.AErRenDDZ_C2STuoGuan = 17   //托管

prottab.AErRenDDZ_S2CReady  = 200     //准备
prottab.AErRenDDZ_S2CBeginOut = 201   //开始出牌
prottab.AErRenDDZ_S2CCallLandlord = 202  //叫地主
prottab.AErRenDDZ_S2COutCard    = 203    //出牌
prottab.AErRenDDZ_S2CBuChu  = 204   //不出
prottab.AErRenDDZ_S2CSendCard  = 205  //发牌
prottab.AErRenDDZ_S2CGiveUp = 206   //认输
prottab.AErRenDDZ_S2CTuoGuan = 207   //托管
prottab.AErRenDDZ_S2CGameFinish = 208    //游戏结束

////////////////////////////////////////////////////////////-
////////////////////////////////////////////////////////////-
/*
//叫地主
let C2SCallLandlord_DTAB = {
    isCall= 0, //叫1，不叫0
}
let S2CCallLandlord_DTAB = {
    turnNo= 0,
    isCall= 0,
    isEnd= 0,
    curBeiShu= 0,
    qiangCount= 0,
}
////////////////////////////////////////////////////////////-
//出牌
let C2SOutCard_DTAB = {
    seatNo= 0,
    cardType = 0,
    cardCount= 0,
    cardTab= "",  //1_1
}
let S2COutCard_DTAB = {
    cardCount= 0,
    cardTab= "",
    cardType = 0,
    curSeatNo= 0,
    outSeatNo= 0,
}
////////////////////////////////////////////////////////////-
//不出
let C2SBuChu_DTAB = {
    
}
let S2CBuChu_DTAB = {
    BuChuSeatNo= 0,
    curSeatNo= 0,
}
////////////////////////////////////////////////////////////-
//请求发牌完成
let C2SSendCardFinish_DTAB = {
    seatNo= 0,
}
//发牌
let S2CSendCard_DTAB = {
    cardCount= {},
    cardTab= {},
    mingCard= 0,
}
////////////////////////////////////////////////////////////-
//认输
let C2SGiveUp_DTAB = {
    seatNo= 0,
}
let S2CGiveUp_DTAB = {
    giveUpSeatNo= 0,
}
////////////////////////////////////////////////////////////-
//托管
let C2STuoGuan_DTAB = {
    seatNo= 0,
}
let S2CTuoGuan_DTAB = {
    seatNo= 0,
}
////////////////////////////////////////////////////////////-
//请求游戏结束
let S2CGameFinish_DTAB = {
    winScore= "",  //"100_100_-200"
    winSeatNo= 0,
    totalBeiShu= 0,
    dipaiBeiShu= 0,
    zhadanBeiShu= 0,
    springBeiShu= 0,  
}
let S2CGameStatus_DTAB = {
    status = 0,   //在哪种状态
    data = {}, //其他数据
}

*/