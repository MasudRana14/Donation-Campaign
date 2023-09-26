import Card from "../Card/Card";
import PropTypes from 'prop-types';

const Cards = ({ card }) => {
   

    return (
        <div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
                {
                    card?.map(card =>  <Card  key={card.id} card={card}></Card>)
                
                }
            </div>
        
        </div>
        
    );
    
};

Cards.propTypes = {
    card: PropTypes.object.isRequired,
}

export default Cards;