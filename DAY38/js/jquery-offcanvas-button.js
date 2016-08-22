// jquery.offcanvas-button.js

(function(global, $) {
	'use strict';
	var wrapper_origin_pos;
	// 오픈캔버스 메뉴 이벤트 핸들링
	// 함수를 여러개로 묶지말고 잘게 쪼개주는 역할을 해줄 것
	function init() {
	// 오픈캔버스 메뉴 래퍼 선택 (참조)
	var $offcanvas_wrapper = $('.offcanvas-menu-wrapper');
	wrapper_origin_pos = $offcanvas_wrapper.css('left');
	// 오픈캔버스 토글 메뉴 버튼 선택(참조)
	var $toggle_btn = $offcanvas_wrapper.find('.toggle-menu-button'); 
	// var $toggle_btn = $ offcanvas_wrapper.find('.toggle-menu-button', $offcanvas-wrapper'); 
	// 오픈캔버스 메뉴 래퍼에서 탐색한 버튼에 클릭 이벤트 핸들링
	$toggle_btn.on('click', toggleoffCanvasMenu);
	}

	// 이벤트 핸들러(함수)
	function toggleoffCanvasMenu() {
	// this는 이벤트가 연결된 <button> 문서객체이다.
	// this가 참조하는 <button> 객체를 jQuery 객체화 시키는 방법은
	// jQuery() 팩토리 함수 내부에 this 참조 변수를 전달하여 jQuery 객체를 생성한다.
	// 생성된 Jquery 객체는 jQuery. 프로토타입 객체가 가진 능력을 맘껏 사용 가능하다.
	var $this = $(this); // 이와 같은 행위는 성능을 저하시킨다.
	// console.log($this.jquery) // ($)
	// IF 구문보다는 3항식을 사용하여 제어하는 형식으로 접근하는것이 좋다.
	console.log($wrapper.css('left'));
	// 부모요소 $wrapper의 left 속성을 이동
	$wrapper.animate({
		'left':global.parseInt($wrapper.css('left')) == 0 ? wrapper_origin_pos : 0
 	});
 	$this.toggleclass('open-menu');
	}
	$(init); // $(document).ready(init);
})(this, this.jQuery);

var q = function(global, $){}
q(window, window.jQuery)
