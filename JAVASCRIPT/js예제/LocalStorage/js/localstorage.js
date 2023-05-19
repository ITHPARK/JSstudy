

// 브라우저에 데이터를 저장하는 방법으로, localStorage와 sessionStorag가 있다.
// 문자, 숫자를 저장할 수 있으며 최대 5MB까지 저장 가능

// localStorage와 sessionStorage의 차이점
// *localStorage는 탭을 닫아도 계속 유지되고
// *sessionStorage는 탭을 닫으면 사라짐 

// 데이터 저장은 key : value 형태로 숫자, 문자 저 장가능

// ex) localStorage.setItem("key이름", 넣을 데이터) 

localStorage.setItem('example', 'HI!');

console.log(localStorage.getItem('example'));
//HI!

//localStorage에 저장할 배열
const user = {
    name: "testsam17",
    age: 17,
    email: "testsam17@uniwiz.co.kr"
}

//.stringify = 객체를 JSON형식의 문자열로 변환
const userString = JSON.stringify(user);
console.log(userString);

//JSON 형식으로 변환한 객체를 local storage에 저장
localStorage.setItem("userInfo", userString);

const userStr = localStorage.getItem("userInfo") ;

//.parse = JSON형식의 문자열을 객체나, 배열로 변경해준다.
const userInfoObj = JSON.parse(userStr);

console.log(userInfoObj.email);








