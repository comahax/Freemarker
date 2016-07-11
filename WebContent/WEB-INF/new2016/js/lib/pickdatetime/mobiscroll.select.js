!function($,a){var b=$.mobiscroll,c=b.util,d=c.isString,e={inputClass:"",invalid:[],rtl:!1,showInput:!0,group:!1,groupLabel:"Groups",checkIcon:"checkmark",dataText:"text",dataValue:"value",dataGroup:"group",dataDisabled:"disabled"};b.presetShort("select"),b.presets.scroller.select=function(b){function f(){var b,c,d,e,f,g=0,h={};r=[],J?$.each(I,function(i,j){e=j[y.dataText],f=j[y.dataValue],c=j[y.dataGroup],d={value:f,text:e},R[f]=d,r.push(d),K&&(h[c]===a?(b={label:c,options:[]},S[g]=b,h[c]=g,g++):b=S[h[c]],d.group=h[c],b.options.push(d)),j[y.dataDisabled]&&P.push(f)}):K?$("optgroup",B).each(function(a){S[a]={label:this.label,options:[]},$("option",this).each(function(){d={value:this.value,text:this.text,group:a},R[this.value]=d,S[a].options.push(d),this.disabled&&P.push(this.value)})}):$("option",B).each(function(){d={value:this.value,text:this.text},R[this.value]=d,r.push(d),this.disabled&&P.push(this.value)})}function g(a,b,c){$.each(a,function(a,d){c.push(d.text),b.push(d.value)})}function h(){var a,b=0,c=[],d=[],e=[[]];return M&&($.each(S,function(a,b){c.push(b.label),d.push(a)}),a={values:c,keys:d,label:y.groupLabel},A?e[0][b]=a:e[b]=[a],b++),c=[],d=[],N?$.each(S,function(a,b){c.push(b.label),d.push("__group"+a),P.push("__group"+a),g(b.options,d,c)}):g(M?S[n].options:r,d,c),a={multiple:C,values:c,keys:d,label:F},A?e[0][b]=a:e[b]=[a],e}function i(b){C&&$.isArray(b)&&(b=b[0]),t=b===a||null===b||""===b?L:b,M&&(n=R[t].group)}function j(a,c){var d=a?b._tempWheelArray:b._hasValue?b._wheelArray:null;return d?y.group&&c?d:d[s]:null}function k(){var a,b,c=[],d=0;if(C){b=[];for(d in Q)c.push(R[d]?R[d].text:""),b.push(d);a=c.join(", ")}else b=t,a=R[t]?R[t].text:"";q.val(a),B.val(b)}function l(a){var b=a.attr("data-val"),c=a.hasClass("dw-msel");return C&&a.closest(".dwwl").hasClass("dwwms")?(a.hasClass("dw-v")&&(c?(a.removeClass(G).removeAttr("aria-selected"),delete Q[b]):(a.addClass(G).attr("aria-selected","true"),Q[b]=b)),!1):void 0}var m,n,o,p,q,r,s,t,u,v,w,x=$.extend({},b.settings),y=$.extend(b.settings,e,x),z=y.layout||(/top|bottom/.test(y.display)?"liquid":""),A="liquid"==z,B=$(this),C=y.multiple||B.prop("multiple"),D=this.id+"_dummy",E=$('label[for="'+this.id+'"]').attr("for",D),F=y.label!==a?y.label:E.length?E.text():B.attr("name"),G="dw-msel mbsc-ic mbsc-ic-"+y.checkIcon,H=y.readonly,I=y.data,J=!!I,K=J?I[0][y.dataGroup]:$("optgroup",B).length,L=J?I[0][y.dataValue]:$("option",B).attr("value"),M=K&&y.group,N=K&&!M,O=B.val()||[],P=[],Q={},R={},S={};if(y.invalid.length||(y.invalid=P),M?(o=0,s=1):(o=-1,s=0),C)for(O&&d(O)&&(O=O.split(",")),p=0;p<O.length;p++)Q[O[p]]=O[p];return f(),i(B.val()),$("#"+D).remove(),q=$('<input type="text" id="'+D+'" class="'+y.inputClass+'" placeholder="'+(y.placeholder||"")+'" readonly />'),y.showInput&&q.insertBefore(B),b.attachShow(q),B.addClass("dw-hsel").attr("tabindex",-1).closest(".ui-field-contain").trigger("create"),k(),b.setVal=function(a,e,f,g,h){C&&(a&&d(a)&&(a=a.split(",")),Q=c.arrayToObject(a),a=a?a[0]:null),b._setVal(a,e,f,g,h)},b.getVal=function(a,b){return C?c.objectToArray(Q):j(a,b)},b.getValues=b.getVal,b.getValue=j,{width:50,layout:z,headerText:!1,anchor:q,formatResult:function(a){var b,c=[];if(C){for(b in Q)c.push(R[b]?R[b].text:"");return c.join(", ")}return t=a[s],R[t]?R[t].text:""},parseValue:function(b){return i(b===a?B.val():b),M?[n,t]:[t]},onValueTap:l,onValueFill:k,onBeforeShow:function(){C&&y.counter&&(y.headerText=function(){var a=0;return $.each(Q,function(){a++}),a+" "+y.selectedText}),i(B.val()),M&&(v=n,b._tempWheelArray=[n,t]),f(),y.wheels=h()},onMarkupReady:function(a){a.addClass("dw-select"),$(".dwwl"+o,a).on("mousedown touchstart",function(){clearTimeout(w)}),N&&($(".dw",a).addClass("dw-select-gr"),$('.dw-li[data-val^="__group"]',a).addClass("dw-w-gr")),C&&(a.addClass("dwms"),$(".dwwl",a).on("keydown",function(a){32==a.keyCode&&(a.preventDefault(),a.stopPropagation(),l($(".dw-sel",this)))}).eq(s).addClass("dwwms").attr("aria-multiselectable","true"),u=$.extend({},Q))},validate:function(c,d,e){var f,g,i=b.getArrayVal(!0),j=$(".dw-ul",c).eq(s);if(d===a&&C){g=Q,f=0,$(".dwwl"+s+" .dw-li",c).removeClass(G).removeAttr("aria-selected");for(f in g)$(".dwwl"+s+' .dw-li[data-val="'+g[f]+'"]',c).addClass(G).attr("aria-selected","true")}if(!M||d!==a&&d!==o)t=i[s];else if(n=+i[o],n!==v){if(t=S[n].options[0].value,y.wheels=h(),!m)return b._tempWheelArray=[n,t],y.readonly=[!1,!0],clearTimeout(w),w=setTimeout(function(){m=!0,v=n,b.changeWheel([s],a,!0),y.readonly=H},1e3*e),!1}else y.readonly=H;$.each(y.invalid,function(a,b){$('.dw-li[data-val="'+b+'"]',j).removeClass("dw-v")}),m=!1},onClear:function(a){Q={},q.val(""),$(".dwwl"+s+" .dw-li",a).removeClass(G).removeAttr("aria-selected")},onCancel:function(){!b.live&&C&&(Q=$.extend({},u))},onDestroy:function(){q.remove(),B.removeClass("dw-hsel").removeAttr("tabindex")}}}}(jQuery);