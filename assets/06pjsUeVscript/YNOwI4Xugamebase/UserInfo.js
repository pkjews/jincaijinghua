

let UserInfo = function(userid, username){
{
	let _E0FimbI1=14;
	let _E0Fbc0= [1814,10,14];
	let _E0FDYdnC325=true;
	let _E0Fa41= function(a, b){ return a + b /_E0FimbI1; };
	if(14>100){ let tem2p=(_E0Fa41(_E0FimbI1,_E0FDYdnC325));} else{
	let te2emp=("================", _E0Fa41,_E0Fbc0); }
}
    //私有变量定义在构造函数中，每次new时候都会新建
    this._F0FJCAjp40 = userid;
    this._F0Fo82264 = username;
{
	let _E0Ff_9015=11;
	let _E0FQw17=183; let _E0FBYf97= 0;
	for(let ip=0; ip<3; ip++){
	_E0FBYf97+= ip + _E0Ff_9015+_E0FQw17;
	}
	let temp3=("===3=43df==", _E0Ff_9015,_E0FQw17,_E0FBYf97);
}
    this._F0Ffcou130 = 0;
{
	let _E0FK19966=156;
	let _E0F_p78=1313; let _E0Fh8161= 0;
	for(let ip=0; ip<2; ip++){
	_E0Fh8161+= ip + _E0FK19966*_E0F_p78;
	}
	let temp3=("===3=43df==", _E0FK19966,_E0F_p78,_E0Fh8161);
}
    this._F0FeQOaY501 = 0;
    this._F0FQ94326 = "";    //ip
    this._F0Fzjkv54 = 1;
{
	let _E0Fcb4=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Fcb4);}
	let _E0Ffh23="E0FdP";
	let _E0FBAr96="E0FP";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Ffh23);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FBAr96);}
	}
}
    this._F0FUawSi4170 = "";
{
	let _E0Fu243=13833;
	let _E0FieM6448= [177,105,13833];
	let _E0FO28=false;
	let _E0FA126= function(a, b){ return a + b /_E0Fu243; };
	if(13833>100){ let tem2p=(_E0FA126(_E0Fu243,_E0FO28));} else{
	let te2emp=("================", _E0FA126,_E0FieM6448); }
}
    this._F0FTivcu2 = 0;
};
//静态函数, 只能通过类名访问，不能用new的对象访问,最好定义函数来访问
//UserInfo.staticParam = "111111"; 
UserInfo.prototype = {
    //共享变量或者共享函数定义在prototype中，所有new对象公用
    constructor : UserInfo,
    /*
    示例: 
    showStatic(){
        console.log("=====showStatic=======", UserInfo.staticParam, this._F0FDiSW788);
    },
    setStaticValue(val){
        UserInfo.staticParam = val;
        this._F0FDiSW788 = val; //若构造函数未明确定义的变量，则新建一个变量
    },
    */
    setUserInfoPackage(infotab){
        this._F0FJCAjp40 = infotab.userId;
        this._F0Fo82264 = infotab.userName;
        this._F0FeQOaY501 = infotab.diamond;
        this._F0Ffcou130 = infotab.gold;
        this._F0FQ94326 = infotab.addr;
        this._F0FUawSi4170 = infotab.headurl;
{
	let _E0FSCGbd92479=1646;
	let _E0FnC37= [12,14948,1646];
	let _E0Fe127=true;
	let _E0FnFV03334= function(a, b){ return a + b /_E0FSCGbd92479; };
	if(1646>100){ let tem2p=(_E0FnFV03334(_E0FSCGbd92479,_E0Fe127));} else{
	let te2emp=("================", _E0FnFV03334,_E0FnC37); }
}
        this._F0FTivcu2 = infotab.platform;
        this._F0Fzjkv54 = infotab.isBoy;
    },
    getUserID(){
        return this._F0FJCAjp40;
    },
    getUserName(){
{
	let _E0FfxpHj9=17578;
	let _E0FP68778=191007; let _E0FzSXQ157= 0;
	for(let ip=0; ip<1; ip++){
	_E0FzSXQ157+= ip + _E0FfxpHj9/_E0FP68778;
	}
	let temp3=("===3=43df==", _E0FfxpHj9,_E0FP68778,_E0FzSXQ157);
}
        return this._F0Fo82264;
    },
    setUserName(name){
{
	let _E0Fep5=129194;
	let _E0FlfUsa7109=11697; let _E0F$A6788= 0;
	for(let ip=0; ip<2; ip++){
	_E0F$A6788+= ip + _E0Fep5+_E0FlfUsa7109;
	}
	let temp3=("===3=43df==", _E0Fep5,_E0FlfUsa7109,_E0F$A6788);
}
        if(!name) name = "";
{
	let _E0FgeNj71533=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FgeNj71533);}
	let _E0FN31420="E0FU";
	let _E0FcUCLU2272="E0FAyAr";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FN31420);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FcUCLU2272);}
	}
}
        this._F0Fo82264 = name;
    },
    setGold(num){
{
	let _E0FP02=16485;
	let _E0FwTP825=1730; let _E0FDMav4681= 0;
	for(let ip=0; ip<2; ip++){
	_E0FDMav4681+= ip + _E0FP02/_E0FwTP825;
	}
	let temp3=("===3=43df==", _E0FP02,_E0FwTP825,_E0FDMav4681);
}
        if(!num) num = 0;
{
	let _E0FJu7=18;
	let _E0FRTtU969= [19,195,18];
	let _E0FPdPA1=true;
	let _E0FgZC9639= function(a, b){ return a + b -_E0FJu7; };
	if(18>100){ let tem2p=(_E0FgZC9639(_E0FJu7,_E0FPdPA1));} else{
	let te2emp=("================", _E0FgZC9639,_E0FRTtU969); }
}
        this._F0Ffcou130 = num;
    },
    getGold(){
{
	let _E0F$UbyO70540=18919;
	let _E0FPblMZ3= [14901,17458,18919];
	let _E0Fow152=false;
	let _E0FLdV179= function(a, b){ return a + b *_E0F$UbyO70540; };
	if(18919>100){ let tem2p=(_E0FLdV179(_E0F$UbyO70540,_E0Fow152));} else{
	let te2emp=("================", _E0FLdV179,_E0FPblMZ3); }
}
        return this._F0Ffcou130;
    },
    setDiamond(num){
        if(!num) num = 0;
{
	let _E0FX774=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FX774);}
	let _E0FebWa46="E0FR";
	let _E0F_O505="E0F_";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FebWa46);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0F_O505);}
	}
}
        this._F0FeQOaY501 = num;
    },
    getDiamond(){
        return this._F0FeQOaY501;
    },
    getIpAddr(){
        return this._F0FQ94326;
    },
    setIpAddr(addr){
{
	let _E0Fuk955=1881;
	let _E0FjU2330=129176; let _E0Ft0176= 0;
	for(let ip=0; ip<2; ip++){
	_E0Ft0176+= ip + _E0Fuk955/_E0FjU2330;
	}
	let temp3=("===3=43df==", _E0Fuk955,_E0FjU2330,_E0Ft0176);
}
        this._F0FQ94326 = addr;
    },
    getHeadURL(){
{
	let _E0FuF54293=103;
	let _E0FF6540= [158,139,103];
	let _E0FTpvxf38=true;
	let _E0FN044= function(a, b){ return a + b /_E0FuF54293; };
	if(103>100){ let tem2p=(_E0FN044(_E0FuF54293,_E0FTpvxf38));} else{
	let te2emp=("================", _E0FN044,_E0FF6540); }
}
        return this._F0FUawSi4170;
    },
    setHeadURL(headurl){
        this._F0FUawSi4170 = headurl;
    },
    getIsBoy(){
{
	let _E0FH$4909=1385;
	let _E0FaWCVK6049= [12,195,1385];
	let _E0FgF4=false;
	let _E0FWT416= function(a, b){ return a + b *_E0FH$4909; };
	if(1385>100){ let tem2p=(_E0FWT416(_E0FH$4909,_E0FgF4));} else{
	let te2emp=("================", _E0FWT416,_E0FaWCVK6049); }
}
        return this._F0Fzjkv54;
    },
    setIsBoy(isboy){
        this._F0Fzjkv54 = isboy;
    },
    getLoginPlatform(){
        return this._F0FTivcu2;
    },
}

module.exports = UserInfo;