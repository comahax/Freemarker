!function($){var a=$.mobiscroll,b=a.presets.scroller;a.presetShort("image"),b.image=function(a){return a.settings.enhance&&(a._processMarkup=function(a){var b=a.attr("data-icon");return a.children().each(function(a,b){b=$(b),b.is("img")?$('<div class="mbsc-img-c"></div>').insertAfter(b).append(b.addClass("mbsc-img")):b.is("p")&&b.addClass("mbsc-img-txt")}),b&&a.prepend('<div class="mbsc-ic mbsc-ic-'+b+'"></div'),a.html('<div class="mbsc-img-w">'+a.html()+"</div>"),a.html()}),b.list.call(this,a)}}(jQuery);