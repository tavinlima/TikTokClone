import { useState, useRef } from "react";


import Footer from "../components/footer";

import '../style/videos.css'
import Sidebar from "../components/sidebar";

export default function Video({likes,messages,shares, name, description, music, url}) {
    // const [listaVideos, setListaVideos] = useState([]);
    const [play, setPlay] = useState(false);

    const videoRef = useRef(null)

    // function listarVideos() {

    // }

    function handleStart() {

        if (!play) {
            videoRef.current.play()
            setPlay(true)
        } else {
            videoRef.current.pause()
            setPlay(false)
        }
    }

    return (
        <div className="video">
            <video
                className="video__player"
                ref={videoRef}
                onClick={handleStart}
                loop
                src={url}
            />
                {/* Sidebar */}
                <Sidebar 
                likes={likes}
                messages={messages}
                shares={shares}
                />
                {/* Footer */}
                <Footer 
                name={name}
                description={description}
                music={music}
                />
        </div>
    )
}