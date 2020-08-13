import React from 'react';
import './App.css';
import CreatePost from './view/Home/CreatePost'
import Navar from './view/Home/Navar'
import Post from './view/Home/Post'
import RightPost from './view/Home/RightPost'

function App() {
  return (
    <>
      <Navar />
      <div className="content row">
        <div className="left-content col-sm-12 col-lg-8 col-md-12">
          <CreatePost />
          <Post />
          <Post />
        </div>
        <div className="col-sm-0 col-md-0 col-lg-4  ">
          <RightPost />
        </div>
      </div>
    </>
  );
}

export default App;
