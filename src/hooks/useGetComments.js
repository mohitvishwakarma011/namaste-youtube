import { useEffect, useState } from "react"
import { GOOGLE_API_KEY } from "../utils/constants";

const useGetComments = (id)=>{
    const[data,setData] = useState(null);

    useEffect(()=>{
        getCommentsData();
    },[])

    const getCommentsData=async()=>{
        const comments = await fetch("https://developers.google.com/apis-explorer/#p/youtube/v3/youtube.commentThreads.list?part=snippet,replies&key="+GOOGLE_API_KEY+"&videoId="+id);
        const jsonComments = await comments.json();
        setData(jsonComments);
    }

    return data;
}

export default useGetComments;