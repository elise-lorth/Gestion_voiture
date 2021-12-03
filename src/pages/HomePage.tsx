import VoiturePage from "./VoiturePage";
import PhotoPage from "./PhotoPage";
import VideoPage from "./VideoPage";
import React from "react";

function HomeAffichage() {
    return <div>
        <VoiturePage/>
        <hr className="hr-gras"/>
        <PhotoPage/>
        <hr className="hr-gras"/>
        <VideoPage/>
    </div>
}

export default HomeAffichage;