import React, { createRef, useRef, useState } from 'react';

//useRef(디자인)
//dom을 변경할 때 사용
const Sub3 = () => {
  const myRef = useRef(null);

  const [list, setList] = useState([
    { id: 1, name: '길동' },
    { id: 2, name: '백정' },
  ]);
  const myRefs = Array.from({ length: list.length }).map(() => createRef());
  return (
    <div>
      <button
        onClick={() => {
          console.log(myRef);
          console.log(myRef.current);
          myRefs[0].current.style.backgroundColor = 'red';
        }}
      >
        색변경
      </button>
      <div ref={myRef}>박스</div>
      {list.map((user, index) => (
        <h1 ref={myRefs[index]}>{user.name}</h1>
      ))}
    </div>
  );
};

export default Sub3;
