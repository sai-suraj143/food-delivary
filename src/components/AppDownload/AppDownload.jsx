import React from "react";
import "./AppDownload.css";
import Appstore from "../../assets/Appstore.png";
import googlePlay from "../../assets/googlePlay.png";
function AppDownload() {
  return (
    <div className="App-Download">
      <p>
        For Better Experience <br /> Download our App
      </p>
      <div className="App-Download-links">
        <img src={googlePlay} alt="Google play" />
        <img src={Appstore} alt="App store" />
      </div>
    </div>
  );
}

export default AppDownload;
