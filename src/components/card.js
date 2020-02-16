import React from 'react'; // need to import to make it a jsx
// remove the above line will throw error

// https://robohash.org/ pretty cool robot image generator
const Card = ({name, id, email}) => {
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?size=200x200`}/>
            <div>{name}</div>
            <div>{email}</div>
            <div>more stuff coming</div>
        </div>
    );
}

export default Card;