import React, { useState } from "react";
import { Button } from "@material-ui/core";
import firebase from "firebase";
import { storage, db } from "./firebase";
//Imports end

//function ImageUpload Start
//This function upload an image for the post with a caption
function ImageUpload({username}) {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        //Progress
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        //Error
        console.log(error);
        alert(error.message);
      },
      () => {
        //Complete
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            //post inside db
            db.collection("posts").add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              caption: caption,
              imageUrl: url,
              username: username
            });
            setProgress(0);
            setImage(null);
            setCaption("");
          })
      }
    )
  };

  return (
    <div>
      <input
        text="text"
        placeholder="Texto de la imagen"
        onChange={(event) => setCaption(event.target.value)}
        value={caption}
      />{" "}
      <input type="file" onChange={handleChange} />{" "}
      <Button onClick={handleUpload}> Subir </Button>{" "}
    </div>
  );
}

export default ImageUpload;