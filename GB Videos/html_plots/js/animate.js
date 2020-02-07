var animation = anime.timeline({loop:false})

animation.add({
	targets: '.title',
	scale: [4,1],
	opacity: [0,1],
	translateZ: 0,
	easing: "easeOutExpo",
	duration: 950,
	delay: (el, i) => 70*i
});

var content_animation = anime.timeline({loop:false})

content_animation.add({
	targets: '.ml2',
	scale: [4,1],
	opacity: [0,1],
	translateZ: 0,
	easing: "easeOutExpo",
	duration: 950,
	delay: (el, i) => 70*i
});

$('#nav-3dscatter-tab').on('click',function(e){
	animation.restart();
	content_animation.restart();
	animation.stop();
	content_animation.stop();
});

$('#nav-bubble-tab').on('click',function(e){
	animation.restart();
	content_animation.restart();
	animation.stop();
	content_animation.stop();
});

$('#nav-histogram-tab').on('click',function(e){
	animation.restart();
	content_animation.restart();
	animation.stop();
	content_animation.stop();
});