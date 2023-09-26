import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Card = ({card}) => {

    const {id, img, Category, Title, Category_bg, Text_bg, txt_bg, Card_bg} = card;


    return (
        <div className=" max-w-7xl mx-auto">

          <Link to={`/details/${id}`}>
          <div style={{backgroundColor:Card_bg }} className="card card-compact w-[300px] h-[283px] bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 style={{color:Category_bg, backgroundColor:txt_bg}} className="p-2 text-sm font-medium rounded-md w-fit">{Category}</h2>
                    <p style={{color:Text_bg}} className="text-base font-semibold">{Title}</p>
                </div>
            </div>
          </Link>
         
        </div>
    );
};

Card.propTypes = {
    card: PropTypes.object.isRequired,
}

export default Card;