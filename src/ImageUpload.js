import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { storage, db } from "./firebase";
import firebase from 'firebase';
import './ImageUpload.css';


function ImageUpload({username}) {
    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);
    const [caption, setCaption] = useState('');

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        
        uploadTask.on(
            "stage_changed",
            (snapshot) => {
                // progress function ...
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress);
            },
            (error) => {
                //  Error function ...
                console.log(error);
                alert(error.message);
            },
            () => {
                // completed function ...
                storage
                .ref("images")
                .child(image.name)
                .getDownloadURL()
                .then(url => {
                    //  post image inside db
                    db.collection("posts").add({
                        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                        caption: caption,
                        imageURL: url,
                        username: username
                    });
                
                setProgress(0);
                setCaption("");
                setImage(null);
                })
            }
        )
    };

    return (
        <div className="imageupload">
      <progress className="imageupload__progress" value={progress} max="100" />
      <input type="text" placeholder="Dodaj opis" onChange ={event => setCaption(event.target.value)} value={caption}></input>
      <input type="file" onChange={handleChange}/>
      <Button className="imageupload__button" onClick={handleUpload}>
        upload
      </Button>
        </div>
    )
}

export default ImageUpload
