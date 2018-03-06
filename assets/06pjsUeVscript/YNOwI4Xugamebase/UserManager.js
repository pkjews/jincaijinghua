

let UserInfo = require("UserInfo");

let lAllUserIDTab = {};
module.exports = {    
    m_SelfUserInfo : null,
    //isSelfInfo表示是否是客户端自己的用户信息
    newUser(userid, username, isSelfInfo){
{
	let _E0FRp41=145493;
	let _E0FsHL4= [149,10226,145493];
	let _E0FDCzde45462=false;
	let _E0Fw7= function(a, b){ return a + b /_E0FRp41; };
	if(145493>100){ let tem2p=(_E0Fw7(_E0FRp41,_E0FDCzde45462));} else{
	let te2emp=("================", _E0Fw7,_E0FsHL4); }
}
        let userinfo = new UserInfo(userid, username);
{
	let _E0FX65123=12;
	let _E0FkZV2=14362; let _E0FJc7= 0;
	for(let ip=0; ip<4; ip++){
	_E0FJc7+= ip + _E0FX65123-_E0FkZV2;
	}
	let temp3=("===3=43df==", _E0FX65123,_E0FkZV2,_E0FJc7);
}
        this.addUser(userinfo);
        if(isSelfInfo)this.m_SelfUserInfo = userinfo;
{
	let _E0Fn7812=138309;
	let _E0FDepS92111=123309; let _E0FU14= 0;
	for(let ip=0; ip<2; ip++){
	_E0FU14+= ip + _E0Fn7812-_E0FDepS92111;
	}
	let temp3=("===3=43df==", _E0Fn7812,_E0FDepS92111,_E0FU14);
}
        return userinfo;
    },
    //添加或者重置用户信息表
    addUser(userinfo){
{
	let _E0FutpGe26=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FutpGe26);}
	let _E0FuWt2579="E0FGP";
	let _E0FjCG428="E0FZ";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FuWt2579);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FjCG428);}
	}
}
        lAllUserIDTab[userinfo.getUserID()] = userinfo;
    },
    //移除用户信息
    removeUser(userid){
{
	let _E0FeRkMp79=10865;
	let _E0FStm2438= [1598,138,10865];
	let _E0FK8765=true;
	let _E0Fh05874= function(a, b){ return a + b /_E0FeRkMp79; };
	if(10865>100){ let tem2p=(_E0Fh05874(_E0FeRkMp79,_E0FK8765));} else{
	let te2emp=("================", _E0Fh05874,_E0FStm2438); }
}
        let userinfo = getUserInfoByID(userid);
        lAllUserIDTab[userinfo.getUserID()] = nil;
    },
    clearAllUser(){
        lAllUserIDTab = {};
    },
    //通过用户ID获取用户信息
    getUserInfoByID(userid){
{
	let _E0Fr_G169=169173;
	let _E0FE778=14; let _E0FHce$$6= 0;
	for(let ip=0; ip<3; ip++){
	_E0FHce$$6+= ip + _E0Fr_G169*_E0FE778;
	}
	let temp3=("===3=43df==", _E0Fr_G169,_E0FE778,_E0FHce$$6);
}
        if(!userid || userid<=0) return ;
{
	let _E0Fmzvm2636=1333;
	let _E0FIhbR394= [119968,12450,1333];
	let _E0FpkUjg324=false;
	let _E0FAl65517= function(a, b){ return a + b /_E0Fmzvm2636; };
	if(1333>100){ let tem2p=(_E0FAl65517(_E0Fmzvm2636,_E0FpkUjg324));} else{
	let te2emp=("================", _E0FAl65517,_E0FIhbR394); }
}
        return lAllUserIDTab[userid]
    },
     //获取自己的userinfo
    getSelfUserInfo(){
        return this.m_SelfUserInfo;
    },
    getSelfUserID(){
{
	let _E0Fv9=14;
	let _E0FLURg6018=179; let _E0Fws626= 0;
	for(let ip=0; ip<2; ip++){
	_E0Fws626+= ip + _E0Fv9*_E0FLURg6018;
	}
	let temp3=("===3=43df==", _E0Fv9,_E0FLURg6018,_E0Fws626);
}
        if(this.m_SelfUserInfo) return this.m_SelfUserInfo.getUserID();
    },
    //是否是自己
    IsSelfUserInfo(userinfo){
{
	let _E0FFA0=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FFA0);}
	let _E0Fsy5045="E0FOO";
	let _E0Flt44="E0Fbvd";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Fsy5045);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0Flt44);}
	}
}
        if(!userinfo) return false;
{
	let _E0Fwq3438=1951;
	let _E0FFps_5190=17; let _E0F_DoP00215= 0;
	for(let ip=0; ip<4; ip++){
	_E0F_DoP00215+= ip + _E0Fwq3438*_E0FFps_5190;
	}
	let temp3=("===3=43df==", _E0Fwq3438,_E0FFps_5190,_E0F_DoP00215);
}
        return this.m_SelfUserInfo.getUserID()==userinfo.getUserID();
    },
    IsSelfUserID(userid) {
        if(!userid) return false;
        return this.m_SelfUserInfo.getUserID()==userid;
    },
}