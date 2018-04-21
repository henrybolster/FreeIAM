function resizeMap() {
	var width = $(".map-container").width();
	var height = width * 0.60;

	$("#map > svg").css({
		"width": width + "px",
		"height": height + "px"
	});

	$("#map").css({
		"width": width + "px",
		"height": height + "px"
	});

}


$(document).ready(function() {

	resizeMap();
	$(".state").hide();

});

$(window).resize(resizeMap);
