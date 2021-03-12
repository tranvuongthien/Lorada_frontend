
$(function () {
    const products = [
        {
            id: 1,
            name: "Mademoiselle Perfume Fragance1",
            src: "dist/Final_project/img/5a.jpg",
            src_hover: "dist/Final_project/img/5b.jpg",
            categories: ["face", "eye", "best-seller", "featured", "sale", "recent"],
            price: "80.00",
            old_price: "90.00"
        },
        {
            id: 2,
            name: "Cream Health Beauty Lotion2",
            src: "dist/Final_project/img/13a.jpg",
            src_hover: "dist/Final_project/img/13c.jpg",
            categories: ["cheek", "eye", "best-seller", "featured", "sale", "skin"],
            price: "80.00",
            old_price: "90.00"
        },
        {
            id: 3,
            name: "Makeup Brush Eye Shadow Tools3",
            src: "dist/Final_project/img/3a.jpg",
            src_hover: "dist/Final_project/img/3b.jpg",
            categories: ["face", "eye", "best-seller", "featured", "brush"],
            price: "80.00",
            old_price: "90.00"
        },
        {
            id: 4,
            name: "Cosmetics Perfect Look Kajal4",
            src: "dist/Final_project/img/2a.jpg",
            src_hover: "dist/Final_project/img/2b.jpg",
            categories: ["face", "eye", "best-seller", "tool"],
            price: "80.00",
            old_price: "90.00"
        },
        {
            id: 5,
            name: "Lotion Suncreen Merchandise5",
            src: "dist/Final_project/img/10a.jpg",
            src_hover: "dist/Final_project/img/10b.jpg",
            categories: ["face", "eye", "best-seller", "featured", "sale", "recent", "skin"],
            price: "80.00",
            old_price: "90.00"
        },
        {
            id: 6,
            name: "Mademoiselle Perfume Fragance6",
            src: "dist/Final_project/img/3a.jpg",
            src_hover: "dist/Final_project/img/3b.jpg",
            categories: ["face", "eye", "best-seller", "featured", "sale", "skin"],
            price: "80.00",
            old_price: "90.00"
        },
        {
            id: 7,
            name: "Hair Dryers Andis Clothes7",
            src: "dist/Final_project/img/6a.jpg",
            src_hover: "dist/Final_project/img/6b.jpg",
            categories: ["makeup", "best-seller", "featured", "tool"],
            price: "80.00",
            old_price: "90.00"
        },
        {
            id: 8,
            name: "Tonymoly real Mask Sheet8",
            src: "dist/Final_project/img/8a.jpg",
            src_hover: "dist/Final_project/img/9b.jpg",
            categories: ["face", "makeup", "best-seller", "skin"],
            price: "80.00",
            old_price: "90.00"
        },
        {
            id: 9,
            name: "Sandalwood Candle Floral9",
            src: "dist/Final_project/img/4b.jpg",
            src_hover: "dist/Final_project/img/4b.jpg",
            categories: ["face", "cheek", "best-seller", "featured", "sale", "recent"],
            price: "80.00",
            old_price: "90.00"
        },
        {
            id: 10,
            name: "Makeup Brush Eye Shadow Tools10",
            src: "dist/Final_project/img/12a.jpg",
            src_hover: "dist/Final_project/img/12b.jpg",
            categories: ["cheek", "makeup", "best-seller", "featured", "sale", "brush"],
            price: "80.00",
            old_price: "90.00"
        },
        {
            id: 11,
            name: "Hair Dryers Andis Clothes11",
            src: "dist/Final_project/img/6a.jpg",
            src_hover: "dist/Final_project/img/6b.jpg",
            categories: ["makeup", "best-seller", "featured", "tool"],
            price: "80.00",
            old_price: "90.00"
        },
        {
            id: 12,
            name: "Tonymoly real Mask Sheet12",
            src: "dist/Final_project/img/8a.jpg",
            src_hover: "dist/Final_project/img/9b.jpg",
            categories: ["face", "makeup", "best-seller", "skin"],
            price: "80.00",
            old_price: "90.00"
        },
        {
            id: 13,
            name: "Sandalwood Candle Floral13",
            src: "dist/Final_project/img/4b.jpg",
            src_hover: "dist/Final_project/img/4a.jpg",
            categories: ["face", "cheek", "best-seller", "featured", "sale", "recent"],
            price: "80.00",
            old_price: "90.00"
        },
        {
            id: 14,
            name: "Makeup Brush Eye Shadow Tools14",
            src: "dist/Final_project/img/12a.jpg",
            src_hover: "dist/Final_project/img/12b.jpg",
            categories: ["cheek", "makeup", "best-seller", "featured", "sale", "brush"],
            price: "80.00",
            old_price: "90.00"
        }
    ];
    const template_products = [
        {
            src: "dist/Final_project/img/demo1.jpg",
            res_src: "dist/Final_project/img/demo1(1).jpg",
            name: "Default Shop",
        },
        {
            src: "dist/Final_project/img/demo2.jpg",
            res_src: "dist/Final_project/img/demo2(1).jpg",
            name: "Furniture",
        },
        {
            src: "dist/Final_project/img/demo3.jpg",
            res_src: "dist/Final_project/img/demo3(1).jpg",
            name: "Fashion Classic",
        },
        {
            src: "dist/Final_project/img/demo4.jpg",
            res_src: "dist/Final_project/img/demo4(1).jpg",
            name: "Fashion Modern",
        },
        {
            src: "dist/Final_project/img/demo5.jpg",
            res_src: "dist/Final_project/img/demo5(1).jpg",
            name: "Fashion With Side",
        },
        {
            src: "dist/Final_project/img/demo6.jpg",
            res_src: "dist/Final_project/img/demo6(1).jpg",
            name: "Jewerly",
        },
        {
            src: "dist/Final_project/img/demo7.jpg",
            res_src: "dist/Final_project/img/demo7(1).jpg",
            name: "Organic",
        },
        {
            src: "dist/Final_project/img/demo8.jpg",
            res_src: "dist/Final_project/img/demo8(1).jpg",
            name: "Simple Shop",
        },
        {
            src: "dist/Final_project/img/demo9.jpg",
            res_src: "dist/Final_project/img/demo9(1).jpg",
            name: "Technology",
        },
        {
            src: "dist/Final_project/img/demo10.jpg",
            res_src: "dist/Final_project/img/demo10(1).jpg",
            name: "Winery",
        },
    ];
    // set owlcarousel 
    $(".main-product .wrap.owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        center: true,
        mouseDrag: true,
        touchDrag: false,
        nav: true,
        navText: ["", ""],
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        dots: false,
        smartSpeed: 1000,
        lazyLoad: true,
    });

    $(".best-seller-owl.owl-carousel").owlCarousel({
        items: 1,
        // margin: 10,
        loop: false,
        // center: true,
        mouseDrag: false,
        touchDrag: false,
        nav: false,
        dots: false,
        smartSpeed: 1000,

    });
    $(".daily-box.owl-carousel").owlCarousel({
        items: 1,
        // margin: 10,
        loop: true,
        center: true,
        mouseDrag: true,
        touchDrag: false,
        nav: true,
        navText: ["", ""],
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        dots: false,
        smartSpeed: 1000,
        lazyLoad: true,

    });

    $(".recommend-for-you-box .container .product-owl .owl-carousel").owlCarousel({
        items: 5,
        margin: 20,
        loop: true,
        navText: ["", ""],
        dots: false,
        nav: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 4,
            },
            1200: {
                items: 5,
            }

        }

    });
    $(".editor-pick-box .container .product-owl .owl-carousel").owlCarousel({
        items: 5,
        margin: 20,
        loop: true,
        navText: ["", ""],
        dots: false,
        nav: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 4,
            },
            1200: {
                items: 5,
            }

        }

    });
    $(".tool-brushes-box .container .product-owl .owl-carousel").owlCarousel({
        items: 5,
        margin: 20,
        loop: true,
        navText: ["", ""],
        dots: false,
        nav: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 4,
            },
            1200: {
                items: 5,
            }

        }

    });
    //================
    const allcategory_recommend = $(".recommend-for-you-box .container .top-categories ul.categories a");
    const allcategory_editor_pick = $(".editor-pick-box .container .top-categories ul.categories a");
    const allcategory_tool_brushes = $(".tool-brushes-box .container .top-categories ul.categories a");
    console.log(allcategory_tool_brushes);
    for (let i = 0; i < allcategory_recommend.length; i++) {
        if ($(allcategory_recommend[i]).hasClass("active")) {
            const category = $(allcategory_recommend[i]).data("category");
            const activeProducts = products.filter((val) =>
                val.categories.includes(category)
            );
            renderOwl1(activeProducts, ".recommend-for-you-box .container .product-owl .owl-carousel")
            break;
        }
    }
    for (let i = 0; i < allcategory_editor_pick.length; i++) {
        if ($(allcategory_editor_pick[i]).hasClass("active")) {
            const category1 = $(allcategory_editor_pick[i]).data("category");
            const activeProducts1 = products.filter((val) =>
                val.categories.includes(category1)
            );
            console.log(category1);
            renderOwl1(activeProducts1, ".editor-pick-box .container .product-owl .owl-carousel")
            break;
        }
    }
    for (let i = 0; i < allcategory_tool_brushes.length; i++) {
        if ($(allcategory_tool_brushes[i]).hasClass("active")) {
            const category1 = $(allcategory_tool_brushes[i]).data("category");
            let activeProducts1 = [];
            if (category1 === "all") {

                const temp1 = products.filter((val) =>
                    val.categories.includes("brush")
                );

                const temp2 = products.filter((val) =>
                    val.categories.includes("tool")
                );

                activeProducts1 = temp1.concat(temp2);


            }
            else {
                activeProducts1 = products.filter((val) =>
                    val.categories.includes(category1)
                );
            }
            console.log(category1);
            renderOwl1(activeProducts1, ".tool-brushes-box .container .product-owl .owl-carousel")
            break;
        }
    }

    $(".recommend-for-you-box .container .top-categories ul.categories a").click(function (e) {
        e.preventDefault();
        $(".recommend-for-you-box .container .top-categories ul.categories a").removeClass("active");
        $(this).addClass("active");
        const category = $(this).data("category");
        const filter_products = products.filter((val) =>
            val.categories.includes(category)
        );
        removeOwl(products, ".recommend-for-you-box .container .product-owl .owl-carousel");
        renderOwl1(filter_products, ".recommend-for-you-box .container .product-owl .owl-carousel");
    });
    $(".editor-pick-box .container .top-categories ul.categories a").click(function (e) {
        e.preventDefault();
        $(".editor-pick-box .container .top-categories ul.categories a").removeClass("active");
        $(this).addClass("active");
        const category = $(this).data("category");
        const filter_products = products.filter((val) =>
            val.categories.includes(category)
        );
        removeOwl(products, ".editor-pick-box .container .product-owl .owl-carousel");
        renderOwl1(filter_products, ".editor-pick-box .container .product-owl .owl-carousel");
    });
    $(".tool-brushes-box .container .top-categories ul.categories a").click(function (e) {
        e.preventDefault();
        $(".tool-brushes-box .container .top-categories ul.categories a").removeClass("active");
        $(this).addClass("active");
        const category = $(this).data("category");
        const filter_products = products.filter((val) =>
            val.categories.includes(category)
        );
        removeOwl(products, ".tool-brushes-box .container .product-owl .owl-carousel");
        renderOwl1(filter_products, ".tool-brushes-box .container .product-owl .owl-carousel");
    });

    const bestsellerProducts = products.filter((val) =>
        val.categories.includes("best-seller")
    );
    renderOwl2(bestsellerProducts, ".best-seller-products .best-seller-owl.owl-carousel")
    $(".small-box-item-owl.owl-carousel").owlCarousel({
        items: 1,
        // margin: 10,
        loop: true,
        center: true,
        mouseDrag: true,
        touchDrag: false,
        nav: false,
        dots: true,
        smartSpeed: 1000,
        lazyLoad: true,
    });
    // bắt sự kiện scroll
    $(window).scroll(function () {
        const position = $(window).scrollTop();
        if (position > 200) {
            $("#header-nav").addClass("fixed");
        }
        else {
            $("#header-nav").removeClass("fixed");
        }
    });

    $(window).scroll(function () {
        const position = $(window).scrollTop();
        if (position > 200) {
            $("#totop").addClass("fixed");
        }
        else {
            $("#totop").removeClass("fixed");
        }
    });
    $("#totop").click(function (e) {
        e.preventDefault();
        window.location = "#";
    });
    $("#purchase-button").click(function (e) {
        e.preventDefault();
        window.location = "http://www.mangak.net";
    });
    // $("#purchase-button").on('click', function (e) {
    //     e.preventDefault();
    //     $('html, body').animate({ scrollTop: 0 }, '100');
    // });
    // count-down-box box
    const countDownDate = new Date("Mar 07, 2021 15:37:25").getTime();

    // Update the count down every 1 second
    const x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id:"demo"
        $(".count-down-box .days p").html(days + "<br/> <span>Days</span>");
        $(".count-down-box .hours p").html(hours + "<br/> <span>Hours</span>");
        $(".count-down-box .minutes p").html(minutes + "<br/> <span>Min</span>");
        $(".count-down-box .seconds p").html(seconds + "<br/> <span>Sec</span>");
        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            $(".count-down-box .days p").html("0<br/> <span>Days</span>");
            $(".count-down-box .hours p").html("0<br/> <span>Hours</span>");
            $(".count-down-box .minutes p").html("0<br/> <span>Min</span>");
            $(".count-down-box .seconds p").html("0<br/> <span>Sec</span>");
        }
    }, 1000);
    // 
    $(".best-seller-products span.nav-next").click(function () {
        $(".best-seller-products .owl-carousel .owl-nav button.owl-next").trigger('click');
    });

    $(".best-seller-products span.nav-prev").click(function () {
        $(".best-seller-products .owl-carousel .owl-nav button.owl-prev").trigger('click');
    });

    $(".dailydeal-bestseller .container .daily-deal h3 span.nav-next").click(function () {
        $(".dailydeal-bestseller .container .daily-deal .daily-box.owl-carousel .owl-nav button.owl-next").trigger('click');
    });

    $(".dailydeal-bestseller .container .daily-deal h3 span.nav-prev").click(function () {
        $(".dailydeal-bestseller .container .daily-deal .daily-box.owl-carousel .owl-nav button.owl-prev").trigger('click');
    });
    renderTemplate(template_products, "#header-nav .container ul.menu li .home-layout-drop .wrap .row");
    renderTemplate(template_products, "header .nav-menu .container ul li .home-layout-drop .wrap .row");
});

function removeOwl(products, selector) {
    for (let i = 0; i < products.length; i++) {
        $(selector).trigger("remove.owl.carousel", [i]).trigger("refresh.owl.carousel");
    }
}

function renderOwl1(list, selector) {
    list.map((val, index) => {
        // add list sp vao owl
        // const cate_string = "";
        // val.categories.map((val1) => {
        //     cate_string += val1 + "& ";
        // });
        // cate_string.splice(-1, 1);
        $(selector).trigger("add.owl.carousel", [`<div class="item">
        <a href="">
        <div class="small-container-item">
            <div class="wrap-img-item">
                <div class="small-box-item-owl">
                    <div class="small-item">
                    
                        <div class="img-item-box">
                            <img class="before-hover" src="${val.src}" alt="">
                            <img class="after-hover" src="${val.src_hover}" alt="">
                        </div>
                        <span class="sale-tag">Sale!</span>
                        <span class="hot-tag">Hot</span>
                        <div class="function-button">
                            <div class="btn heart">
                                <a href=""><i class="far fa-heart"></i></a>
                            </div>
                            <div class="btn eye">
                                <a href=""><i class="fas fa-shopping-bag"></i></a>
                            </div>
                            <div class="btn bag">
                                <a href=""><i class="fas fa-sync deohieu"></i></a>
                            </div>
                            <div class="btn reload">
                                <a href=""><i class="far fa-eye"></i></a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div class="content-small-item">
                <p class="tag">${val.categories[0]}</p>
                <h3 class="name"><a href="">${val.name}</a></h3>
                <div class="price-star">
                    <div class="wrap">
                        <p class="price">£${val.price} <span>£${val.old_price}</span></p>
                        <ul>
                            <li><i class="fas fa-star"></i></li>
                            <li><i class="fas fa-star"></i></li>
                            <li><i class="fas fa-star"></i></li>
                            <li><i class="fas fa-star"></i></li>
                            <li><i class="fas fa-star"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </a>
    </div>
    `, index,]).trigger("refresh.owl.carousel");
    });
}


function renderTemplate(products, selector) {
    products
        .map((val, index) => {
            $(` <div class="col col15-sm-3">
            <div class="item">
                <img src="${val.src}" alt="">
                <h4>${val.name}</h4>
            </div>
        </div>`).appendTo(selector);
        });
}

function renderOwl2(products, selector) {
    let index = Math.floor(products.length / 6);
    if (index * 6 < products.length) {
        let bigitem = "";
        products
            .slice(index * 6, products.length)
            .map((val) => {
                bigitem += ` <div class="item col12-md-4 col12-xs-6">
                <div class="small-container-item">
                    <div class="wrap-img-item">
                        <div class="small-box-item-owl owl-carousel owl-theme">
                            <div class="small-item">
                                <div class="img-item-box">
                                    <img src="${val.src}" alt="">
                                </div>
                                <span class="sale-tag">Sale!</span>
                                <span class="hot-tag">Hot</span>
                                <div class="bottom-bar-item">
                                    <div class="animation">
                                        <p>+ Select option</p>
                                        <div class="content-product-button">
                                            <a href=""><i class="far fa-heart"></i></a>
                                            <a href=""><i class="fas fa-sync deohieu"></i></a>
                                            <a href=""><i class="far fa-eye"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="small-item">
                                <div class="img-item-box">
                                    <img src="${val.src_hover}" alt="">
                                </div>
                                <span class="sale-tag">Sale!</span>
                                <span class="hot-tag">Hot</span>
                                <div class="bottom-bar-item">
                                    <div class="animation">
                                        <p>+ Select option</p>
                                        <div class="content-product-button">
                                            <a href=""><i class="far fa-heart"></i></a>
                                            <a href=""><i class="fas fa-sync deohieu"></i></a>
                                            <a href=""><i class="far fa-eye"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="content-small-item">
                        <p class="tag">Make Up, Tools & Brushes</p>
                        <h3 class="name">${val.name}</h3>
                        <p class="price">£${val.price} –£${val.old_price}</p>
                    </div>
                </div>
            </div>`;
            });
        $(selector).trigger("add.owl.carousel", [`<div class="big-item row">
        ${bigitem}
        </div>`, index]).trigger("refresh.owl.carousel");

    }
    for (let i = 1; i <= products.length / 6; i++) {
        let bigitem = "";
        products
            .slice((i - 1) * 6, i * 6)
            .map((val) => {
                bigitem += ` <div class="item col12-md-4 col-xs">
                <div class="small-container-item">
                    <div class="wrap-img-item">
                        <div class="small-box-item-owl owl-carousel owl-theme">
                            <div class="small-item">
                                <div class="img-item-box">
                                    <img src="${val.src}" alt="">
                                </div>
                                <span class="sale-tag">Sale!</span>
                                <span class="hot-tag">Hot</span>
                                <div class="bottom-bar-item">
                                    <div class="animation">
                                        <p>+ Select option</p>
                                        <div class="content-product-button">
                                            <a href=""><i class="far fa-heart"></i></a>
                                            <a href=""><i class="fas fa-sync deohieu"></i></a>
                                            <a href=""><i class="far fa-eye"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="small-item">
                                <div class="img-item-box">
                                    <img src="${val.src_hover}" alt="">
                                </div>
                                <span class="sale-tag">Sale!</span>
                                <span class="hot-tag">Hot</span>
                                <div class="bottom-bar-item">
                                    <div class="animation">
                                        <p>+ Select option</p>
                                        <div class="content-product-button">
                                            <a href=""><i class="far fa-heart"></i></a>
                                            <a href=""><i class="fas fa-sync deohieu"></i></a>
                                            <a href=""><i class="far fa-eye"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="content-small-item">
                        <p class="tag">Make Up, Tools & Brushes</p>
                        <h3 class="name">${val.name}</h3>
                        <p class="price">£${val.price} –£${val.old_price}</p>
                    </div>
                </div>
            </div>`;
            });
        $(selector).trigger("add.owl.carousel", [`<div class="big-item row">
        ${bigitem}
        </div>`, i - 1]).trigger("refresh.owl.carousel");
    }

}