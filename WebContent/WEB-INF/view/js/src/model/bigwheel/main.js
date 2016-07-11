var isNew = "";
var actityId = "";
var phoneKey = "";
var phone = "";
var myProducturl = "";
var myCoinurl = "";
var rqifsub = "";
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
		shareObject.desc="每天都能抽！据说每3人就有1人中1G流量！";
		share.shareFun.shareLineTime(shareObject);
	}
	weChatShare.weChatShare.ready(shareCallBack,true);
	
	getPhoneKey();
	getUserChance();//获取用户机会
	$("#btn-go").click(function(){
		drawLucky();
    });
	var imgI = 0;
    $("img:visible").each(function(i,e){
        loadImage($(e).attr("src"),function(){
            imgI++;
            if($("img:visible").length == imgI){
                screenFixed("#page-main");
            }
        });
    });
    setTimeout(function(){
        screenFixed("#page-main");
    },1000);
    $("#notify-ul").notifyAnimate({
        speed:2000,
        item:"li",
        url:common.getBaseUrl() +"new2016/js/"+SCRIPT_PATH+"/model/bigwheel/notify-list.txt"
    });
    $(".dial-item",$("#dial-main")).on("click",function(){
        var _this = $(this);
        if(_this[0].hasAttribute("data-obj") && _this.attr("data-obj")!="" &&  $("#phoneTXT").html()!=""){
            var obj = eval("(" + _this.attr("data-obj") + ")");
            if(typeof obj == 'object'){
                $.prizeDetailShow(obj);
            }else{
                console.log('data-obj的值不是JSON对象');
            }
        }
    });
});

//获取用户抽奖资格
function getUserChance(){
	var isTime = time_range ("09:50", "22:10");
	if(!isTime){
		common.G(common.getBaseUrl()+ "new2016/bigwheel/index.html");
		return;
	}
	
	var phoneTxt = $('#phoneVAL').val();
	phone = phoneTxt;
	if(phoneTxt == ""){
//		$.jqAlert({
//		    title:"请赐下号码，<br>小移好知道奖品要给谁啊~"
//		    ,content:"<p><span class='input-title'>输入手机号:</span><span class='input-text-wrap'><input type='text' class='input-phone' placeholder='只限珠海移动用户哦!'/></span></p><p><span class='input-title'>输入验证码:</span><span class='input-text-wrap'><input type='text' class='input-code' placeholder='验证码'/><span class='get-code-btn' onclick='getCode(this)'>获取验证码</span></span></p>"
//		    ,buttons:[{
//		        "确定":function(){
//		        	checkSignCode();
//		        },
//		        "取消":function(){
//		            $.jqAlert.close();
//		        }
//		    }]
//		});
	}else{
		$.ajax({
			url : common.getBaseUrl()+ "BigWheelIndex/getUserChance.do",
	        type: "post",
	        dataType: "json",
	        beforeSend:function(data){ 
	            $.loading();
	        }, 
	        error:function (data){
	        	$.loading.hide();
	        },success: function (data) {
	        	$('#chanceTxt').css("display","");
	        	rqifsub = data.rqifsub;
	        	if(data.isNew == "1"){
	        		actityId = "37befeb0e41f49c48bc2c613f58ce22f";
	        	}else if(data.isNew == "0"){
	        		actityId = "6b981378060447afaf39e6ff8e5c7670";
	        	}
	        	$.loading.hide();
	        	//判断是否是特别大奖
	        	if(data.isSpecial == "1"){
	        		if(data.PRODUCT_TYPE == "1"){//宽带
	        			
	        			$.prizeShow(common.getBaseUrl()+"new2016/images/prize-bandwidth.png",function(){
	        				//领奖按钮回调
	        				clashSpecialProduct(data.ID);
//	        				goMyProduct();
	        			});
	        		}else{
	        			$.prizeShow(common.getBaseUrl()+"new2016/images/prize-phone.png",function(){
	        				//领奖按钮回调
	        				clashSpecialProduct(data.ID);
//	        				goMyProduct();
	        			});
	        		}
	        	}
	        	if(parseFloat(data.totalChance) <= 0){
	                $("#dial-inner").addClass("share-qrcode-show");
	                $("#dial-main").addClass("dial-animate");
	                
	                var url = "http://www.zhg3.com/P/repeat/index.action?toUrl="+common.getBaseUrl()+"BigWheelIndex/fuliBusiness.do?actityId="+actityId+"&mobileno="+phoneTxt;
	                var shortUrl = getShortUrl (url);
	                $("#qrcode-wrap").empty().qrcode(shortUrl);
	            }else{
	            	$('#chance-num').html(data.totalChance);
	            }
	        }
	    });
	}
}


//获取用户抽奖资格
function getPhoneKey(){
		$.ajax({
			url : common.getBaseUrl()+ "BigWheelIndex/getPhoneKey.do",
	        type: "post",
	        dataType: "json",
	        beforeSend:function(data){ 
	        }, 
	        error:function (data){
	        },success: function (data) {
	        	phoneKey = data.phoneKey;
	        	myProducturl = "http://fuli.zhg3.com/zhuhai_cmzxt_fuli/new2015/index/mine_coupon.html?phoneKey="+phoneKey+"&qdcode=WXHBXTGL";
	        	myCoinurl = "http://fuli.zhg3.com/zhuhai_cmzxt_fuli/new2015/index/flow-coin.html?phoneKey="+phoneKey+"&qdcode=WXHBXTGL";
	        	$("#myProduct").click(function(){
	        		common.G(myProducturl);
	    	    });
	        	 $("#myCoin").click(function(){
        			common.G(myCoinurl);
        	    });
	        }
	    });
}


//生产短链接
function getShortUrl (longUrl) {
	var shortUrl = null;

	$.ajax({
		url :  common.getBaseUrl() + "s/generateShortUrl.do",
		data : {
			"longUrl" : longUrl
		},
		type : "post",
		async : false,
		cache : false,
		timeout : 60000, // 超时时间设置，单位毫秒
		dataType : "json",
		success : function(response) {
			shortUrl = response.shortUrl;
		},
		error : function(XMLHttpRequest, textStatus,
				errorThrown) {
		}
	});
	return shortUrl;
}


//领取特别大奖+
function clashSpecialProduct(e){
	if(rqifsub == "1"){
		var id = e ; 
		$.ajax({
	        url: common.getBaseUrl() + "BigWheelIndex/clashSpecialProduct.do?id="+id,
	        type: "post",
	        dataType: "json",
	        beforeSend:function(data){ 
	            $.loading();
	        },
	        error:function (data) {
	        	$.loading.hide();
	        	$.jqAlert({                                                                                                                                                                                
	        	    title:"确定"                                                                                                                                                           
	        	    ,content:"<p>系统服务器繁忙！</p>"
	        	    ,buttons:[{                                                                                                                                                            
	        	        "确定":function(){                                                                                                                                                 
	        	        	$.jqAlert.close();                                                                                                                                                                                                                                                                                     
	        	        }                                                                                                                                                                  
	        	    }]                                                                                                                                                                     
	        	}); 	
	        	$.prizeShow.hide();
	        },
	        success: function (data){
	        	$.loading.hide();
	        	if(data.status == "1"){
	        		if(data.type == "2"){
	        			$.jqAlert({
	            		    title:"确定"
	            		    ,content:"<div style='text-align:left'>奖品验证码已短信方式发送至您中奖手机号码，请于2016年5月31日前凭手机及验证码到华发商都移动营业厅领取！<br>地址：华发商都B馆负一楼<br>营业时间：10：00-21：00</div>"
	            		    ,buttons:[{
	            		        "确定":function(){
	            		        	$.jqAlert.close();
	            		        	$.prizeShow.hide();
	            		        }
	            		    }]
	            		});
	        		}else{
	        			$.jqAlert({
	            		    title:"确定"
	            		    ,content:"<div style='text-align:left'>原价1080元/年的百兆宽带，免费试用一年啦！<br>客服人员将在48小时内与您联系确认宽带安装事宜，请务必保持您的中奖手机号码状态正常。</div>"
	            		    ,buttons:[{
	            		        "确定":function(){
	            		        	$.jqAlert.close();
	            		        	$.prizeShow.hide();
	            		        }
	            		    }]
	            		});
	        		}
	        	}else{
	        		$.jqAlert({
	        		    title:"确定"
	        		    ,content:"<div style='text-align:left'>对不起，领取失败！<br>请关注“珠海移动”微信后，联系在线客服处理！</div>"
	        		    ,buttons:[{
	        		        "确定":function(){
	        		        	$.jqAlert.close();
	        		        	//$.prizeShow.hide();
	        		        }
	        		    }]
	        		});
	        	}
	        }
	    });
	}else{
		common.G("http://www.zhg3.com/P/thiparpayrepeat/index.action?id=8a797ee6547a9b6601547b1572e40001");
	}
}


function goMyProduct(){
	if(rqifsub == "1"){
		common.G(myProducturl);
	}else{
		common.G("http://www.zhg3.com/P/thiparpayrepeat/index.action?id=8a797ee6547a9b6601547b1572e40001");
	}
}

//拆红包
function drawLucky(){
	
	var phoneTxt = $('#phoneTXT').html();
	if(phoneTxt == ""){
		$.jqAlert({
		    title:"喵~请赐下号码，<br>小移好知道奖品要给谁啊~"
		    ,content:"<p><span class='input-title'>输入手机号:</span><span class='input-text-wrap'><input type='text' class='input-phone' placeholder='只限珠海移动用户哦!'/></span></p><p><span class='input-title'>输入验证码:</span><span class='input-text-wrap'><input type='text' class='input-code' placeholder='验证码'/><span class='get-code-btn' onclick='getCode(this)'>获取验证码</span></span></p>"
		    ,buttons:[{
		        "确定":function(){
		        	checkSignCode();
		        },
		        "取消":function(){
		            $.jqAlert.close();
		        }
		    }]
		});
	}else{
		var chance = $('#chance-num').html();
		if(parseFloat(chance) <= 0){
            $("#dial-inner").addClass("share-qrcode-show");
            $("#dial-main").addClass("dial-animate");
            
            var url = "http://www.zhg3.com/P/repeat/index.action?toUrl="+common.getBaseUrl()+"BigWheelIndex/fuliBusiness.do?actityId="+actityId+"&mobileno="+phoneTxt;
            var shortUrl = getShortUrl (url);
            $("#qrcode-wrap").empty().qrcode(shortUrl);
        }else{
        	$("#btn-go").unbind( "click" ) ;
        	$.ajax({
    			url : common.getBaseUrl()+ "BigWheelIndex/drawLucky.do",
    	        type: "post",
    	        dataType: "json",
    	        beforeSend:function(data){ 
    	        	dialAnimate.show(500);
    	        }, 
    	        error:function (data){
    	        	$("#btn-go").click(function(){
    	        		drawLucky();
    	            });
    	        	dialAnimate.select({
	                    id:"54321"
	                },function(){
	                });
    	        	$.jqAlert({
    	    		    title:"确定"
    	    		    ,content:"<p>哎呀~出错了，再来一次！~</p>"
    	    		    ,buttons:[{
    	    		        "确定":function(){
    	    		        	$.jqAlert.close();
    	    		        }
    	    		    }]
    	    		});
    	        },success: function (data) {
    	        	
    	        	if(data.status == "1"){
    	        		$('#chance-num').html(data.totalChance);
    	            	var type = data.resourceId;
    	        		if(type == "12200"){
    	        			type = "8";
    	        		}else if(type == "12150"){
    	        			type = "8";
    	        		}else if(type == "12270"){
    	        			type = "8";
    	        		}else if(type == "12255"){
    	        			type = "5";
    	        		}else if(type == "12254"){
    	        			type = "5";
    	        		}else if(type == "12253"){
    	        			type = "5";
    	        		}else if(type == "12252"){
    	        			type = "5";
    	        		}else if(type == "12251"){
    	        			type = "5";
    	        		}else if(type == "12250"){
    	        			type = "5";
    	        		}else if(type == "12291"){
    	        			type = "5";
    	        		}else if(type == "12310"){
    	        			type = "5";
    	        		}else if(type == "12451"){
    	        			type = "5";
    	        		}
    	            	dialAnimate.select({
    	                    id:type//奖品id
    	                    //chanceNum:"#chance-num"剩余次数id，可不改
    	                },function(){
    	                    //选中后回调
    	                	$("#btn-go").click(function(){
    	    	        		drawLucky();
    	    	            });
    	                	showProduct(data);
    	                });
    	        	}else if(data.status == "error"){
    	        		dialAnimate.clear();
    	        	}else if(data.status == "4"){
    	        		dialAnimate.clear();
    	        	}else{
    	        		dialAnimate.select({
    	                    id:"54321"
    	                },function(){
    	                });
    	        		$.jqAlert({
    		    		    title:"确定"
    		    		    ,content:"<p>哎呀~出错了，再来一次！~</p>"
    		    		    ,buttons:[{
    		    		        "确定":function(){
    		    		        	$.jqAlert.close();
    		    		        }
    		    		    }]
    		    		});
    	        	}
    	        }
    	    });
        }
	}
}


//验证验证码
function checkSignCode(){
	//绑定电话号码
		var inputPhone = $(".input-phone").val();
		if(inputPhone == "" || inputPhone.length != 11){
			$.jqAlert({
			    title:"确定"
			    ,content:"<p>亲，你输入的号码有误，请确认后再输。一定要用珠海移动的号码哟！</p>"
			    ,buttons:[{
			        "确定":function(){
			        	$.jqAlert({
			    		    title:"喵~请小主赐下号码，<br>小移好知道奖品要给谁啊~"
			    		    ,content:"<p><span class='input-title'>输入手机号:</span><span class='input-text-wrap'><input type='text' class='input-phone' placeholder='只限珠海移动用户哦!'/></span></p><p><span class='input-title'>输入验证码:</span><span class='input-text-wrap'><input type='text' class='input-code' placeholder='验证码'/><span class='get-code-btn' onclick='getCode(this)'>获取验证码</span></span></p>"
			    		    ,buttons:[{
			    		        "确定":function(){
			    		        	checkSignCode();
			    		        },
			    		        "取消":function(){
			    		            $.jqAlert.close();
			    		        }
			    		    }]
			    		});
			        }
			    }]
			});
			return ;
		}
		var checkCode = $('.input-code').val();
		if(checkCode == ""){
			alert("请输入验证码！");
			return ;
		}
		$.ajax({
	        url: common.getBaseUrl() + "utilControl/bangDingPhone.do?inputPhone="+inputPhone+"&inputCheckCode="+checkCode,
	        type: "post",
	        dataType: "json",
	        beforeSend:function(data){ 
	            $.loading();
	        },
	        error:function (data) {
	        	$.loading.hide();
	        	$.jqAlert({                                                                                                                                                                                
	        	    title:"确定"                                                                                                                                                           
	        	    ,content:"<p>系统服务器繁忙！</p>"
	        	    ,buttons:[{                                                                                                                                                            
	        	        "确定":function(){                                                                                                                                                 
	        	        	$.jqAlert.close();                                                                                                                                                                                                                                                                                     
	        	        }                                                                                                                                                                  
	        	    }]                                                                                                                                                                     
	        	}); 	
	        },
	        success: function (data) {
	        	 $.loading.hide();
	        	if(data.checkCodeStatus == "1"){
	        		$('#phoneTXT').html(data.phone);
	        		$('#phoneVAL').val(data.phone);
	        		getUserChance();//获取用户机会
	        		 $.jqAlert.close();
	        	}else{
	        		$.jqAlert({
	        		    title:"确定"
	        		    ,content:"<p>亲，你的验证码有误，请确认后再输。</p>"
	        		    ,buttons:[{
	        		        "确定":function(){
	        		        	$.jqAlert({
	        		    		    title:"喵~请小主赐下号码，<br>小移好知道奖品要给谁啊~"
	        		    		    ,content:"<p><span class='input-title'>输入手机号:</span><span class='input-text-wrap'><input type='text' class='input-phone' placeholder='只限珠海移动用户哦!'value='" +inputPhone+
	        		    		    		"'/></span></p><p><span class='input-title'>输入验证码:</span><span class='input-text-wrap'><input type='text' class='input-code' placeholder='验证码'/><span class='get-code-btn' onclick='getCode(this)'>获取验证码</span></span></p>"
	        		    		    ,buttons:[{
	        		    		        "确定":function(){
	        		    		        	checkSignCode();
	        		    		        },
	        		    		        "取消":function(){
	        		    		            $.jqAlert.close();
	        		    		        }
	        		    		    }]
	        		    		});
	        		        }
	        		    }]
	        		});
	        	}
	        }
	    });
}

function loadImage(url, callback) {
    var img = new Image();
    img.src = url;
    if(img.complete) {
        callback.call(img);
        return;
    }
    $(img).load(function () {
        callback.call(img);
    });
}



var dialAnimate = {
	    wrap:$("#dial-main"),
	    item:$(".dial-item",this.wrap),
	    animateTime:null,
	    minTime:5,
	    currTime:0,
	    currTimer:null,
	    selectId:null,
	    getAnimateTimer:null,
	    isShow:false,
	    animateOpt :{
	        len : $(".dial-item",this.wrap).length,
	        random:null,
	        newSrc:null,
	        oldSrc:null,
	        sel:null,
	        animateDelay:500
	    },
	    getAnimateTime:function(){

	        dialAnimate.getAnimateTimer = setInterval(function(){
	            if(dialAnimate.minTime > 0){
	                dialAnimate.minTime-=0.5;
	            }else if(dialAnimate.getAnimateTimer){
	                clearInterval(dialAnimate.getAnimateTimer);
	            }
	        },500);
	    },
	    animate:function(){
	        var oldTime = dialAnimate.animateOpt.animateDelay;
	            dialAnimate.animateOpt.random = Math.floor(Math.random()*dialAnimate.animateOpt.len);
	            dialAnimate.animateOpt.sel = $("> img",dialAnimate.item.eq( dialAnimate.animateOpt.random - 1));
	            dialAnimate.animateOpt.oldSrc = dialAnimate.animateOpt.sel.attr("src");
	            dialAnimate.animateOpt.newSrc = dialAnimate.animateOpt.oldSrc.replace("normal","active");
	            dialAnimate.item.each(function(){
	                var _img = $("> img",this);
	                if(_img.hasClass("active")){
	                    $(_img.removeClass("active").attr("src",_img.attr("src").replace("active","normal")));
	                }
	            });
	            dialAnimate.animateOpt.sel.addClass("active").attr("src",dialAnimate.animateOpt.newSrc);
	        if(dialAnimate.minTime >= 2.5){
	            if(Math.round(dialAnimate.animateOpt.animateDelay) > 100){
	                dialAnimate.animateOpt.animateDelay = Math.floor(dialAnimate.animateOpt.animateDelay - (oldTime * 0.2));
	            }
	        }else{
	            if(Math.round(dialAnimate.animateOpt.animateDelay) <= 500){
	                dialAnimate.animateOpt.animateDelay = Math.floor(dialAnimate.animateOpt.animateDelay + (oldTime * 0.2));
	            }
	        }
	        dialAnimate.animateTime = setTimeout(dialAnimate.animate,Math.round(dialAnimate.animateOpt.animateDelay))
	    },
	    show:function(speed){
	        if(dialAnimate.wrap.hasClass("dial-animate")) return;
	        dialAnimate.wrap.addClass("dial-animate");
	        dialAnimate.animateOpt.animateDelay = speed;
	        dialAnimate.animate();
	        dialAnimate.minTime = 5;
	        dialAnimate.getAnimateTime();
	        dialAnimate.isShow = true;
	    },
	    clear:function(){
	        if(!dialAnimate.isShow) return;
	        $("img.active",dialAnimate.wrap).attr("src",$("img.active",dialAnimate.wrap).attr("src").replace("active","normal"));
	        dialAnimate.wrap.removeClass("dial-animate");
	        if(dialAnimate.animateTime){
	            clearTimeout(dialAnimate.animateTime);
	        }
	        dialAnimate.isShow = false;
	    },
	    select:function(opt,callback,callbackDelay){
	        if(opt.id && dialAnimate.isShow){
	            function selectDelay(){
	                var chanceNum,
	                    selectDelayTimer,
	                    _callbackDelay = callbackDelay;
	                dialAnimate.selectId = $("*[data-dial-id="+ opt.id+"]");
	                if(dialAnimate.animateTime){
	                    clearTimeout(dialAnimate.animateTime);
	                }
	                dialAnimate.wrap.removeClass("dial-animate");
	                if($(opt.chanceNum).length){
	                    chanceNum = parseFloat($(opt.chanceNum).text());
	                    if(chanceNum > 1){
	                        $(opt.chanceNum).text(chanceNum - 1);
	                    }else{
	                        $("#dial-inner").addClass("share-qrcode-show");
	                        $("#dial-main").addClass("dial-animate");
	                    }
	                }
	                setTimeout(function(){
	                    if($("img.active",dialAnimate.wrap).length){
	                        $("img.active",dialAnimate.wrap).attr("src",$("img.active",dialAnimate.wrap).attr("src").replace("active","normal"));
	                    }
	                    $("> img",dialAnimate.selectId).addClass("active").attr("src",$("> img",dialAnimate.selectId).attr("src").replace("normal","active"));
	                    if(callback){
	                        if(_callbackDelay == undefined){
	                            _callbackDelay = 1200;
	                        }
	                        if(selectDelayTimer){
	                            clearTimeout(selectDelayTimer);
	                        }
	                        selectDelayTimer = setTimeout(callback,_callbackDelay);
	                    }
	                },400);
	                dialAnimate.isShow = false;
	            }
	            if(dialAnimate.minTime <= 5){
	                if(dialAnimate.getAnimateTimer){
	                    var minTimeTmp = dialAnimate.minTime;
	                    setTimeout(function(){
	                        selectDelay();
	                        clearInterval(dialAnimate.getAnimateTimer);
	                    },minTimeTmp*1000);
	                }
	            }else{
	                selectDelay();
	            }
	        }
	    }
	};
function showDesc(e,obj,fixed){
    if(arguments.length < 2){
        console.log("showDesc parameter error!");
        return;
    }
    var $obj = $(obj),
        btn = $(e);
    if($obj.length > 0 && !$obj.is(":animated")){
        $obj.slideToggle(200,function(){
            if(fixed){
                heightFixed('#flow-list');
            }
            $("body").animate({scrollTop:document.body.clientHeight - (document.body.clientHeight - $(".bottom-link").offset().top - $(".bottom-link").outerHeight())},200);
        });
        if(btn.length){
            btn.toggleClass("open-status");
        }
    }
}
function screenFixed(obj) {
    var $obj = $(obj);
    if ($obj.length > 0) {
        var sH = document.body.clientHeight,
            pH = $obj.outerHeight(true),
            pSize,
            overH;
        if (pH > sH) {
            overH = pH - sH;
            if (overH < 80) {
                pSize = 3;
                do {
                    $obj.css("padding", "0 " + (parseFloat($obj.css("padding-left")) + pSize) + "px");
                    $(".notify-wrap").css("margin","0 " + (-parseFloat($obj.css("padding-left"))) +"px 0.6rem");
                }
                while (($obj.outerHeight(true) - sH > 0));
            }

        }
    }
}
function heightFixed(obj,scrollBottom){
    var screenH = document.body.clientHeight,
        fixedTotal = 0,
        fixedItem = $(".height-fixed");
    if(fixedItem.length > 0){
        fixedItem.each(function(i,e){
            if($(e).is(":visible")){
                fixedTotal += $(e).outerHeight(true);
            }
        });
        if($(obj).length){
            $(obj).addClass("overflow-auto").css("height",screenH - fixedTotal);
        }
    }
    if(scrollBottom && ($(obj).height() < $(".scroll-content",$(obj)).outerHeight(true))){
        $(obj).animate({scrollTop:$(".scroll-content",$(obj)).outerHeight(true) - $(obj).height()},200)
    }
}
function getCode(e){
	
	var inputPhone =  $('.input-phone').val();
    if(inputPhone == "" ||inputPhone.length != 11){
    	$.jqAlert({
		    title:"确定"
		    ,content:"<p>亲，你输入的号码有误，请确认后再输。一定要用珠海移动的号码哟！</p>"
		    ,buttons:[{
		        "确定":function(){
		        	$.jqAlert({
		    		    title:"喵~请小主赐下号码，<br>小移好知道奖品要给谁啊~"
		    		    ,content:"<p><span class='input-title'>输入手机号:</span><span class='input-text-wrap'><input type='text' class='input-phone' placeholder='只限珠海移动用户哦!'/></span></p><p><span class='input-title'>输入验证码:</span><span class='input-text-wrap'><input type='text' class='input-code' placeholder='验证码'/><span class='get-code-btn' onclick='getCode(this)'>获取验证码</span></span></p>"
		    		    ,buttons:[{
		    		        "确定":function(){
		    		        	checkSignCode();
		    		        },
		    		        "取消":function(){
		    		            $.jqAlert.close();
		    		        }
		    		    }]
		    		});
		        }
		    }]
		});
		return ;
	}else{
		$.ajax({
	        url: common.getBaseUrl() + "utilControl/getYanzhengCode.do?inputPhone="+inputPhone,
	        type: "post",
	        asyne: true,
	        dataType: "json",
	        beforeSend:function(data){ 
	            $.loading();
	        }, 
	        error:function (data) {
	        	$.jqAlert({                                                                                                                                                                                
	        	    title:"确定"                                                                                                                                                           
	        	    ,content:"<p>系统服务器繁忙！</p>"
	        	    ,buttons:[{                                                                                                                                                            
	        	        "确定":function(){                                                                                                                                                 
	        	        	$.jqAlert.close();                                                                                                                                                                                                                                                                                     
	        	        }                                                                                                                                                                  
	        	    }]                                                                                                                                                                     
	        	}); 	
	        },
	        success: function (data) {
	        	 $.loading.hide();
	        	if(data.status == "1"){
	        		alert("不是珠海号码！");
	        	}else if(data.status == "0"){
	        		showTimeCount(e);
	        	}else if(data.status == "4"){
	        		alert("系统繁忙，请稍后再试。");
	        	}else if(data.status == "2"){
	        		showTimeCount(e);
	        	}
	        }
	    });
	}
}

function showTimeCount(e){
	var _this = $(e),
    txt = _this.html(),
    timer,
    t = 300;
if(!_this.hasClass("disabled")){
    _this.addClass("disabled");
    _this.html("60秒后获取");
    timer = setInterval(function(){
        if(!_this.hasClass("disabled")){
            _this.html(txt);
            clearInterval(timer);
            return;
        }
        t--;
        if(t > 0){
            if(t < 10){
                _this.html("0"+ t + "秒后获取");
            }else{
                _this.html(t + "秒后获取");
            }
        }else{
            _this.html(txt).removeClass("disabled");
            clearInterval(timer);
        }
    },1000)
}
}


!function($){
    $.fn.extend({
        notifyAnimate:function(opts){
            var _this = $(this),
                defaultOpt = {
                    items:"li",
                    speed:3500,
                    url:""
                },
                option,
                i = 1;
            option = $.extend(defaultOpt,opts);
            if(option.url != ""){
                $.ajax({
                    url:option.url,
                    async:false,
                    success:function(result){
                        var items = result.toString().split("\n");
                        _this.empty();
                        $.each(items,function(i,e){
                            if(e.length > 1){
                                _this.append("<li>"+e.trim()+"</li>");
                            }
                        });
                    }
                });
            }
            if(!$(option.items,_this).length) return;
            $(option.items,_this).eq(0).clone().appendTo(_this);
            var _animate = function(){
                var _items = $(option.items,_this),
                    itemH = _items.eq(0).outerHeight(true);
                    if(i < _items.length){
                        _this.stop(true).animate({top:parseFloat(_this.css("top"))-itemH},200);
                        i++;
                    }else{
                        _this.css("top",0);
                        i=2;
                        _this.stop(true).animate({top:-itemH},200);
                    }

            };
            setInterval(_animate,option.speed);
        }
    });
    $.jqAlert = function(opts){
        var _this = $.jqAlert,
            option,
            modal = $("<div class='alert-modal'></div>"),
            wrap,
            header,
            closeBtn,
            bottomBtn,
            center,
            footer,
            ad;
        _this.defaults = {
            title:"提示",
            content:"暂无内容~",
            buttons:[],
            appendTo:"body",
            animateTime:180
        };
        option = $.extend($.jqAlert.defaults,opts);
        _this._create = function(){
            wrap = $("<div class='alert-wrap'></div>");
            closeBtn = $("<span class='close-btn'></span>");
            header = $("<div class='header'><span class='title'>"+ option.title +"</span></div>");
            center = $("<div class='center'>"+ option.content +"</div>");
            footer = $("<div class='footer'></div>");
            closeBtn.on("click",function(){
                _this.close();
            }).appendTo(header);
            modal.empty().append(wrap.append(header).append(center));
            if(option.buttons.length){
                var btns = option.buttons,
                    arrThis;
                $.each(btns,function(i,e){
                    arrThis = e;
                    $.each(arrThis,function(j){
                        bottomBtn = $("<div class='footer-button default-btn'>"+ j +"</div>");
                        bottomBtn.on("click",arrThis[j]);
                        footer.append(bottomBtn);
                    });
                });
                wrap.append(footer);
            }
            if(option.adSrc && option.adSrc!=""){
                ad = $("<div class='ad-wrap'><div class='dot-line'><span class='dot'></span></div><a href='"+ option.adUrl +"'><img src='"+ option.adSrc +"'/></a></div>");
                wrap.append(ad);
            }
        };
        _this._isShow = function(){
            return $("body").find(".alert-modal").length > 0;
        };
        _this.show = function(){
            if(_this._isShow()){
                $(".alert-modal").remove();
            }
            _this._create();
            var _wrap = $(".alert-wrap",modal);
            _wrap.hide();
            modal.hide().appendTo($(option.appendTo)).stop(true).fadeIn(option.animateTime,function(){
                _wrap.stop(true).show(option.animateTime);
            });

        };
        _this.close = function(){
            if(_this._isShow()){
                var _modal = $(".alert-modal"),
                    _wrap = $(".alert-wrap",_modal);
                _wrap.stop(true).hide(option.animateTime,function(){
                    _modal.stop(true).fadeOut(option.animateTime,function(){
                        _modal.remove()
                    });
                });
            }
        };
        _this.show();
    };
    $.loading = function(){
        if($(".loading-modal").is(":visible")) return;
        var _this = $.loading,
            modal = $("<div class='loading-modal'></div>"),
            wrap = $("<div class='loading-wrap'></div>"),
            src = common.getBaseUrl()+"new2016/images/loading-img",
            tip = "加载中",
            text = $("<p>"+ tip +"</p>"),
            n = 1,
            j = 1,
            timer,
            speed = 350;
        _this.show = function(){
            if(n>2){
                n=1;
            }
            if(j>3){
                j=1;
                text.empty().text(tip);
            }
            j++;
            var img = $("<img src="+ src + (n++) +".gif />");
            $("body").append(modal.append(wrap.empty().append(img).append(text.append("."))));
        };
        _this.hide = function(){
            if(timer || modal){
                clearInterval(timer);
                modal.remove();
            }
        };
        _this.show();
        timer = setInterval(_this.show,speed);
    };
    $.prizeShow = function(url,callback){
        if($(".prize-modal").is(":visible")) return;
        var _this = $.prizeShow,
            modal = $("<div class='prize-modal'></div>"),
            wrap = $("<div class='prize-wrap'></div>"),
            prizeImg = $("<img src='"+ url +"'/>"),
            btn = $("<div class='prize-btn'>查看奖品</div>");
        modal.append(wrap.hide().append(prizeImg).append(btn)).appendTo($("body"));
        loadImage(url,function(){
            wrap.show(300);
        });
        btn.off().on("click",function(){
            if(callback){
                callback();
            }
        });
        _this.hide = function(){
            modal.remove();
        }
    };
    $.prizeDetailShow = function(obj){
        if($(".prize-detail-modal").is(":visible")) return;
        var _this = $.prizeDetailShow,
            modal = $("<div class='prize-detail-modal'></div>"),
            wrap = $("<div class='prize-main'></div>"),
            header ="<div class='prize-header'>"+ obj.title +"</div>",
            prizeImg = $("<a href='"+ obj.imgUrl +"'><img src='"+ obj.imgSrc +"' class='prize-img'/></a>"),
            btn = $("<div class='close-btn'></div>"),
            footer;
        modal.append(wrap.hide().append(btn).append(header).append(prizeImg)).appendTo($("body"));
        if(obj.linkText && obj.linkText != ""){
            footer = "<div class='prize-footer'><a href='javascript:;'>"+ obj.linkText +"</a></div>";
            wrap.append(footer);
            $(".prize-img",wrap).css("border-radius",0);
            if(obj.linkCallback){
                $(".prize-footer > a",wrap).off().on("click",eval("("+obj.linkCallback+")"));
            }
        }
        $("img",prizeImg).error(function(){
            console.log("读取奖品明细图片出错！");
            modal.remove();
        });
        loadImage(obj.imgSrc,function(){
            wrap.fadeIn(300);
        });
        btn.off().on("click",function(){
            _this.hide();
        });
        _this.hide = function(){
            modal.remove();
        }
    }
}(jQuery);


//判断是否在在规定区间内
var time_range = function (beginTime, endTime) {
	  var strb = beginTime.split (":");
	  if (strb.length != 2) {
	    return false;
	  }
	 
	  var stre = endTime.split (":");
	  if (stre.length != 2) {
	    return false;
	  }
	 
	  var b = new Date ();
	  var e = new Date ();
	  var n = new Date ();
	 
	  b.setHours (strb[0]);
	  b.setMinutes (strb[1]);
	  e.setHours (stre[0]);
	  e.setMinutes (stre[1]);
	 
	  if (n.getTime () - b.getTime () > 0 && n.getTime () - e.getTime () < 0) {
		  return true;
	  } else {
	    return false;
	  }
}

//adv_btn1
function adv_btn1(){
	window.location =common.getBaseUrl() + "BigWheelIndex/advbtn1.do";
//	alert(123);
//	$.ajax({
//        url: common.getBaseUrl() + "BigWheelIndex/advbtn1.do",
//        type: "get",
//        asyne: true,
//        dataType: "json",
//        beforeSend:function(data){ 
//            $.loading();
//        }, 
//        error:function (data) {
//        	
//        },
//        success: function (data) {}
//    });
}
function adv_btn2(){
	window.location ="http://www.zhg3.com:38078/zhuhai_cmzxt/new2015/taocan/4gswtc_new.html?MEAL_CLASS=%E6%B5%81%E9%87%8F%E7%89%B9%E6%83%A0%E5%8C%855%E6%8A%98&name=%E6%B5%81%E9%87%8F&brand=%E5%93%81%E7%89%8C%E9%80%9A%E7%94%A8&phoneKey="+phoneKey+"&qdcode=WXHBXTGL";
//	$.ajax({
//        url: common.getBaseUrl() + "BigWheelIndex/advbtn2.do",
//        type: "get",
//        asyne: true,
//        dataType: "json",
//        beforeSend:function(data){ 
//            $.loading();
//        }, 
//        error:function (data) {
//        	
//        },
//        success: function (data) {}
//    });
}
function adv_btn3(){
	window.location =common.getBaseUrl() + "BigWheelIndex/advbtn3.do";
//	$.ajax({
//        url: common.getBaseUrl() + "BigWheelIndex/advbtn3.do",
//        type: "get",
//        asyne: true,
//        dataType: "json",
//        beforeSend:function(data){ 
//            $.loading();
//        }, 
//        error:function (data) {
//        	
//        },
//        success: function (data) {}
//    });
}
//跳转营销方案
function toyingxiao(){
	window.location = common.getBaseUrl() + "BigWheelIndex/toyingxiao.do";
//	$.ajax({
//        url: common.getBaseUrl() + "BigWheelIndex/toyingxiao.do",
//        type: "post",
//        asyne: true,
//        dataType: "json",
//        beforeSend:function(data){ 
//            $.loading();
//        }, 
//        error:function (data) {
//        	
//        },
//        success: function (data) {}
//    });
}


//判断是否还有资格抽奖
function checkTotalChance(e){
	var chance = e;
	if(parseFloat(chance) <= 0){
		  $.jqAlert.close();
        $("#dial-inner").addClass("share-qrcode-show");
        $("#dial-main").addClass("dial-animate");
        var url = "http://www.zhg3.com/P/repeat/index.action?toUrl="+common.getBaseUrl()+"BigWheelIndex/fuliBusiness.do?actityId="+actityId+"&mobileno="+phone;
        var shortUrl = getShortUrl (url);
        $("#qrcode-wrap").empty().qrcode(shortUrl);
    }else{
    	$('#chance-num').html(chance);
    	$.jqAlert.close();
    }
}


function checkRqifsub(){
	if(rqifsub == "1"){
		return true;
	}
}

function showProduct(e){
	var totalChance = e.totalChance;
	var btnSre = "继续抽奖";
	var resourceId = e.resourceId;
	if(resourceId == "11990"){
		var testObj = {};
		testObj[btnSre] = function(){
        	checkTotalChance(totalChance);
        };
        testObj["中奖历史"] = function(){
        	if(rqifsub == "1"){
        		common.G(myProducturl);
        	}else{
        		common.G("http://www.zhg3.com/P/thiparpayrepeat/index.action?id=8a797ee6547a9b6601547b1572e40001");
        	}
        };
		$.jqAlert({
		    title:"恭喜抽中1G流量（有效期30天）！"
		    ,content:"<div style='text-align:left'>奖品将在24小时内存入“我的奖品”，请于30天内使用，如已关注“珠海移动”官方微信，请留意微信提醒；<br>您也可直接关注“珠海移动”官方微信，发送微信指令“大转盘”查询并使用奖品</div>"
		    ,buttons:[testObj]
		});
	}else if(resourceId == "11991"){
		var testObj = {};
		testObj[btnSre] = function(){
        	checkTotalChance(totalChance);
        };
        testObj["中奖历史"] = function(){
        	if(rqifsub == "1"){
        		common.G(myProducturl);
        	}else{
        		common.G("http://www.zhg3.com/P/thiparpayrepeat/index.action?id=8a797ee6547a9b6601547b1572e40001");
        	}
        };
		$.jqAlert({
		    title:"恭喜抽中1G流量（有效期7天）！"
		    ,content:"<div style='text-align:left'>奖品将在24小时内存入“我的奖品”，请于30天内使用，如已关注“珠海移动”官方微信，请留意微信提醒；<br>您也可直接关注“珠海移动”官方微信，发送微信指令“大转盘”查询并使用奖品</div>"
		    ,buttons:[testObj]
		});
	}else if(resourceId == "11992"){
		var testObj = {};
		testObj[btnSre] = function(){
        	checkTotalChance(totalChance);
        };
        testObj["中奖历史"] = function(){
        	if(rqifsub == "1"){
        		common.G(myProducturl);
        	}else{
        		common.G("http://www.zhg3.com/P/thiparpayrepeat/index.action?id=8a797ee6547a9b6601547b1572e40001");
        	}
        };
		$.jqAlert({
		    title:"恭喜抽中1G流量（有效期4小时）！"
		    ,content:"<div style='text-align:left'>奖品将在24小时内存入“我的奖品”，请于30天内使用，如已关注“珠海移动”官方微信，请留意微信提醒；<br>您也可直接关注“珠海移动”官方微信，发送微信指令“大转盘”查询并使用奖品</div>"
		    	 ,buttons:[testObj]
		});
	}else if(resourceId == "12230"){
		var testObj = {};
		testObj[btnSre] = function(){
        	checkTotalChance(totalChance);
        };
        testObj["中奖历史"] = function(){
        	if(rqifsub == "1"){
        		common.G(myProducturl);
        	}else{
        		common.G("http://www.zhg3.com/P/thiparpayrepeat/index.action?id=8a797ee6547a9b6601547b1572e40001");
        	}
        };
		$.jqAlert({
		    title:"恭喜抽中300M流量叠加包！"
		    ,content:"<div style='text-align:left'>奖品将在24小时内存入“我的奖品”，请于30天内使用，如已关注“珠海移动”官方微信，请留意微信提醒；<br>您也可直接关注“珠海移动”官方微信，发送微信指令“大转盘”查询并使用奖品</div>"
		    	 ,buttons:[testObj]
		});
	}else if(resourceId == "11995"){
		var testObj = {};
		testObj[btnSre] = function(){
        	checkTotalChance(totalChance);
        };
        testObj["中奖历史"] = function(){
        	if(rqifsub == "1"){
        		common.G(myProducturl);
        	}else{
        		common.G("http://www.zhg3.com/P/thiparpayrepeat/index.action?id=8a797ee6547a9b6601547b1572e40001");
        	}
        };
		$.jqAlert({
		    title:"恭喜抽中100M流量叠加包！"
		    ,content:"<div style='text-align:left'>奖品将在24小时内存入“我的奖品”，请于30天内使用，如已关注“珠海移动”官方微信，请留意微信提醒；<br>您也可直接关注“珠海移动”官方微信，发送微信指令“大转盘”查询并使用奖品</div>"
		    	 ,buttons:[testObj]
		});
	}else if(resourceId == "11996"){
		var testObj = {};
		testObj[btnSre] = function(){
        	checkTotalChance(totalChance);
        };
        testObj["中奖历史"] = function(){
        	if(rqifsub == "1"){
        		common.G(myProducturl);
        	}else{
        		common.G("http://www.zhg3.com/P/thiparpayrepeat/index.action?id=8a797ee6547a9b6601547b1572e40001");
        	}
        };
		$.jqAlert({
		    title:"恭喜抽中100M（1小时有效）！"
		    ,content:"<div style='text-align:left'>奖品将在24小时内存入“我的奖品”，请于30天内使用，如已关注“珠海移动”官方微信，请留意微信提醒；<br>您也可直接关注“珠海移动”官方微信，发送微信指令“大转盘”查询并使用奖品</div>"
		    	 ,buttons:[testObj]
		});
	}else if(resourceId == "12200"){
		var testObj = {};
		testObj[btnSre] = function(){
        	checkTotalChance(totalChance);
        };
        testObj["查看流量币"] = function(){
        	if(rqifsub == "1"){
        		common.G(myCoinurl);
        	}else{
        		common.G("http://www.zhg3.com/P/thiparpayrepeat/index.action?id=8a797ee6547a9b6601547b1572e40001");
        	}
        	
        };
		$.jqAlert({
		    title:"恭喜您抽中50个流量币！"
		    ,content:"<div style='text-align:left'>你的流量币将于24小时到账<br>你可不要小看50个流量币呦！<br>满100个即可兑换100M流量叠加包或1G流量（4小时）哒！</div>"
		    	 ,buttons:[testObj]
		});
	}else if(resourceId == "12150"){
		var testObj = {};
		testObj[btnSre] = function(){
        	checkTotalChance(totalChance);
        };
        testObj["查看流量币"] = function(){
        	if(rqifsub == "1"){
        		common.G(myCoinurl);
        	}else{
        		common.G("http://www.zhg3.com/P/thiparpayrepeat/index.action?id=8a797ee6547a9b6601547b1572e40001");
        	}
        };
		$.jqAlert({
		    title:"恭喜您抽中10个流量币！"
		    ,content:"<div style='text-align:left'>你的流量币将于24小时到账<br>你可不要小看10个流量币呦！<br>满100个可兑换100M流量叠加包或1G流量（4小时）哒！</div>"
		    	 ,buttons:[testObj]
		});
	}else if(resourceId == "12270"){
		var testObj = {};
		testObj[btnSre] = function(){
        	checkTotalChance(totalChance);
        };
        testObj["查看流量币"] = function(){
        	if(rqifsub == "1"){
        		common.G(myCoinurl);
        	}else{
        		common.G("http://www.zhg3.com/P/thiparpayrepeat/index.action?id=8a797ee6547a9b6601547b1572e40001");
        	}
        };
		$.jqAlert({
		    title:"恭喜您抽中20个流量币！"
		    ,content:"<div style='text-align:left'>你的流量币将于24小时到账<br>你可不要小看20个流量币呦！<br>满100个可兑换100M流量叠加包或1G流量（4小时）哒！</div>"
		    	 ,buttons:[testObj]
		});
	}else if(resourceId == "12250"){
		var testObj = {};
		testObj[btnSre] = function(){
        	checkTotalChance(totalChance);
        };
        testObj["立即办理"] = function(){
        	//common.G("http://wap.zhg3.com/ydsc/gift4g/index.htm");
        	toyingxiao();
        };
		$.jqAlert({
		    title:"恭喜您获得100元话费+3个G免费流量"
		    ,content:"<div style='text-align:left'>登记参加活动即可获取100元话费+3个G免费流量，快去领取吧！</br>• 话费与流量将于产生4G网络流量次月开始赠送，请留意领奖界面活动规则；<br>• 本优惠限领取一次，如在其他渠道已办理，则不可重复领取。</br>• 如稍后办理，可至“珠海移动”微信，发送“大转盘”查看办理</div>"
		    	 ,buttons:[testObj]
		});
	}else if(resourceId == "12194"){
		var testObj = {};
		testObj[btnSre] = function(){
        	checkTotalChance(totalChance);
        };
        testObj["马上领取"] = function(){
        	
        	common.G(myProducturl);
        };
		$.jqAlert({
		    title:"水果"
		    ,content:"<div style='text-align:left'>恭喜您获得价值56元甜蜜丽人（西班牙脐橙4粒+海南珍珠蜜蜂瓜1个）一份</div>"
		    	 ,buttons:[testObj]
		});
	}else if(resourceId == "12190"){
		var testObj = {};
		testObj[btnSre] = function(){
        	checkTotalChance(totalChance);
        };
        testObj["马上领取"] = function(){
        	common.G("http://benlai.com/E7FRFz");
        };
		$.jqAlert({
		    title:"恭喜您抽中1克黄金金牌"
		    ,content:"<div style='text-align:left'>点击“立即领奖”后的弹窗内容奖品验证码已短信方式发送至您中奖手机号码，请于2016年5月31日前凭手机及验证码到泰锋前山店领取！<br>地址：前山明珠南路2021号第5栋<br>营业时间：10：00-19：00</div>"
		    	 ,buttons:[testObj]
		});
	}else if(resourceId == "12291"){
		var testObj = {};
		testObj[btnSre] = function(){
        	checkTotalChance(totalChance);
        };
        testObj["中奖历史"] = function(){
        	common.G(myProducturl);
        };
		$.jqAlert({
		    title:"恭喜您获得西班牙橙子6个"
		    ,content:"<div style='text-align:left'>奖品优惠券将于24小时内存入“我的奖品”，请于2016年5月31日前使用。<br>您也可关注“珠海移动”官方微信，发送微信指令“大转盘”查看及使用奖品优惠券。</div>"
		    	 ,buttons:[testObj]
		});
	}else if(resourceId == "54321"){
		
		var testObj = {};
		testObj[btnSre] = function(){
        	checkTotalChance(totalChance);
        };
        testObj["查看奖品"] = function(){
        	if(rqifsub == "1"){
        		common.G(myProducturl);
        	}else{
        		common.G("http://www.zhg3.com/P/thiparpayrepeat/index.action?id=8a797ee6547a9b6601547b1572e40001");
        	}
        };
		$.jqAlert({
		    title:"还差一点"
		    ,content:"<h1>很遗憾，就差一点点</h1>"
		    ,buttons:[testObj]
		});
	}else if(resourceId == "12251"){
		var testObj = {};
		testObj[btnSre] = function(){
        	checkTotalChance(totalChance);
        };
        testObj["立即办理"] = function(){
        	//common.G("http://wap.zhg3.com/cmcc/baozhuang.htm");
        	toyingxiao();
        };
		$.jqAlert({
			title:"恭喜您获得免费试用一年宽带资格",
			content:"<div style='text-align:left'>您最近正在使用58元以上套餐（含58元套餐），可获免费试用一年12M宽带资格，报装成功后还可额外获赠1G免费手机流量（有效期7天）。" +
					"<br>• 需承诺使用4G套餐12个月" +
					"<br>• 赠送流量到账后将有短信提醒" +
					"<br>• 本优惠限新装客户享受，已安装宽带客户仅赠送1G流量" +
					"<br>• 如已办理“套餐5折”方案则不可享受本优惠，登记办理无效" +
					"<br>• 如稍后办理，可至“珠海移动”微信，发送“大转盘”查看办理</div>"
					 ,buttons:[testObj]
		});
	}else if(resourceId == "12252"){
		var testObj = {};
		testObj[btnSre] = function(){
        	checkTotalChance(totalChance);
        };
        testObj["立即办理"] = function(){
        //	common.G("http://wap.zhg3.com/cmcc/baozhuang.htm");
        	toyingxiao();
        };
		$.jqAlert({
			title:"恭喜您获得免费试用一年宽带资格",
			content:"<div style='text-align:left'>您最近正在使用88元以上套餐（含88元套餐），可获免费试用一年20M宽带资格，报装成功后还可额外获赠1G免费手机流量（有效期7天）。" +
					"<br>• 需承诺使用4G套餐12个月" +
					"<br>• 赠送流量到账后将有短信提醒" +
					"<br>• 本优惠限新装客户享受，已安装宽带客户仅赠送1G流量" +
					"<br>• 如已办理“套餐5折”方案则不可享受本优惠，登记办理无效" +
					"<br>• 如稍后办理，可至“珠海移动”微信，发送“大转盘”查看办理</div>"
					 ,buttons:[testObj]
		});
	}else if(resourceId == "12253"){
		var testObj = {};
		testObj[btnSre] = function(){
        	checkTotalChance(totalChance);
        };
        testObj["立即办理"] = function(){
        //	common.G("http://wap.zhg3.com/cmcc/baozhuang.htm");
        	toyingxiao();
        };
		$.jqAlert({
			title:"恭喜您获得免费试用一年宽带资格",
			content:"<div style='text-align:left'>您最近正在使用128元以上套餐（含128元套餐），可获免费试用一年50M宽带资格，报装成功后还可额外获赠1G免费手机流量（有效期7天）。" +
					"<br>• 需承诺使用4G套餐12个月" +
					"<br>• 赠送流量到账后将有短信提醒" +
					"<br>• 本优惠限新装客户享受，已安装宽带客户仅赠送1G流量" +
					"<br>• 如已办理“套餐5折”方案则不可享受本优惠，登记办理无效" +
					"<br>• 如稍后办理，可至“珠海移动”微信，发送“大转盘”查看办理</div>"
					 ,buttons:[testObj]
		});
	}else if(resourceId == "12254"){
		var testObj = {};
		testObj[btnSre] = function(){
        	checkTotalChance(totalChance);
        };
        testObj["立即办理"] = function(){
        	//common.G("http://wap.zhg3.com/cmcc/baozhuang.htm");
        	toyingxiao();
        };
		$.jqAlert({
			title:"恭喜您获得免费试用一年宽带资格",
			content:"<div style='text-align:left'>您最近正在使用158元以上套餐（含158元套餐），可获免费试用一年100M宽带资格，报装成功后还可额外获赠1G免费手机流量（有效期7天）。" +
					"<br>• 需承诺使用4G套餐12个月" +
					"<br>• 赠送流量到账后将有短信提醒" +
					"<br>• 本优惠限新装客户享受，已安装宽带客户仅赠送1G流量" +
					"<br>• 如已办理“套餐5折”方案则不可享受本优惠，登记办理无效" +
					"<br>• 如稍后办理，可至“珠海移动”微信，发送“大转盘”查看办理</div>"
					 ,buttons:[testObj]
		});
	}else if(resourceId == "12255"){
		var testObj = {};
		testObj[btnSre] = function(){
        	checkTotalChance(totalChance);
        };
        testObj["立即办理"] = function(){
        	var url = "http://www.zhg3.com:38078/zhuhai_cmzxt/new2015/youhuiNew/huafei.html?onclickyhhfname=%E5%85%A8%E5%93%81%E7%89%8C%E2%80%9C%E5%AD%98%E4%B8%80%E5%BE%97%E4%B8%89%E2%80%9D";
        	common.G(url);
        };
		$.jqAlert({
			title:"恭喜您获得存话费送话费优惠资格",
			content:"<div style='text-align:left'>现在存100元可得300元话，存150可得450元话费，多存多送，最高可得1800元话费，快领取吧！" +
			        "<br>• 本优惠限领取一次，如在其他渠道已办理，则不可重复领取。" +
					"<br>• 如稍后办理，可至“珠海移动”微信，发送“大转盘”查看办理</div>"
			 ,buttons:[testObj]
		});
	}else if(resourceId == "137240"){
		var title = "恭喜您抽中"+e.moneyNumber+"元话费红包！";
		var testObj = {};
		var content = "";
		testObj[btnSre] = function(){
        	checkTotalChance(totalChance);
        };
        if(rqifsub == "1"){
        	testObj["查看奖品"] = function(){
            		window.location =common.getBaseUrl() + "BigWheelIndex/userAccountPage.do";
            };
            content = "<div style='text-align:left'>话费将在72小时内存入您中奖手机账户，到账后会收到短信通知；" +
						"<br>如已关注“珠海移动”官方微信，发送微信指令“大转盘”查询话费红包。</div>";
        }else{
        	testObj["立即领取"] = function(){
        		common.G("http://www.zhg3.com/P/thiparpayrepeat/index.action?id=8a797ee6547a9b66015499c462ed34c9");
	        };
	        content = "<div style='text-align:left'>您可以立即领取，或者进入“珠海移动”官方微信，点击“大转盘”-“我的福利”-“话费红包”领取！" ;
	    }
       
		$.jqAlert({
			title:title,
			content:content
			 ,buttons:[testObj]
		});
	}else if(resourceId == "12310"){
		var testObj = {};
		testObj[btnSre] = function(){
        	checkTotalChance(totalChance);
        };
        testObj["立即办理"] = function(){
        	if(rqifsub == "1"){
        		window.location =common.getBaseUrl() + "BigWheelIndex/advbtn1.do";
        		//common.G(myProducturl);
        	}else{
        		common.G("http://www.zhg3.com/P/thiparpayrepeat/index.action?id=8a797ee6547a9b66015499c462ed34c9");
        	}
        };
		$.jqAlert({
			title:"恭喜您获得办理全年套餐5折资格！",
			content:"<div style='text-align:left'>• 办理指定4G套餐且每月产生4G流量，可以获得12个月套餐话费赠送（赠送后月套餐费低至5折）；" +
					"<br>• 如稍后办理，可至“珠海移动”微信，发送“大转盘”查看办理。</div>"
			 ,buttons:[testObj]
		});
	}else if(resourceId == "12451"){
		var testObj = {};
		testObj[btnSre] = function(){
        	checkTotalChance(totalChance);
        };
        testObj["立即办理"] = function(){
        	if(rqifsub == "1"){
        		window.location =common.getBaseUrl() + "BigWheelIndex/advbtn1.do";
        		//common.G(myProducturl);
        	}else{
        		common.G("http://www.zhg3.com/P/thiparpayrepeat/index.action?id=8a797ee6547a9b66015499c462ed34c9");
        	}
        };
		$.jqAlert({
			title:"恭喜您获得办理套餐5折资格！",
			content:"<div style='text-align:left'>• 办理指定4G套餐且每月产生4G流量，可以获得6个月套餐话费赠送（赠送后月套餐费低至5折）；" +
					"<br>• 如稍后办理，可至“珠海移动”微信，发送“大转盘”查看办理；</div>"+
					"<br>• 已办理手机宽带优惠的客户不能享受本优惠。</div>"
			 ,buttons:[testObj]
		});
	}else if(resourceId == "12491"){
		var testObj = {};
		testObj[btnSre] = function(){
        	checkTotalChance(totalChance);
        };
        testObj["了解商品"] = function(){
        	if(rqifsub == "1"){
        		window.location ="http://www.zhg3.com/P/thiparpayrepeat/index.action?id=8a797ee6551047dc01551447afe8033d";
        		//common.G(myProducturl);
        	}else{
        		common.G("http://www.zhg3.com/P/thiparpayrepeat/index.action?id=8a797ee6547a9b66015499c462ed34c9");
        	}
        };
		$.jqAlert({
			title:"恭喜您获得2000元碧水源净水器D525W代金券一张",
			adSrc:common.getBaseUrl() +"new2016/images/alert-ad-6.jpg",
			adUrl:"#",
			content:"<div style='text-align:left'>奖品优惠将于24小时内存入“我的奖品”，请于2016年7月31日前使用。购买成功后还可获得400元话费。" +
					"<br>您也可关注“珠海移动”官方微信，发送指令“大转盘”查看及使用奖品优惠券。</div>"
			 ,buttons:[testObj]
		});
	}else if(resourceId == "12490"){
		var testObj = {};
		testObj[btnSre] = function(){
        	checkTotalChance(totalChance);
        };
        testObj["了解商品"] = function(){
        	if(rqifsub == "1"){
        		window.location ="http://www.zhg3.com/P/thiparpayrepeat/index.action?id=8a797ee6551047dc01551446a5f2033c";
        		//common.G(myProducturl);
        	}else{
        		common.G("http://www.zhg3.com/P/thiparpayrepeat/index.action?id=8a797ee6547a9b66015499c462ed34c9");
        	}
        };
		$.jqAlert({
			title:"恭喜您获得佳沛奇异果（6个）",
			content:"<div style='text-align:left'>奖品优惠将于24小时内存入“我的奖品”，请于2016年6月30日前使用。"+
					"<br> 您也可关注“珠海移动”官方微信，发送指令“大转盘”查看及使用奖品优惠券。</div>"
			 ,buttons:[testObj]
		});
	}
}


function faq(){
	common.G("http://mp.weixin.qq.com/s?__biz=MjM5MDE4NjI2NQ==&mid=511738506&idx=1&sn=3c0626f3bac80db36b0ecd486593a2d8#rd");
}


function giveBiShuiYuanQuan(){
	window.location =common.getBaseUrl() + "BigWheelIndex/giveBiShuiYuanQuan.do";
}



