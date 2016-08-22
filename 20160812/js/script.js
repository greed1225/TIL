// 변수를 선언하자.
var my_btn;
// 문서내에 버튼요소를 생성하자.
btn = document.createElement('button');
// 버튼내의 텍스트를 선언하자.
var text;
// 문서내 텍스트노드를 생성하자.
text = document.createTextNode('text');
//버튼이 기준이되고 텍스트노드를 자식요소로 생성해주자.
button.appendChild(textnode);
// 바디에 버튼 요소를 자식으로 붙이자
document.body.appendChild(button);

