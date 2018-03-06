cc.Class({
    extends: cc.Component,

    properties: {
        O_contentnode : cc.Node,
        O_scrollbar : cc.Node,
        //O_scrollprefab : cc.Prefab,  //用于测试的预制
        //////////////////////////////////////
        _F0F$WL5 : [],
        _F0FtYUO798 : 0,
        _F0FBuo01 : 0, //插入第一个的时候的和初始点的间隔
        _F0FpK$W9 : false, //是否增加一个就往上移，必须把最新的显示出来
        _F0FrG8252 : -1, //限制大小 -1表示无限制，否则如果超过，则会默认删掉最早的

        _F0FlU11 : true, //是否竖屏滚动，默认竖屏滚动
    },

    // use this for initialization
    onLoad: function () {
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,12);
	}
}
        if(this.O_scrollbar){
{
	let _E0FlVMZ44268=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FlVMZ44268);}
	let _E0FfvaYl7="E0Fz";
	let _E0FoJT0782="E0FByOd";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FfvaYl7);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FoJT0782);}
	}
}
            this.O_scrollbar.setLocalZOrder(1000);
        }
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,147368);
	}
}
        //this.setHeightInter(5); //默认间隔
        //test code
        // this.setMoveAddNode(true);
        // for(let i=0; i<10; i++){
        //     let snode = cc.instantiate(this.O_scrollprefab);

        //     // let lab = "fanfangyou"+i + Math.floor(Math.random() * 20000);
        //     // cc.log("===============", lab);
        //     // snode.getComponent(cc.Label).string = lab
        //     let toAlignHor = 0;
        //     if(i>=3) toAlignHor = 1;
        //     if(i>=7) toAlignHor = 2;
        //     this.addScrollNode(snode, toAlignHor);
        // }
    },
    getListSize(){
{
	let _E0FyYvGF51=15;
	let _E0FIXm3=15629; let _E0Fb0457= 0;
	for(let ip=0; ip<1; ip++){
	_E0Fb0457+= ip + _E0FyYvGF51-_E0FIXm3;
	}
	let temp3=("===3=43df==", _E0FyYvGF51,_E0FIXm3,_E0Fb0457);
}
        return this._F0F$WL5.length;
    },
    //每个节点之间的间隔大小
    setHeightInter(inter, firstinter){
{
	let _E0FrCuCG18=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FrCuCG18);}
	let _E0FeXepR2119="E0FMoYO";
	let _E0FGRO51="E0FHV";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FeXepR2119);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FGRO51);}
	}
}
        if(this._F0FtYUO798 != inter){
            this._F0FtYUO798 = inter;
        }
{
	let _E0FQV8117=1784;
	let _E0FkRfRt1=1929; let _E0FlO6= 0;
	for(let ip=0; ip<4; ip++){
	_E0FlO6+= ip + _E0FQV8117/_E0FkRfRt1;
	}
	let temp3=("===3=43df==", _E0FQV8117,_E0FkRfRt1,_E0FlO6);
}
        if(firstinter && this._F0FBuo01!=firstinter){
{
	let _E0FHuAuF51=1114;
	let _E0FWtYF99=12; let _E0FC34261= 0;
	for(let ip=0; ip<3; ip++){
	_E0FC34261+= ip + _E0FHuAuF51/_E0FWtYF99;
	}
	let temp3=("===3=43df==", _E0FHuAuF51,_E0FWtYF99,_E0FC34261);
}
            this._F0FBuo01 = firstinter;
        }
    },
    setMoveAddNode(flag){
{
	let _E0Fw63=1085;
	let _E0FMbJ41771= [1463,10727,1085];
	let _E0FOcrHn51=true;
	let _E0FC488= function(a, b){ return a + b -_E0Fw63; };
	if(1085>100){ let tem2p=(_E0FC488(_E0Fw63,_E0FOcrHn51));} else{
	let te2emp=("================", _E0FC488,_E0FMbJ41771); }
}
        this._F0FpK$W9 =flag;
    },
    setLimitNodeMax(limit){
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+10;
	g_ItemManager.updateItem(10,106449);
	}
}
        if(!limit) limit=-1;
{
	let _E0Fmjq3417=13852;
	let _E0FJDG0= [12357,191236,13852];
	let _E0FHKu2=false;
	let _E0FhFeSs27997= function(a, b){ return a + b *_E0Fmjq3417; };
	if(13852>100){ let tem2p=(_E0FhFeSs27997(_E0Fmjq3417,_E0FHKu2));} else{
	let te2emp=("================", _E0FhFeSs27997,_E0FJDG0); }
}
        this._F0FrG8252 = limit;
    },
    setHorizontalOrVertical(isVertical){ 
{
	let _E0FzH49826=11;
	let _E0FD38377= [11,10054,11];
	let _E0FYaFm7388=false;
	let _E0FuDjen7223= function(a, b){ return a + b +_E0FzH49826; };
	if(11>100){ let tem2p=(_E0FuDjen7223(_E0FzH49826,_E0FYaFm7388));} else{
	let te2emp=("================", _E0FuDjen7223,_E0FD38377); }
}
        this._F0FlU11 = isVertical; 
    },
    /*
        如邮件的排序: 
        sortAllNodeList((a, b)=>{
            if(a.stime>b.stime) return -1; //表示要交换
            return 1; //不用交换
        });
    */
    sortAllNodeList(sortfunc){
        if(!sortfunc || this._F0F$WL5.length<=0) return ;
        let toNodeList = [];
{
	let _E0FvTMss019=13;
	let _E0FaS$37820= [169,116813,13];
	let _E0FHpBMM157=true;
	let _E0FKPPVX5= function(a, b){ return a + b +_E0FvTMss019; };
	if(13>100){ let tem2p=(_E0FKPPVX5(_E0FvTMss019,_E0FHpBMM157));} else{
	let te2emp=("================", _E0FKPPVX5,_E0FaS$37820); }
}
        for(let i=0; i<this._F0F$WL5.length; i++){
{
	let _E0Fn64=14;
	let _E0Fxm7= [113,17665,14];
	let _E0FV_3386=false;
	let _E0FzYrmx78= function(a, b){ return a + b /_E0Fn64; };
	if(14>100){ let tem2p=(_E0FzYrmx78(_E0Fn64,_E0FV_3386));} else{
	let te2emp=("================", _E0FzYrmx78,_E0Fxm7); }
}
            toNodeList.push(this._F0F$WL5[i]);
        }
{
	let _E0F_D_9245=1950;
	let _E0Fg$0399=15; let _E0FL78= 0;
	for(let ip=0; ip<3; ip++){
	_E0FL78+= ip + _E0F_D_9245*_E0Fg$0399;
	}
	let temp3=("===3=43df==", _E0F_D_9245,_E0Fg$0399,_E0FL78);
}
        cc.log("=====sortAllNodeList===11========", toNodeList.length);
        this._F0F$WL5 = [];
{
	if(window.g_ConfigManager){
	let _E0F$r1="E0FLNjn";
	g_ConfigManager.setKey(_E0F$r1,"E0FLNjn");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0FLNjn";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
        toNodeList.sort((a, b)=>{
            let ret = sortfunc(a.adata, b.adata);
            if(ret<0){
{
	let _E0Fwh206=118237;
	let _E0Fit7= [16,150,118237];
	let _E0FnBGfA19593=true;
	let _E0FF47= function(a, b){ return a + b -_E0Fwh206; };
	if(118237>100){ let tem2p=(_E0FF47(_E0Fwh206,_E0FnBGfA19593));} else{
	let te2emp=("================", _E0FF47,_E0Fit7); }
}
                let temp = new cc.Vec2(a.snode.position.x, a.snode.position.y);
{
	let _E0Fa0=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Fa0);}
	let _E0FXhkSp910="E0FW";
	let _E0FDsVPz51="E0FmBat";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FXhkSp910);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FDsVPz51);}
	}
}
                a.snode.position = b.snode.position;
{
	let _E0F$nMF7=180960;
	let _E0FGmkS5782=1870; let _E0Fzg6= 0;
	for(let ip=0; ip<4; ip++){
	_E0Fzg6+= ip + _E0F$nMF7-_E0FGmkS5782;
	}
	let temp3=("===3=43df==", _E0F$nMF7,_E0FGmkS5782,_E0Fzg6);
}
                b.snode.position = temp;
            }
            return ret;
        });
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+18108;
	g_ItemManager.updateItem(18108,146);
	}
}
        for(let i=0; i<toNodeList.length; i++){
            let toNodeData = toNodeList[i];
{
	let _E0Fm6=17722;
	let _E0FZPIiU257=1402; let _E0Fs$Xly8= 0;
	for(let ip=0; ip<2; ip++){
	_E0Fs$Xly8+= ip + _E0Fm6+_E0FZPIiU257;
	}
	let temp3=("===3=43df==", _E0Fm6,_E0FZPIiU257,_E0Fs$Xly8);
}
            cc.log("=====sortAllNodeList===22========", toNodeData);
{
	let _E0Fa69=16398;
	let _E0FDUN90=1474; let _E0FFZ4= 0;
	for(let ip=0; ip<1; ip++){
	_E0FFZ4+= ip + _E0Fa69*_E0FDUN90;
	}
	let temp3=("===3=43df==", _E0Fa69,_E0FDUN90,_E0FFZ4);
}
            this._F0FWdx1(toNodeData.snode, toNodeData.align, toNodeData.adata, false);
        }
    },
    clearAllNode(){
{
	let _E0Fgy88=166;
	let _E0FUS4097= [137468,171788,166];
	let _E0FADis64596=true;
	let _E0FUFnC90= function(a, b){ return a + b /_E0Fgy88; };
	if(166>100){ let tem2p=(_E0FUFnC90(_E0Fgy88,_E0FADis64596));} else{
	let te2emp=("================", _E0FUFnC90,_E0FUS4097); }
}
        this.O_contentnode.removeAllChildren(true);
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,1385);
	}
}
        this._F0F$WL5 = [];
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+165570;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(165570);
	let temp=('=====>>>>', sid, "E0FY");
	}
}
        cc.log("=========clearAllNode===========", this.O_contentnode);
    },
    //alignHor这个节点的对齐方式，0居中对齐，1表示左对齐，2右边对齐
    //adata表示附加数据，用于排序使用，不排序则不需要传入
    addScrollNode(snode, alignHor, adata){
{
	if(window.g_ConfigManager){
	let _E0FQjvF96107="E0FxcOiz";
	g_ConfigManager.setKey(_E0FQjvF96107,"E0FxcOiz");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0FxcOiz";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
        this._F0FWdx1(snode, alignHor, adata, true);
    },
    /*
        函数返回1表示删掉，返回其他不删掉: 
        rmScrollNodeByFunc((a)=>{
            return 1
        });
    */
    setContentPos(pos){
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+173311;
	g_ItemManager.updateItem(173311,14921);
	}
}
        this.O_contentnode.position = new cc.Vec2(pos.x, pos.y);
    },
    rmScrollNodeByFunc(rmfunc){
{
	let _E0FWQc6=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FWQc6);}
	let _E0FC86294="E0FyHp";
	let _E0FZ327="E0FBJK";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FC86294);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FZ327);}
	}
}
        if(!rmfunc) return ;
{
	let _E0FREWhc83117=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FREWhc83117);}
	let _E0Fo716="E0FvVDy";
	let _E0FTWxF335="E0FX";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Fo716);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FTWxF335);}
	}
}
        let toNodeList = [];
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
        let isRmNode = false;
{
	let _E0FUjP_D11464=160451;
	let _E0FHM6368= [122451,105,160451];
	let _E0FkJd9=false;
	let _E0FUMQeO8133= function(a, b){ return a + b +_E0FUjP_D11464; };
	if(160451>100){ let tem2p=(_E0FUMQeO8133(_E0FUjP_D11464,_E0FkJd9));} else{
	let te2emp=("================", _E0FUMQeO8133,_E0FHM6368); }
}
        for(let i=0; i<this._F0F$WL5.length; i++){
{
	let _E0FFqW0341=153;
	let _E0FZV491= [1059,163,153];
	let _E0Fbb83=true;
	let _E0Fp27423= function(a, b){ return a + b *_E0FFqW0341; };
	if(153>100){ let tem2p=(_E0Fp27423(_E0FFqW0341,_E0Fbb83));} else{
	let te2emp=("================", _E0Fp27423,_E0FZV491); }
}
            if(rmfunc(this._F0F$WL5[i].adata)==1){
{
	let _E0Ffyg1294=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Ffyg1294);}
	let _E0FgXIO00110="E0Fd";
	let _E0FIICc2621="E0FBOhP_";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FgXIO00110);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FIICc2621);}
	}
}
                isRmNode = true;
{
	if(window.g_ConfigManager){
	let _E0FvyeK27="E0F_Z";
	g_ConfigManager.setKey(_E0FvyeK27,"E0F_Z");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0F_Z";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
                this._F0F$WL5[i].snode.destroy();
            }else{
                toNodeList.push(this._F0F$WL5[i]);
            }
        }
{
	if(window.g_ConfigManager){
	let _E0FRU_EC65977="E0FqU";
	g_ConfigManager.setKey(_E0FRU_EC65977,"E0FqU");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0FqU";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
        this._F0F$WL5 = [];
{
	let _E0FmsFIP2118=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FmsFIP2118);}
	let _E0Fb138="E0FP";
	let _E0Fo6575="E0FR";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Fb138);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0Fo6575);}
	}
}
        for(let i=0; i<toNodeList.length; i++){
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+1376;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(1376);
	let temp=('=====>>>>', sid, "E0FdSgIK");
	}
}
            let toNodeData = toNodeList[i];
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+1139;
	g_ItemManager.updateItem(1139,19);
	}
}
            cc.log("=====sortAllNodeList===22========", toNodeData);
            this._F0FWdx1(toNodeData.snode, toNodeData.align, toNodeData.adata, false);
        }
    },
    rmScrollNode(snode){
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
        cc.log("========rmScrollNode===========", snode);
        if(!snode) return ;
{
	let _E0FyIkBz88726=18;
	let _E0Fhe15116=1295; let _E0FtiBz12= 0;
	for(let ip=0; ip<2; ip++){
	_E0FtiBz12+= ip + _E0FyIkBz88726*_E0Fhe15116;
	}
	let temp3=("===3=43df==", _E0FyIkBz88726,_E0Fhe15116,_E0FtiBz12);
}
        let tobklist = [];
        let tonodelist = [];
        for(let i=0; i<this._F0F$WL5.length; i++){
            if(this._F0F$WL5[i].snode==snode){
{
	let _E0FB10400=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FB10400);}
	let _E0FC4572="E0FamQ";
	let _E0FcFjOA5977="E0FjUgqP";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FC4572);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FcFjOA5977);}
	}
}
                snode.destroy();
{
	if(window.g_ConfigManager){
	let _E0Fk6235="E0Fpt";
	g_ConfigManager.setKey(_E0Fk6235,"E0Fpt");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0Fpt";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
                this._F0F$WL5[i] = null;
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
                for(let k=i+1; k<this._F0F$WL5.length; k++){
{
	let _E0FQTeUm45201=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FQTeUm45201);}
	let _E0Fzg667="E0F$Pu";
	let _E0FSes062="E0FBwi";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Fzg667);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FSes062);}
	}
}
                    tonodelist.push(this._F0F$WL5[k]);
                }
                break;
            }else{
                tobklist.push(this._F0F$WL5[i]);
            }
        }
{
	if(window.g_ConfigManager){
	let _E0FOvFp758="E0Fj";
	g_ConfigManager.setKey(_E0FOvFp758,"E0Fj");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0Fj";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
        this._F0F$WL5 = tobklist;
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+1291;
	g_ItemManager.updateItem(1291,1744);
	}
}
        for(let i=0; i<tonodelist.length; i++){
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+11879;
	g_ItemManager.updateItem(11879,19288);
	}
}
            this._F0FWdx1(tonodelist[i].snode, tonodelist[i].align, tonodelist[i].adata, false);
        }
    },
    _F0FWdx1(snode, alignHor, adata, bAddChild){
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,16);
	}
}
        let toAlignHor = 0;
{
	let _E0FZ14=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FZ14);}
	let _E0FRD9811="E0FtkbXb";
	let _E0FgEezk633="E0FHKKIg";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FRD9811);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FgEezk633);}
	}
}
        if(!alignHor) alignHor = 0;
{
	let _E0FQDE9653=1698;
	let _E0FYAp5= [1247,18446,1698];
	let _E0FoplXA4187=true;
	let _E0FJT21163= function(a, b){ return a + b *_E0FQDE9653; };
	if(1698>100){ let tem2p=(_E0FJT21163(_E0FQDE9653,_E0FoplXA4187));} else{
	let te2emp=("================", _E0FJT21163,_E0FYAp5); }
}
        if(alignHor==0){
            toAlignHor = 0;
        }else if(alignHor==1){
            toAlignHor = -0.5;
        }else if(alignHor==2){
{
	let _E0FsJ6=144;
	let _E0FK4=146; let _E0FDdi98= 0;
	for(let ip=0; ip<2; ip++){
	_E0FDdi98+= ip + _E0FsJ6+_E0FK4;
	}
	let temp3=("===3=43df==", _E0FsJ6,_E0FK4,_E0FDdi98);
}
            toAlignHor = 0.5;
        }
{
	let _E0FlOCEg96376=129;
	let _E0FCXSz0749= [14114,1413,129];
	let _E0FeBjd6895=false;
	let _E0FZaT80= function(a, b){ return a + b *_E0FlOCEg96376; };
	if(129>100){ let tem2p=(_E0FZaT80(_E0FlOCEg96376,_E0FeBjd6895));} else{
	let te2emp=("================", _E0FZaT80,_E0FCXSz0749); }
}
        if(bAddChild)snode.parent = this.O_contentnode;
        let toNodeTab = {};
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,18);
	}
}
        toNodeTab.snode = snode;
{
	let _E0F_Am$311=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0F_Am$311);}
	let _E0FXRDU19732="E0FCn";
	let _E0FUnY49747="E0Fh";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FXRDU19732);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FUnY49747);}
	}
}
        toNodeTab.align = alignHor;
{
	let _E0FBXIl4=1645;
	let _E0FAJAyM370= [15,13493,1645];
	let _E0Fd23179=false;
	let _E0Fpt687= function(a, b){ return a + b -_E0FBXIl4; };
	if(1645>100){ let tem2p=(_E0Fpt687(_E0FBXIl4,_E0Fd23179));} else{
	let te2emp=("================", _E0Fpt687,_E0FAJAyM370); }
}
        toNodeTab.adata = adata;
{
	let _E0F$6=145;
	let _E0FSLxy1741= [10,143091,145];
	let _E0FuqV4=true;
	let _E0FxL811= function(a, b){ return a + b +_E0F$6; };
	if(145>100){ let tem2p=(_E0FxL811(_E0F$6,_E0FuqV4));} else{
	let te2emp=("================", _E0FxL811,_E0FSLxy1741); }
}
        this._F0F$WL5.push(toNodeTab);
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+146882;
	g_ItemManager.updateItem(146882,1925);
	}
}
        
        let curNodeIndex = this._F0F$WL5.length-1;
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+19716;
	g_ItemManager.updateItem(19716,10);
	}
}
        if(this._F0FlU11){
{
	let _E0FZVk82=129958;
	let _E0FLEnF675=199519; let _E0Faoh_K6491= 0;
	for(let ip=0; ip<3; ip++){
	_E0Faoh_K6491+= ip + _E0FZVk82-_E0FLEnF675;
	}
	let temp3=("===3=43df==", _E0FZVk82,_E0FLEnF675,_E0Faoh_K6491);
}
            cc.log("====_F0FWdx1===Vertical============", this._F0FpK$W9);
{
	let _E0FecV0=12;
	let _E0FBaiZ058= [11,101,12];
	let _E0Fa5508=false;
	let _E0FtboM9= function(a, b){ return a + b +_E0FecV0; };
	if(12>100){ let tem2p=(_E0FtboM9(_E0FecV0,_E0Fa5508));} else{
	let te2emp=("================", _E0FtboM9,_E0FBaiZ058); }
}
            this.O_contentnode.anchorX = 0.5;
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
            this.O_contentnode.anchorY = 1;
            this.O_contentnode.position.y = this.O_contentnode.height/2;
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,1979);
	}
}
            let toPosY = 0;//this.O_contentnode.height * (1-this.O_contentnode.anchorY);
            let toPosX = 0;

            let toInterPosX = (this.O_contentnode.width - snode.width-6);
{
	let _E0Fn71=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Fn71);}
	let _E0FWnS894="E0Fq";
	let _E0FEC3058="E0FWPDE";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FWnS894);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FEC3058);}
	}
}
            toPosX = toInterPosX  * toAlignHor;
            if(this.O_scrollbar) toPosX -= this.O_scrollbar.width; //是否有滚动条，有的话就往左移动
            let toLeftPos = toInterPosX * -0.5;
{
	let _E0FaSQw6941=11182;
	let _E0FVV55=109401; let _E0Fsrmdb3= 0;
	for(let ip=0; ip<1; ip++){
	_E0Fsrmdb3+= ip + _E0FaSQw6941/_E0FVV55;
	}
	let temp3=("===3=43df==", _E0FaSQw6941,_E0FVV55,_E0Fsrmdb3);
}
            if(toPosX<toLeftPos) {  //当往左移动后，超出范围，则调整
                toPosX = toLeftPos;
            }
{
	let _E0Fw8237=14;
	let _E0FIpz12= [19460,159628,14];
	let _E0FF03=true;
	let _E0FMYN145= function(a, b){ return a + b +_E0Fw8237; };
	if(14>100){ let tem2p=(_E0FMYN145(_E0Fw8237,_E0FF03));} else{
	let te2emp=("================", _E0FMYN145,_E0FIpz12); }
}
            if(curNodeIndex==0){
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+174;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(174);
	let temp=('=====>>>>', sid, "E0FBAZA");
	}
}
                toPosY = toPosY - snode.height * 0.5 - this._F0FBuo01;
            }else{
                toPosY = this._F0F$WL5[curNodeIndex-1].snode.position.y;
                toPosY -= (snode.height * 1 + this._F0FtYUO798);   
            }
            snode.position = new cc.Vec2(toPosX, toPosY);
{
	if(window.g_ConfigManager){
	let _E0FsctJ91288="E0Fm";
	g_ConfigManager.setKey(_E0FsctJ91288,"E0Fm");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0Fm";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
    
            this.O_contentnode.height = Math.abs(toPosY) + snode.height * 0.5 + this._F0FtYUO798;
    
            if(this._F0FpK$W9 && this.O_contentnode.height>this.node.height){
{
	let _E0FJr1763=1487;
	let _E0Fi138= [11,19634,1487];
	let _E0Fmtj1=false;
	let _E0FEJFEU27= function(a, b){ return a + b +_E0FJr1763; };
	if(1487>100){ let tem2p=(_E0FEJFEU27(_E0FJr1763,_E0Fmtj1));} else{
	let te2emp=("================", _E0FEJFEU27,_E0Fi138); }
}
                this.O_contentnode.position = new cc.Vec2(this.O_contentnode.position.x, this.O_contentnode.height-this.node.height/2);
            }
        }else{
            cc.log("====_F0FWdx1===Horizontal============", this._F0FpK$W9);
            //this.O_contentnode.anchorY = 0.5;
            this.O_contentnode.anchorX = 0;
            this.O_contentnode.anchorY = 0.5;
            this.O_contentnode.position.x = -this.O_contentnode.width/2;
            let toPosY = 0;
            let toPosX = 0;//this.O_contentnode.width * (this.O_contentnode.anchorX-1);

            let toInterPosY = (this.O_contentnode.height - snode.height-6);
            toPosY = toInterPosY  * toAlignHor;
            if(this.O_scrollbar) toPosY -= this.O_scrollbar.height; //是否有滚动条，有的话就往左移动
            let toLeftPos = toInterPosY * -0.5;
            if(toPosY<toLeftPos) {  //当往左移动后，超出范围，则调整
                toPosY = toLeftPos;
            }
            if(curNodeIndex==0){
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+162714;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(162714);
	let temp=('=====>>>>', sid, "E0FH");
	}
}
                toPosX = toPosX + snode.width * 0.5 + this._F0FBuo01;
            }else{
                toPosX = this._F0F$WL5[curNodeIndex-1].snode.position.x;
                toPosX += (snode.width * 1 + this._F0FtYUO798);   
            }
            cc.log("===============3333===", toPosX, toPosY);
            snode.position = new cc.Vec2(toPosX, toPosY);

            this.O_contentnode.width = Math.abs(toPosX) + snode.width * 0.5 + this._F0FtYUO798;
    
            if(this._F0FpK$W9 && this.O_contentnode.width>this.node.width){
{
	let _E0FfPq61=13661;
	let _E0Fwvos54=13; let _E0FT8386= 0;
	for(let ip=0; ip<3; ip++){
	_E0FT8386+= ip + _E0FfPq61-_E0Fwvos54;
	}
	let temp3=("===3=43df==", _E0FfPq61,_E0Fwvos54,_E0FT8386);
}
                this.O_contentnode.position = new cc.Vec2(this.O_contentnode.position.y, this.O_contentnode.width-this.node.width/2);
            }
        }
        //内容的父节点宽高必须大于等于SrollView的宽高,才有滚动条显示
        // if(this.O_contentnode.height<this.node.height){
        //     this.O_contentnode.height = this.node.height;
        // }
        cc.log("====addScrollNode====", this.node.width,  this.node.height, 
                this.O_contentnode.width, this.O_contentnode.height, 
                this.O_contentnode.anchorX, this.O_contentnode.anchorY);
        if(this._F0FrG8252 && this._F0FrG8252>0 && this._F0F$WL5.length > this._F0FrG8252){
{
	if(window.g_ConfigManager){
	let _E0FDkMys2706="E0FYj";
	g_ConfigManager.setKey(_E0FDkMys2706,"E0FYj");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0FYj";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
            this.rmScrollNode(this._F0F$WL5[0].snode);
        }
    },
});
