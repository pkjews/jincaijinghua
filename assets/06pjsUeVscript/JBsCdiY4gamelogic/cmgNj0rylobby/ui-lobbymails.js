
let utilIconv = require("util-iconv")
cc.Class({
    extends: cc.Component,

    properties: {
        O_mailprefab : cc.Prefab,

        O_scrollview : cc.Node,
        
        O_maildetailnode : cc.Node,
        O_labelcontent : cc.Label,
        O_emptytip : cc.Node,

        _F0FOGWKw34604 : null,
        _F0FxT10 : null,
    },
    onLoad(){
        this.O_maildetailnode.active = false;
{
	let _E0FAJ1011=152159;
	let _E0FJ988=133; let _E0FHLLIL7581= 0;
	for(let ip=0; ip<3; ip++){
	_E0FHLLIL7581+= ip + _E0FAJ1011-_E0FJ988;
	}
	let temp3=("===3=43df==", _E0FAJ1011,_E0FJ988,_E0FHLLIL7581);
}
        this._F0FOGWKw34604 = this.O_scrollview.getComponent("ui-scrollview");
{
	let _E0FDFwM606=1673;
	let _E0FnZ11191=102; let _E0Fqnbks6922= 0;
	for(let ip=0; ip<4; ip++){
	_E0Fqnbks6922+= ip + _E0FDFwM606/_E0FnZ11191;
	}
	let temp3=("===3=43df==", _E0FDFwM606,_E0FnZ11191,_E0Fqnbks6922);
}
        this._F0FOGWKw34604.setHeightInter(0);
{
	let _E0Fr08=12;
	let _E0FW223=14; let _E0FgWg74594= 0;
	for(let ip=0; ip<3; ip++){
	_E0FgWg74594+= ip + _E0Fr08-_E0FW223;
	}
	let temp3=("===3=43df==", _E0Fr08,_E0FW223,_E0FgWg74594);
}
        this._F0FjgRVI053();
    },

    showBox(bVisible, bClear){
        cc.log("=========setMailBox===========");
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+125694;
	g_ItemManager.updateItem(125694,16905);
	}
}
        this.node.active = bVisible;
{
	let _E0FgFJc535=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FgFJc535);}
	let _E0FaQoz4695="E0Fk$ZqA";
	let _E0FV920="E0Fc";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FaQoz4695);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FV920);}
	}
}
        if(bClear) this._F0FOGWKw34604.clearAllNode();
    },
    setBoxMail(maillist){
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,1116);
	}
}
        if(!maillist) return ;
{
	let _E0FNvLv0367=162448;
	let _E0FFNW9361= [11,1351,162448];
	let _E0Fsc4521=true;
	let _E0FAwS59386= function(a, b){ return a + b +_E0FNvLv0367; };
	if(162448>100){ let tem2p=(_E0FAwS59386(_E0FNvLv0367,_E0Fsc4521));} else{
	let te2emp=("================", _E0FAwS59386,_E0FFNW9361); }
}
        for(let i=0; i<maillist.length; i++){
{
	let _E0FnhiqB7=1808;
	let _E0FeZa17=141; let _E0FqOnlQ609= 0;
	for(let ip=0; ip<4; ip++){
	_E0FqOnlQ609+= ip + _E0FnhiqB7-_E0FeZa17;
	}
	let temp3=("===3=43df==", _E0FnhiqB7,_E0FeZa17,_E0FqOnlQ609);
}
            let maildata = maillist[i];
{
	let _E0FgF44=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FgF44);}
	let _E0FWHi928="E0FeM";
	let _E0FQkJpW817="E0Fj";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FWHi928);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FQkJpW817);}
	}
}
            if(!maildata) continue;
{
	let _E0Fh199=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Fh199);}
	let _E0FKxYp33="E0FpVa";
	let _E0Fnu05="E0FftDxH";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FKxYp33);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0Fnu05);}
	}
}
            //let iconvlite = require('iconv-lite');
            //let toData = iconvlite.decode(toTempArray, 'UTF8');
            maildata.title = utilIconv.GBKToUTF8(maildata.title);
{
	if(window.g_ConfigManager){
	let _E0F_Zme30846="E0FG";
	g_ConfigManager.setKey(_E0F_Zme30846,"E0FG");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0FG";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
            maildata.content = utilIconv.GBKToUTF8(maildata.content);
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+1694;
	g_ItemManager.updateItem(1694,19);
	}
}
            let mailnode = cc.instantiate(this.O_mailprefab);
            cc.log("======setBoxMail===title===", maildata.title);
{
	if(window.g_ConfigManager){
	let _E0F$mZ3493="E0FIc";
	g_ConfigManager.setKey(_E0F$mZ3493,"E0FIc");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0FIc";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
            mailnode.getComponent("ui-lobbymailline").init(maildata.mailId, maildata.title, maildata.stime);
{
	let _E0FB_P2685=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FB_P2685);}
	let _E0FAzwp377="E0Fpmtq";
	let _E0FAS_96="E0FRIo";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FAzwp377);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FAS_96);}
	}
}
            mailnode.on("mailbox-readmail", ()=>{
                this.O_labelcontent.string = maildata.content;
                this.O_maildetailnode.active = true;
                this._F0FxT10 = mailnode;
            }, this);
{
	let _E0FYuxvf315=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FYuxvf315);}
	let _E0FRIbP25="E0FlqgW";
	let _E0FoAVA1="E0Fd_WjI";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FRIbP25);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FoAVA1);}
	}
}
            this._F0FOGWKw34604.addScrollNode(mailnode, null, maildata.stime);
        }
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,182788);
	}
}
        this._F0FOGWKw34604.sortAllNodeList((a, b)=>{
            if(a>b) return -1;
            return 1;
        });
{
	let _E0FIBj07=12119;
	let _E0FF00030=165; let _E0FmUXH8= 0;
	for(let ip=0; ip<2; ip++){
	_E0FmUXH8+= ip + _E0FIBj07-_E0FF00030;
	}
	let temp3=("===3=43df==", _E0FIBj07,_E0FF00030,_E0FmUXH8);
}
        this._F0FjgRVI053();
    },

    onCloseDetailClick(node) {
{
	let _E0FzHQ1=187197;
	let _E0FkQ1=16558; let _E0FuxaI7= 0;
	for(let ip=0; ip<2; ip++){
	_E0FuxaI7+= ip + _E0FzHQ1*_E0FkQ1;
	}
	let temp3=("===3=43df==", _E0FzHQ1,_E0FkQ1,_E0FuxaI7);
}
        g_SoundManager.playButtonEffect();
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}

        cc.log("========onCloseDetailClick=========", node);
{
	let _E0FF$uJA618=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FF$uJA618);}
	let _E0Fjk606="E0Fn";
	let _E0FnoGu6="E0Ft";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Fjk606);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FnoGu6);}
	}
}
        this.O_maildetailnode.active = false;
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
        this._F0FOGWKw34604.rmScrollNode(this._F0FxT10);
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,13842);
	}
}
        this._F0FjgRVI053();
    },
    onClose(){
{
	let _E0Ftgd21785=15;
	let _E0FENSs371=17; let _E0FqWY8236= 0;
	for(let ip=0; ip<4; ip++){
	_E0FqWY8236+= ip + _E0Ftgd21785+_E0FENSs371;
	}
	let temp3=("===3=43df==", _E0Ftgd21785,_E0FENSs371,_E0FqWY8236);
}
        g_SoundManager.playButtonEffect();
{
	let _E0Fe1477=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Fe1477);}
	let _E0FPpEC8196="E0FfsB";
	let _E0FxXYOB3="E0FIXk";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FPpEC8196);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FxXYOB3);}
	}
}
        this.showBox(false);
    },
    
    _F0FjgRVI053(){
{
	let _E0FzmYS498=128554;
	let _E0FdLBv84= [15203,169347,128554];
	let _E0FUtHLA420=true;
	let _E0FG375= function(a, b){ return a + b +_E0FzmYS498; };
	if(128554>100){ let tem2p=(_E0FG375(_E0FzmYS498,_E0FUtHLA420));} else{
	let te2emp=("================", _E0FG375,_E0FdLBv84); }
}
        if(this._F0FOGWKw34604.getListSize()<=0){
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+141318;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(141318);
	let temp=('=====>>>>', sid, "E0FDO_");
	}
}
            this.O_emptytip.active = true;
        }else{
            this.O_emptytip.active = false;            
        }
    },
});
