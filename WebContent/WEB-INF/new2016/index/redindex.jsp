<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
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
<title>${activityName}</title>
<link href="${basePath}new2016/css/reset.css" rel="stylesheet" type="text/css" />
<link href="${basePath}new2016/css/common.css" rel="stylesheet" type="text/css" />
<link href="${basePath}new2016/css/index.css" rel="stylesheet" type="text/css" />
<script type="text/javascript">
	var basePath = '<%=basePath %>';
</script>
</head>
<body class="body-bg" style="background:url(${imgPath}${temp.BG_LMG})">
    <input type="hidden" id="isShare" value="${isShare}"/>
    <div class="main">
	    <div class="head-logo-img screen-fixed-area"><img src="${imgPath}${temp.LOGO}" class="logo-img"></div>
    	 <div id="packet-wrap">
	        <div class="title-img positionAbsolute"><img src="${imgPath}${temp.HEADLINE_IMG}"></div>
	        <div class="index-img pr positionAbsolute"><img src="${imgPath}${temp.SMALLRED_IMG}" >
	        	<a class="icon-chai pa" href="javascript:" onclick="toNexr()"><img src="${imgPath}${temp.INTERACT_IMG}"></a>
	        </div>
        </div>
        
        <div class="screen-fixed-area">
        
        <div class="banner pl-1em pr-1em pb-1em"><a href="${mainadvSrc}"><img src="${imgPath}${mainadvUrl}"></a></div>
      
        <p class="text-center white lh-15">
<!-- 移动4G两周年，感恩大回馈<br>
<span class="yellow">送</span>流量&nbsp;&nbsp;<span class="yellow">送</span>话费&nbsp;&nbsp;<span class="yellow">送</span>光宽带<br> -->
已有<span class="yellow" id="peopleTXT"></span>人参与活动，共送出<span id="moneyTXT"></span>元话费

        
        
        </p>
         <div class="h1em"></div>
         <div class="pl-1em pr-1em white clearfix">
         	<div class="f-l pr-1em icon-jt2 pr bg-cover-after">
            <a href="javascript:" onClick="common.toggleDiv('#active-con');common.toggleClass($(this).parent(),'active')" class="white text-unline">活动规则</a>
            </div>
            <div class="f-r">
            本活动仅限珠海移动用户参与
            </div>
         </div>
         <div class="h1em"></div>
          </div>
         <div class="active-gz white lh-15 pd1em" id="active-con" style="padding-top:0; display:none">
         	${ACTIVITY_RULE}
         	<div id="dataJson"></div>
         </div>
    </div>
</body>
<script src="${basePath}new2016/js/lib/fastclick/fastclick.js"></script>
<script src="${basePath}new2016/js/src/common/common.js"></script>
<script src="${basePath}new2016/js/lib/jquery/jquery.js"></script>
<script src="${basePath}new2016/js/lib/seajs/seajs.js"></script>
<script type="text/javascript">
	seajs.use(['jquery','tfAlert'], function(require) {
	    seajs.use("${basePath}new2016/js/"+SCRIPT_PATH+"/model/index/index");
	    seajs.use("${basePath}new2016/js/"+SCRIPT_PATH+"/model/weChat/merchandiseShare");
	    seajs.use("${basePath}new2016/js/"+SCRIPT_PATH+"/model/weChat/wechatEvent");
	});
</script>
</html>
