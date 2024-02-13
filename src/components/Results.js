import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import SearchCard from './SearchCard';

const Results = () => {
  const[searchParams] = useSearchParams();
  const search_query = searchParams.get("search_query");
  const [searchList,setSearchList] = useState([])
  useEffect(()=>{
    getListForSearchQuery();
  },[])

  const getListForSearchQuery= async ()=>{
    const data = await fetch(YOUTUBE_SEARCH_API+search_query);
    const json = await data.json();
    console.log(json.items[0])
    setSearchList(json.items)
  }

  if(!searchList.length) return;

  return (
    <div className='relative top-24 mx-5'>
      {searchList.map(item=><Link key={item.id.videoId} to={"/watch/?v="+item.id.videoId}  ><SearchCard  data={item}/></Link>)}
    </div>
  )
}

export default Results;
