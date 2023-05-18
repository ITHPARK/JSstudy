const startBtn = document.querySelector(".btn_start");
const scoreBox = document.querySelector(".score");
const curScore = document.querySelector(".curScore");
const timer = document.querySelector(".timer");

//hole 클래스를 가진 태그들을 nodelist의 배열로 사용가능
const hole = document.querySelectorAll(".hole");
const mole = document.querySelectorAll(".a");
let random = '';
//내 점수
let muyScore = 0;


let gameScript = {

     
    //시간 제한 
    time: 60,
    
    init: function () {
        for(let k = 0; k < hole.length; k++){
            hole[k].childNodes[5].addEventListener("click", function(e){
            
                if(hole[k].contains(e.target)){
                    hole[random].classList.remove("active");    
                    muyScore++;
                    
                    console.log(muyScore);
                    
                    curScore.innerHTML= muyScore;
                }
            });
        }  
        
        curScore.innerHTML = muyScore;
        timer.innerHTML = gameScript.time;
    },
    
    timer: function(){
        gameScript.time--;
        timer.innerHTML = gameScript.time;
    },
    
    stopTimer: function(){
        clearInterval(timer);
    },
    
    startGame : function () {
    
        startBtn.classList.add("hide");
        scoreBox.classList.add("active");
        timer.classList.add("active");

        //시작 버튼을 누르고 1초 뒤에 게임이 시작된다
        setTimeout(function(){
            
            setInterval(() => {
                
                if(gameScript.time <= 0){
                    gameScript.stopTimer();
                }else {
                    gameScript.timer();
                }
                
            }, 1000);
            
            
            setInterval(function(){
            
                if(gameScript.time > 0){
                
                    gameScript.moleShow();
                }
                
            }, 900);
            
            
        }, 1000); 
        
    },
    
    //두더지 올라오기
    moleShow : function(){
        
        random = Math.floor(Math.random() * 9);
        
        hole[random].classList.add("active");
        
        
        this.moleHide();
    },
    
    //두더지 내려가기
    moleHide: function(){
        setTimeout(function(){
            hole[random].classList.remove("active");
        }, 800);
    }
    
    
}


gameScript.init();










