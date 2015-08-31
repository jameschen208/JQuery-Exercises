$(document).ready(function(){
     // alert('The document is ready');
     $("h1").click(function() {
  		alert( "FOLLOW THEIR ADVICE OR ELSE!!!" );
		});
/************************CLOCK************************/

    setInterval(displayTime, 100);
    function displayTime(){
    	var time = new Date();
    	var h = time.getHours();
    	var m = time.getMinutes();
    	var s = time.getSeconds();
    		if (m < 10) {
    			m = "0" + m
    		};
    		if (s < 10) {
    			s = "0" + s
    		};
		$(".clock").html(h+":"+m+":"+s)
    };

/************************IMAGE ANIMATION************************/	

	// $("img#one").hide({
	// 	left: "-600px"
	// }, 9000);

	// $("img").show({
	// 	left: "-600px"
	// }, 6000);

	$(".lightimg").animate({
		opacity: .5,
		width: "500px",
		height: "700px"
	}, 2000, function() {
	})

/************************LIGHT BOX************************/	
	$(".lightboxlink").click(function(e){
		/***variable images***/
		var image = $(e.currentTarget).data("img");
		/***add the body elements***/
		$("body").append("<div class='outerlight'><div class='innerlight'><img class='lightimg' src='"+image+"'></div></div>")
		/***center the innerbox***/
			var page_height = $(window).height();
			var image_height = $('.lightimg').height();
			var image_offset = (page_height - image_height)/2;
			$('img.lightimg').parent().css('margin-top', image_offset);
		/***remove lightbox***/
		$("div.outerlight, div.innerlight, .lightimg").click(function(){
			$(".outerlight").remove()
		});
	});
/************************CLOCK MODAL************************/
	$(".clock").click(function(){
		$("body").append("<div class='outerlight'><div class='innerlight'><p>STOP BOTHERING ME</p><div class='clock'></div></div></div>")
			var page_height = $(window).height();
			var image_height = $('.clock').height();
			var image_offset = (page_height - image_height)/2;
		// $text_transform = $(".clock");
		$(".innerlight").css('font-size', '50px');
		$(".innerlight").css('color', 'white');
		$('.clock').parent().css('margin-top', image_offset);
		$(".outerlight, .innerlight, .clock").click(function(){
			$(".outerlight").remove();
		});
	});
});





  