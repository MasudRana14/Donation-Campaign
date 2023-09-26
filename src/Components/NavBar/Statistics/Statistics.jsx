import { useEffect, useState } from "react";
import Chart from "react-google-charts";



const Statistics = () => {

    const [chart, setChart]= useState(null);

    useEffect(()=>{
        const donationsItem = JSON.parse(localStorage.getItem('donation')) || []
        const parcent = donationsItem.length;
        if(parcent>0){
            setChart(parcent);
        }
        

        
    },[])
    const donatirmark = (chart/ 12) * 100;
    const donationTotal = 100 - donatirmark ;
   

    const data = [
        ["Task", "Hours per Day"],
        ["Your Donation", donationTotal],
        ["Total Donation", donatirmark ],
       
      ];
    
    
      
     
    return (
        <div>
            <Chart
      chartType="PieChart"
      data={data}
      width={"100%"}
      height={"400px"}
    />
        </div>
    );
};

export default Statistics;