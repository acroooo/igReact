import React, { useState, useEffect } from "react";
import "./App.css";
import Post from "./components/Post";
import {
  InputLabel,
  Modal,
  Button,
  Input,
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { db, storage, auth } from "./firebase";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function App() {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState(false);
  const [password, setPassword] = useState(false);
  const [email, setEmail] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    })

    return () => {
      unsubscribe();
    }
  }, [user, username]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          post: doc.data(),
        }))
      );
    });
  }, []);

  const signUp = (event) => {
    event.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        return authUser.user.updateProfile({
          displayName: username,
        })
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="ig">
      <Modal open={open} onClose={() => setOpen(false)}>
        <div style={modalStyle} className={classes.paper}>
          <form className="ig__signup">
            <center>
              <img
                className="ig__headerImage"
                src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                alt="logoIg"
              />
            </center>
            <Input 
              placeholder="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              placeholder="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" onClick={signUp}>
              Sign Up
            </Button>
          </form>
        </div>
      </Modal>
      {/* Header */}
      <div className="ig__header">
        <img
          className="ig__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="logoIg"
        />
      </div>
      {user ? (
        <Button onClick={() => auth.signOut()}>Cerrar sesión</Button>
      ) : (
        <Button onClick={() => setOpen(true)}>Sign Up</Button>
      )}
      

      {posts.map(({ id, post }) => (
        <Post
          key={id}
          username={post.username}
          imgUrl={post.imageUrl}
          caption={post.caption}
        />
      ))}
      <InputLabel>Usuario</InputLabel>
      <input />
      <InputLabel>Imagen</InputLabel>
      <button>Subir</button>
      <InputLabel>Caption</InputLabel>
      <input />
      <button>Enviar</button>
    </div>
  );
}

export default App;
