import React from 'react';
import "./UploadPage.scss";
import imag from "../assets/Upload-video-preview.jpg";
import axios from 'axios';

const UploadPage = (props) => {

    const uploadVideo = (e) =>{
        e.preventDefault();
        console.log(e.target.title.value);
        axios
    .post(`http://localhost:8080/videos`, 
      {  
          title: `${e.target.title.value}`,
          description: `${e.target.description.value}`
        })
    .then(response => {
console.log("congrats you did it")
        })
    .catch(err => {
          console.warn(err)
        })

    }
return (
    <div className="upload">
        <h2 className="upload__title">Upload Video
        </h2>
        <div className="upload__flex-container" >
            <div className="upload__image-container">
                <h4 className="upload__label upload__label--top">VIDEO THUMBNAIL
                </h4>
                <img src={imag} className="upload__video-thumbnail" alt="handlebars" />
            </div>
            <form 
            onSubmit={(e) => {
            alert("Image uploaded");
            uploadVideo(e);
            props.history.push('/')}}
            className="upload__form">
                <div className="upload__form-container">
                    <label className="upload__label ">TITLE YOUR VIDEO
                    </label>
                    <input 
                    type='text' 
                    placeholder="Add a title to your video" className="upload__title-input"
                    name="title" />
                    <label className="upload__label">ADD A VIDEO DESCRIPTION
                    </label>
                    <textarea 
                    placeholder="Add a description of your video" className="upload__description-input"
                    name="description">
                    </textarea>
                </div>
                <div className="upload__btn-container">
                    <button 
                    className="upload__publish-button">PUBLISH
                    </button>
                    <input type="reset" value="CANCEL"className="upload__cancel" />
                </div>
            </form>
        </div>
    </div>
)}

export default UploadPage;