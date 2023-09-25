import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Details from "./Details/Details";


const CardDetails = () => {

    const [detail, setDetail]= useState({})

    const {id} = useParams()

    const cardDetail = useLoaderData()
  
   
    useEffect(()=>{

        const findCard = cardDetail?.find(detail=> detail.id == id)
       
        setDetail(findCard)

    },[id, cardDetail])


    return (
        <div>
       <Details detail={detail}></Details>
        </div>
    );
};

export default CardDetails;