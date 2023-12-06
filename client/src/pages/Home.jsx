import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import axios from "axios";
import Loading from '../components/Loading';

export default function Home() {

  const [posts, setPosts] = useState([]); // posts is an array of objects

  const cat = useLocation().search

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts${cat}`);
        setPosts(res.data.reverse());
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

  const getText = (text) => {
    const doc = new DOMParser().parseFromString(text, 'text/html');
    return doc.body.textContent || "";
  }

  return (
    <div className="home">
      {!posts.length > 0 && <Loading />}
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={`../upload/${post.img}`} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{getText(post.desc)}</p>
              <Link className="link" to={`/post/${post.id}`}>
                <button>Read More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
