### 2016.08.31 AngularJS DAY43
>
## AngularJS Controller
>
- 빌드과정에서 압축을 하게되면 모듈 이름을 줄여쓰게 되면 오류가 발생된다.
- 이를 방지하기위해선 []을 이용하여 모듈 이름을 줄여쓰지 못하도록 설정한다.

### as syntax - module 제작

```js
angular.module('ngApp').controller('otherCtrl', function() {
    // 컨트롤러 참조 변수
    var that = this;

    that.init_value = null;
    that.trigger    = trigger;

    function trigger() {
      console.log(that);
      if ( jq.type(that.init_value) === 'null' ) {
        that.init_value = 'otherController';
      } else {
        that.init_value = 'not initialization.';
      }
    }

    global.setTimeout(trigger, 3000);

  });
  ```