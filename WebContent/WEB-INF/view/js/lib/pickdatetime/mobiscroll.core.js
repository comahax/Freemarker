!function($,a){function b(b){var c;for(c in b)if(h[b[c]]!==a)return!0;return!1}function c(){var a,c=["Webkit","Moz","O","ms"];for(a in c)if(b([c[a]+"Transform"]))return"-"+c[a].toLowerCase()+"-";return""}function d(b,c,d){var g=b;return"object"==typeof c?b.each(function(){this.id||(this.id="mobiscroll"+ ++e),f[this.id]&&f[this.id].destroy(),new $.mobiscroll.classes[c.component||"Scroller"](this,c)}):("string"==typeof c&&b.each(function(){var b,e=f[this.id];return e&&e[c]&&(b=e[c].apply(this,Array.prototype.slice.call(d,1)),b!==a)?(g=b,!1):void 0}),g)}var e=+new Date,f={},g=$.extend,h=document.createElement("modernizr").style,i=b(["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"]),j=b(["flex","msFlex","WebkitBoxDirection"]),k=c(),l=k.replace(/^\-/,"").replace(/\-$/,"").replace("moz","Moz");$.fn.mobiscroll=function(a){return g(this,$.mobiscroll.components),d(this,a,arguments)},$.mobiscroll=$.mobiscroll||{version:"2.14.4",util:{prefix:k,jsPrefix:l,has3d:i,hasFlex:j,testTouch:function(a,b){if("touchstart"==a.type)$(b).attr("data-touch","1");else if($(b).attr("data-touch"))return $(b).removeAttr("data-touch"),!1;return!0},objectToArray:function(a){var b,c=[];for(b in a)c.push(a[b]);return c},arrayToObject:function(a){var b,c={};if(a)for(b=0;b<a.length;b++)c[a[b]]=a[b];return c},isNumeric:function(a){return a-parseFloat(a)>=0},isString:function(a){return"string"==typeof a},getCoord:function(a,b){var c=a.originalEvent||a;return c.changedTouches?c.changedTouches[0]["page"+b]:a["page"+b]},getPosition:function(b,c){var d,e,f=window.getComputedStyle?getComputedStyle(b[0]):b[0].style;return i?($.each(["t","webkitT","MozT","OT","msT"],function(b,c){return f[c+"ransform"]!==a?(d=f[c+"ransform"],!1):void 0}),d=d.split(")")[0].split(", "),e=c?d[13]||d[5]:d[12]||d[4]):e=c?f.top.replace("px",""):f.left.replace("px",""),e},constrain:function(a,b,c){return Math.max(b,Math.min(a,c))}},tapped:!1,presets:{scroller:{},numpad:{}},themes:{listview:{},menustrip:{}},i18n:{},instances:f,classes:{},components:{},defaults:{theme:"mobiscroll",context:"body"},userdef:{},setDefaults:function(a){g(this.userdef,a)},presetShort:function(b,c,e){this.components[b]=function(f){return d(this,g(f,{component:c,preset:e===!1?a:b}),arguments)}}}}($);