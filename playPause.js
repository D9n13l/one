var audio, playpausebtn;
function initPlayer()
{
	audio = new Audio();
	audio.src ="assets/Kalimba.mp3";
	audio.loop = false;

	playpausebtn = document.getElementById("playbutton");
	playpausebtn.addEventListener("click", playPause);

	function playPause()
	{
		if (audio.paused) 
		{
			audio.play();
			playpausebtn.style.background = "url(images/stop.png) no-repeat ";
		}
		else
		{
			audio.pause();
			playpausebtn.style.background = "url(images/play.png) no-repeat";
		}
	}
}
window.addEventListener("load", initPlayer);



