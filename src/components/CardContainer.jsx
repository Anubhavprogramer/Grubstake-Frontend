import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const CardContainer = ({ Data = [] }) => {
  if (!Data || !Array.isArray(Data)) {
    return <div className="text-center text-blue-900 font-semibold py-8">No sponsors available</div>;
  }

  return (
    <div className='w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-6 px-2'>
      {Data.map((sponsor, index) => (
        <Card
          key={index}
          name={sponsor.name}
          link={sponsor.link}
          ScholarshipType={sponsor.ScholarshipType}
          avatar={sponsor.avatar}
          Application_Starting={sponsor.Application_Starting}
          Application_Closing={sponsor.Application_Closing}
          amount={sponsor.amount}
          eligibilityCriteria={sponsor.eligibilityCriteria}
          provider={sponsor.provider}
          instituteCreated={sponsor.instituteCreated}
        />
      ))}
    </div>
  );
};

CardContainer.propTypes = {
  Data: PropTypes.array
};

export default CardContainer;
