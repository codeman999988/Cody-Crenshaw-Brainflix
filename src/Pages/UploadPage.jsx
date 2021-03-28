import React, {Component} from 'react';
import "./UploadPage.scss";
import imag from "../assets/Upload-video-preview.jpg";







class UploadPage extends Component {
    constructor(props) {
        super(props);
    }

formSubmit = () => {
    // alert("Upload success");
    // history.push("/", )
    console.log(this.props);
}

render() {
    console.log(this.props)
    return (
        
        <div className="upload">
            {/* {console.log(this.props)} */}
            <h2 className="upload__title">Upload Video</h2>
            <div className="upload__flex-container" >
            <div className="upload__image-container">
                <h4 className="upload__label upload__label--top">VIDEO THUMBNAIL</h4>
                <img src={imag} className="upload__video-thumbnail"/>
                </div>
            <form onSubmit={() => {
                alert("Image uploaded");
                this.props.history.push('/')
            }}className="upload__form">
             <div className="upload__form-container">
                <label className="upload__label ">TITLE YOUR VIDEO</label>
                <input type='text' placeholder="Add a title to your video" className="upload__title-input"></input>
                <label className="upload__label">ADD A VIDEO DESCRIPTION</label>
                <textarea placeholder="Add a description of your video" className="upload__description-input"></textarea>

                </div>
                <div className="upload__btn-container">
                <button 
                className="upload__publish-button">PUBLISH</button>
                <input type="reset" value="CANCEL"className="upload__cancel"></input>
          
        </div>
        </form>
        </div>
        </div>
    )
}
}

export default UploadPage;