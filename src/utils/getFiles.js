import axios from 'axios';
const getFiles = async ()=>{

    try{
        const r = await axios.get('https://fabricbackend.herokuapp.com/api/list');
        return r.data;
    }
    catch(err){
        return err;
    }
}

export default getFiles;