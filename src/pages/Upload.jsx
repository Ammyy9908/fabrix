/* eslint-disable */
import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import "./Upload.css"
import AppContext from '../context/_appContext';
import firebase from 'firebase'
import sendFiles from '../utils/sendFile'
function Upload() {
    const {files,setFiles} = React.useContext(AppContext);
    const [progress,setProgress] = React.useState(0);
    const [loading,setLoading] = React.useState(false);
    const uploadToFirebase = (name,file)=>{
        setLoading(true);
        var storageRef = firebase.storage().ref();
        var fileRef = storageRef.child(`models/${name}`);

        const uploadTask = fileRef.put(file);

        uploadTask.on("state_changed",(snapshot)=>{
            var ps = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

            console.log('Upload is ' + ps + '% done');
            setProgress(ps);
           
        },
        (error) => {
            // Handle unsuccessful uploads
            console.error(error)
          },
          () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
              console.log('File available at', downloadURL);

              sendFiles(name,downloadURL).then((feedback)=>{
                  console.log(feedback);
                  const {file} = feedback;
                  setFiles([...files,file]);
                  setProgress(0);
                    setLoading(false);
              }).catch((error)=>{
                  console.log(error);
              })
            });
          })



    }

    const handleFile = (e)=>{
        const file = e.target.files[0]
        console.log(file);
        const {size} = file;
        const {name} = file;
        const {type} = file;
        const isGLB = name.includes("glb");
        if(!isGLB){
            return alert("Make sure You selected a GLB file.")
        }

        // const allowed = ['image/png','image/jpeg','image/jpg'];
        
        if(size>2000000){
            return alert("Large file!");
        }

        const reader = new FileReader();

        reader.addEventListener("load", function () {
            // convert image file to base64 string
            
            
          }, false);

          if (file) {
            reader.readAsDataURL(file);
          }

          uploadToFirebase(name,file)








    }

    return (
        <div>
            <Navbar/>
            <section className='upload_section'>
                <div className='upload_form'>
                   <label for="file" className='upload_input'>
                        <input type="file" name="file" id="file" onChange={handleFile} onDrop={handleFile}/>
                        <span>{loading?"Uploading...":"Upload Model"}</span>
                        <div className='upload_progress'>
                       <div className='upload_level' style={{width:`${progress}%`}}></div>
                   </div>
                   </label>
                   <p>Choose an glb file to upload an 3D Model</p>
                   
                </div>

            </section>
        </div>
    )
}

export default Upload
