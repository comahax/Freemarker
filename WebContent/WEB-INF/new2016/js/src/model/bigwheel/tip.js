
define([common.getBaseUrl() +"new2016/js/"+SCRIPT_PATH+"/model/weChat/merchandiseShare",
        common.getBaseUrl() +"new2016/js/"+SCRIPT_PATH+"/model/weChat/wechatEvent"],function(require) {
	
	var weChatShare = require(sys.getBaseUrl() +"new2016/js/"+SCRIPT_PATH+"/model/weChat/merchandiseShare");
	var share = require(sys.getBaseUrl() +"new2016/js/"+SCRIPT_PATH+"/model/weChat/wechatEvent");
	function shareCallBack(){
		var image = common.getBaseUrl()+"new2016/images/517share.png";
		var shareObject = {};
		shareObject.title="天天1G大转盘";
		shareObject.link="http://www.zhg3.com/P/repeat/index.action?toUrl=http://www.zhg3.com:38079/fuliclient/BigWheelIndex/BigWheelIndex.do";
		shareObject.imgUrl= image;
		shareObject.desc="每天都能抽！据说每3人就有1人中1G！";
		share.shareFun.shareLineTime(shareObject);
	}
	weChatShare.weChatShare.ready(shareCallBack,true);
});

