
//押注牌，两组牌，三个押注点

let prottab = {}
module.exports = prottab

prottab.ABaiJiaLe_C2SReady = 10  //准备游戏
prottab.ABaiJiaLe_C2SSendCardFinish = 11  //发牌完成
prottab.ABaiJiaLe_C2SXiaZhu = 12  //加注，跟注
prottab.ABaiJiaLe_C2STuoGuan = 14   //托管
prottab.ABaiJiaLe_C2SOpenCard = 15  //开牌
prottab.ABaiJiaLe_C2SGiveUpCard = 16  //弃牌

prottab.ABaiJiaLe_S2CReady  = 200     //准备
prottab.ABaiJiaLe_S2CGameBegin  = 201  //开始操作
prottab.ABaiJiaLe_S2CSendCard  = 202  //发牌
prottab.ABaiJiaLe_S2CAddOneCard = 203  //加牌
prottab.ABaiJiaLe_S2CXiaZhu = 204  //加注，跟注
prottab.ABaiJiaLe_S2COpenCard = 205  //抢庄
prottab.ABaiJiaLe_S2CTuoGuan = 206   //开牌
prottab.ABaiJiaLe_S2CGiveUpCard = 207  //弃牌
prottab.ABaiJiaLe_S2CGameFinish = 208    //游戏结束
////////////////////////////////////////////////////////////-
////////////////////////////////////////////////////////////-
//准备
/*
local C2SReady = {
    
}
local S2CReady = {
    readytab = {},   //所有玩家准备为1，没准备为0 {1, 0, 1}
}
////////////////////////////////////////////////////////////-
//下注
local C2SXiaZhu = {
    itype = 1,  //1表示加注，2表示加注
    beishu = 1,  //多少倍底分
}
local S2CXiaZhu = {
    userId = 0,
    itype = 1,  //1表示加注，2表示加注
    beishu = 1,  //多少倍底分
    newTurn = 0,  //1表示新一轮，要加注，不能跟注
}
////////////////////////////////////////////////////////////-
//请求发牌完成
local C2SSendCardFinish = {
}
//发牌
local S2CSendCard = {
    handCardTab= {},   //手牌"{{card1, card2},{card1, card2},}"
    bankerUserId = 0,  //庄家
    turnUserId = 0,     //轮到哪家操作
}
////////////////////////////////////////////////////////////-
//比牌
local C2SCompareCard = {
    toUserId = 0,  //和谁比牌
}
local S2CCompareCard = {
    toUserId = 0,    //和谁比牌
    iswin = 0,   //1表示赢了，否则表示输了
}
////////////////////////////////////////////////////////////-
//托管
local C2STuoGuan = {
}
local S2CTuoGuan = {
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