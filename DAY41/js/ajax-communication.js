// Native JavaScript AJAX 방식
(function(global, XHR){
	'use strict';

	var createXHR = (function(){
		// IE 6 이하 웹 브라우저를 위한 대체 코드
		// ActiveXObject('Microsoft.XMLHTTP')
		XHR = XHR || ActiveXObject('Microsoft.XMLHTTP');
		//
		// ActiveXObject('Microsoft.XMLHTTP'); 넣으면 하위브라우저에서 대응 가능
		return function () {
				return new XHR;
		};
	})();

	// 1. CREATE
	// XHLHttpRequest() 생성자 함수를 통해
	// 비동기 통신을 수행할 객체를 생성
	var xhr = createXHR();

	// XMLHttpRequest 생성자.prototype 객체
	// console.dir(XHR.prototype); // xhr.__proto__ 와 동일.

	// console.log('생성된 xhr 객체:', xhr);

	// 2. OPEN
	// 마지막 인자 값이 false 라면 동기 통신
	// 마지막 인자 값이 true 또는 생략하면 비동기 통신
	// xhr.open('GET', 'data/data.txt', false); 
	// 동기 통신 Deprecated!!
	// xhr.open('GET', 'data/data.txt'); // 비동기 통신

	// 3. SEND
	// xhr.send();

	// 동기 통신일 경우는.... 데이터가 로드될 때까지 기다림...
	// 비동기 통신일 경우는.... 아래 코드가 바로 해석됨...

	var result_view = document.querySelector('.ajax-result');
	var call_ajax_btn = document.querySelector('.call-ajax-data-btn');

	call_ajax_btn.onclick = updateViewPlace;

	// 통신 상태 확인
	// if ( xhr.status === 200 ) {
	//   console.log('통신 데이터 전송 성공! ^ㄴ^');
	//   // console.log(xhr.response);
	//   call_ajax_btn.onclick = updateViewPlace;
	// } else {
	//   console.log('통신 데이터 전송 실패! ㅠ_ㅠ');
	//   result_view.textContent = '데이터 로드에 실패했습니다....';
	//   console.log(xhr);
	// }

	// xhr.open('GET', 'data/data.txt', true); // 비동기 통신
	xhr.open('GET', 'data/data.html'); // 비동기 통신
	// xhr.open('GET', 'data/model.txt', false); // 동기 통신

	// 비동기 통신 객체에 이벤트 핸들러 바인딩
	xhr.onreadystatechange = function() {
		// console.log(this); // this === xhr 객체
		if ( this.status === 200 && this.readyState === 4 ) {
			console.log('통신 데이터 전송 성공! ^ㄴ^');
			var random_users = this.response; // text file
			// text -> object


			// TEXT
			// result_view.textContent = '[' + this.statusText + '] ' + this.responseText;
			// HTML
			// result_view.innerHTML = this.responseText;
			// XML
			var doc = this.responseXML;
			var people = doc.querySelector('people');
			var person_list = people.querySelectorAll('person');
			var person, name, tel, mail, i = person_list.length - 1;
			for( ; person_list[i]; i-- ) {
				person = person_list[i];
				name   = person.querySelector('name').firstChild.nodeValue;
				tel    = person.querySelector('tel').firstChild.nodeValue;
				mail   = person.querySelector('mail').firstChild.nodeValue;
				// console.log(name, tel, mail);
			}
		}
	}

	// 템플릿 만들기
	template += {
	'<li>',
		'<span class="name"> '+ neme + '</span>',
		'<span class="name"> '+ neme + '</span>',
		'<span class="name"> '+ neme + '</span>',
	'</li>'
	}.join('');
}
template += '</ul>';
// console.log(template);
result_view.innerHTML =  template;
}
	//console.log(xhr);
	}
//JSON
var random_users = this.response; // text file
text file
random_users = JSON.parse(random_users); // text -> object
var people = random_users.results;
// people 반복 순환 처리
			for ( var person of people ) {
				person.fullname = `${person.name.first} ${person.name.last}`;
				console.log(person.fullname);
				console.log(person.gender);
				console.log(person.email);
				console.log(person.nat);
				console.log(person.picture.thumbnail);
				console.log(person.picture.medium);
				console.log(person.picture.large);
				template += [
				'<li>',
				'<sapn class="fullname">' + person.fullname + '</span>',
				'<sapn class="gender">' + person.gender + '</span>',
				'<sapn class="email">' + person.email + '</span>',
				'<sapn class="nat">' + person.nat + '</span>',
				'<sapn class="picture.thumbnail">' + person.picture.thumbnail + '</span>',
				'<sapn class="picture.medium">' + person.picture.medium + '</span>',
				'<sapn class="picture.large">' + person.picture.large + '</span>',
				'</li>'
				].join( ' ' );
				}
			}
		}
// console.log(xhr);
}

// console.lgo(typeof random_users);
// text -> object
// JSON 객체의 parse() 메소드 사용
// JSON.parse ( JSON 문자열 )
// [ text <- object ]
// JSON 객체의 Stringify() 메소드를 사용
// JSON.stringifty ( javaScript(JSON 형태) 객체 )
	}
// console.log(xhr);
}

	function updateViewPlace() {
		// AJAX 통신 요청 보내기
		xhr.send();
		// 비동기 통신을 요청했을 경우,
		// 이벤트(`readystatechange`)를 통해 비동기 데이터가 로드된 시점에
		// 아래 조건문이 수행되어야 한다.
	}


// jQuery AJAX 방식

(function(global, $){
  'use strict';

  // 유틸리티 메소드
  // $.ajax()
  // $.get()
  // $.post()
  // $.getJSON()
  // $.getScript()

  // JavaScript Promise 개념 사용
  // ECMAScript 2015 Promise 기본 지원

  // jQuery AJAX 단축 유틸리티 메소드
  // $.getJSON('http://api.randomuser.me/?results=100')
  //   .then(function(data, status, XHR) {
  //     console.log(data.results); // 객체(Object)화가 되어 있음.
  //   });

  // jQuery AJAX Low-Level Interface 메소드
  $.ajax({
    'url'      : 'http://api.randomuser.me/?results=100',
    'dataType' : 'json',
    'success'  : function(data, status, XHR) {
      console.log(data.results);
    }
  });

})(this, this.jQuery);