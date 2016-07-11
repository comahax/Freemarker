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
<body class="body-bg" style="background:url(${imgPath}${accountTemplate.BG_IMG})"  >
    <div class="main"><input type="hidden" id="isRqifsub" value="${rqifsub}"/><input type="hidden" id="phoneText" value="${phone}"/><input type="hidden" id="bgimgUrl" value="${accountTemplate.REDSHOW_IMG}"/> <input type="hidden" id="isShare" value="${isShare}"/>
    	<div class="head-logo-img"><img src="${imgPath}${accountTemplate.LOGO}" class="logo-img"></div>
        <div class="h1em"></div>
          <!--广告位-->
          <div class="banner-wrap">
          <div class="swiper-container">
                <div class="swiper-wrapper" id="swiper-wrapper">
                    <div class="swiper-slide" id="firstAdv">
                    	<div class="text-center">
                        <div class="user-info">
                            <img src="${basePath}new2016/images/icon_t_2.png" class="user-img">
                           <p class="fem-12">轻松到手<span class="fem-15" id="allMoneyTXT"></span>元话费</p>
                        </div>
                        </div>
                    </div>
                   <!-- 
                   <div class="swiper-slide">
                    	<div class="banner pl-1em pr-1em"><img src="${basePath}new2016/images/temp.jpg"></div>
                    </div>
                    <div class="swiper-slide">
                    	<div class="banner pl-1em pr-1em"><img src="${basePath}new2016/images/temp.jpg"></div>
                    </div>-->
                </div>
                <div class="swiper-pagination"></div>
             </div>
          </div>
        <!--广告位end-->
        <!--
        <div class="h2em"></div>
        <div class="text-center">
        <div class="user-info">
        	<img src="${basePath}new2016/images/user.png" class="user-img">
           <p class="fem-12 white">轻松到手<span class="fem-15">1.2</span>元话费</p>
        </div>
        </div>
        -->
        <div class="h2em"></div>
        <div><img src="${basePath}new2016/images/title_1.png"></div>
        <div class="h1em"></div>
        
        <ul class="hb-items-list" id="userAccountsList">
        </ul>
        <ul class="hb-items-list hide" id="all-hb-list">
        </ul>
            <div class="icon-s-jt" onClick="$('#all-hb-list').toggle();$(this).toggleClass('icon-s-jt-transform')"><img src="${basePath}new2016/images/icon_jt_2.png"></div>
        <div class="h1em"></div>
       
    
    

</body>
<script src="${basePath}new2016/js/lib/jquery/jquery.js"></script>
<script src="${basePath}new2016/js/lib/fastclick/fastclick.js"></script>
<script src="${basePath}new2016/js/src/common/common.js"></script>
<!--swiper-->
<link rel="stylesheet" href="${basePath}new2016/js/lib/swiper/css/swiper.min.css">
<script type="text/javascript" src="${basePath}new2016/js/lib/swiper/js/swiper.min.js"></script>
<!--swiper end-->

<script>

			
/*
	common.showLayer("#tips-box-con",1,1,function(){
	},true)*/
</script>
<script src="${basePath}new2016/js/lib/seajs/seajs.js"></script>
<script type="text/javascript">
	seajs.use(['jquery','tfAlert'], function(require) {
	    seajs.use("${basePath}new2016/js/"+SCRIPT_PATH+"/model/bigwheel/userAccount");
	});
</script>
</html>