import React, { useEffect, useRef } from "react";
import videoSM from '../../assets/videos/videoSM.mp4'
import '../../styles/home/video-presentation.css'

function VideroPresentation() {

    const videoRef = useRef(null);

    useEffect(() => {
        videoRef.current.play();
    }, []);
    return (
        <div className="main-video">
            <video className="video" ref={videoRef} autoPlay muted loop>
                <source src={videoSM} type="video/mp4" />
                Tu navegador no soporta el elemento de video.
            </video>
        </div>
    )
}

export default VideroPresentation;