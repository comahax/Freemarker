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
    <title>访问人数过多</title>
    <link rel="stylesheet" href="${basePath}new2016/css/normalize.css"/>
    <link rel="stylesheet" href="${basePath}new2016/css/main.css"/>
</head>
<body class="mb-body error-body">
    <div class="page-main">
        <div class="error-wrap">
            <img src="${basePath}new2016/images/error-tip.gif" alt=""/>
            <!--返回链接-->
        </div>
    </div>
</body>
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