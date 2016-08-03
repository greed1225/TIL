#DOM Script Start ! 2016-08-03
>
* Document - 문서
* Object- 문서의 요소 (객체)
* Model - 관계도

- 문서객체모델(DOM)을 핸들링(Heandling) 할 수 있는 클라이언트 사이드 언어이다.
- 자바스크립트(Javascript) XHTML, CSS와 함께 웹 문서에서 가장 많이 사용되는 언어이다.
- 가볍고 배우기쉽다고 알려져있지만 환경자체가 힘들다. 고려사항이 많아 충분한 경험이 요구된다.
- Flash actionscrpit (플래시 액션스크립트)형제 언어이다.
- 웹의 전유물이 아니다.

### 노드? 연결망의 특정 지점
- 루트노드? 노드트리의 시작
- 문서(document) 노드의 집합
- 모든 노드의 부모가 되는것은 루트 노드이다.

-요소노드(element node)
<element> 태그는 요소의 이름을 붙인것 </element>	

### 노드 Blowser 확인
```
document.ELEMENT_NODE
1
document.body.nodeType
1
document.COMMENT_NODE
8
```

### DOM - Method
- getElementByld() // 집합을 가져오는 것 - 그만큼 책임져야 하는 부분이 크다! 
  !duplication error가 나면 동일한 ID가 생성 되었을때 
- getElementsByle() //
- helper function --> JQuerry 

### 테스팅은 캐시를 이용하거나 메모리한다고 할땐 변수를 포함하는것중 하나.

###(TIP) CSS는 구조(Model)를 디자인하는 표현(View) 역할을 수행한다! (CSS 선택자로 쉽게 접근 가능하다.)
- CSS 문서의 요소를 꾸미기 위해선 일종의 패턴(pattern)이 있다.
- 대상을 선택하고 꾸미려는 속성:값으로 선언한다.
- 화면의 view는 Model이 중요 요소이다.
- 차이점이 있다면 이벤트 발생에 대한 부분이다.

1. Function
- 함수명을 정해서 Function을 지정해주는것
- 익명함수 - 재 사용성의 목적이 아니고,  
2. 리터럴
3. 생성자 (추 후에 이해..)

### 리터럴?
- 변수의 보관된 값 자체 (함수가 들어있으면 함수 리터럴, 숫자 리터럴)
### 문서_대상.이벤트 = 할일(함수);

### DOM - Event, Evemt Handle

### API (Aplication Protocol Interpace) = 프로그램 사용설명서


# DOMscript - 정리
- onclick = function() {...} // 선택한 대상을 클릭할 경우 일어나는 경우 일어나는 일을 제어하는 것
- ondblcklick = function() {...} // 선택한 대상을
더블 클릭할 경우 일어나는ㄴ 일을 제어하는 것
- onmouseover = function() {...} // 선택한 대상에 마우스 오버 시에 일어나는 일을 제어하는 것
- onmouseout = function() {...} // 선택한 대상에 마우스 아웃 시 일어나는 일을 제어하는 것.

- DOM 레벨 0 // DOM(Document Object Model) Level 0
- 해당요소의 속성을 교체할 수 있는 API 제공
- DOM을 통하면 문서내에 객체 접근할 수 있다.
- 바로 실행하는것이 아니라 언제 실행하는지를 알아볼 수 있다.
- 사용자가 값을 입력한는것. 사용자가 텍스트를 입력하면  자동으로 설정한 값을 볼 수 있는 형태.
