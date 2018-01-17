
window.onload = function(){


			/*Суть*/
		
$( "#specification" ).bind( "click", function() {
  
  attribute_value = $("#definition").css("display");
	 
	if ( attribute_value =="block"){
		$("#definition").css("display", "none");
				
				/*Анимированная стрелка*/
	$('#arrow').animate({  borderSpacing: -360 }, {
    step: function(now,fx) {
      $(this).css('-webkit-transform','rotate('+now+'deg)'); 
      $(this).css('-moz-transform','rotate('+now+'deg)');
      $(this).css('transform','rotate('+now+'deg)');
    },
    duration:'slow'
},'linear');
	}
	
  else{
	  $("#definition").css("display", "block");
	  
	    /*Анимированная стрелка*/
		$('#arrow').animate({  borderSpacing: -180 }, {
		step: function(now,fx) {
		$(this).css('-webkit-transform','rotate('+now+'deg)'); 
		$(this).css('-moz-transform','rotate('+now+'deg)');
		$(this).css('transform','rotate('+now+'deg)');
    },
    duration:'slow'
},'linear');
  }
  });
     /*Выбери подарок*/
  $( "#contribution h4" ).bind( "click", function() {
  
 list_gifts = $("#list_gifts").css("display");
      
   if ( list_gifts =="block"){
    $("#list_gifts").css("display", "none");}
    else{
	$("#list_gifts").css("display", "block");
	$("#packing_options").css("display", "none");
	$("#time_New_Year").css("display", "none");}
	})
 
	/*Упакуй подарок*/
  $( "#packaging h4" ).bind( "click", function() {
  
 packing_options = $("#packing_options").css("display");
      
   if ( packing_options =="block"){
    $("#packing_options").css("display", "none");}
    else{
	$("#packing_options").css("display", "block");
	$("#list_gifts").css("display", "none");
	$("#time_New_Year").css("display", "none");}
 
 
  })
 
/*Кнопка-ссылка Хочу стать волшебником */ 
  $( "h3" ).bind( "click", function() {

	 $("#list_gifts").css("display", "block");
	 $("#definition").css("display", "none");
	 $("#packing_options").css("display", "none");
  })
		
		
/*Цвета коробок*/
 
		$("#magenta").bind( "click", function() {
		$("#gift_box img").attr("src", "images/siluet-korobki_color.png");
		$("#gift_box img").css("background-color", "#9681b6");}
		);
		
		$("#green" ).bind( "click", function() {
		$("#gift_box img").css("background-color", "#79c471");	
		$("#gift_box img").attr("src", "images/siluet-korobki_color.png");}
		);
				
		$( "#blue" ).bind( "click", function() {
		$("#gift_box img").css("background-color", "#4daab2");	
		$("#gift_box img").attr("src", "images/siluet-korobki_color.png");}
		);
		
		$( "#yellow" ).bind( "click", function() {
		$("#gift_box img").css("background-color", "#fef668");	
		$("#gift_box img").attr("src", "images/siluet-korobki_color.png");}
		);
		
		$( "#white" ).bind( "click", function() {
		$("#gift_box img").css("background-color", "white");	
		$("#gift_box img").attr("src", "images/siluet-korobki_color.png");}
		);
		
		$("#pink" ).bind( "click", function() {
		$("#gift_box img").css("background-color", "#db0634");	
		$("#gift_box img").attr("src", "images/siluet-korobki_color.png");}
		);


		/*Управление узором коробки */
		var weave = ["yzor1.png", "yzor2.png", "yzor3.png", "yzor4.png", "yzor5.png"];
		var z = 0;
		
		$( "#strelka_left" ).bind( "click", function() {
			z = z + 1;
			x = weave[z];
			$("#gift_box img").css("background-image", "url(images/"+ x +")");
			$("#gift_box img").attr("src", "images/siluet-korobki_color.png");
			$("#gift_box img").css("background-color", "#001e78");
			if (x==undefined){
			z=0;}
			});
		
		$( "#strelka_right" ).bind( "click", function() {
			z = z - 1;
			x = weave[z];
			$("#gift_box img").css("background-image", "url(images/"+ x +")");
			$("#gift_box img").attr("src", "images/siluet-korobki_color.png");
			$("#gift_box img").css("background-color", "#001e78");
				if (x==undefined){
			z=4;}
		});
		
		
	/*Цвета лент*/	
		
		$("#magenta_tape").bind( "click", function() {
						
			if($("#gift_box img").css("background-color")== "rgba(0, 0, 0, 0)"){
					$("#gift_box img").css("background-color", "#001e78");}
		$("#tape").css("background", "#9681b6");
		$("#gift_box img").attr("src", "images/siluet-korobki_color.png");}
		);
		
		$("#green_tape").bind( "click", function() {
			if($("#gift_box img").css("background-color")== "rgba(0, 0, 0, 0)"){
			$("#gift_box img").css("background-color", "#001e78");}
		$("#tape").css("background", "#79c471");
		$("#gift_box img").attr("src", "images/siluet-korobki_color.png");}
		);
				
		$("#blue_tape").bind( "click", function() {
		if($("#gift_box img").css("background-color")== "rgba(0, 0, 0, 0)"){
			$("#gift_box img").css("background-color", "#001e78");}
		$("#tape").css("background", "#4daab2");
		$("#gift_box img").attr("src", "images/siluet-korobki_color.png");}
		);
		
		$("#yellow_tape").bind( "click", function() {
		if($("#gift_box img").css("background-color")== "rgba(0, 0, 0, 0)"){
			$("#gift_box img").css("background-color", "#001e78");}
		$("#tape").css("background", "#fef668");
		$("#gift_box img").attr("src", "images/siluet-korobki_color.png");}
		);
		
		$("#white_tape").bind( "click", function() {
		if($("#gift_box img").css("background-color")== "rgba(0, 0, 0, 0)"){
			$("#gift_box img").css("background-color", "#001e78");}
		$("#tape").css("background", "white");
		$("#gift_box img").attr("src", "images/siluet-korobki_color.png");}
		);
		
		$("#pink_tape").bind( "click", function() {
		if($("#gift_box img").css("background-color")== "rgba(0, 0, 0, 0)"){
			$("#gift_box img").css("background-color", "#001e78");}
		$("#tape").css("background", "#db0634");
		$("#gift_box img").attr("src", "images/siluet-korobki_color.png");}
		);
		
		
		/*Варианты бантиков*/
		
		
	var bow = ["bant1-1.png", "bant1-2.png", "bant1-3.png", "bant1-4.png", "bant1-5.png", "bant1-7.png", "bant1-6.png", "bant2-1.png", "bant2-2.png", "bant2-3.png", "bant2-4.png", "bant2-5.png", "bant2-6.png", "bant2-7.png"];

	var bant = 0;
	
	$("#strelka_right_bow").bind( "click", function() {
											
			if (bant>=14){
			bant=0;}
			
			if($("#gift_box img").css("background-color")== "rgba(0, 0, 0, 0)"){
			$("#gift_box img").css("background-color", "#001e78");
			$("#gift_box img").attr("src", "images/siluet-korobki_color.png");
			}
			x = bow[bant];
			bant = bant + 1;
			$("#bow").css("background-image", "url(images/bow/"+ x +")");
			
			});
		
		$("#strelka_left_bow" ).bind( "click", function() {
			
			if($("#gift_box img").css("background-color")== "rgba(0, 0, 0, 0)"){
			$("#gift_box img").css("background-color", "#001e78");
			$("#gift_box img").attr("src", "images/siluet-korobki_color.png");
			}
			if(bant<=0){bant = 14;}
			bant = bant - 1;
			x = bow[bant];
			$("#bow").css("background-image", "url(images/bow/"+ x +")");
			
		});
		
		/*Обратный отсчет времени до Нового года*/
function calculagraph(){
time= new Date();
newYear = new Date(2018, 0, 1, 0, 0, 0, 0);

var timeLeft=(newYear.getTime()-time.getTime()); 
var seconds = (parseInt(timeLeft/1000));
var minutes = (parseInt(seconds/60));
var hours = (parseInt(minutes/60));
var days =(parseInt(hours/24));


var seconds_adapted = seconds - (60*minutes);
var minutes_adapted = minutes - (60*hours);
var hours_adapted = hours - (24*days);

 
		if (days<=9){
		document.getElementById('day_сount').innerHTML="0"+days;}
		else{
		document.getElementById('day_сount').innerHTML=(days);}
		
		if (hours_adapted<=9){
		document.getElementById('hour_сount').innerHTML="0"+hours_adapted;}
		else{
		document.getElementById('hour_сount').innerHTML=hours_adapted;}
		
		if (minutes_adapted<=9){
		document.getElementById('minute_сountdown').innerHTML="0"+minutes_adapted;}
		else{
		document.getElementById('minute_сountdown').innerHTML=minutes_adapted;}
	
		if (seconds_adapted<=9){
		document.getElementById('countdown_seconds').innerHTML="0"+seconds_adapted;}
		else{
		document.getElementById('countdown_seconds').innerHTML=seconds_adapted;}
		
	}
		calculagraph();
		setInterval(calculagraph, 1000);
		}
	
		
