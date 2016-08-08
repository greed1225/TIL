// DOM API를 사용하여 문서 객체를 동적으로 생성해보자!
// <div></div>
var maked_division = document.createElement('div');
var maked_division_text = document.createTextNode('this is division.')
// <ul></ul>
var maked_unordered_list = document.createElement('ul');
var maked_unordered_list_item = document.createElement('li');
var maked_unordered_list_item_text = document.createTextNode('list item');


// var maked_unordered_list = document.createElement('ul');

console.log('div:', maked_division);
console.log('div_text:', maked_division_text)


console.log('ul:', maked_unordered_list);
console.log('ul>li:',maked_unordered_list_item);
console.log('ul>li_text:',maked_unordered_list_item_text);

// DOM API를 사용하여 문서 객체를 동적으로 조작해보자
maked_division.appendChild(maked_division_text);
console.log(maked_division);


// append-child는 자식요소 중 가장 마지막 개체를 말한다.
// freeppend-child는 자식요소중 첫번째 개체를 선택할때.
// 동적으로 생성한 <div> 요소를 문서를 문서의 특정한 목적지에 추가(삽입)
var target_place =  document.querySelector('#parent > .child:last-child');

target_place.appendChild(maked_division);

// append-child는 자식요소 중 가장 마지막 개체를 말한다.
// freeppend-child는 자식요소중 첫번째 개체를 선택할때.


// 문제. 동적으로 생성된 <ul><li> list item 내부에 
maked_unordered_list.appendChild(maked_unordered_list_item);
maked_unordered_list_item.appendChild(maked_unordered_list_item_text);

// 목적지에 해당하는 요소를 직접 생성한 다음에 문서에 붙여보겠다. 
 
var target_contaier = document.createElement('div');

target_conatainer.setAttribute('id', 'target-container');
target_conatainer.appendChild(maked_unordered_list);
document.body.appendChild(target_conatainer);


// insertBefore 사용법 응용하면 prependChild()를 사용해줄 수 있다.
var target = document.body.firstChild;
target.parentNode.insertBefore(target_conatainer, target);

// 문제. 헬퍼함수를 지정해주고자 할때 -
function prependChild(maked_unordered_list) {
}

// 헬퍼함수를 지정하여 prependChild로 리스트를 출력하는 부분 ?