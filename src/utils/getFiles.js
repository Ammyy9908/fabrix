import axios from 'axios';
const getFiles = async ()=>{

    try{
        const r = await axios.get('http://localhost:5000/api/list');
        return r.data;
    }
    catch(err){
        return err;
    }
}

export default getFiles;