import React, { useContext } from 'react';
import { AppContext } from '../context/App_Context';


const Post = () => {
  const data = useContext(AppContext);

  return (
    <>
      {data.posts.map((d) => (
        <div key={d.id} className='container'>
          <h1>{d.title}</h1>
          <p>{d.description}</p>
          <div className="card">
            {/* Use the imported image */}
            <img src={d.img} className="card-img-top" alt="post" />
            <div className="card-body"></div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Post;

