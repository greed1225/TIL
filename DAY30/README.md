#2016.08.09

### Typeof() 단점
- null을 'object' 객체로 인식하는 점, [] >> 'object' 배열을 
  배열로 인식하지 못하는 것.
### queryAll() 전달인자를 뒤쪽에 넣는 이유?
- 사용자가 context 값을 전달하지 않았을 경우는 undefind 이다.
- if (typeof context === 'undefind')