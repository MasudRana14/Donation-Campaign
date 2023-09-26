import PropTypes from 'prop-types';
import swal from 'sweetalert';

const Details = ({ detail }) => {

    const { id, img, Category, Description, Price, Button_bg } = detail;


    const handleDonations= ()=>{
        const donationsadd = [];
        const donationsItem = JSON.parse(localStorage.getItem('donation'));

        if(!donationsItem){
            donationsadd.push(detail)
            localStorage.setItem('donation', JSON.stringify(donationsadd));
            swal("Done!", " Donate Success Full..!", "success");
        }
        else{

            const sameDetails = donationsItem.find(detail=> detail.id == id);
            if(!sameDetails){

                donationsadd.push(...donationsItem,detail)
                localStorage.setItem('donation', JSON.stringify(donationsadd));
                swal("Done!", " Donate Success Full..!", "success");
            }
            else{
                swal("Error!", "Already Donate..!", "error");
            }


        }
    }



    return (
        <div>
            <div>
                <div className=" relative max-w-7xl mx-auto  w-[600px] flex-col bg-white bg-clip-border text-gray-700">

                    <div className="  overflow-hidden bg-blue-gray-500 bg-clip-border text-white shadow-md shadow-blue-gray-500/40">

                        <img className="w-full " src={img} alt="" />
                    </div>

                    <div className="bg-[#0b0b0b80] p-3 w-[600px] absolute top-[325px] ">
                        <button onClick={handleDonations} style={{ backgroundColor: Button_bg }} className="text-white px-3 py-3 text-xl font-semibold rounded-lg">Donate $ {Price}.00</button>
                    </div>

                    <div className="">
                        <h5 className="mb-2 block  text-4xl font-bold mt-8  text-[#0B0B0B]">
                            {Category}
                        </h5>
                        <p className="block font-normal text-base mt-3 mb-5">
                            {Description}
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};


Details.propTypes = {
    detail: PropTypes.object.isRequired,
}

export default Details;