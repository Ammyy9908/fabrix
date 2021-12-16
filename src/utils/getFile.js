import axios from "axios";

const getFile = async (id)=>{
    try{
        const r = await axios.get(`https://fabricbackend.herokuapp.com/api/file/${id}`);
        return r.data;
    }
    catch(err){
        return err;
    }
}

export default getFile;