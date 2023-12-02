import React from 'react'
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';
import { useLocation } from 'react-router-dom';
import axios from "axios";
import moment from "moment";
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from "../context/authContext"

export default function Single() {

  const [post, setPost] = useState([]); // posts is an array of objects

  const location = useLocation()

  const postID = location.pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${postID}`);
        setPost(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postID]);

  return (
    <div className="single">
      <div className="content">
        <img src alt="" />
        <div className="user">
          <img
            src={post?.img}
            alt=""
          />
          <div className="info">
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>

          {currentUser.username === post.username && (
            <div className="edit">
              <Link to={`/write?edit=2`} state={post}>
                <img src={Edit} alt="" />
              </Link>
              <img src={Delete} alt="" />
            </div>
          )}
        </div>
        <h1>{post.title}</h1>
      </div>
      <Menu />
    </div>
  )
}
