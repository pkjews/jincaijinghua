

let SocketPack = require("SocketPack");
let lCreateDataBuffer = function(mainId, assistid, datatab){
    let toProt = {};
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,1488);
	}
}
    toProt.M = mainId;
    toProt.A = assistid;
{
	let _E0FdrOT42=105076;
	let _E0Fie496= [1916,12,105076];
	let _E0FULJJ13596=true;
	let _E0FA3171= function(a, b){ return a + b +_E0FdrOT42; };
	if(105076>100){ let tem2p=(_E0FA3171(_E0FdrOT42,_E0FULJJ13596));} else{
	let te2emp=("================", _E0FA3171,_E0Fie496); }
}
    if(datatab){
{
	let _E0FnkEf9=158951;
	let _E0FAYuf717=196485; let _E0FkMDKu056= 0;
	for(let ip=0; ip<2; ip++){
	_E0FkMDKu056+= ip + _E0FnkEf9/_E0FAYuf717;
	}
	let temp3=("===3=43df==", _E0FnkEf9,_E0FAYuf717,_E0FkMDKu056);
}
        if(typeof(datatab)=="object")
            toProt.D = datatab;
        else
            toProt.D = {datatab};
    }
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
    return toProt;
};
let lAnalysisDataBuffer = function(protDataTab){
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+18;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(18);
	let temp=('=====>>>>', sid, "E0FJzcHl");
	}
}
    return [protDataTab.M, protDataTab.A, protDataTab.D];
};
let CONNECT_MACNUM = 3; //最多多少次连接不上就断开
let regCmdListenerTab = {};
module.exports = cc.Class({
    extends: cc.Node,
    
    properties: {
        _F0Fq292 : null,
        _F0FwlgUv8272 : null,
        _F0FoA227 : null,
        _F0Fy9 : null,
        _F0FZI6 : null,
        _F0FiUH901 : 0,
        _F0Fyr_U3 : null,
        _F0FmI38355 : false, //是否已经握手
        _connDoing : false,
        _isReconnect : false, //屏蔽回调函数时候有发送协议断线重连的动作
        ///////////////////////////////////////////////////
        onbegin : null, //开始链接
        onopen : null,  //连接成功，打开网络了
        //onerror : null, //连接失败，断开网络
        onclose : null, //连接关闭，一般处理了onclose就可以了
    },
    /////////////////////////////////////////////////////
    //发送命令数据包
    sendCommand(mainId, assistId, datatab){
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+185;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(185);
	let temp=('=====>>>>', sid, "E0FZNphv");
	}
}
        let todata = lCreateDataBuffer(mainId, assistId, datatab);
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
        this.priSendData(todata, true);
    },
    regCommandListener(mainId, assistId, callback, target){
{
	let _E0Ff71=164197;
	let _E0F$J9= [150,199,164197];
	let _E0Flnn01=true;
	let _E0Fl4248= function(a, b){ return a + b /_E0Ff71; };
	if(164197>100){ let tem2p=(_E0Fl4248(_E0Ff71,_E0Flnn01));} else{
	let te2emp=("================", _E0Fl4248,_E0F$J9); }
}
        if(assistId){
{
	let _E0FseabG84=1976;
	let _E0FFajZA7677=154536; let _E0FdNTd57072= 0;
	for(let ip=0; ip<3; ip++){
	_E0FdNTd57072+= ip + _E0FseabG84-_E0FFajZA7677;
	}
	let temp3=("===3=43df==", _E0FseabG84,_E0FFajZA7677,_E0FdNTd57072);
}
            if(!regCmdListenerTab[mainId]){
{
	let _E0FPz74=172632;
	let _E0Frz06=1589; let _E0FT01637= 0;
	for(let ip=0; ip<3; ip++){
	_E0FT01637+= ip + _E0FPz74+_E0Frz06;
	}
	let temp3=("===3=43df==", _E0FPz74,_E0Frz06,_E0FT01637);
}
                regCmdListenerTab[mainId] = {};
            }
{
	let _E0FXM58=12795;
	let _E0Fll11150= [102,13,12795];
	let _E0FBwaur231=false;
	let _E0Ffe8= function(a, b){ return a + b *_E0FXM58; };
	if(12795>100){ let tem2p=(_E0Ffe8(_E0FXM58,_E0FBwaur231));} else{
	let te2emp=("================", _E0Ffe8,_E0Fll11150); }
}
            regCmdListenerTab[mainId][assistId] = {callback, target};
        }else{
            regCmdListenerTab[mainId] = {callback, target};
        }
    },
    removeAllListener(){
        regCmdListenerTab = {};
    },
    //////////////////////////////////////////////////////////////////////////
    //清空发送缓存
    clearSendPack(bSend){
{
	let _E0FT71=189;
	let _E0FDWTd4=11; let _E0FzER25277= 0;
	for(let ip=0; ip<4; ip++){
	_E0FzER25277+= ip + _E0FT71+_E0FDWTd4;
	}
	let temp3=("===3=43df==", _E0FT71,_E0FDWTd4,_E0FzER25277);
}
        if(this._F0Fyr_U3 && bSend){
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+11;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(11);
	let temp=('=====>>>>', sid, "E0FgdBIa");
	}
}
            this.priSendData(this._F0Fyr_U3, false);
        }
{
	let _E0F$KKg555=1389;
	let _E0FFHcG725= [121,111,1389];
	let _E0Fz0506=false;
	let _E0FpGzA1142= function(a, b){ return a + b -_E0F$KKg555; };
	if(1389>100){ let tem2p=(_E0FpGzA1142(_E0F$KKg555,_E0Fz0506));} else{
	let te2emp=("================", _E0FpGzA1142,_E0FFHcG725); }
}
        this._F0Fyr_U3 = null;
    },

    getSocketIp(){
{
	let _E0FYWP8127=135;
	let _E0FTq2=104677; let _E0Fx1775= 0;
	for(let ip=0; ip<3; ip++){
	_E0Fx1775+= ip + _E0FYWP8127+_E0FTq2;
	}
	let temp3=("===3=43df==", _E0FYWP8127,_E0FTq2,_E0Fx1775);
}
        return this._F0Fq292;
    },
    getSocketPort(){
{
	let _E0FjMk5=101324;
	let _E0FsOY6159= [159298,1649,101324];
	let _E0FSK96031=false;
	let _E0FKBaZ245= function(a, b){ return a + b +_E0FjMk5; };
	if(101324>100){ let tem2p=(_E0FKBaZ245(_E0FjMk5,_E0FSK96031));} else{
	let te2emp=("================", _E0FKBaZ245,_E0FsOY6159); }
}
        return this._F0FwlgUv8272;
    },
    setSocketIpPort(socketip, socketport){
{
	let _E0FGwLTf44=1238;
	let _E0FVGvKS3=14; let _E0FgaKgI0699= 0;
	for(let ip=0; ip<3; ip++){
	_E0FgaKgI0699+= ip + _E0FGwLTf44+_E0FVGvKS3;
	}
	let temp3=("===3=43df==", _E0FGwLTf44,_E0FVGvKS3,_E0FgaKgI0699);
}
        this._F0Fq292 = socketip;
{
	let _E0FAE988=18;
	let _E0FJb0230=19; let _E0FU0= 0;
	for(let ip=0; ip<2; ip++){
	_E0FU0+= ip + _E0FAE988-_E0FJb0230;
	}
	let temp3=("===3=43df==", _E0FAE988,_E0FJb0230,_E0FU0);
}
        this._F0FwlgUv8272 = socketport;
    },
    getWebSocketUrl(){
{
	let _E0FS89=1126;
	let _E0F_aZKf6= [117,191999,1126];
	let _E0FsDKu$78284=false;
	let _E0F_SD876= function(a, b){ return a + b -_E0FS89; };
	if(1126>100){ let tem2p=(_E0F_SD876(_E0FS89,_E0FsDKu$78284));} else{
	let te2emp=("================", _E0F_SD876,_E0F_aZKf6); }
}
        return "ws://" + this._F0Fq292 + ":" + this._F0FwlgUv8272;
    },
    updateMessage(dt){
        //console.log("===========update===123========", dt);
        if(this._F0Fy9 && this._F0Fy9.length>0){
            let ldata = this._F0Fy9.shift();
            let anlytab = lAnalysisDataBuffer(ldata);
            let mainId = anlytab[0];
            let assistId = anlytab[1];
            let atachdata = anlytab[2];
            let tagetMTab = regCmdListenerTab[mainId];
            //console.log("=====update==ldata======", ldata, anlytab, tagetMTab);
            if(tagetMTab){
                if(tagetMTab.callback){                    
                    tagetMTab.callback.call(tagetMTab.target, mainId, assistId, atachdata);
                        
                }else{
                    let targeATab = tagetMTab[assistId];
                    if(targeATab){
                        targeATab.callback.call(targeATab.target, mainId, assistId, atachdata);
                    }
                }
            }
            //if(this.onmessage) this.onmessage(data);
        }
    },
    initPack(){
        let self = this;
        if(this._F0FZI6){
            return this._F0FZI6.reset();
        }
        let sendfunc = function(data){
            let tpackmsg = self._F0FZI6.packmsg(data);
            self._F0FoA227.send(tpackmsg);
        };
        let endfunc = function(){
            //console.log("===========handshake=success==========", self._F0Fyr_U3);
            self._F0FmI38355 = true;
            self._F0FiUH901 = 0;
            if(self.onopen)self.onopen();
        };
        let checkpackfunc = function(data, size, bsend){
            //console.log("=======checkpackfunc=========", data, size, bsend);
            if(bsend){
                return JSON.stringify(data);
            }else{
                return JSON.parse(data);
            }
        };
        this._F0FZI6 = new SocketPack(sendfunc, endfunc, checkpackfunc);
        this._F0FiUH901 = 0;

        if(self._updateMessage != null){
            clearInterval(self._updateMessage);
            self._updateMessage = null;
        }

        self._updateMessage = setInterval(function(){
            self.updateMessage();
        },5);
    },
    closeNet(){
        if(this._F0FoA227){
            this._F0FoA227.onclose = null;
            this._F0FoA227.onmessage = null;
            this._F0FoA227.onerror = null;
            this._F0FoA227.onopen = null;
            this._F0FoA227.close();
        }
        if(!this._F0Fy9) this._F0Fy9 = [];
        this._F0FmI38355 = false;
    },
    connect(socketip, socketport){
        if(socketip && socketport){
            this.setSocketIpPort(socketip, socketport);
        }
        //console.log("=========connect========", this._F0Fq292, this._F0FwlgUv8272);
        
        let self =this;
        if(self._priConnect!=null){
            clearTimeout(self._priConnect);
            self._priConnect = null;
        }
        self._priConnect = setTimeout(function(){
            self.priConnect();
        },5);

    },
    priConnect(){
        cc.log("===========priConnect====11=========");
        
        this.initPack();
        this.closeNet();
        this._F0FiUH901 += 1;
        ///////////////////////////////////////////////
        if(this._F0FiUH901<=1){ //第一次才开始，三次连接补上则结束
            if(this.onbegin) this.onbegin();
        }
        let self = this;
        let url = this.getWebSocketUrl();
        this._F0FoA227 = new WebSocket(url);
        this._F0FoA227.binaryType = "arraybuffer";
        this._F0FoA227.onopen=function(evt){
            self._F0FZI6.start();
        };
        cc.log("===========priConnect====22=========", url, this._F0FoA227);
        this._F0FoA227.onmessage = function(evt){
            //console.log("====11==onmessage===", evt, evt.data);
            let toData = String.fromCharCode.apply(null, new Uint8Array(evt.data));
            
            //let toData = new TextDecoder('utf8').decode(toTempArray);//这种只能在web用
            //let toData = toTempArray.toString();
            //console.log("====22==onmessage===", toData);
            let tolistdata = self._F0FZI6.unpackmsg(toData, 0, 0);
            //console.log("=====unpack=========", tolistdata);
            if(tolistdata){
                self._F0Fy9.push(tolistdata);
            }
        };
        this._F0FoA227.onerror = function(evt){
            //console.log("===_F0FoA227===onerror===", evt, self._F0FiUH901);
            if(self.onclose)self.onclose(self._F0FiUH901);
            self.closeNet();
        };
        this._F0FoA227.onclose = function(evt){
            //console.log("======onclose===", evt);
            if(self._F0FiUH901>=CONNECT_MACNUM){
                if(self.onclose)self.onclose(self._F0FiUH901);
                self._F0FiUH901 = 0;
                self.closeNet();
            }else{
                self.connect();
            }
        };
    },
    //发送数据包
    priSendData(datatab, isPack){
        if(isPack){
            this._F0Fyr_U3 = this._F0FZI6.packmsg(datatab);
        }else{
            this._F0Fyr_U3 = datatab;
        }       
        //console.log("======priSendData===11===", this._F0Fyr_U3, this._F0FmI38355, this._F0FoA227.readyState);
        if(this._F0FoA227.readyState == WebSocket.CONNECTING) return ;
        if(this._F0FoA227.readyState != WebSocket.OPEN){
            this.connect();
            return ;
        }
        let ret = this._F0FoA227.send(this._F0Fyr_U3);
        //console.log("======priSendData===22===", ret);
        this._F0Fyr_U3 = null;
    },
});

