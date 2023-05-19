
const chkInfo = document.querySelector('.checkPw');
let chkMsg = ""
let chkPw = "";
let regex = new RegExp ('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

//로그인 페이지에서 사용자가 입력할 정보
let enterId = "";
let enterPw = "";
//로그인 정보 객체
let userInfoObj = "";


let loginScript = {

    linkNewAccountPage: () => {
    
        location.href = "./newAccount.html"
        
    },
    
    setData : (e) => {
    
            if(e.target.id == "newId"){setAccountInfo.userId = e.target.value;}
            if(e.target.id == "newPw"){setAccountInfo.userPw = e.target.value;}
            
            
            if(e.target.id == "newPwChk") {
                chkPw = e.target.value;  
                
                if(e.target.value.length > 0){
                    chkInfo.classList.add("active");
                    
                    if(setAccountInfo.userPw == chkPw) {
                        
                        chkMsg = "비밀번호가 일치합니다"
                        
                        chkInfo.innerHTML = chkMsg;
                        chkInfo.classList.add("c_b");
                        chkInfo.classList.remove("c_r");
                        
                    }else {
                        
                        chkMsg = "비밀번호가 일치하지 않습니다"
                        
                        chkInfo.innerHTML = chkMsg;
                        chkInfo.classList.add("c_r");
                        chkInfo.classList.remove("c_b");
                        
                    }
                }
            }
            
            if(e.target.id == "newEmail"){setAccountInfo.userEm = e.target.value;}
    },
    
    //회원 가입 버튼 눌렀을 때 
    completeAcc : () => {
        
        //모든 테이터가 입력이 되었는지 확인
        if(setAccountInfo.userId == '' || setAccountInfo.userPw == '' || setAccountInfo.userEm == '') {
            alert("모든 정보를 입력해주세요.");
            return false;
        }
        
        //비밀번호 확인이 맞는 지 확인
        if(setAccountInfo.userPw != chkPw) {
            alert("비밀번호가 맞지 않습니다. 다시 확인해주세요")
        }
        
        //이메일 형식 체크
        if(!regex.test(setAccountInfo.userEm)) {
            alert("이메일 형식이 올바르지 않습니다. 다시 확인해주세요")
        }
        try {    
    
            
            //모든 데이터가 입력됐을 때 데이터를 받은 객체를 JSON 형태로 변환한다.
            const infoTypeJson = JSON.stringify(setAccountInfo);
            
            console.log(infoTypeJson);
            
            localStorage.setItem("accountInfo", infoTypeJson);
            
            
            alert("회원가입이 완료되었습니다. 로그인 페이지로 이동합니다");
            
            // location.href = "./login.html"
            
        }catch(err){
            console.log(err.name);
            console.log(err.massage);
            console.log(err.stack);ㅓ
            alert("오류가 발생했습니다.");
        }    
        
    },
    
    login: (e) => {
    
        //로컬스토리지에서 값을 가져와서 변수에 할당한 후 JSON 문자를 다시 객체로 변환 후 비교
        const userStr = localStorage.getItem("accountInfo");
        console.log(userStr);
        
        userInfoObj = JSON.parse(userStr);
        console.log(userInfoObj);
    
        if(e.target.id == "id" || e.target.id == "pw") {
            
            if(e.target.id == "id") {enterId = e.target.value;}
            if(e.target.id == "pw") {enterPw = e.target.value;}
            
        }else {
            
            if( enterId == userInfoObj.userId && enterPw == Number(userInfoObj.userPw) ){
                alert("환영합니다");
            }else {
                alert("입력하신 정보가 일치하지 않습니다.");
            }
            
        }
        
    }
    
}

let setAccountInfo = {

    userId : "",
    userPw : "",
    userEm : ""
    
}
