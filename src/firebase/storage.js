import { storage } from "./firebase";
import { ref, uploadBytesResumable } from "firebase/storage"


export default handleSubmit = (data) => {
    const storageRef = ref(storage, data.name)
    const uploadTask = uploadBytesResumable(storageRef,data)
    uploadTask.on('state_changed', (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100%
        console.log('Upload is ' + progress + '% done')
    }),
    (error) => {
        console.log(error.message)
    },
    ()=>{
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log('File available at', downloadURL);
        })
    }
}