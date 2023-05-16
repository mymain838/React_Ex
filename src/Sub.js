import React, { useEffect, useState } from 'react';

const Sub = () => {
  const [data, setData] = useState(0);
  const [search, setSerch] = useState(0);

  const download = () => {
    //다운로드 받고 (통신)
    let downloadData = 5; // 가정
    setData(downloadData);
  };
  //실행 시점: (1) Sub() 그림이 최초 그려질 떄
  //상태 변수가 변경될 때
  //의존리스트를 관리를 할 수있다.
  useEffect(() => {
    console.log('앱 use Effect실행됌');
    download();
  }, [search]); //첫번째 콜백인자, 두번째 디펜더시리스트

  return (
    <div>
      <button
        onClick={() => {
          setSerch(search + 1);
        }}
      >
        검색하기
      </button>
      <h1>데이터 : {data}.</h1>
      <button
        onClick={() => {
          setData(data + 1);
        }}
      >
        더하기
      </button>
    </div>
  );
};

export default Sub;
