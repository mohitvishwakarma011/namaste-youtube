import { useEffect, useState } from "react"
import { GOOGLE_API_KEY } from "../utils/constants";

const useGetComments = (id)=>{
    const[data,setData] = useState(null);

    useEffect(()=>{
        getCommentsData();
    },[])

    const getCommentsData=async()=>{
        const comments = await fetch("https://www.googleapis.com/youtube/v3/commentThreads?key="+GOOGLE_API_KEY+"&textFormat=plainText&part=snippet&videoId="+id+"&maxResults=50");
        const jsonComments = await comments.json();
        setData(jsonComments);
    }

    return data;
}

export default useGetComments;