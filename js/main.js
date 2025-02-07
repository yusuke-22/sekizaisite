$(function () {

    $(window).on('load', function () {
        $("#loading").delay(1500).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
        $("#loading_box").delay(1200).fadeOut('slow');//ローディングテキストを1.2秒（1200ms）待機してからフェードアウト
    });

    $(".toggle-btn").click(function () {
        $("header").toggleClass("click");
    });

    $('.section-list a').click(function () {
        $('header').removeClass('click');
    });

    $(".product-imgs").slick({
        arrows: false,
        centerMode: true,
        centerPadding: '300px',
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerPadding: "50px",
                    slidesToShow: 1,
                },
            },
        ],
    });

    $(window).scroll(function () {
        $(".strengths-item").each(function () {

            var scroll = $(window).scrollTop();

            var target = $(this).offset().top;

            var windowHeight = $(window).height();

            if (scroll > target - windowHeight + $(this).outerHeight() - 80) {
                // outerHeight()はpaddingを含めた高さを取得する
                $(this).addClass("fadein1");
            }
        });
    });

    $(window).scroll(function () {
        $(".contents").each(function () {

            var scroll = $(window).scrollTop();

            var target = $(this).offset().top;

            var windowHeight = $(window).height();

            if (scroll > target - windowHeight + $(this).outerHeight()) {
                // outerHeight()はpaddingを含めた高さを取得する
                $(this).addClass("fadein2");
            }
        });
    });

    $(window).scroll(function () {
        $(".contents-reveres").each(function () {

            var scroll = $(window).scrollTop();

            var target = $(this).offset().top;

            var windowHeight = $(window).height();

            if (scroll > target - windowHeight + $(this).outerHeight()) {
                // outerHeight()はpaddingを含めた高さを取得する
                $(this).addClass("reveres-fadein2");
            }
        });
    });

    $('a[href^="#"]').click(function () {
        var adjust = 90;
        var speed = 400;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top - adjust;
        $('body,html').animate({ scrollTop: position }, speed, 'swing');
        return false;
    });
});
