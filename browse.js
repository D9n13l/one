/*
function browseFile(){
    var x = document.getElementById("browsebutton");
    var txt = "";
    if ('files' in x) {
        if (x.files.length == 0) {
            txt = "Select one or more files.";
        } else {
            for (var i = 0; i < x.files.length; i++) {
                txt += "<br><strong>" + (i+1) + ". file</strong><br>";
                var file = x.files[i];
                if ('name' in file) {
                    txt += "name: " + file.name + "<br>";
                }
                if ('size' in file) {
                    txt += "size: " + file.size + " bytes <br>";
                }
            }
        }
    } 
    else {
        if (x.value == "") {
            txt += "Select one or more files.";
        } else {
            txt += "The files property is not supported by your browser!";
            txt  += "<br>The path of the selected file: " + x.value; 
        }
    }
    document.getElementById("songs").innerHTML = txt;

    /*
    var $audio = $('#myAudio');
    $('input').on('change', function(e) {
      var target = e.currentTarget;
      var file = target.files[0];
      var reader = new FileReader();
      
      console.log($audio[0]);
       if (target.files && file) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $audio.attr('src', e.target.result);
                $audio.play();
            }
            reader.readAsDataURL(file);
        }
    });

    */

var inp = document.getElementById('browsebutton');
for (var i = 0; i < inp.files.length; ++i)
{
      var name = inp.files.item(i).name;
      alert("here is a file name: " + name);
}
