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
<body class="body-bg" style="background:url(${imgPath}${temp.BG_LMG})"  > <input type="hidden" id="isShare" value="${isShare}"/><input type="hidden" id="isRqifsub" value="${rqifsub}"/>
    <div class="main">
    	<div class="head-logo-img"><img src="${imgPath}${temp.LOGO}" class="logo-img"></div>
        <div id="packet-wrap">
	        <div class="title-img"><img src="${imgPath}${temp.HEADLINE_IMG}"></div>
	        <div class="index-img index-img2 pr"><img src="${imgPath}${template.BUSRED_IMG}">
	        	<div class="hb-inner-header-text pa">
	            	<div class="fem-15 inner-text"><span id="amountText">${amountText}</span><span class="niudao" title="小试牛刀"><img src="${basePath}new2016/images/niudao.png"></span></div>
	            </div>
	            <div class="hb-inner-mid-text pa">
	            	<div class="hb-mid-con">
	            		<p class="fem-12 text-center lh-12 white" id="showAdvText">${showAdvText}</p>
	                    <div class="h1-5rem"></div>
	                    <p class="fem-12 text-center lh-12 white"><span id="changeTime">您还有${changeTime}次机会！</span></p>
	                </div>
	            </div>
	        </div>
        </div>
        <div class="h1em"></div>
        <div class="hb-foot-btn" id="butonStr">
        ${butonStr}	
        </div>
        
         <div class="h1em"></div>
         <div class="pl-1em pr-1em white clearfix text-center">
            <div><a href="javascript:" onClick="common.toggleDiv('#active-con');common.toggleClass($(this).parent().next().children(),'active')" class="white text-unline">活动规则</a></div>
            <div><div class="inline-block  icon-jt2 pr  bg-cover-after">&nbsp;&nbsp;</div> </div>
         </div>
         <div class="h1em"></div>
         <div class="active-gz white lh-15 pd1em" style="padding-top:0; display:none" id="active-con">
         	${ACTIVITY_RULE}
         </div>
    </div>
    
    
    <div class="hide" id="tips-box-con">
    <div class="tips-box">
    	<div class="h1em"></div>
        <div class="changeDiv_1" id="showDiv_01" >
    	<div class="t1 fem-15 text-center">请问要领取到这个号码么？</div>
        <div class="h2em"></div>
        <div class="t1 fem-12 text-center" >
        	<spen id="phoneText">${phone}</spen>
        </div>
         <div class="h2em"></div>
        <div class="text-center more-tips-btn">
         <a href="javascript" class="tips-btn" onClick="cashAllRedPackage()"><img src="${basePath}new2016/images/box_btn_4.png"></a>
         <a href="javascript" class="tips-btn tipsBtnChange" onClick="changeMobileNo()"><img src="${basePath}new2016/images/box_btn_5.png"></a>
        </div>
        </div>
        <!--更换号码-->
        <div class="changeDiv_2" id="changeDiv_2"  style="display:none">
        <div class="t1 fem-13 text-center">请输入你要领取的号码</div>
        <div class="h1em"></div>
            <div class="table">
                <div class="table-cell" style="width:4em">手机号码</div>
                <div class="table-cell"><input type="text" class="i_text inputPhone" id="inputPhone"></div>
            </div>
            <div class="h05em"></div>
            <div class="table">
                <div class="table-cell" style="width:4em">验证码</div>
                <div class="table-cell"><input type="text" class="i_text inputCheckCode" id="inputCheckCode"></div>
                <div class="table-cell"><a href="javascript:;" onClick="getCode()"class="get-code">获取</a></div>
            </div>
            <div class="h1em"></div>
            <a href="javascript:;" onClick="bangDingPhone()" class="tips-btn"><img src="${basePath}new2016/images/box_btn_1.png"></a>
        </div><!--更好号码 end-->
    </div>
    </div>
    
    
</body>
<script src="${basePath}new2016/js/lib/jquery/jquery.js"></script>
<script src="${basePath}new2016/js/lib/fastclick/fastclick.js"></script>
<script src="${basePath}new2016/js/src/common/common.js"></script>
<script src="${basePath}new2016/js/lib/seajs/seajs.js"></script>
<script type="text/javascript">
	seajs.use(['jquery','tfAlert'], function(require) {
	    seajs.use("${basePath}new2016/js/"+SCRIPT_PATH+"/model/index/redactivity");
	    seajs.use("${basePath}new2016/js/"+SCRIPT_PATH+"/model/weChat/merchandiseShare");
	    seajs.use("${basePath}new2016/js/"+SCRIPT_PATH+"/model/weChat/wechatEvent");
	});
</script>
</html>
