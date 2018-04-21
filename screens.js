function resizeMap() {
	var width = $(".map-container").width();
	var height = width * 0.60;

	$("#map > svg").css({
		"width": width + "px",
		"height": height + "px"
	});
}


$(document).ready(resizeMap);
$(window).resize(resizeMap);