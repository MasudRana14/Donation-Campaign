import { Link } from "react-router-dom";

const Card = ({card}) => {

    const {id, img, Category, Title, Category_bg} = card;


    return (
        <div className=" max-w-7xl mx-auto">

          <Link to={`/details/${id}`}>
          <div className="card card-compact w-[300px] h-[283px] bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{Category}</h2>
                    <p>{Title}</p>
                </div>
            </div>
          </Link>
         
        </div>
    );
};

export default Card;