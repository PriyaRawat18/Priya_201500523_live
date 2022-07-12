$(function() {
    if ($(window).width() < 1200) {
        $(".nav-items-container ").slideUp(0, "swing")
        $(".log-btns-container ").slideUp(0, "swing")
    }
})


$(".hamburger").click(function() {
    $(".hamburger").toggleClass("open")
    $(".nav-items-container").slideToggle(300, "swing")
    $(".log-btns-container").slideToggle(300, "swing")
})

$(window).resize(function() {
    $(".hamburger").removeClass("open")

})

$(window).resize(function() {
    if ($(window).width() > 1200) {
        $(".nav-items-container").slideDown(300, "swing")
        $(".log-btns-container").slideDown(300, "swing")
            // $(".hamburger").toggleClass("open")
    }

});
$(window).resize(function() {
    if ($(window).width() < 1200) {
        $(".nav-items-container ").slideUp(0, "swing")
        $(".log-btns-container ").slideUp(0, "swing")
    }

});