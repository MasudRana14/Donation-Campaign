import { useEffect, useState } from "react";
import AddDonations from "../../AddDonations/AddDonations";

const Donation = () => {

    const [donation, setDonation] = useState([]);
    const [noData, setNoData]= useState(false)

    useEffect(()=>{
        const donationsItem = JSON.parse(localStorage.getItem('donation'));
        
        if(donationsItem){
            setDonation(donationsItem);
        }
        else{
            setNoData('No Data Found')
        }

    },[])

    return (
        <div>
           {
            noData? <p className="text-5xl h-[80vh] justify-center items-center flex ">{noData}</p> : 

            <div>

                <div className="grid grid-cols-2 gap-5">
                {donation.map(card=> <AddDonations show={card} key={card.id} card={card}></AddDonations>)}
                </div>

            </div>
           }


        </div>
    );
};

export default Donation;