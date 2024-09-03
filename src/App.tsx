import { useEffect, useState } from "react"
import axios from 'axios';
import Header from "./components/Header"
import MainCard from "./components/MainCard"

export default function App() {

  const url="https://arthurfrost.qflo.co.za/php/getTimeline.php";
  //state variable to store the data from the api call
  const [mainData,setMainData]=useState();
  //const [footerData,setFooterData]=useState();
  const [error,setError]=useState();

  const [body,setBody]=useState<any>();

  //make the api call after the first mount
  useEffect(()=>{
    axios.get(url).then((response)=>{
      console.log(response.data.Body[0].About);
      setBody(response.data.Body)
      setMainData(response.data);
    }
    ).catch((error)=>{
      console.error({message:error.message})
      setError(error);
    })
  },[]);

  if(!mainData){
    return(
      <div className="flex justify-center items-center flex-col w-full h-full">
        <h1 className="text-xl font-bold text-[#442d63] line-clamp-1 w-full">Loading Application....</h1>
      </div>
    )
  }

  if(error){
    return(
      <div className="flex justify-center items-center">
        <h1>Error....</h1>
      </div>
    )
  }
 
  return (
    <main className="flex justify-center items-center flex-col px-5 py-5 gap-8">
      <div className="flex justify-center items-center flex-col gap-5">
        <Header/>
        <section className="flex justify-center items-center">
          <MainCard/>
        </section>
      </div>
    </main>
  )
}