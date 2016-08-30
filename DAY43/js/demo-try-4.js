(function(global, ng) {
	'use strict';
	// console.log(ng.version.full); //version 확인
	//컨트롤러
function tableController ( $scope) {
	// console.log($scope);
	// 모델 = (data)
	// [지역변수] 외부에서 접근이 불가능
	// 작성한 컨트롤러 공개
	// global.tableController = tableController;
	// 예전 1.2 version 에서 쓰는 방식 
	var people = [
  {
    'name'    : 'tomy',
    'age'     : 23,
    'mail'    : 'tomy@study.com',
    'birthday': '2001-09-02',
    'has-money': 5300,
    'picture' : {
      'width': 200,
      'height': 200,
      'src': 'http://placehold.it/220x220/34c0ff/fff/?text=tomy'
    }
  },
  {
    'name'    : 'sunny',
    'age'     : 32,
    'mail'    : 'SUNNY@STUDY.COM',
    'birthday': '1982-02-17',
    'has-money': 10200,
    'picture' : {
      'width': 200,
      'height': 200,
      'src': 'http://placehold.it/220x220/7045cf/fff/?text=sunny'
    }
  },
  {
    'name'    : 'zeus',
    'age'     : 61,
    'mail'    : 'zeus@study.com',
    'birthday': '1990-01-01',
    'has-money': 1000000,
    'picture' : {
      'width': 200,
      'height': 200,
      'src': 'http://placehold.it/220x220/3a0099/fff/?text=zeus'
    }
  },
  {
    'name'    : 'Aron',
    'age'     : 18,
    'mail'    : 'aron@study.com',
    'birthday': '1998-11-21',
    'has-money': 121900,
    'picture' : {
      'width': 200,
      'height': 200,
      'src': 'http://placehold.it/220x220/3a0099/fff/?text=aron'
    }
  }
];

	var ordermap = {
		'sort'		: null,
		'name'		: true,
		'age'		: true,
		'mail'		: true,
		'birthday'	: true
	};
function changeOrder(prop) {
	$scope.ordermap[prop] = !$scope.ordermap[prop];
	$scope.ordermap.sort = $scope.ordermap.sort === prop ? '-'+prop : prop;
}
  
// $scope 객체를 통해 해당 속성에 접근이 뷰에서 가능
// $scope. 속성

$scope.people		= people;
$scope.ordermap		=