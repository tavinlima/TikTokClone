import React, { useState, useEffect } from 'react';
import './App.css';
import Video from './Pages/Videos'
import db from './config/firebase';
import { collection, getDocs } from 'firebase/firestore/lite';

function App() {

  let maxHeight;
  if (window.innerHeight <= 800) {
    maxHeight = window.innerHeight;
  }

  const [videos, setVideos] = useState([]);

  async function getVideos() {
    const videosCollection = collection(db, "videos");
    const videosSnapshot = await getDocs(videosCollection);
    const videosList = videosSnapshot.docs.map((doc) => doc.data());

    setVideos(videosList);
    console.log(videosSnapshot)
  }

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="App" style={{maxHeight: maxHeight + "px"}}>
      <div className='container__videos'>

        {
          videos.map((item, index) => {
            return (
              <Video key={index}
                likes={item.likes}
                messages={item.messages}
                shares={item.shares}
                name={item.name}
                description={item.description}
                music={item.music}
                url={item.url}
              />
            )
          })
        }

      </div>
    </div>
  );
}

export default App;
