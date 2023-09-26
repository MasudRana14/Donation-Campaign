import { useEffect, useState } from "react";
import AddDonations from "../../AddDonations/AddDonations";

const Donation = () => {

    const [donation, setDonation] = useState([]);
    const [noData, setNoData]= useState(false)
    const [seeAll, setSeeAll]= useState(false)

    useEffect(()=>{
        const donationsItem = JSON.parse(localStorage.getItem('donation'));
        
        if(donationsItem){
            setDonation(donationsItem);
        }
        else{
            setNoData('No Data Found..!')
        }

    },[])

    return (
        <div>
           {
            noData? <p className="text-2xl font-medium h-[80vh] justify-center items-center flex ">{noData}</p> : 

            <div>

             

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-8">
                {
                    seeAll ? donation.map(card=> <AddDonations show={card} key={card.id} card={card}></AddDonations>) 
                    : 
                    donation.slice(0,4).map(card=> <AddDonations show={card} key={card.id} card={card}></AddDonations>)
                }
                </div>
                  
               <div className="text-center mt-5">
               {
                donation.length > 4 && <button onClick={()=>setSeeAll(!seeAll)} className="bg-[#009444] px-7 py-3 rounded-lg  mx-auto text-white font-semibold text-base">{seeAll ? "See Less" : "See All"}</button>
               }
                </div>   
               
            </div>
           }


        </div>
    );
};

export default Donation;