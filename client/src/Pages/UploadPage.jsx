import React from 'react';
import "./UploadPage.scss";
import imag from "../assets/Upload-video-preview.jpg";
import axios from 'axios';

class UploadPage extends React.Component {
    constructor(props){
        super(props)
    

    this.state = {
        uploadVideo: null
    }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({
          file: URL.createObjectURL(e.target.files[0])
        })
uploadVideo(e) {
        e.preventDefault();
        console.log(e.target.inputFile.value);
console.log(e.target)
        axios

    .post(`http://localhost:8080/videos`, 
      {  
          title: `${e.target.title.value}`,
          description: `${e.target.description.value}`
        })
        .post(`http://localhost:8080/videos/files`,
        e.target.files[0],


        )
    .then(response => {
console.log("congrats you did it")
        })
    .catch(err => {
          console.warn(err)
        })

    }
    render() {
return (
    <div className="upload">
        <h2 className="upload__title">Upload Video
        </h2>
        <div className="upload__flex-container" >
        <form 
            onSubmit={(e) => {
            alert("Image uploaded");
            console.log(e.target.inputFile.value)
            this.uploadVideo(e);

            this.props.history.push('/')}}
            className="upload__form">
            <div className="upload__image-container">
                <h4 className="upload__label upload__label--top">VIDEO THUMBNAIL
                </h4>
                
                <input onChange={this.handleChange}
                type="file"
                className="upload__video-thumbnail" alt="handlebars"
                name="inputFile" 
                
                />
                <img src={this.state.file}/>
            </div>
                <div className="upload__form-container">
                <div className="upload__form-container2">
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
                </div></div>
            </form>
        </div>
    </div>
)}}

export default UploadPage;