import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Sub from './Sub';
import Sub2 from './Sub2';
import Sub3 from './Sub3';
//0. React 엔진 -데이터변경감지해서 UI그려주는!!
//1.실행과정 (index.html) - SPA
//2.JSX 문법

//(1) return시에 하나의 Dom만 리턴할 수 있다.
//(2) 변수선언은 let 혹은 const로만 해야함.
// (3) if 사용 불가능 X -> 삼항연산자(조건 ? 값(true): 값(false))
// (4) 조건부 렌더링 (조건 && 값(true))
// (5) css 디자인
//   - 내부에 적는 방법
//   - 외부에 적는 방법
//   - 라이브러리 사용(부트스트랩, component-styled)

let a = 10; //변수
const b = 20; //상수

function App() {
  // 다운로드 받음
  let sample = [
    { id: 1, name: '홍길동' },
    { id: 2, name: '임꺽정' },
    { id: 3, name: '장보고' },
    { id: 4, name: '코스' },
  ];
  console.log('App실행됨');
  const [users, setUsers] = useState(sample); //레퍼런스 변경되야 동작!!

  const download = () => {
    // const a = sample.concat({ id: 5, name: '조자스' });
    console.log(sample);
    setUsers([...sample, { id: 5, name: '조자스' }]);
  };

  let list = [1, 2, 3];

  // let number = 1; //상태 값 아님
  const [number, setNumber] = useState(2);
  //React 안에 hooks 라이브러리 상태값이 됨.
  const add = () => {
    console.log(number); //리엑트한테 number 값 변경 할께 라고 요청
    setNumber(number + 1);
  };

  const mystyle = {
    color: 'red',
  };

  //랜더링 시점 = 상태값 변경
  return (
    <div>
      <button onClick={download}>다운로드</button>
      {users.map((u) => {
        return u.id + ' ' + u.name;
      })}
      <h1>숫자: {number}</h1>
      <button onClick={add}>더하기</button>
      <Sub />
      <div>
        {list.map((n) => (
          <h1>{n}</h1>
        ))}
      </div>

      <div style={mystyle}>
        안녕 {a === 10 ? '10입니다 ' : '10이 아닙니다.'}
      </div>
      <h1 className="box-style">해딩태그{b === 20 && '20입니다.'}</h1>
      <hr />
      <Sub2 />
      <hr />
      <Sub3 />
    </div>
  );
}

export default App;
