import { useEffect, useState } from 'react';
import TourCard from '../TourCard/TourCard';
import TourModal from '../TourModal/TourModal';

import './Tours.scss';

const Tours = () => {
  const [tours, setTours] = useState([]);
  const [selectedTour, setSelectedTour] = useState(null);

  useEffect(() => {
    fetch('index-tours.json')
      .then(response => response.json())
      .then(data => setTours(data.tours))
      .catch(error => console.error('Error fetching the tours data:', error));
  }, []);

  const handleSelectTour = (tour) => {
    setSelectedTour(tour);
  };

  const handleCloseModal = () => {
    setSelectedTour(null);
  };

  return (
    <>
      <div className="tours__wrapper">
        {tours.map(tour => (
          <TourCard key={tour.id} tour={tour} onSelect={handleSelectTour} />
        ))}
      </div>
      {selectedTour && (
        <TourModal
          tourInfo={selectedTour}
          options={selectedTour.options}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
}

export default Tours;
