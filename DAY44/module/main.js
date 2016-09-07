(function(global, angular){
	'use strict';


	// Angular 모듈 정의
	var app = angular.module('fdsApp', []);

	app.controller('fdsMemberListController', ['$scope', function($http){
			// 컨트롤 객체 참조 변수 설정
			var ctrl = this;
			// 참조된 컨트롤 객체의 속성 mambers 설정(초기값)
			ctrl.mambers = [];

			// 비동기 통신 수행
			// console.log('$http:', $http);
			$http({
				'method' : 'GET',
				'url' : 'db/onepiece.json'
			}).then(successAjaxCall, errorAjaxCall);
			
			function successAjaxCall(response) {
				// console.log('비동기 통신에 성공하다.');
			ctrl.mambers = response.data;
			}
		function errorAjaxCall(response) {
				// console.log('비동기 통신에 실패하다.');
		}
		}]);


// function fdsMemberListController(scope, $http){

}

})(this, this.angular);