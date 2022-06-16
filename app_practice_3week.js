//노마드 코더
//"바닐라 js 로 크롬 앱 만들기"


// < 3주차 > //
//1. docunemt
// --> 얘는 따로 선언한적이 없지만, 브라우저에서 이미 존재하는 object이다.
// --> document.title을 살펴보면, Document 라고 선언되어있음.
// --> html 확인해보면, <title>Document</title> 이 되어있음을 확인.
// --> html 의 <title>의 이름을 바꾸면, document 에서도 바뀌어 있음을 확인
// --> 결론 : JS는 HTML 을 읽어올수 있고, 변경도 가능하다.
// ex . HTML의 <title>에서 Hello World로 작성. --> 브라우저의 이름이 바뀐다.
// 결론  : html 파일이 그대로 브라우저에 올라와서, 자바스크립트의 document 오브젝트로 표현된다.


//2. HTML in JS
// --> html 파일에 태그 <h1>태그를 넣었음. 이를 확인.
const title = document.getElementById("title");
// --> getElementById("string") > 괄호 내부의 문자열이 포함된 오브젝트의 원소를 찾아주는 함수.
