
const AddDonations = ({ card }) => {

    const { img, Category, Title, Price, Text_bg, Category_bg, txt_bg, Button_bg, Card_bg } = card;

    return (
        <div>
            <div>


                <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 ">

                    <img src={img} alt="" />

                    <div style={{ backgroundColor: Card_bg }} className="flex flex-col justify-between p-4 w-full leading-normal">

                        <p style={{ color: Category_bg, backgroundColor: txt_bg }} className="w-fit font-medium text-sm px-2 py-1 rounded-md mt-3 mb-2">{Category}</p>

                        <h5 style={{ color: Text_bg }} className="text-2xl font-semibold mt-2 mb-2">{Title}</h5>
                        <p style={{ color: Text_bg }} className="font-semibold text-base">$ {Price}.00</p>
                        <div>
                            <button style={{ backgroundColor: Button_bg }} className="text-white px-2 mt-4 py-1 rounded-md text-xl font-semibold">View Details</button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default AddDonations;