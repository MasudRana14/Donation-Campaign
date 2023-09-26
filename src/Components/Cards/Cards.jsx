import Card from "../Card/Card";
import PropTypes from 'prop-types';

const Cards = ({ cards }) => {
   

    return (
        <div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
                {
                    cards?.map(card =>  <Card  key={card.id} card={card}></Card>)
                
                }
            </div>
        
        </div>
        
    );
    
};

Cards.propTypes = {
    cards: PropTypes.object.isRequired,
}


export default Cards;