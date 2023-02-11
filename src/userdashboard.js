import React, { useState, useEffect } from 'react';
import { storage } from './firebase';
import {getDownloadURL, listAll, ref, uploadBytes} from "firebase/storage";
import {v4} from "uuid";
import './userdashboard.css'

function UserDashboard() {
  const [files, setFiles] = useState([]);
  const [file, setFile] = useState(null);
  
  useEffect(() => {    
    
      const listRef = ref(storage,'files/');
      listAll(listRef).then((res)=>{
        console.log(res);
        res.items.forEach((item)=>{
          getDownloadURL(item).then((url)=>{
            setFiles((prev)=>[...prev,url])
          })
        })
      })
      
  }, []);

  const handleFileUpload = () => {
    if (file == null) return;

    const fileRef = ref(storage, `files/${file.name + v4()}`);
    uploadBytes(fileRef,file).then((snapshot)=>
      {
        getDownloadURL(snapshot.ref).then((url)=>{
          setFiles((prev)=>[...prev,url]);
        })
      });
      // const url =  getDownloadURL(fileRef);
  };

  return (
    <div className="container">
  <input type="file" onChange={(event) => setFile(event.target.files[0])} />
  <button onClick={handleFileUpload}>Upload</button>
  {files.map((file, index) => (
    <a href={file} key={index}>{`File ${index + 1}`}</a>
  ))}
</div>
  );
}

export default UserDashboard;
