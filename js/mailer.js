$_("form")[0].addEventListener("submit", send_mail, false);
$_("form")[1].addEventListener("submit", send_massage, false);


function send_mail(e){

	e.preventDefault();

	if($_("input[name='full_name']")[0].value.length < 2){
		$_(".err-form.name-err")[0].innerHTML = "Введите Ваше имя.";
		return false;
	}
	if($_("input[name='phone_number']")[0].value.length > 13 || $_("input[name='phone_number']")[0].value.length < 10){
		$_(".err-form.phone-err")[0].innerHTML = "Введите Корректный номер телефона.";
		return false;
	}

	var data = new FormData();
	data.append('full_name', $_("input[name='full_name']")[0].value);
	data.append('course', $_("select[name='course_select']")[0].value);
	data.append('age', $_("select[name='age_select']")[0].value);
	data.append('region', $_("select[name='region_select']")[0].value);
	data.append('phone', $_("input[name='phone_number']")[0].value);
	data.append('text', $_("textarea[name='u_text']")[0].value);


	let to_display_data = "";
	for (var key of data.entries()) {
	    to_display_data += key[0] + ', ' + key[1] + '\n'; 
	}
	console.log(to_display_data);

	$_(".loading-wrp")[0].removeAttribute("hidden");
	$_(".sub-form-wrap.anim123 form")[0].style = "display: flex; justify-content: center; align-items: center; flex-direction: column;";
	$_(".sub-form-wrap.anim123 form")[0].style.minHeight = $_(".sub-form-wrap.anim123")[0].clientHeight + "px";
	$_(".form-hd")[0].setAttribute("hidden","");
	$_("p.form-title")[0].setAttribute("hidden","");

	 // send data to api
	var xhr = new XMLHttpRequest();
	xhr.open("POST", "https://catscode.club/mail/", true);

	xhr.onload = function () {
	    // do something to response
	    let respObj = this.responseText;
	    console.log(respObj);
	    if(JSON.parse(respObj) === true){
	    	$_("p.form-title")[0].style.opacity = "0";
	    	$_(".form-hd")[0].style.transition = "1s";
	    	$_(".form-hd")[0].style.maxHeight = "1px";
	    	$_(".form-hd")[0].style.overflow = "hidden";
	    	$_(".thank")[0].removeAttribute("hidden");
	    	$_(".loading-wrp")[0].setAttribute("hidden","");

	    }
	    else {
	    	$_(".form-hd")[0].style.transition = "1s";
	    	$_(".form-hd")[0].style.maxHeight = "1px";
	    	$_(".form-hd")[0].style.overflow = "hidden";
	    	$_(".form-hd")[0].style.opacity = "0.3";
	    	$_(".err-send")[0].removeAttribute("hidden");	
	    	$_(".loading-wrp")[0].setAttribute("hidden","");
	    }
	    
	};
	xhr.send(data);		
}



function send_massage(e){
	e.preventDefault();

	if($_("form#write_for_us input[name='full_name']")[0].value.length < 2){
		$_(".err-form.name-err-f2")[0].innerHTML = "Введите Ваше имя.";
		return false;
	}


	var data = new FormData();
	data.append('full_name', $_("input[name='full_name']")[1].value);
	data.append('phone', $_("input[name='phone']")[0].value);
	data.append('text', $_("textarea#u_text_2")[0].value);


	let to_display_data = "";
	for (var key of data.entries()) {
	    to_display_data += key[0] + ', ' + key[1] + '\n'; 
	}
	console.log(to_display_data);



	$_("form#write_for_us")[0].style = "display: flex; justify-content: center; align-items: center; flex-direction: column;";
	$_("form#write_for_us")[0].style.minHeight = $_("form#write_for_us")[0].clientHeight + "px";
	$_(".send-massage-wrap")[0].removeAttribute("hidden");
	$_(".hd-send-massage")[0].setAttribute("hidden","");


	 // send data to api
	var xhr = new XMLHttpRequest();
	xhr.open("POST", "https://catscode.club/mail/", true);

	xhr.onload = function () {
	    // do something to response
	    let respObj = this.responseText;
	    console.log(respObj);
	    if(JSON.parse(respObj) === true){
	    	$_(".hd-send-massage")[0].style.transition = "1s";
	    	$_(".hd-send-massage")[0].style.maxHeight = "1px";
	    	$_(".hd-send-massage")[0].style.overflow = "hidden";
	    	$_(".thank-fr-massage")[0].removeAttribute("hidden");
	    	$_(".send-massage-wrap")[0].setAttribute("hidden","");
	    }
	    else {
	    	$_(".hd-send-massage")[0].style.transition = "1s";
	    	$_(".hd-send-massage")[0].style.maxHeight = "1px";
	    	$_(".hd-send-massage")[0].style.overflow = "hidden";
	    	$_(".thank-fr-massage-err")[0].removeAttribute("hidden");
	    	$_(".send-massage-wrap")[0].setAttribute("hidden","");
	    }
	    
	};
	xhr.send(data);		
}