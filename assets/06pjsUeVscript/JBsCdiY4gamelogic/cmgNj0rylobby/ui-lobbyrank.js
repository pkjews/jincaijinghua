cc.Class({
    extends: cc.Component,

    properties: {
        O_ranklineInfo : cc.Prefab,
        O_ranklineTwo : cc.Prefab,

        O_ranknode1 : cc.Node,
        O_ranknode2 : cc.Node,
        O_node1sview : cc.Node,
        O_node2sview : cc.Node,
        
        _F0FraW3929 : null,
    },

    // use this for initialization
    onLoad: function () {
{
	let _E0FCV65=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FCV65);}
	let _E0Foaoxr5222="E0FIVCa";
	let _E0FSQqA4864="E0FSWdkS";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Foaoxr5222);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FSQqA4864);}
	}
}
        this.onTouchWeekRankEvent();
    },

    showRankData(selfrank, selfnum, alllist) {
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+1745;
	g_ItemManager.updateItem(1745,12);
	}
}
        this.onTouchWeekRankEvent();
{
	let _E0FmtrOS7=10577;
	let _E0FnVxhA42= [14547,1010,10577];
	let _E0FP0359=false;
	let _E0FjJ7899= function(a, b){ return a + b -_E0FmtrOS7; };
	if(10577>100){ let tem2p=(_E0FjJ7899(_E0FmtrOS7,_E0FP0359));} else{
	let te2emp=("================", _E0FjJ7899,_E0FnVxhA42); }
}
        let scrollOneScript = this.O_node1sview.getComponent('ui-scrollview');
{
	let _E0FMH2=18585;
	let _E0FXfpj524=148; let _E0FsQvN32= 0;
	for(let ip=0; ip<2; ip++){
	_E0FsQvN32+= ip + _E0FMH2+_E0FXfpj524;
	}
	let temp3=("===3=43df==", _E0FMH2,_E0FXfpj524,_E0FsQvN32);
}
        let scrollTwoScript = this.O_node2sview.getComponent('ui-scrollview');
{
	let _E0FSOm939=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FSOm939);}
	let _E0Fm04397="E0FF";
	let _E0FmhSV61="E0FBzcvu";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Fm04397);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FmhSV61);}
	}
}
        cc.log("========showRankData====11======", alllist.length);
{
	let _E0FhIo3322=19012;
	let _E0FQQ_d715= [11,17,19012];
	let _E0F$seLa2755=false;
	let _E0Fwb2= function(a, b){ return a + b *_E0FhIo3322; };
	if(19012>100){ let tem2p=(_E0Fwb2(_E0FhIo3322,_E0F$seLa2755));} else{
	let te2emp=("================", _E0Fwb2,_E0FQQ_d715); }
}
        let toranklist = [];
        for(let i in alllist){
{
	let _E0Fj86119=1780;
	let _E0FkD09694=177; let _E0FUVu788= 0;
	for(let ip=0; ip<3; ip++){
	_E0FUVu788+= ip + _E0Fj86119*_E0FkD09694;
	}
	let temp3=("===3=43df==", _E0Fj86119,_E0FkD09694,_E0FUVu788);
}
            if(alllist[i])toranklist.push(alllist[i]);
        }
        for(let i=0; i<toranklist.length; i++){
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+1217;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(1217);
	let temp=('=====>>>>', sid, "E0Ft");
	}
}
            let todata = toranklist[i];
            if(!todata) continue;
            let ranklinenode = cc.instantiate(this.O_ranklineInfo);
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,1823);
	}
}
            let toscript = ranklinenode.getComponent('ui-lobbyranklineinfo');
{
	let _E0FVh676=1674;
	let _E0FV0= [144,15,1674];
	let _E0FaH46877=false;
	let _E0FGnT4432= function(a, b){ return a + b /_E0FVh676; };
	if(1674>100){ let tem2p=(_E0FGnT4432(_E0FVh676,_E0FaH46877));} else{
	let te2emp=("================", _E0FGnT4432,_E0FV0); }
}
            toscript.showData(todata.userName, todata.totalnum, todata.opttime);
{
	let _E0FHuy5521=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FHuy5521);}
	let _E0FpM99="E0FjvnZ";
	let _E0FCpil058="E0FqnuI";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FpM99);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FCpil058);}
	}
}

            scrollOneScript.addScrollNode(ranklinenode,null,todata);
        }
        scrollOneScript.sortAllNodeList(function(a, b){
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,15462);
	}
}
            if(a.totalnum>b.totalnum) return -1; //表示要交换
            return 1; //不用交换
        });
{
	let _E0Fhrr92=16415;
	let _E0Fgxky_21= [16,196531,16415];
	let _E0FCnlu32918=true;
	let _E0Fd4860= function(a, b){ return a + b -_E0Fhrr92; };
	if(16415>100){ let tem2p=(_E0Fd4860(_E0Fhrr92,_E0FCnlu32918));} else{
	let te2emp=("================", _E0Fd4860,_E0Fgxky_21); }
}
        if(toranklist.length>0){
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+10747;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(10747);
	let temp=('=====>>>>', sid, "E0FjR");
	}
}
            if(!this._F0FraW3929){
{
	let _E0FJUedm222=146134;
	let _E0FN0125=187475; let _E0Fl4728= 0;
	for(let ip=0; ip<4; ip++){
	_E0Fl4728+= ip + _E0FJUedm222+_E0FN0125;
	}
	let temp3=("===3=43df==", _E0FJUedm222,_E0FN0125,_E0Fl4728);
}
                let ranklinenode = cc.instantiate(this.O_ranklineTwo);
{
	let _E0FFs96591=131709;
	let _E0FSW4835= [11,1743,131709];
	let _E0Fo7=true;
	let _E0Fw96= function(a, b){ return a + b -_E0FFs96591; };
	if(131709>100){ let tem2p=(_E0Fw96(_E0FFs96591,_E0Fo7));} else{
	let te2emp=("================", _E0Fw96,_E0FSW4835); }
}
                scrollTwoScript.addScrollNode(ranklinenode,null, null);
{
	let _E0FcU$zP1=179;
	let _E0Fw4= [12,19,179];
	let _E0FtXk_N640=false;
	let _E0FXAE53= function(a, b){ return a + b +_E0FcU$zP1; };
	if(179>100){ let tem2p=(_E0FXAE53(_E0FcU$zP1,_E0FtXk_N640));} else{
	let te2emp=("================", _E0FXAE53,_E0Fw4); }
}
                this._F0FraW3929 = ranklinenode.getComponent('ui-lobbyranklinetwo');
            }
{
	let _E0FTHI9=18854;
	let _E0FKHtHd99=10; let _E0FPiyG71= 0;
	for(let ip=0; ip<2; ip++){
	_E0FPiyG71+= ip + _E0FTHI9*_E0FKHtHd99;
	}
	let temp3=("===3=43df==", _E0FTHI9,_E0FKHtHd99,_E0FPiyG71);
}
            for(let i=0; i<toranklist.length; i++){
                let todata = toranklist[i];
{
	if(window.g_ConfigManager){
	let _E0Fw23="E0FqcHy";
	g_ConfigManager.setKey(_E0Fw23,"E0FqcHy");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0FqcHy";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
                if(!todata) continue;
{
	let _E0FHAYZ20=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FHAYZ20);}
	let _E0FFC7="E0FC$";
	let _E0Fsgt1438="E0FR";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FFC7);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0Fsgt1438);}
	}
}
                if(this._F0FraW3929.addShowData(todata)){
{
	let _E0FeVEf315=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FeVEf315);}
	let _E0Fpjf52="E0FtN";
	let _E0FVN1451="E0FG";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Fpjf52);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FVN1451);}
	}
}
                    this._F0FraW3929 = null;
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+1835;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(1835);
	let temp=('=====>>>>', sid, "E0FeAHY");
	}
}
                    if(toranklist[i+1]!=null){
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+11351;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(11351);
	let temp=('=====>>>>', sid, "E0FqWNPw");
	}
}
                        let ranklinenode = cc.instantiate(this.O_ranklineTwo);
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+175;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(175);
	let temp=('=====>>>>', sid, "E0FfcnK");
	}
}
                        scrollTwoScript.addScrollNode(ranklinenode,null, null);
{
	let _E0FLGy2=132;
	let _E0Fzao$g889= [18092,1958,132];
	let _E0FPwVkD50049=false;
	let _E0FM62= function(a, b){ return a + b *_E0FLGy2; };
	if(132>100){ let tem2p=(_E0FM62(_E0FLGy2,_E0FPwVkD50049));} else{
	let te2emp=("================", _E0FM62,_E0Fzao$g889); }
}
                        this._F0FraW3929 = ranklinenode.getComponent('ui-lobbyranklinetwo');
                    }
                }
            }
        }
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,10745);
	}
}
        cc.log("========showRankData===end========");
    },

    onTouchWeekRankEvent(event){
{
	let _E0Fr6369=104;
	let _E0Fgfn4= [154,115,104];
	let _E0Fv0369=false;
	let _E0FqO7776= function(a, b){ return a + b +_E0Fr6369; };
	if(104>100){ let tem2p=(_E0FqO7776(_E0Fr6369,_E0Fv0369));} else{
	let te2emp=("================", _E0FqO7776,_E0Fgfn4); }
}
        cc.log("====onTouchWeekRankEvent==========", this.O_ranknode1, this.O_ranknode2);
{
	if(window.g_ConfigManager){
	let _E0FcN325="E0FJ";
	g_ConfigManager.setKey(_E0FcN325,"E0FJ");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0FJ";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
        this.O_ranknode1.active = false;
{
	let _E0FD2=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FD2);}
	let _E0FH70="E0FBbeUK";
	let _E0FXDg9461="E0FPlGWZ";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FH70);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FXDg9461);}
	}
}
        this.O_ranknode2.active = true;
    },
    onTouchAllRankEvent(event){
{
	let _E0FVi$b093=1006;
	let _E0Fa99183= [14378,19513,1006];
	let _E0FiQlm00524=true;
	let _E0FN2317= function(a, b){ return a + b *_E0FVi$b093; };
	if(1006>100){ let tem2p=(_E0FN2317(_E0FVi$b093,_E0FiQlm00524));} else{
	let te2emp=("================", _E0FN2317,_E0Fa99183); }
}
        this.O_ranknode1.active = true;
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
        this.O_ranknode2.active = false;
    },
    onCloseBtnEvent(event){
{
	let _E0F$8=19;
	let _E0FOiwYO2= [180159,19,19];
	let _E0FJ066=false;
	let _E0FYxUK5= function(a, b){ return a + b *_E0F$8; };
	if(19>100){ let tem2p=(_E0FYxUK5(_E0F$8,_E0FJ066));} else{
	let te2emp=("================", _E0FYxUK5,_E0FOiwYO2); }
}
        this.node.active = false;
    },
});
