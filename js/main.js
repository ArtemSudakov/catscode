let code_bg = $_(".under-section-wrap-b1")[0];
let code_bg_2 = $_(".t-bglp-pth.t-bg")[0];
let bg_code_offset = 0;


setInterval(move_code_bg, 50);
function move_code_bg(){
	code_bg.style.backgroundPosition = 'right ' + bg_code_offset + "px";
	code_bg_2.style.backgroundPosition = 'right ' + bg_code_offset + "px";
	bg_code_offset -= 1;
	if(bg_code_offset <= -4000){
		bg_code_offset = 0;
	}


}

// deffer load image
window.addEventListener('load',defer_load );
function defer_load(){
	console.log("ready");
	let defer_im_srcs = $_("img[src_data]");
	for(let i = 0; i < defer_im_srcs.length; i++){
		defer_im_srcs[i].setAttribute("src", defer_im_srcs[i].getAttribute("src_data"));
	}
}




$_(".continue-read")[0].addEventListener("click", function(){$_(".t-bglp-pth.t-bg.relative")[0].setAttribute("style","max-height: 100000px !important;"); $_(".continue-read")[0].style.display = "none";},true);

$_(".scr_to_prereg")[0].addEventListener("click", function(){scroll_to(".section.w-bg.an-pd");},false);
$_(".scr_to_teatch")[0].addEventListener("click", function(){scroll_to(".t-bglp-pth.t-bg");},false);
$_(".scr_to_our_pr")[0].addEventListener("click", function(){scroll_to(".prvl");},false);
$_(".scr_to_we_are")[0].addEventListener("click", function(){scroll_to(".about-us-wrap");},false);
$_(".scr_to_wc")[0].addEventListener("click", function(){scroll_to(".big-title-web");},false);
$_("span.to-reg-form")[0].addEventListener("click", function(){scroll_to(".section.w-bg.an-pd");},false);


// scroll in to view
function scroll_to(selector){
	document.querySelector(selector).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
}



function $_(s){
	return document.querySelectorAll(s);
}