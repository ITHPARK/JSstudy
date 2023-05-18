window.onload = () => {

	// element.classList.add/remove('class명') : class를 추가하거나 제거
	// element.classList.toggle('class명') : class가 존재할 경우 class를 제거하고, 그렇지 않은 경우엔 추가
	// element.classList.contains('class명') : class 존재 여부에 따라 true/false를 반환


	const faqContainer =  document.querySelectorAll('.faq-txt');
	console.log(faqContainer);

	const faqAnswer = document.querySelectorAll('.faq-answer');

	const btnAllClose = document.getElementById('btn-all-close');
	
	
	for(let i = 0; i < faqContainer.length; i ++){
		faqContainer[i].addEventListener('click', function(){

			if(faqAnswer[i].classList.contains('active')){
				faqAnswer[i].classList.remove('active')	
			}else {
				faqAnswer[i].classList.add('active');
			}
			
		});
	}

	btnAllClose.addEventListener('click', function(){
		for(let i = 0; i < faqAnswer.length; i++){
			faqAnswer[i].classList.remove('active');
		}
	});

}

