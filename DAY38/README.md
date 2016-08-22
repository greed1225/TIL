# JQuerry DAY 36 2016-08-22

### https://modernizr.com/
>
- Modernizr = 사용자의 브라우저가 html5, css3를 어느정도 지원하는지 체크해 줍니다. (기능 제공은 x)
- 사용자의 디바이스 환경을 체크해줍니다.
- https://modernizr.com/ > Download > 필요한 부분을 Checkd하여 쓰고자하는 라이브러리 사용이 가능하다. 
- Modernizr의 전체적인 기능을 모두 다운로드 받기위해선 cdn을 사용한다.

- Detectizr = Modernizr의 하위 개념이며, 디바이스를 감지하는데 사용된다.
- position:sticky를 지원한다.
- Detectizr 외부에 보여지지않는 함수이다.

```js
Detectizr.detect = function(settings) {
	return detect(settings); // closer 함수와 비슷한 기능
	}
}
```

### aria 부분 공부하기 ->> aria-cheete sheet
>
https://www.w3.org/TR/wai-aria-practices/#combobox


### 부족한 시간을 줄여주기 위한 방책으로 visula Design이 구현되기전에 UI-KIT이 필요하다. 
- Resource에 있는 파일을 prototype으로 넣어서 전체적으로 내용을 가져온다.
- jQuery 가 다른 라이브러리와 충돌하지않도록해야한다.

### off-canvas animation을 주는 방법
- 자바스크립트와 달리 손쉽게 제어가 가능하나 툴킷 같은 기능을 제공한다.

### JQuery의 강력한 선택자는 Sizzle.js 엔진 

```js
$wrapper.animate({
	'left': 0
})
```

### DOCUMENT 및 선택자 확인 
- http://codylindley.com/jqueryselectors/