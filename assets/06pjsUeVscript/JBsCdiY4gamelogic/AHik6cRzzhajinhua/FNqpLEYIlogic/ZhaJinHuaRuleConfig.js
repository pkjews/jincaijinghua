

//配置文件都在这里，所要用到的资源路径也在这里



let GameRuleConfig = {}
module.exports = GameRuleConfig;
//卡牌类型
GameRuleConfig.CardType = {
	PointSanPai : 0,  //散牌
	PointDuiZi : 1,  //对子
	PointShunZi : 2,  //顺子
	PointJinHua : 3,   //金花, 就是花色一样，但不是顺子的三张牌
	PointShunJin : 4, //顺金，同花顺
	PointSanTiao : 5,  //豹子，三条
    //卡牌index值
    ErID : 1,   //卡牌2的id
    SanID : 2,
    SiID : 3,
    WuID : 4,
    LiuID : 5,
    QiID : 6,
    BaID : 7,
    JiuID : 8,
    ShiID : 9,
    JID : 10,
    QID : 11,
    KID : 12,
    YiID : 13,  	//卡牌A的id
    XiaoWangID : 14,	//小王，数值不要改，表示小王的卡牌index
    DaWangID : 15,	//大王，数值不要改

    NoType : 0,  //没有类型，大王小王
    RedSquare : 1, //方块
    BlackFlower : 2, //梅花
    RedHeart : 3, //红桃
    BlackHeart : 4, //黑桃
}

	//卡牌id转换成卡牌index
GameRuleConfig.GetCardIndex = function(cardId){
{
	let _E0FfvUJV31=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FfvUJV31);}
	let _E0Fpwn791="E0FzmfCR";
	let _E0Fjn34="E0FCW";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Fpwn791);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0Fjn34);}
	}
}
    return Math.floor(cardId / 10);
}
GameRuleConfig.GetCardColor = function(cardId){
{
	let _E0FuEx93620=113;
	let _E0FNLfcy44= [1234,174385,113];
	let _E0Flah2=false;
	let _E0FS1= function(a, b){ return a + b -_E0FuEx93620; };
	if(113>100){ let tem2p=(_E0FS1(_E0FuEx93620,_E0Flah2));} else{
	let te2emp=("================", _E0FS1,_E0FNLfcy44); }
}
	return cardId % 10;
}
