$(".hamburger").click(function () {
	$(".sidebar").toggleClass("open-menu")

	if ($(".sidebar").hasClass("open-menu")) {
		$(".hamburger")
			.html(`<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.3347 21.9203L18.3849 16.9706L23.3347 12.0209C23.7236 11.6319 23.7236 10.9955 23.3347 10.6066C22.9458 10.2177 22.3094 10.2177 21.9205 10.6066L16.9707 15.5564L12.021 10.6066C11.632 10.2177 10.9957 10.2177 10.6067 10.6066C10.2178 10.9955 10.2178 11.6319 10.6067 12.0209L15.5565 16.9706L10.6067 21.9203C10.2178 22.3093 10.2178 22.9456 10.6067 23.3346C10.9957 23.7235 11.632 23.7235 12.021 23.3346L16.9707 18.3848L21.9205 23.3346C22.3094 23.7235 22.9458 23.7235 23.3347 23.3346C23.7236 22.9456 23.7236 22.3093 23.3347 21.9203Z" fill="white"/>
        </svg>
        `)
	} else {
        $(".hamburger")
			.html(`<svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-1.09278e-07 8.5C-4.89568e-08 9.88 1.12 11 2.5 11L15.52 11C16.9 11 18.02 9.88 18.02 8.5C18.02 7.12 16.9 6 15.52 6L2.5 6C1.12 6 -1.696e-07 7.12 -1.09278e-07 8.5ZM15.52 8C15.79 8 16.02 8.22 16.02 8.5C16.02 8.78 15.8 9 15.52 9L2.5 9C2.23 9 2 8.78 2 8.5C2 8.22 2.22 8 2.5 8L15.52 8Z" fill="white"/>
            <path d="M-1.09278e-07 2.5C-4.89568e-08 3.88 1.12 5 2.5 5L15.52 5C16.9 5 18.02 3.88 18.02 2.5C18.02 1.12 16.9 -7.38723e-07 15.52 -6.78402e-07L2.5 -1.09278e-07C1.12 -4.89568e-08 -1.696e-07 1.12 -1.09278e-07 2.5ZM15.52 2C15.79 2 16.02 2.22 16.02 2.5C16.02 2.78 15.8 3 15.52 3L2.5 3C2.23 3 2 2.78 2 2.5C2 2.22 2.22 2 2.5 2L15.52 2Z" fill="white"/>
            <path d="M-1.09278e-07 14.5C-4.89568e-08 15.88 1.12 17 2.5 17L15.52 17C16.9 17 18.02 15.88 18.02 14.5C18.02 13.12 16.9 12 15.52 12L2.5 12C1.12 12 -1.696e-07 13.12 -1.09278e-07 14.5ZM15.52 14C15.79 14 16.02 14.22 16.02 14.5C16.02 14.78 15.8 15 15.52 15L2.5 15C2.23 15 2 14.78 2 14.5C2 14.22 2.22 14 2.5 14L15.52 14Z" fill="white"/>
            </svg>
            
        `)
	}
})

$(".gocart-button-mobile").click(function(){
    $(".go-cart__trigger").click();
});

$(".cart-footer").click(function(){
   $(".gocart-button-mobile").click();
});

$(".radio-size").click(function(){
    $(".js-go-cart-add-to-cart").removeAttr('disabled');
})

$(".create-account-link").click(function(){
    $("#form-login").hide();
    $("#form-register").show();
    $(".modal-body .title").html("Register")
})

$(".forgot-password-text").click(function(){
    $("#form-login").hide();
    $("#form-recover").show();
    $(".modal-body .title").html("Recover Password")
})

$(".back-login-link").click(function(){
    $("#form-register").hide();
    $("#form-login").show();
    $(".modal-body .title").html("Great to have you back!")
})

$(".recover-passw").click(function(){
    $("#form-recover").hide();
    $("#form-login").show();
    $(".modal-body .title").html("Great to have you back!")
})

$(".open-search").click(function(){
    $(".search-bar-section").addClass("open")
})

$(".close-search").click(function(){
    $(".search-bar-section").removeClass("open")
})

$("select").change(function(){
    $("#currency_form").submit();
})

$(".share-link").click(function(){
    const url = $(this).data('url');
    const path = location.origin + url
    navigator.clipboard.writeText(path);
    $(this).addClass("copied")
    setTimeout(()=>{
        $(this).removeClass("copied")
    },3000)
})

$(".count-review").html($(".jdgm-histogram__frequency").html())

var endlessScroll = new Ajaxinate({
    container: '#Huratips-Loop',
    pagination: '#Huratips-Pagination'
});

$('.weglot-container').clone().appendTo('.dropdown-selector');