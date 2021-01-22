import React, { useState, useEffect } from 'react';
import './App.css';
import Post from './Post';
import { auth, db } from './firebase';
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal'
import { Button, Input } from '@material-ui/core';
import ImageUpload from './ImageUpload';

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
  const [posts,setPosts] = useState ([]);
  const [open, setOpen] = useState(false);
  const [openSignin, setOpenSignIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
   const unsubsrcibe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user has logged in...
        console.log(authUser);
        setUser(authUser);

  
      } else {
        // user has logged out...
        setUser(null);
      }
      
      return () => {
        // cleanup actions
        unsubsrcibe();
      }
    })
  }, [user, username]);

  useEffect(() => {
    db.collection('posts').orderBy('timestamp','desc').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        post: doc.data()
      })));
    })
  }, []);

  const signUp = (event) => {
    event.preventDefault();

    auth
    .createUserWithEmailAndPassword(email, password)
    .then((authUser) => {
      return authUser.user.updateProfile({
        displayName: username
      })
    })
    .catch((error) => alert(error.message));

    setOpen(false);
  }

  const signIn = (event) => {
    event.preventDefault();

    auth
    .signInWithEmailAndPassword(email, password)
    .catch((error) => alert(error.message))
  
    setOpenSignIn(false);
  }


  return (
    <div className="App">


   <Modal
        open={open}
        onClose={() => setOpen(false)}
      >
        <div style={modalStyle} className={classes.paper}>
         
         <form className="app__signup">
          <center>
                <img 
                className="app__headerImage"
                src="img/logo.jpg"
                alt=""
                />
            </center>

            <Input
              placeholder="Korisničko ime"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}  
            />

            <Input
              placeholder="Email adresa"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}  
            />

            <Input
              placeholder="Lozinka"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}  
            />

            <Button type="submit" onClick={signUp}>Uloguj se</Button>
         </form>
         
         
        </div>
      </Modal>
      <Modal
        open={openSignin}
        onClose={() => setOpenSignIn(false)}
      >
        <div style={modalStyle} className={classes.paper}>
         
         <form className="app__signup">
          <center>
                <img 
                className="app__headerImage"
                src="img/logo.jpg"
                alt=""
                />
            </center>
            <Input
              placeholder="Email adresa"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}  
            />

            <Input
              placeholder="Lozinka"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}  
            />

            <Button type="submit" onClick={signIn}>Uloguj se</Button>
         </form>
         
         
        </div>
      </Modal>

      <div className="app__header">
        <div className="app__headerLogo">
         <h4>Tamiš 0-40</h4>
         </div>

         {user ? ( 
        <Button onClick={() => auth.signOut()}>Odjavi se</Button>
        ): (
        <div className="app__loginContainer">
        <Button onClick={() => setOpenSignIn(true)}>Uloguj se</Button>
        <Button onClick={() => setOpen(true)}>Registruj se</Button>
        </div>
    )}
      </div>

      <div className="app__posts">
        <div className="app__postsLeft">
        {
          posts.map(({id, post}) => (
            <Post key={id} postId={id} user={user} username={post.username} caption={post.caption} imageURL={post.imageURL} />
          ))
        }
        </div>
       
   
      
    </div>
    
    {user?.displayName ? (
     <ImageUpload username={user.displayName} />
      ): (
        <h3>Ups! Uloguj se pre nego što nastaviš... </h3>
      )}
  </div>
  
    
  );
}

export default App;
