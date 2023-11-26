import React from 'react'
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';

export default function Single() {
  return (
    <div className="single">
      <div className="content">
        <img src alt="" />
        <div className="user">
          <img
            src=""
            alt=""
          />
          <div className="info">
            <span>post.username</span>
            <p>Posted Last Week</p>
          </div>

          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img alt="" src={Delete} />
          </div>
        </div>
        <h1>post.title</h1>
      </div>
      <Menu />
    </div>
  )
}
