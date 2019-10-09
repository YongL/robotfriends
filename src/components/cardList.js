import React from 'react';
import Card from './card';

const CardList = ({robots}) => {
    console.log('CardList')
    return (
        <div>
            {robots.map( robot => 
                <Card key={robot.id} 
                    name={robot.name} 
                    id={robot.id} 
                    email={robot.email}
                />    
            )}
        </div>
    );
};

export default CardList;