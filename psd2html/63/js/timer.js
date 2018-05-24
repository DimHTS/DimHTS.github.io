function get_timer_403() {	
   
	var day = "00";
	var hour = new Date().getHours();
	var min = new Date().getMinutes();
	var sec = new Date().getSeconds();
	
	hour = 23 - hour;
	min = 59 - min;
	sec = 59 - sec;
	
	if(hour < 10){hour = '0' + hour;}
	if(min < 10){min = '0' + min;}
	if(sec < 10){sec = '0' + sec;}
	
	
	$(".dTimer .result-day").text(day);		
	$(".dTimer .result-hour").text(hour);		
	$(".dTimer .result-minute").text(min);		
	$(".dTimer .result-second").text(sec);		
   
}

function getfrominputs_403(){	

	  get_timer_403();	
	
    setInterval(function(){			
		get_timer_403();
	},1000);}

$(document).ready(function(){ getfrominputs_403(); });		
