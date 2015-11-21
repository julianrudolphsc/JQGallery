var pictures = [

	{
		"title" : "Elephant Ass Thailand",
		"description": "A Thai elephants ass, in all it's glory",
		"url": "img/eleass.jpg"
	},
	{
		"title": "Historic House Thailand",
		"description": "A historic house in Thailand",
		"url": "img/Historic-House-Thailand.jpg"
	},
	{
		"title": "Thailand Beach",
		"description": "Thai Beach",
		"url": "img/Thailand-2.jpg"
	},
	{
		"title": "Bangkok House",
		"description": "Beautiful house in BKK",
		"url": "img/Thailandbkk.jpg"
	}
];

$(document).ready(function(){
	var count = 0;
	$(pictures).each(function(){
		var img = $(document.createElement("img"));
		$(img).attr({
			"src":this.url,
			"data-index":count,
			"title":this.title,
			"alt":this.description
		});
		
		$(img).appendTo("figure");
		var thumb = $(img).clone().appendTo("nav");
		$(thumb).bind("click",function(){
			$("figure img").each(function(){
				$(this).addClass("hidden");
			});
			$('figure img[data-index="'+this.getAttribute("data-index")+'"]').removeClass("hidden");
			$('h3').html(this.getAttribute("title"));
			$('figcaption').html(this.getAttribute("alt"));
		});
		count++;
	});
});