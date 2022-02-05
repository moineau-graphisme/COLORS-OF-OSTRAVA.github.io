var displaying_logo_animation = false;
function load_js(){
    var btn = document.getElementById('my-btn');
    var gif_img = document.getElementById('gif_img');
    var logo = document.getElementById('logo');
    btn.onclick = function(event){
        if(displaying_logo_animation){
            return;
        }else{
            displaying_logo_animation = true;
        }
        gif_img.src = "full doc/output-onlinegiftools.gif"
        gif_img.style.display = "block";
        logo.style.opacity = "0%";

        setTimeout(function(){
            gif_img.style.display = "none";
            logo.style.opacity = "100%";
            displaying_logo_animation = false;
        }, 1700);
    }
}