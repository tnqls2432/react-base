/* 오류문구 지우기: eslint-disable*/ 
// npx create-react-app blog

import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  
  // es6문법 destructuring문법
  // state에 데이터 저장해놓는 이유: 웹이 app처럼 동작하게 만듬, state는 변경되면
  // html이 자동으로 재랜더링이 된다.
  let [글제목, 글제목변경] = useState(["남자 코트 추천", "강남 우동 맛집","종로 술집 맛집"]);
  let [따봉, 따봉변경] = useState(0);
  let posts = "강남 고기 맛집";
 
  function 제목바꾸기(){
    let newArray = [...글제목];
    newArray[0] = "여자코트 추천";
    글제목변경(newArray);
  }
  
// array, object 데이터 수정 방법
// - 일단 변경함수 써야함
// - 변경함수(대체할 데이터)
// state는 직접 건들지 말고 deep copy해서 사용
  return (
    
    <div className="App">
      <div class="black-nav">
        <div>개발 Blog</div> 
      </div>
      <button onClick={제목바꾸기}>버튼</button>
      <div className='list'>
        <h3>{글제목[0]} <span onClick={() => {따봉변경(따봉 + 1)}}>👍</span>{따봉}</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className='list'>
        <h3>{글제목[1]}</h3>
        <p>2월 18일 발행</p>
        <hr/>
      </div>
      <div className='list'>
        <h3>{글제목[2]}</h3>
        <p>2월 19일 발행</p>
        <hr/>
      </div>

      {/*html을 줄여서 쓸 수 있는 방법
        component문법 */}
      {/* component로 만들면 좋은 것들 
       반복출현하는 html덩어리들
       자주 변경되는 html UI들*/}
      <Model></Model>
      
    </div>
  );
}

function Model() {
  return(
    <>
    <div className='model'>
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
    <div></div>
    </>
  )
}

export default App;
