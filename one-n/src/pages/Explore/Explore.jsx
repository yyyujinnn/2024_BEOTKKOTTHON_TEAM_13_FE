import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Explore.css'
import search from '../../assets/icons/search.svg'
import Masonry from "https://cdn.skypack.dev/react-masonry-css@1.0.16";

const Explore = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    // API 엔드포인트 URL 설정
    const apiUrl = 'http://20.39.188.154:8080/recipe/list?keyword=&page=1';

    axios.get(apiUrl)
      .then((response) => {
        const updatedData = response.data.map(item => ({
          ...item,
          thumbnail_image: `http://20.39.188.154${item.thumbnail_image}`
        }));
        setData(updatedData);
      })
      .catch((error) => {
        console.error('API 요청 에러:', error);
      });
  }, []);

  return (
    <>
      <div className='explore-header' />

      <div className='search'>
        <img src={search} alt='search' />
      </div>

      <Masonry
        breakpointCols={2}
        className="grid-container"
        columnClassName="column"
      >
        {data.map((item) => (
          <div key={item.id} className="grid-item">
            <img src={item.thumbnail_image} alt={`Image ${item.title}`} />
          </div>
        ))}

      </Masonry>
    </>
  )
};

export default Explore;
