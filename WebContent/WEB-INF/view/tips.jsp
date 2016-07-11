<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
	String imgPath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path;
%>
<c:set var="basePath" value="<%=basePath %>"/>
<c:set var="imgPath" value="<%=imgPath %>"/>
<html>
<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, width=device-width">
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta names="apple-mobile-web-app-status-bar-style" content="black-translucent" />
     <title>提示</title>
    <link rel="stylesheet" href="${basePath}new2016/css/normalize.css"/>
    <link rel="stylesheet" href="${basePath}new2016/css/main.css"/>
</head>
<body class="mb-body tips-body">
<div class="page-main">
    <div class="tips-page-wrap">
        <div class="tips-main">
        ${msg} 

        </div>
        <div class="tips-main" style="display: none">
            <p>要关注“珠海移动”官方微信</p>
            <p>才能为好友扫码。关注绑定号码</p>
            <p>可以获得1G流量。</p>
        </div>
        <!--返回链接-->
        <a href="#" class="default-btn-link" onclick="goDZP()">
            <div class="default-btn" >我也要参加</div>
        </a>
        <div class="dial-img-wrap">
            <a href="#">
                <img src="${basePath}new2016/images/dial-img.jpg" alt=""/>
            </a>
        </div>
    </div>
</div>
</body>
<script type="text/javascript">
function goDZP(){
	location.href ="http://www.zhg3.com/P/repeat/index.action?toUrl=http://www.zhg3.com:38079/fuliclient/BigWheelIndex/BigWheelIndex.do";
}		
</script>
<script src="${basePath}new2016/js/src/common/common.js"></script>
<script src="${basePath}new2016/js/lib/jquery/jquery.js"></script>
<script src="${basePath}new2016/js/src/common/jquery.qrcode.min.js"></script>
<script src="${basePath}new2016/js/lib/seajs/seajs.js"></script>
  	<script type="text/javascript">
	seajs.use(['tfAlert'], function(require) {
	    seajs.use("${basePath}new2016/js/"+SCRIPT_PATH+"/model/bigwheel/tip");
	    seajs.use("${basePath}new2016/js/"+SCRIPT_PATH+"/model/weChat/merchandiseShare");
	    seajs.use("${basePath}new2016/js/"+SCRIPT_PATH+"/model/weChat/wechatEvent");
	});
</script>
</html>