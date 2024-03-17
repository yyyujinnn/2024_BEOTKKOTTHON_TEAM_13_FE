import React from 'react';
import './Explore.css'
import search from '../../assets/icons/search.svg'
import Masonry from "https://cdn.skypack.dev/react-masonry-css@1.0.16";
import a from './a.jpeg';
import b from './b.jpeg';
import c from './c.jpeg';
import d from './d.jpeg';
import e from './e.jpeg';
import f from './f.jpeg';

const Explore = () => {

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
          <div className="grid-item"> <img src={a}/>  </div>
          <div className="grid-item"> <img src={b}/> </div>
          <div className="grid-item"> <img src={c}/></div>
          <div className="grid-item"> <img src={d}/>  </div>
          <div className="grid-item"> <img src={e}/> </div>
          <div className="grid-item"> <img src={f}/></div>
          <div className="grid-item"> <img src={a}/>  </div>
          <div className="grid-item"> <img src={b}/> </div>
          <div className="grid-item"> <img src={c}/></div>
      </Masonry>

      <div className='recipe-reg'> 레시피 등록하기 </div>
    </>
  )
};

  export default Explore;
  