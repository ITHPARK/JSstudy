## 자바스크립트 연산자
* * * 
### 대입 연산자

 + 변수에 값을 대입할 때 사용하는 이항 연산자	

```C
let a = 1; // 변수 a의 값은 1
console.log(a); //1
```

### 비교 연산자

+ 주어진 값을들 비교하여 boolean 데이터 값(true 또는 false) 으로 출력한다

```C
let a = 1; 
let b = 2; 

// 좌항과 우항보다 작으면 true 아니면 false
console.log(b < c);  //true

// 좌항과 우항보다 작거나 같으면 true 아니면 false
console.log(b <= c);  //true

// 좌항과 우항보다 크면 true 아니면 false
console.log(b > c); //false

// 좌항과 우항보다 크거나 같으면 true 아니면 false
console.log(b >= c); //false

// 좌항과 우항이 같으면 true 아니면 false
console.log(b == c); //false

// 좌항과 우항이 같지 않으면 true 아니면 false
console.log(b != c) // true

```

### 동등 연산자(*==*), 일치연산자 (*===*)

+ 비교값들이 일치하면 true를 일치하지 않으면 false 반환 

**동등 연산자**

```C
let a = 1; 
let b = "1"; 

console.log(a == 1) //true 
console.log(a == "1") //true 
console.log(a == b) //true 
```

동등 연산자는 **데이터의 타입**에 관계없이 값만 일치하게되면 true를 반환한다.
따라서 **1(number) == "1"(string)** 숫자와 문자지만 값은 똑같이 1이기 때문에 true를 반환하게 된다.

**일치 연산자**

```C
let a = 1; 
let b = "1"; 

console.log(a === 1) //true 
console.log(a === "1") //false 
console.log(a === b) //false 
```

일치 연산자는 값 뿐만 아니라 **데이터의 타입**도 일치해야 true를 반환한다.
따라서 변수 a에 할당된 숫자 1과 변수 b에 할당된 문자열 1은 데이터 타입이 다르므로 false를 반환한다.


### null과 undefiend

+ null과 undefined는 둘다 값이 없음을 나타내지만
	- _**null**은 작성자가 의도적으로 값을 정의 하지 않은 상태_
	- _**undefined** 는 작성자가 의도치 않게 값을 정의 하지 않은 상태_

	이렇게 구분이 가능하다

```C
console.log(null == undefined) //true
console.log(null === undefined) //false 
```
이렇게 값은 같지만 데이터 타입이 다른것을 확인 할 수 있다.


### 부정연산자

+ 부정연산자  **!=** 는  **==** 와 정반대의 결과를 보여준다.

```C
console.log(1 != 2) //true 
console.log(1 != "1") //false 
console.log("a" != "a") //false 
console.log("a" != "b") //true z
```



### 논리연산자

#### '||' (OR)

```C
result = (a || b);
```

OR 연산자는 불린값을 조작하는데 쓰인다. 인수 중 하나라도 `true`면 결과값으로 `true`를 반환하고 모든 인수가 `false`면 `false`를 반환한다


```C
console.log( true || true )//true
console.log( true || false )//true
console.log( false || true )//true
console.log( false || false )//false
```
피연산자가 모두 `false`인 경우를 뺴고는 연산 결과는 항상 `true`를 보여준다.
피연산자가 불린형이 아니면, 평가를 위해 불린형으로 변환된다


#### 첫 번째 true를 찾는 OR 연산자 '||'

OR 연산자와 피연산자가 여러개인 경우

```C
result = value1 || value2 || value3;
```
OR 연산자의 연산 순서는

* 가장 왼쪽부터 시작해서 피연산자를 평가한다.
* 각 피연산자를 불린형으로 변환 후 그 값이 `true`면 연산을 멈추고 해당 피연산자의 __변환 전 값__ 을 반환한다.
* __모든 피연산자를 평가한 경우에(모든 피연산자가 `false`로 평가된 경우) 가장 마지막 피연산자를 반환__

```c
console.log(1 || 0) //1
console.log(1 || true || 0) //1
console.log(false || 1 || 0) //1
console.log(false || "a" || undefined) //"a"
console.log(0 || false || undefined) //undefined 피연산자가 모두 false 일때
```

#### AND 연산자 '&&'

AND 연산자의 경우 모든 피연산자를 평가했을 때 `true`를 반환하면 결과 값으로 `true` 를 반환한다. 그외의 경우는 `false`를 반환한다.


```C
result = value1 && value2;
```

#### 첫 번째 false를 찾는 AND 연산자 ‘&&’

```c
console.log(1 && 0) //0
console.log(1 && true && 0) //0
console.log(false && 1 && 0) //false
console.log(false && "a" && undefined) //false
console.log(true && "a" && 1) //1
```
* 가장 왼쪽 피연산자부터 시작해 오른쪽으로 나아가며 피연산자를 평가.
* 각 피연산자는 불린형으로 변환, 값이 `false` 로 평가되면 연신을 멈추고 __변환 전의__ 값을 반환한다.
* __모든 피연산자를 평가한 경우에(모든 피연산자가 `true`로 평가된 경우) 가장 마지막 피연산자를 반환__

### NOT 연산자

```C
result = !value;
```

* 피연산자를 불린형으로 변환.
* 변환된 값을 반환

```C
console.log(!true);//false
console.log(!false);//true
console.log(!1); //false
```





