/*! dom-script.js */

// 다음 HTML 코드를 동적으로 <body> 요소 내부에 추가해보세요.
// <div class="modal">
//   <h2 class="modal-title">Modal Window</h2>
//   <p class="modal-desc">Modal Window Content....</p>
//   <button class="modal-cta">send message</button>
//   <button class="modal-close" aria-label="close modal window">x</button>
// </div>

// 노드 생성
var modal = document.createElement('div');
// 노드 속성 설정
modal.setAttribute('class', 'modal');
//------------------------------------------
var modal_title = document.createElement('h2');
//------------------------------------------
var modal_desc = document.createElement('p');
var modal_desc_txt = document.createTextNode('Modal Window Content....');
modal_desc.setAttribute('class', 'modal-desc');
modal_desc.appendChild(modal_desc_txt);
//------------------------------------------
var btn_modal_cta = document.createElement('button');
var btn_modal_cta_txt = document.createTextNode('send message');
btn_modal_cta.setAttribute('class', 'modal-cta');
btn_modal_cta.setAttribute('type', 'button');
btn_modal_cta.appendChild(btn_modal_cta_txt);
//------------------------------------------
var btn_modal_close = document.createElement('button');
var btn_modal_close_txt = document.createTextNode('x');
btn_modal_close.setAttribute('class', 'modal-close');
btn_modal_close.setAttribute('type', 'button');
btn_modal_close.setAttribute('aria-label', 'close modal window');
btn_modal_close.appendChild(btn_modal_close_txt);
//------------------------------------------
// 생성된 모든 노드를 병합
modal.appendChild( modal_title );
modal.appendChild( modal_desc );
modal.appendChild( btn_modal_cta );
modal.appendChild( btn_modal_close );
// <body> 요소 맨 뒷편에 삽입;

var body = document.body;
// body.appendChild(modal);
// prependChild(body, modal);

var scripts_in_body = queryAll('script');
var last_script = scripts_in_body[scripts_in_body.length - 1];
insertAfter(last_script, modal);






// // <body> 요소 맨앞에 삽입(추가)
// // 방법 1. 표준 DOM API 방법인 insertBefor 매소드 활용
// // target_node.parentNode.insertBefore(insert_node, target_node)
// // var script_in_body = body.quertSelector('scrpit') // IE 8+
// // console.log('target_node:', script_in_body');
// // var script_parent = script_in_body.parentNode;

// //방법 2. 사용자 정의(Custom) 헬퍼 함수 prepend
// //네이밍은 직관선이 있게 작성할 것.
// //parent_node.appendChild(child_node);
// //prependChild(parent, child);
// //prependChild는 첫번째 자식 요소를 생성해주기위한 함수
// function prependChild(parent_node, child_node) {
// 	parent_node.insertBefore(child_node, parent_node.firstChild);
// 	// insertBefore는 parent_node와 firstChild앞에 child_node를 생성할때
// }
// // <body> 요소 맨 뒷편에 삽입(추가)
// var body = document.body;
// // body.appendChild(modal);
// // prependChild(body, modal);


// // 특정 노드 ~뒤에 삽입하는 헬퍼함수
// // insertAfter (insert_node, target_node)
// // insertBefore(insert_node, target_node)
// function insertAfter(insert_node, target_node) {
// 	var netxt_node = target_node.nextSibling;
// 	var parent_node = next_node.parentNode; 
// // 만약 next-node가 존재한다면
// 	if ( next_node ) {
// 		parent_node.insertBefore(insert_node, next_node);
// 	}
// 	// next_node가 존재하지 않는다면
// 	else {
// 		parent_node.appendChild(insert_node);
// 	}
// }

// // .querySelectorAll() 메소드를 단축하여 사용할 수 있는 헬퍼 함수
// function queryAll(selector_str) {
// 	// 사용자가 올바른 데이터를 전달하였는가를 검증
// 	if ( typeof selector_str !== 'string')
//  //
// 	throw ne Error('첫번째 전달인자는 문자 유형이어야 합니다.');
// }

// // context 인자 값을 사용자가 전달하였는가?
// // 사용자가 context 값을 전달하지 않았을 경우는 undefined 이다.
// // if (typeof context === 'undefined') {
// 	if (!context) { context = document; }
// 	return context.querySelectorAll(selector_str);



// // 하나의 컨텐츠를 만들어놓고 확장된 형태인 querry문을 이용하게 됨
// function query(selector, context) {
// 	return queryAll(selector, parent)[0];
// }

// // hook 을 쓰면 하나를 가져오겠다.. 
// function $q(selector, hook, context) {
// 	var method;
// 	if ( hook=== 1 ) {
// 		method = 'query';
// 	} else {
// 		method = 'queryAll';
// 	}
//  // 외부에서 method 명을 가져와서 쓰고자 할때.. 
// 	return window[method] (selector, context);
// }



