import React from 'react';
import "./UploadPage.scss";
import imag from "../assets/Upload-video-preview.jpg";

 function UploadPage() {
    return (
        <div className="upload">
            <h2 className="upload__title">Upload Video</h2>
            <h4 className="upload__label upload__label--top">VIDEO THUMBNAIL</h4>
            <img src={imag} className="upload__video-thumbnail"/>
            <form className="upload__form">
                <label className="upload__label ">TITLE YOUR VIDEO</label>
                <input type='text' placeholder="Add a title to your video" className="upload__title-input"></input>
                <label className="upload__label">ADD A VIDEO DESCRIPTION</label>
                <textarea placeholder="Add a description of your video" className="upload__description-input"></textarea>
                <div className="upload__btn-container">
                <button className="upload__publish-button">PUBLISH</button>
                <h3 className="upload__cancel" onClick={() => console.log("fun")}>CANCEL</h3>
          
        </div>
        </form>
        </div>
    )
}

export default UploadPage;