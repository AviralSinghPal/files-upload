import React, { useState, useEffect } from 'react';
import {auth, SignOut, storage } from '../firebase';
import {getDownloadURL, listAll, ref, uploadBytes} from "firebase/storage";
import {v4} from "uuid";
import './userdashboard.css';

function UserDashboard() {
  const [files, setFiles] = useState([]);
  const [file, setFile] = useState(null);
  
  

  useEffect(() => {    
    // Check if user is authenticated or not
    if (!auth.currentUser) {
      window.location = '/';
    }
  }, []);

  useEffect(() => {    
    
    const listRef = ref(storage,`files/${localStorage.getItem("email")}/`);
    listAll(listRef).then((res)=>{
      console.log(res);
      res.items.forEach((item)=>{
        getDownloadURL(item).then((url)=>{
          setFiles((prev)=>[...prev,url])
        });
      });
    });
    
}, []);


const handleFileUpload = async () => {
 
  if (file == null) return;
    const folderName = localStorage.getItem("email");
    const fileRef = ref(storage, `files/${folderName}/${file.name + v4()}`);
    uploadBytes(fileRef, file).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setFiles((prev) => [...prev, url]);
      });
    });
};


  return (
    <div className="user-container">
       <div className="user-header">
    <img src={localStorage.getItem("profilePic")} alt={localStorage.getItem("name")} />
    <h2>{localStorage.getItem("name")}</h2>
    <p>{localStorage.getItem("email")}</p>
  </div>
  <input type="file" onChange={(event) => setFile(event.target.files[0])} />
  <button onClick={handleFileUpload}>Upload</button>
  {files.map((file, index) => (
    <a target='blank'  href={file} key={index}>{`File ${index + 1}`}</a>
  ))}

  <button onClick={SignOut}>Sign Out</button>
</div>
  );
}

export default UserDashboard;
