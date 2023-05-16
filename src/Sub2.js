import React, { useMemo, useState } from 'react';

const Sub2 = () => {
  const [list, setList] = useState([1, 2, 3, 4]);
  const [str, setStr] = useState('합계');

  const getAddResult = () => {
    let sum = 0;
    list.forEach((i) => (sum = sum + i));
    console.log('sum', sum);
    return sum;
  };

  const addResult = useMemo(() => getAddResult(), [list]);

  return (
    <div>
      <button
        onClick={() => {
          setStr('안녕');
        }}
      >
        문자변경
      </button>
      <button
        onClick={() => {
          setList([...list, 10]);
        }}
      >
        리스트값추가
      </button>
      <div>
        {list.map((n) => (
          <h1>{n}</h1>
        ))}
      </div>
      <div>
        {str} : {addResult}
      </div>
    </div>
  );
};

export default Sub2;
