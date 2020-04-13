var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function () {
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
        $(this).find('.rotate').toggleClass("down");
    }
}

$(document).ready(function () {
    $('.group').hide();
    $('#neo5').show();
    $('#selectMe').change(function () {
        $('.group').hide();
        $('#' + $(this).val()).show()
    })
});

$(window).load(function () {
    $("#shopp_btn").click(function () {
        $('#new_modal').fadeIn(600);
    });

    $('.modal').find('.bg').click(function () {
        $(this).parent().fadeOut(600)
    })
});

$(function () {
    $('.header__title').animate({ left: '0', opacity: '1' }, 1200)
    $('.shopping').animate({ right: '0', opacity: '1' }, 1200)
})

var zindex = 1;
function show_gallery(scene_class, callback = null, reset_styles = null) {
    zindex++;
    $('.' + scene_class).css('z-index', zindex);
    if (reset_styles) { 
        reset_styles();
    }
    $('.' + scene_class).animate({ top: '0px' }, 1200, function () {
        if (callback) {
            callback(1000, 2000);
        }
    })
    $('.scene:not(.' + scene_class + ')').animate({ top: '1200px' }, 900)
}

var animate_scene_2 = function (animation_timeout = 200, animation_duration = 200) {
    setTimeout(function () {
        $('.scene_2').find('#right_img_1').animate({ left: '0', opacity: 1 }, animation_duration);
    }, animation_timeout);
    $('.scene_2').find('#right_img_2').animate({ opacity: '1' }, 2400)
    $('#left_img').animate({ opacity: '1' }, 3600);
}

var reset_scene_2 = function () {
    $('.scene_2').find('#right_img_1').attr('style', '');
    $('.scene_2').find('#right_img_2').attr('style', '');
    $('#left_img').attr('style', '');
}

var animate_scene_1 = function () {
    $('.header__title').animate({ left: '0', opacity: '1' }, 1200)
    $('.shopping').animate({ right: '0', opacity: '1' }, 1200)
}

var reset_scene_1 = function () {
    $('.scene_1').find('.shopping').attr('style', '');
    $('.scene_1').find('.header__title').attr('style', '');
}









