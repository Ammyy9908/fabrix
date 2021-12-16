import axios from 'axios';
const sendFiles = async (name,url)=>{

    try{
        const r = await axios.post('http://localhost:5000/api/file/new',{
            label:name,
            url
        });
        return r.data;
    }
    catch(err){
        return err;
    }
}

export default sendFiles;