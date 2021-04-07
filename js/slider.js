$(document).ready(function(){
	var images_top = $(".slider__top");
    var images_bottom = $(".slider__bottom");
    var prevBtn = $("#prevBtn");
    var nextBtn = $("#nextBtn");

    //prev image
    //gornji red slika
    function previous(){
        if ($(images_top).prop("scrollWidth") > $(images_top).outerWidth(true)) {
        var last_bottom = $(".slider__top  img").last();
        $(bottom_images).scrollLeft($(images_bottom).prop("scrollWidth"));
        images_top.animate({
            scrollLeft: $(images_top).scrollLeft() - $(".slider__top img").last().outerWidth(true)
        }, {
            duration: 400,
            start: () => {
                disableButtons(true);
            },
            complete: () => {
                $(last_top).remove();
                disableButtons(false);
            }
        });
    }

        //donji red slika
        if ($(images_bottom).prop("scrollWidth") > $(images_bottom).outerWidth(true)) {
            var last_bottom = $(".slider__bottom  img").last();
            $(bottom_images).scrollLeft($(images_bottom).prop("scrollWidth"));
            images_bottom.animate({
                scrollLeft: $(images_bottom).scrollLeft() - $(".slider__bottom img").last().outerWidth(true)
            }, {
                duration: 400,
                start: () => {
                    disableButtons(true);
                },
                complete: () => {
                    $(last_bottom).remove();
                    disableButtons(false);
                }
            });
        }
    }
    
function next(){
    //next image
    //gornji red slika
    if ($(images_top).prop("scrollWidth") > $(images_top).outerWidth(true)) {
        var first_top = $(".slider__top img").first();
        $(images_top).scrollLeft($(images_top).prop("scrollWidth") - $(first_top).outerWidth(true));
        images_top.animate({
            scrollLeft: $(images_top).scrollLeft() + $(".slider__top img").last().outerWidth(true)
        }, {
            duration: 400,
            start: () => {
                disableButtons(true);
            },
            complete: () => {
                disableButtons(false);
                $(first_top).remove();
            }
        });
    }
    //donji red slika
    if ($(images_bottom).prop("scrollWidth") > $(images_bottom).outerWidth(true)) {
        var first_top = $(".slider__bottom img").first();
        $(images_bottom).scrollLeft($(images_bottom).prop("scrollWidth") - $(first_top).outerWidth(true));
        images_bottom.animate({
            scrollLeft: $(images_bottom).scrollLeft() + $(".slider__bottom img").last().outerWidth(true)
        }, {
            duration: 400,
            start: () => {
                disableButtons(true);
            },
            complete: () => {
                disableButtons(false);
                $(first_bottom).remove();
            }
        });
    }
}

});
