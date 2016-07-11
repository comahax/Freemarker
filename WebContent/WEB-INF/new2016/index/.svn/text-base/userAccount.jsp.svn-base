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
    <div class="main"><input type="hidden" id="phoneText" value="${phone}"/><input type="hidden" id="bgimgUrl" value="${accountTemplate.REDSHOW_IMG}"/> <input type="hidden" id="isShare" value="${isShare}"/>
    	<div class="head-logo-img"><img src="${imgPath}${accountTemplate.LOGO}" class="logo-img"></div>
        <div class="h1em"></div>
          <!--广告位-->
          <div class="banner-wrap">
          <div class="swiper-container">
                <div class="swiper-wrapper" id="swiper-wrapper">
                    <div class="swiper-slide" id="firstAdv">
                    	<div class="text-center">
                        <div class="user-info">
                            <img src="${rqheadimg}" class="user-img">
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
         <div><img src="${basePath}new2016/images/moerfansfuli.png"></div>
        <div class="h1em"></div>
          <ul class="hb-items-list" id="userAccountsAdvList">
        	<!--  <li>
                <img src="${basePath}new2016${accountTemplate.REDSHOW_IMG}">
                <div class="left-icon">
                	<img src="${basePath}new2016/images/hb_icon/icon_3.png">
                </div>
                <div class="hb-items-text">
                	<img src="${basePath}new2016/images/hb_icon/text_3.png">
                </div>
                <div class="btn-wrap">
                	<div class="btn-wrap-con text-center">
                    	<span class="white fem-15">￥2 +</span>
                        <div class="btn_text white">点击使用</div>
                    </div>
                </div>
            </li>
           <li>
            	<img src="${basePath}new2016${accountTemplate.REDSHOW_IMG}">
                <div class="left-icon">
                	<img src="${basePath}new2016/images/hb_icon/icon_4.png">
                </div>
                <div class="hb-items-text">
                	<img src="${basePath}new2016/images/hb_icon/text_4.png">
                </div>
                <div class="btn-wrap">
                	<div class="btn-wrap-con text-center">
                        <div class="btn_text white">点击使用</div>
                    </div>
                </div>
           </li>
           <li>
            	<img src="${basePath}new2016${accountTemplate.REDSHOW_IMG}">
                <div class="left-icon">
                	<img src="${basePath}new2016/images/hb_icon/icon_5.png">
                </div>
                <div class="hb-items-text">
                	<img src="${basePath}new2016/images/hb_icon/text_5.png">
                </div>
                <div class="btn-wrap">
                	<div class="btn-wrap-con text-center">
                        <span class="img"><img src="${basePath}new2016/images/btn_djbl.png" alt="点击办理"></span>
                    </div>
                </div>
           </li>-->
        </ul>
        
         <div class="pl-1em pr-1em white clearfix text-center">
            <div><a href="javascript:" onClick="common.toggleDiv('#active-con');common.toggleClass($(this).parent().next().children(),'active')" class="white text-unline">活动规则</a></div>
            <div><div class="inline-block  icon-jt2 pr  bg-cover-after">&nbsp;&nbsp;</div> </div>
         </div>
         <div class="h1em"></div>
        <div class="active-gz white lh-15 pd1em" style="padding-top:0; display:none" id="active-con">
         	${ACTIVITY_RULE}
         </div>
    </div>
    
    <input type="hidden" id="orderIdText" />
    <div class="hide" id="tips-box-con">
    <div class="tips-box">
    	<div class="t1 fem-13">请问要兑换至哪个号码呢？</div>
        <div class="h1em"></div>
        <div class="table">
        	<div class="table-cell" style="width:4em">手机号码</div>
            <div class="table-cell"><input type="text" class="i_text inputPhone"></div>
        </div>
        <div class="h05em"></div>
        <div class="table">
        	<div class="table-cell" style="width:4em">验证码</div>
            <div class="table-cell"><input type="text" class="i_text inputCheckCode"></div>
            <div class="table-cell"><a href="javascript:" class="get-code" onClick="getCode()">获取</a></div>
        </div>
        <div class="h1em"></div>
        <a href="javascript" class="tips-btn" ><img src="${basePath}new2016/images/box_btn_1.png"></a>
    </div>
    </div>
    <input type="hidden" id="isRqifsub" value="${rqifsub}"/>
    <div class="hide" id="tips-box-con1">
	    <div class="tips-box">
	    	<div class="h1em"></div>
	        <div class="changeDiv_1">
	    	<div class="t1 fem-13 text-center">请先关注珠海移动公众号，才能参与活动！</div>
	        <div class="h1em"></div>
	            <div class="h1em"></div>
	            <a href="javascript:" onClick="guanzhu()" class="tips-btn"><img src="${basePath}new2016/images/box_btn_1.png"></a>
	        </div>
	    </div>
    </div>
<!--大图弹出-->
<div class="hide" id="big-fixed-box">
	<!-- <div class="big-fixed-box">
    	<a href="javascript:" class="bfb-close bg-cover" onClick="common.hideLayer()"></a>
        <div class="block_1">
            <div class="pd1em"><img src="../images/bigbox/AOne.png"></div>
            <div class="text-center more-tips-btn pl-1em pr-1em">
             <a href="javascript" class="tips-btn"><img src="../images/box_btn_11.png"></a>
             <a href="javascript" class="tips-btn tipsBtnChange" onClick="$(this).parent().parent().hide().next().show()"><img src="../images/box_btn_12.png"></a>
             </div>
        </div>
         <div class="block_2 hide">
            <div class="pd1em"><img src="../images/bigbox/ATwo.png"></div>
            <div class="text-center more-tips-btn pl-1em pr-1em">
             <a href="javascript" class="tips-btn"><img src="../images/box_btn_11.png"></a>
             <a href="javascript" class="tips-btn tipsBtnChange" onClick="$(this).parent().parent().hide().next().show()"><img src="../images/box_btn_12.png"></a>
             </div>
        </div>
        
         <div class="block_3 hide">
            <div class="pd1em"><img src="../images/bigbox/BanMessage.png"></div>
            <div class="text-center more-tips-btn pl-1em pr-1em">
             <a href="javascript" class="tips-btn"><img src="../images/box_btn_11.png"></a>
             <a href="javascript" class="tips-btn tipsBtnChange" onClick="common.hideLayer()"><img src="../images/box_btn_13.png"></a>
             </div>
        </div>
    </div> -->
</div>
<!--大图 end-->
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
	    seajs.use("${basePath}new2016/js/"+SCRIPT_PATH+"/model/index/userAccount");
	});
</script>
</html>