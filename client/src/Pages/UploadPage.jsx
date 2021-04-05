import React from 'react';
import "./UploadPage.scss";
import axios from 'axios';

class UploadPage extends React.Component {
    constructor(props){
        super(props)
    

    this.state = {
        uploadVideo: null
    }
    }

uploadVideo(e) {
    e.preventDefault();
    axios
    .post(`http://localhost:8080/videos`, 
        {  
          title: `${e.target.title.value}`,
          description: `${e.target.description.value}`,
          image: "http::/localhost:3000/client/public"
        })
    .then(response => {
        return
        })
    .catch(err => {
          console.warn(err)
        })
    }

render() {
    return (
    <div className="upload">
        <h2 className="upload__title"> Upload Video
        </h2>
        <div className="upload__flex-container" >
        <form 
            className="upload__form"
            onSubmit={(e) => {
            alert("Image uploaded");
            this.uploadVideo(e);
            this.props.history.push('/')
        }}>
        <div className="upload__image-container">
            <h4 className="upload__label upload__label--top"> VIDEO THUMBNAIL
            </h4>
            <input 
                onChange={this.handleChange}
                type="file"
                className="upload__video-thumbnail" 
                alt="handlebars"
                name="inputFile" 
                />
            <img src='../../public/Upload-video-preview.jpg' />
        </div>
            <div className="upload__form-container">
                <div className="upload__form-container2">
                    <label className="upload__label ">TITLE YOUR VIDEO
                    </label>
                <input 
                    type='text' 
                    placeholder="Add a title to your video" className="upload__title-input"
                    name="title" 
                />
                <label className="upload__label"> ADD A VIDEO DESCRIPTION
                </label>
                <textarea 
                    placeholder="Add a description of your video" className="upload__description-input"
                    name="description">
                </textarea>
                </div>
                <div className="upload__btn-container">
                    <button className="upload__publish-button"> PUBLISH
                    </button>
                    <input 
                        type="reset" 
                        value="CANCEL" 
                        className="upload__cancel" 
                        />
                </div></div>
            </form>
        </div>
    </div>
)}}

export default UploadPage;