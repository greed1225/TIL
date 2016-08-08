# DOM(Document Object Model) JavaScript 2016-08-08

### undefinde, null 이 객체가 아닌 이유
>
- 자바스크립트는 오류가 있다! 설계오류 (ex. 띄어쓰기 혹은 .을 더넣으면 값이 나온다던지.)
- objdect ? 생성자임과 동시에 함수를 얘기한다. >> 모든객체의 종
- constructor ?
- 자바스크립트 객체가 아닌것은? undefind,null // tostring을 가지고 있지않기때문에 객체가 아니다 !!
- 모든 객체의 종(소유한 능력) 
- .toString() -숫자나 boolean값의 객체는 아니지만 wrapper 객체라 한다. 
- 대상이 아닌지 맞는지를 판별해주는 것.

###  데이터형 객체 : Number, String, Bloolean, Array, Function, Object, Math, Date, RegExp, ...
> 나열된 객체 생성자로부터 태어난 객체(인스턴스)를 통해 확인(검증)

```
!!'날이 더워요.'.toString
true
!!document.body.yamoo9
false
!!ture.toString
```

```
!!true.toString
true
!!false.toString
true
```
- 형 변환하는 이유(!!)? 느낌표!! 붙이게 되면 있다, 없다를 확인해 줄 있음
- 숫자값은 실제로 그자체이기때문에 값을 캡슐화해주는것이 좋다. (ex. fuction) 마찬가지..
- 재사용할 수 있도록 잘게 조각내고 코딩하는 습관을 들이는것이 좋다

노드(Node)의 유형을/이름/값을 출력하는 방법
- 1. nodeType
   ELEMENT_NODE = 1
   TEXT_NODE    = 3
   COMMENT_NODE = 8
- 2. nodeName
   ELEMENT_NODE의 경우는 요소 이름을 대문자로 반환
   TEXT_NODE의 경우는 '#text' 반환
- 3. nodeValue
   TEXT_NODE의 경우만 접근이 가능
   ELEMENT_NODE의 경우는 null 반환

### nodeName 대문자로 문자열을 호출해준다.
- 문자를 대문자로 반환. 소문자로 바꿔주고 싶으면 
- .toLowerCas()를 이용한다.

### nodeType
### nodevalue 텍스트 노드에만 접근가능하다. 
- textnode와 velue는 다른의미다.
### 유사배열 ? 배열같아 보이지만 배열은 아니다.
- 배열에서 shift() 메소드 이용하면 배열 아이템(요소)를 삭제 가능하다
- 표준에서 제공해주는 getElementByID(...)를 사용하라.

### document
- getElementById('id')
- getElementsByTagName('element')

### Node ~앞에 삽입하기
- 목표노드 부모노드 insertBefore(삽입할노드, 목표노드)
- 삽입하려는 노드앞에 부모노드가 없기때문에 목표노드를 사용해 주는 형태.


### 막간 TIP
- area 요소를 써서 접근성을 높혀주는것이 좋다.
- 롤다이얼로그 식별자를 이용하여 속성을 넣어서 접근성을 높혀주자!
- 스크린리더 : mvdn 무료(최신기술 지원 가능함, 오프소스)


### 궁금한점 ?
- 원하는 대상을 children length -1, -2, -3 음수값을 쓰는 이유?




