$(window).scroll(function(){
    if($(this).scrollTop()> 250)
    {
        $("nav").addClass('sticky')
    }
    else
    {
        $("nav").removeClass('sticky')
    }
})