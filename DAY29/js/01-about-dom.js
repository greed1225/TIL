// DOM API
// [선택] 현재 선택한 대상 el
// - id 속성으로 대상(요소노드)을 선택 documentgetEementById('id_name')
// - 요소노드의 이름으로 대상(요소노드)을 선택 document.getElemnetTagName('tag_name')
// - class 속성으로 대상(요소노드)을 선택
// - 특정 속성으로 대상을 선택.
// [선택] 부모노드 el.parentNode
// [선택] 첫번째자식노드 el.firstChild
// [선택] 마지막자식노드 el.lastCild
// [선택] 이전 형제 노드 el.previouSibling
// [선택] 다음 형제 노드 el.nextSibling
// [선택] 자식 노드들 el.ChildNodes

var parent_el = document.getElementById('parent');
var parent_el_child_nodes = parent_el.childNodes;
// parent_el 변수에 참조된 객체의 자식 노드들을 수집

console.log(parent_el_child_nodes);
console.log('수집된 parent_el의 자식 노드의 개수:',
parent_el_child_nodes.length);

// 문제1. 콘솔 패널 화면에 각 수집된 parent_el_child_nodes의 
// 노드 유형을 출력해보세요. 노드 타입
console.log( 0, parent_el_child_nodes.item(0).nodeType ); 
console.log( 1, parent_el_child_nodes.item(0).nodeType );
console.log( 2, parent_el_child_nodes.item(0).nodeType );
console.log( 3, parent_el_child_nodes.item(0).nodeType );
console.log( 4, parent_el_child_nodes.item(0).nodeType );
console.log( 5, parent_el_child_nodes.item(0).nodeType );
console.log( 6, parent_el_child_nodes.item(0).nodeType );
console.log( 7, parent_el_child_nodes.item(0).nodeType );
console.log( 8, parent_el_child_nodes.item(0).nodeType );

// 2. #parent .child:first-Child 요소의 자식노드들 순환하여 노드 유형 로드하기

// 미리 보는 자바스크립트의 반복 구문
// while, do~ whild, for, for~in, for ~of, forEach
// 미리보는 자바스크립트 조건 구문
// if ~ else if ~ else, switch case defaut break, 3항식
// console.log로 노드 유형을 출력하면 노가다, 아래 for문을 이용하여 작업해 볼 것.
for ( var i=0; i<9; i=i+1 ) {
	// console.log('i:', i);
	// parent_el_child_nodes.item(i).nodeType이 반환하는 값은?
	// 반복구문을 통해 반복순화하고 위의 부분은 크롬에서만 볼 수 있다.
	// 1: ELEMENT_NODE
	if ( parent_el_child_nodes[i].nodeType === 1) {
		console.log( 'current node is ELEMENT_NODE.' );
	// 3: TEXT_NODE
	} else {
		console.log ( 'current node is ELEMENT_NODE.' );
	}
}


// 자바스크립트에는 content block이 있어서 i는 전역변수라 재사용하게 된 case
// 수집된 대상들의 요소노드를 가져온다. child node !

var parent_el_first_child_el = parent_el.firstChild;

console.log(parent_el_first_child_el);



var test_list     = parent_el_first_child_el.children;
var test_list_len = test_list.length;


for ( var node_type, k=0; k<test_list_len; k=k+1 ) {
	node_type = test_list[k].nodeType;
	if (node_type === 1) {
		console.log('%c current node is ELEMENT_NODE.', 'color:#7045cf');
	}
	if (node_type === 3) {
		console.log('current node is TEXT_NODE.');
	}
	if (node_type === 8) {
		console.log('current node is COMMENT_NODE.');
	}
}


// NODE Information
// HTML DOM 방식의 속성 접근 방법
// 웹의 초창기 때부터 존재하던 속성들
// id, className, title, ...

// NODE Information
	console.log('parent_el 요소노드의 id 속성:', parent_el.id); // 'parent'
	console.log('parent_el 요소노드의 class 속성:', parent_el.className) // ''
	console.log('parent_el 요소노드의 class 속성:', parent_el.className) // ''


// 새롭게 등장한 속성들
// data-*, aria-*, role, ...

// console.log('parent_el.role: ', parent_el.role);
console.log('parent_el.role: ', parent_el.getAttribute('role'));
// console.log('parent_el.data-container: ', parent_el.data-container);
// console.log('parent_el.data-container: ', parent_el['data-container']);
console.log('parent_el.data-container: ', parent_el.getAttribute('data-container'));
// console.log('parent_el.aria-hidden: ', parent_el.aria-hidden);
// console.log('parent_el.aria-hidden: ', parent_el['aria-hidden']);
console.log('parent_el.aria-hidden: ', parent_el.getAttribute('aria-hidden'));


// parent 내부의 요소 중 자식이 없는 요소를 모두 콘솔에 기록하라.
var parent       =document.getElementById('parent');
var parent_childe = parent.getElementsByTagName('div');

for(var child, i=0, l=parent_childs.length; i<l; i=i+1) {
	var child = parent_childs[i];
	if ( !child.hasChildNodes() ) {
		console.log(child);
	}

}

// 클래스 속성 값으로 문서 객체 대상 선택하기
// document.link; // HTMLCollection
var childs = document.getElementsByClassName('child');
console.log(childs, childs.length);

// css selector를 통해 문서 객체를 선택하는 방법
// IE 8+ 지원

// .querySelector('#id .class'); 단수 (찾은것중 첫번째 요소)
// .querySelectorAll('#id .class'); 복수법(집합형태)
// .querySelector() === .querySelectorAll() [0] 
// getElementById, TagName, ClassName으로 찾는것보다 좋다.
// getElementById, TagName, ClassName querrySlector 대신으로 쓰자 !


// 부모요소의 세번째 자식을 선택하고자할때.
document.querySelector('#parent > .child:nth-child(3)')





