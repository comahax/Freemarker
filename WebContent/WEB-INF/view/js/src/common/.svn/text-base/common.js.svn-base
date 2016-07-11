/*
PWOER By XUBAOJIAN AT 2016/1/29
基础页面公共脚本封装
*/
        var common = {
            //跳转url
            G: function(url) {
                location.href = url;
            },
            getHttpParam: function (name) {

            	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
            	var r = window.location.search.substr(1).match(reg); 
            	if (r != null) return unescape(r[2]); 
            	return null; 
            },
            GetRequestObject: function() { 
            	var url = location.search; //获取url中"?"符后的字串 
            	var theRequest = new Object(); 
            	if (url.indexOf("?") != -1) { 
	            	var str = url.substr(1); 
	            	strs = str.split("&"); 
	            	for(var i = 0; i < strs.length; i ++) { 
	            		theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]); 
	            	} 
            	} 
            	return theRequest; 
            },
            GetRequestStr: function() { 
            	var str = window.location.search; //获取url中"?"符后的字串 包含？
            	
            	return str; 
            },
            strToObject: function (str) {
                return JSON.parse(str);
            },
            //对象转json字符串
            objectToStr: function (obj) {
                return JSON.stringify(obj);
            },
			getBaseUrl:function(){
				return "http://"+window.location.host+"/fuliclient/";
			},
			getNginxUrl:function(){
				return "http://"+window.location.host+"/";
			},
			getNewBaseUrl:function(){
				return "http://"+window.location.host+"/";
			},
			getImgUrl:function(){
				return "http://"+window.location.host;
			},
			//设cookie值
			setCookie:function(key,value){
				sys.setStorage(key,value);
			 },
			//取cookie
			getCookie:function(key){
				return sys.getStorage(key);
			},
			//删除cookie
			removeCookie:function(key){
				sys.removeStorage(key)
			},
			//本地存储
			setStorage:function(key,value){
				var storage = window.localStorage;
				if(storage){
				}else{
				  sys.logMsg("getStorage","window.localStorage is null");
				  return ;
				}
				storage.setItem(key,value);
			},
			//删除存储
			removeStorage:function(key){
				var storage = window.localStorage;
				if(storage){
				}else{
				  sys.logMsg("getStorage","window.localStorage is null");
				  return ;
				}
				storage.removeItem(key);
			},
			//读本地存储
			getStorage:function(key){
				var storage = window.localStorage;
				if(storage){
				}else{
				  sys.logMsg("getStorage","window.localStorage is null");
				  return ;
				}
				return storage.getItem(key);
			},
			//显示loading
			showLoad:function(text){
				var txt = text||"";
				this.showLayer('<div class="loader-wrap"><div class="loader-inner line-spin-fade-loader"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>'+txt+'</div>',false,true,null,false);
			},
			hideLoad:function(){
				this.hideLayer();	
			},
			
			tips:function(txt,clickCallBack){
				var temp = '<div class="tips-box">'
							+'<div class="h1em"></div>'
							+'<div class="t1 fem-15 text-center lh-17">'
							+txt
							+'</div>'
							+'<div class="h2em"></div>'
							+'<div class="text-center more-tips-btn">'
							+'<a href="javascript" class="tips-btn" onclick="common.hideLayer()" id="tips-box-ok"><img src="'+common.getBaseUrl()+'new2016/images/box_btn_1.png"></a>'
							+'</div>'
							+'</div>';
							
				this.showLayer(temp,false,true,function(){
					$("#tips-box-ok").one("click",function(){
						typeof clickCallBack =="function" &&clickCallBack();
					});	
				},true,true,clickCallBack)
				
			},
			
			
			
			//显示分享提示
			showShare:function(){
				if(this.showShare==true){
					this.hideLayer();
				}else{
					this.showLayer("<div class='shareimg'><img src='../images/share.png'></div>",0,1,function(){
							$(".shareimg").one('click',function(){
								common.hideLayer();
							})
					},true,false)
				}
				
			},
			showLayer:function(html,isDom,isShowBg,callback,isClickBgHide,middle,clickCallback){
				var bgClass = "fixedlayer-hasbg";
				var isClickBgHide = typeof isClickBgHide==undefined?true:isClickBgHide;
				var middle = typeof middle == "undefined"?true:middle;
				
				if(!$("#fixedlayer")[0]){
					$("body").append("<div class='fixedlayerbg' id='fixedlayerbg'></div><div class='fixedlayer' id='fixedlayer'><div class='fixedlayer-content' id='fixedlayer-content'></div></div>");
				}
				if(!this.fixedContent){
					this.fixedLay = $("#fixedlayer");
					this.fixedLayBg = $("#fixedlayerbg");
					this.fixedContent = $("#fixedlayer-content");
				}
				if(isDom){
					var html = $(html).html();
				}
				if(this.LayerTime){
					clearTimeout(this.LayerTime);
				}
				if(isShowBg){
					this.fixedLayBg.addClass(bgClass);
				}else{
					this.fixedLayBg.removeClass(bgClass);
				}
				//如果居中
				if(!middle){
					this.fixedContent.addClass("no-midle");
				}else{
					this.fixedContent.removeClass("no-midle");	
				}
				
				this.fixedContent.html(html).on("click",function(){
					return false;	
				});
				typeof callback == "function" && callback();
				this.fixedLay.show().removeClass("zoomOut animated").addClass("zoomIn animated");
				this.fixedLayBg.show().removeClass("fadeOut animated").addClass("fadeIn animated");
				if(isClickBgHide){
					this.fixedLay.off("click").one("click",function(){
						common.hideLayer();	
						setTimeout(function(){
						typeof clickCallback == "function" && clickCallback();
						},300)
					});
				}
			},
			hideLayer:function(){
					try{
				var self = this;
				this.fixedLay.addClass("zoomOut animated");
				this.fixedLayBg.addClass("fadeOut animated");
				this.LayerTime = setTimeout(function(){
					self.fixedLay.hide();
					self.fixedLayBg.hide();
				},300);
				}catch(e){
					
				}
			},
			toggleDiv:function(div){
				$(div).toggle();
			},
			toggleClass:function(div,className){
				$(div).toggleClass(className);	
			}
		}

window.common = window.sys = common;
