import React from 'react';

const WCStarRating = ({ number, size }) => {
  const roundedNumber = Math.round(number * 2) / 2;

  const getStarColor = () => {
    if (roundedNumber >= 1) return 'gold';
    if (roundedNumber === 0.5) return 'gold';
    return 'gray';
  };

  const starColor = getStarColor();

  return (
    <div className={`star-rating ${size}`}>
      {[1, 2, 3, 4, 5].map((index) => (
        <span
          key={index}
          className="star"
          style={{
            color: index <= roundedNumber ? starColor : 'gray',
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default WCStarRating;
