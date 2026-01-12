$(document).ready(function(){

	$("#demosMenu").change(function(){
	  window.location.href = $(this).find("option:selected").attr("id") + '.html';
	});

	$("#cookies").click(function(){

		var cookie_value = Number(Cookies.get('keepit_cookie'));
		//console.log("cookiescookiescookiescookiescookies " + cookie_value)
		if(cookie_value > 0 ) {		
			Cookies.set('keepit_cookie', cookie_value+1)
			$("#cookieText").html(cookie_value+1+" cookies taken");
		} else {
			Cookies.set('keepit_cookie', 1)
			$("#cookieText").html("1 cookie taken");
		}		


	});	

});