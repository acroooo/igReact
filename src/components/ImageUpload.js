import React, { useState } from "react";
import { Button } from "@material-ui/core";

function ImageUpload() {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = (e) => {

  }

  return (
    <div>
      <input
        text="text"
        placeholder="Texto de la imagen"
        onChange={(event) => setCaption(event.target.value)}
        value={caption}
      />
      <input type="file" onChange={handleChange} />
      <Button onClick={handleUpload}>Subir</Button>
    </div>
  );
}

export default ImageUpload;
