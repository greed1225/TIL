#  position properties

## static [Default]
>
* static은 기본 속성이다. 
* position(static): static; 기본 속성값이 설정된 엘리먼트 자체는 특정한 위치값을 가진것이 아니다.


## relative  [기준:self] 
>
* 상대 위치가 지정되어 있다.
* 일반 흐름 (Nomal Flow)을 깨지않으며, 별도의 프로퍼티를 정하지 않는 이상은 static과 동일하게 동작하는 속성을 말한다.
* 상대 위치가 설정된 엘리먼트에 top이나 right, bottom, left 를 지정하게되면
  기본위치가 다르게  위치가 조정된다.


## fixed [(기준: screen, viewport(고정값)]
>
* 기본적으로 absolute와 유사하게 처리되어 보이나, 처리 결과가 다르다.
* 고정형태(fixed)로 위치가 설정되고 화면 스크롤과 상관 없이 항상 그자리를 유지하게 된다.
 * 모바일 브라우저의 경우 고정 엘리먼트 지원이 불안할 수 있다.

## absolute [기준: offsetParent]
>
* 가장 다루기 까다로운 위치 지정 값이다.
* 가장 가까운곳에 위치한 조상 엘리먼트에  상대적으로 위치 지정되는것을 제외하면
fixed와 비슷하게 동작한다.
* 조상 엘리먼트가 없을경우 본문을 기준으로 삼고 페이지 스크롤에 따라 움직인다.
* 위치가 지정된 엘리먼트는 position이 static으로 지정되지 않은 엘리먼트를 가리킨다.
* 일반 흐름(Nomal Flow)에서 벗어난다. (Float과 유사하다.)
* display 속성 값이 block 으로 변경 된다.


* offsetParent
* 자식요소를 포함하는 가장 가까운 부모 요소 중에 positio 속성이 있으며 static이 아닌 부모요소를 말한다.
* absolute 적용 된 요소의 부모요소를 relative를 설정하는 이유는?
relative는 일반흐름을 깨지 않는다. 

## Float와 차이점은?
* Float의 경우 부모요소가 Float된 요소를 감싸게 하는 방법이 있지만
absolute의 경우 별도의 heught 높이를 제공해야 한다.


## z-index 
* 속성의 경우 반드시 position 속성(static 제외!)와 함께 사용된다.
* 속성 값은 양의 정수, 0, 음의 정수 사용이 가능하다.
* 단 설정 시 1단위가 아닌 10 또는 100 단위로 설정하는 것이 유지보수 관점에서 권장한다.
* TIP! : [부모 A, [자식 C]] + [부모 B, 자식 D]