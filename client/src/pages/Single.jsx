import React from 'react'
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link, useNavigate } from 'react-router-dom';
import Menu from '../components/Menu';
import { useLocation } from 'react-router-dom';
import axios from "axios";
import moment from "moment";
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from "../context/authContext"

export default function Single() {

  const navigate = useNavigate();

  const [post, setPost] = useState([]); // posts is an array of objects

  const location = useLocation()

  const postID = location.pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${postID}`);
      navigate("/");
    }
    catch (err) {
      console.log(err);
    }

  }

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
        <img src={`../upload/${post?.img}`} alt="" />
        <div className="user">
          <img
            src={post?.userImg || "https://i.imgur.com/6VBx3io.png"}
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
              <img src={Delete} onClick={handleDelete} alt="" />
            </div>
          )}
        </div>
        <h1>{post.title}</h1>
        <div className="desc">
          <p>{post.desc}</p> </div>
      </div>
      <Menu cat={post.cat} />
    </div>
  )
}
