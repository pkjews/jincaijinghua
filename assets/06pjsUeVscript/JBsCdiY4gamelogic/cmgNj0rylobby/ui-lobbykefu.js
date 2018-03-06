cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // use this for initialization
    onLoad: function () {

    },

    onCloseClick : function () {
        g_SoundManager.playButtonEffect();
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+138;
	g_ItemManager.updateItem(138,13);
	}
}
        
        this.node.active = false;
    }
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
