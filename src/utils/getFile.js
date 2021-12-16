import axios from "axios";

const getFile = async (id)=>{
    try{
        const r = await axios.get(`http://localhost:5000/api/file/${id}`);
        return r.data;
    }
    catch(err){
        return err;
    }
}

export default getFile;