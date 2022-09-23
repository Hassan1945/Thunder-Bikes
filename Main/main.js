$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 299) {
        $("#header").addClass("header")
        $(".header").animate({ top: -'150' }, fast)
    }
    else {
        $("#header").removeClass("header")
    }
})


$(document).ready(function () {

    $(".s-button").click(function () {
        $(".slide-1").toggleClass("s-pic")
        $(".slide-2").toggleClass("s-pic")
        $(".slider #slides li .hero__text-content").toggleClass("slide-list")
    })
})


$("#a-btn>a,#b-btn>a,img.arrow").hover(function () {
    $(".btn-inverse , .btn--inverse").animate({ "padding": "11px 50px 11px 20px" }, 1, function () {
        $(".btn-inverse>img,.btn-inverse>img").addClass("arrow")
    })
    $("#a-btn,#b-btn").css({ 'margin-right': '5px', 'margin-top': '0px' })
    $("#a-btn > .btn-inverse,#b-btn > .btn-inverse").addClass("h-white", function () {

    })
})

$("#a-btn>a,#b-btn>a,img.arrow").mouseout(function () {
    $(".btn-inverse ").animate({ padding: "11px 20px 11px 20px" }, 1, function () {
        $(".btn-inverse>img,.btn-inverse>img").removeClass("arrow")
    })
    $("#a-btn > .btn-inverse,#b-btn > .btn-inverse").removeClass("h-white")
})


// section fifth

$("#shopify-section-template--15158492954803__1639368589aa6d1149 h3 a").hover(function () {
    $("#y-line").addClass("y-line")
    $("#y-line").removeClass("y2-line")
})
$("#shopify-section-template--15158492954803__1639368589aa6d1149 h3 a").mouseout(function () {
    $("#y-line").removeClass("y-line")
    $("#y-line").addClass("y2-line")
})


// product sixth




$(".btns button").click(function () {
    $(".outer-cookies").css({ "display": "none" })
})



  

           $("#shop-inner>li>a").hover(function () {

            $(".active").removeClass("active")
            $(".active-in").removeClass("active-in")
        })


        $("#shop-inner>.f-1>a").hover(function () {
            $(this).addClass("active")
        })
        $("#shop-inner>.f-2>a").hover(function () {
            $(this).addClass("active")
        })
        $("#shop-inner>.f-3>a").hover(function () {
            $(this).addClass("active")
        })
        $("#shop-inner>.f-4>a").hover(function () {
            $(this).addClass("active")
        })
        $("#shop-inner>.f-5>a").hover(function () {
            $(this).addClass("active")
        })
        $("#shop-inner>.f-6>a").hover(function () {
            $(this).addClass("active")
        })
        $("#shop-inner>.f-7>a").hover(function () {
            $(this).addClass("active")
        })
        $("#shop-inner>.f-8>a").hover(function () {
            $(this).addClass("active")
        })



        $("#shop-inner>.f-1").hover(function () {
            $("#shop>.f-1-inner").addClass("active-in")
        })

        $("#shop-inner>.f-2").hover(function () {
            $("#shop>.f-2-inner").addClass("active-in")
        })

        $("#shop-inner>.f-3").hover(function () {
            $("#shop>.f-3-inner").addClass("active-in")
        })

        $("#shop-inner>.f-4").hover(function () {
            $("#shop>.f-4-inner").addClass("active-in")
        })

        $("#shop-inner>.f-5").hover(function () {
            $("#shop>.f-5-inner").addClass("active-in")
        })

        $("#shop-inner>.f-6").hover(function () {
            $("#shop>.f-6-inner").addClass("active-in")
        })

        $("#shop-inner>.f-7").hover(function () {
            $("#shop>.f-7-inner").addClass("active-in")
        })

        $("#shop-inner>.f-8").hover(function () {
            $("#shop>.f-8-inner").addClass("active-in")
        })

      




function myFunction(x) {
    if (x.matches) {


        
    }
    else{

    }
}

var x = window.matchMedia("(max-width: 600px)")
myFunction(x)
x.addListener(myFunction)




$("#shop .f-7-inner #tool").hover(function () {
    $("#shop .f-7-inner #tool .wrench-f").css({ "z-index": "10;" })
    $("#shop .f-7-inner #tool .wrench-s").css({ "z-index": "0;" })
})

$(".f-s-1,.f-s-2,.f-s-3").click(function () {
    $(this).toggleClass("collapse-div", function () {
        $(".f-s-1 i,.f-s-2 i,.f-s-3 i,").animate({ "rotate": "180deg" }, 500)
    })
    $(this).toggleClass("collapse-rev")
})



$("#o-c .bottom-bor i").click(function () {
    $("#o-c").addClass("close")
    $("#o-c").removeClass("responsive")
    $(".nav-menu").addclass("c-u")
})

$(".large-up--hide").click(function () {
    $("#o-c").addClass("responsive")
    $("#o-c").removeClass("close")
    $(".nav-menu").addclass("c-u")
    $(html).css({ "overflow": "hidden" })
})



$(".one i").click(function () {
    $(".one i").toggleClass("fa-solid fa-xmark")
    $(".one i").toggleClass("fa-solid fa-angle-down")
})
$(".two i").click(function () {
    $(".two i").toggleClass("fa-solid fa-xmark")
    $(".two i").toggleClass("fa-solid fa-angle-down")
})
$(".three i").click(function () {
    $(".three i").toggleClass("fa-solid fa-xmark")
    $(".three i").toggleClass("fa-solid fa-angle-down")
})
$(".forth i").click(function () {
    $(".forth i").toggleClass("fa-solid fa-xmark")
    $(".forth i").toggleClass("fa-solid fa-angle-down")
})
$(".fifth i").click(function () {
    $(".fifth i").toggleClass("fa-solid fa-xmark")
    $(".fifth i").toggleClass("fa-solid fa-angle-down")
})