!function($){var a=$.mobiscroll.themes,b={minWidth:76,height:76,accent:"none",dateOrder:"mmMMddDDyy",headerText:!1,showLabel:!1,deleteIcon:"backspace4",icon:{filled:"star3",empty:"star"},btnWidth:!1,btnStartClass:"mbsc-ic mbsc-ic-play3",btnStopClass:"mbsc-ic mbsc-ic-pause2",btnResetClass:"mbsc-ic mbsc-ic-stop2",btnLapClass:"mbsc-ic mbsc-ic-loop2",btnHideClass:"mbsc-ic mbsc-ic-close",btnCalPrevClass:"mbsc-ic mbsc-ic-arrow-left2",btnCalNextClass:"mbsc-ic mbsc-ic-arrow-right2",btnPlusClass:"mbsc-ic mbsc-ic-plus",btnMinusClass:"mbsc-ic mbsc-ic-minus",onMarkupInserted:function(a,b){var c,d,e;a.addClass("mbsc-wp mbsc-wp-"+b.settings.accent),$(".dwwl",a).on("touchstart mousedown DOMMouseScroll mousewheel",function(b){"mousedown"===b.type&&d||(d="touchstart"===b.type,c=!0,e=$(this).hasClass("wpa"),$(".dwwl",a).removeClass("wpa"),$(".dw-sel",this).removeClass("dw-sel"),$(this).addClass("wpa"))}).on("touchmove mousemove",function(){c=!1}).on("touchend mouseup",function(a){c&&e&&$(a.target).closest(".dw-li").hasClass("dw-sel")&&$(this).removeClass("wpa"),"mouseup"===a.type&&(d=!1),c=!1})},onThemeLoad:function(a,b){if(a&&a.dateOrder&&!b.dateOrder){var c=a.dateOrder;c=c.match(/mm/i)?c.replace(/mmMM|mm|MM/,"mmMM"):c.replace(/mM|m|M/,"mM"),c=c.match(/dd/i)?c.replace(/ddDD|dd|DD/,"ddDD"):c.replace(/dD|d|D/,"dD"),b.dateOrder=c}},onInit:function(a){var b=a.buttons;b.set.icon="checkmark",b.cancel.icon="close",b.clear.icon="close",b.now&&(b.now.icon="loop2")}};a.wp=b,a["wp-light"]=b,a["wp light"]=b}(jQuery);