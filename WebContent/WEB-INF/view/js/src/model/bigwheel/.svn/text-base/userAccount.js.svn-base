this.ShareJson={};
define([common.getBaseUrl() +"new2016/js/"+SCRIPT_PATH+"/model/weChat/merchandiseShare",
        common.getBaseUrl() +"new2016/js/"+SCRIPT_PATH+"/model/weChat/wechatEvent"],function(require) {
	getUserAccounts();
	
});


var tempDataid = null;

//获取账号列表
function getUserAccounts(){
		$.ajax({
	        url: common.getBaseUrl() + "redAcount/getUserAccounts.do",
	        type: "post",
	        async:false,
	        dataType: "json",
	        error:function (data) {
	        	common.tips('系统异常，请稍后再试');	
	        },
	        success: function (data) {
	        	$('#allMoneyTXT').html(data.allMoney);
	        	var bgImg = $('#bgimgUrl').val();
	        	var listStrTo3 = "";
	        	var listStrOut3 = "";
	        	$.each(data.resultSet, function(i, item){ 
	        		if(item.RESOURCE_TYPE == 1){
	        			if(i<5){
		        			var btnStr = createBtnStr(item);
			        		listStrTo3+="<li>"+
				            	'<img src="'+common.getImgUrl()+"/fuliclient"+bgImg+'">'+
				                '<div class="left-icon">'+
				                	'<img src="'+common.getImgUrl()+"/fuliclient"+item.SMALL_IMG+'">'+
				                '</div>'+
				                '<div class="hb-items-text">'+
				                	'<div class="text">'+item.RESOURCE_NAME+'</div>'+
				                '</div>'+
				                '<div class="btn-wrap">'+
				                	'<div class="btn-wrap-con text-center">'+
				                		btnStr+
				                    '</div>'+
				                '</div>'+
				            '</li>';
		        		}else{
		        			var btnStr = createBtnStr(item);
		        			listStrOut3+="<li>"+
				            	'<img src="'+common.getImgUrl()+"/fuliclient"+bgImg+'">'+
				                '<div class="left-icon">'+
				                	'<img src="'+common.getImgUrl()+"/fuliclient"+item.SMALL_IMG+'">'+
				                '</div>'+
				                '<div class="hb-items-text">'+
				                	'<div class="text">'+item.RESOURCE_NAME+'</div>'+
				                '</div>'+
				                '<div class="btn-wrap">'+
				                	'<div class="btn-wrap-con text-center">'+
				                		btnStr+
				                    '</div>'+
				                '</div>'+
				            '</li>';
		        		}
	        		}
	        	});
	        	$('#all-hb-list').append(listStrOut3);
	        	$('#userAccountsList').append(listStrTo3);
	        }
	    });
}
function createBtnStr(item){
	var btnStr = "";
	if(item.RESOURCE_TYPE == 3){
		if(item.IS_EXCHANGE == '0'){
			btnStr+='<span class="img"><img src="'+common.getBaseUrl()+'new2016/images/btn_djsy.png" alt="点击使用" onClick="dianJiLingQu('+"'"+item.ID+"'"+')"></span>';
		}else{
			btnStr+='<span class="img"><img src="'+common.getBaseUrl()+'new2016/images/btn_ylq.png" alt="已领取"></span>';
		}
	}else if(item.RESOURCE_TYPE == 1){
		btnStr+='<span class="white fem-15">￥'+item.MONEY_NUMBER+'</span>';
		if(item.IS_EXCHANGE == '0'){
			btnStr+='<span class="img"><img src="'+common.getBaseUrl()+'new2016/images/btn_djlq.png" alt="点击使用" onClick="dianJiLingQu('+"'"+item.ID+"'"+')"></span>';
		}else{
			btnStr+='<span class="img"><img src="'+common.getBaseUrl()+'new2016/images/btn_ylq.png" alt="已领取"></span>';
		}
	}else if(item.RESOURCE_TYPE == 2){
		if(item.IS_EXCHANGE == '0'){
			btnStr+='<span class="img"><img src="'+common.getBaseUrl()+'new2016/images/btn_djsy.png" alt="点击使用" onClick="dianJiLingQu('+"'"+item.ID+"'"+')"></span>';
		}else{
			btnStr+='<span class="img"><img src="'+common.getBaseUrl()+'new2016/images/btn_ylq.png" alt="已领取"></span>';
		}
	}
	return btnStr;
}

function sysGo(url){
	common.G(url);
}

function dianJiLingQu(data,phonekey){
	
	var check = $('#isRqifsub').val();
	alert(check);
	if(check == '1'){
		var orderId = data;
		cashOrderRedPackage(orderId);
	}else{
			common.G("http://www.zhg3.com/P/thiparpayrepeat/index.action?id=8a797ee6547a9b66015499c462ed34c9");
	}
}
//兑换红包
function cashOrderRedPackage(data){
	common.showLoad("正在加载...");
	$.ajax({
        url: common.getBaseUrl() + "redEnve/cashOrderRedPackage.do?orderId="+data,
        type: "post",
        dataType: "json",
        error:function (data) {
        	common.hideLoad();//关闭等待
        	common.tips('系统异常，请稍后再试');	
        },
        success: function (data) {
        	common.hideLoad();//关闭等待
        	if(data.status == "1"){
        		common.G(common.getBaseUrl()+ "new2016/bigwheel/userAccount.jsp");
        	}else if(data.status == "4"){
        		common.tips('抽奖服务异常，请稍后再试');
        	}else if(data.status == "3"){
        		common.tips('抽奖服务异常，请稍后再试');
        	}else if(data.status == "12"){
        		common.tips('没有找到中奖记录');
        	}else{
        		common.tips(data.msgs);
        	}
        }
    });
}
