import React, { useState } from 'react';
import ChecklistItem from '../components/wellness/Checklist';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';


const WellnessPage = () => {
  const [checklist, setChecklist] = useState([
    { id: 1, text: 'Annual vet visit', isChecked: false },
    { id: 2, text: 'Dental check-up', isChecked: false },
    { id: 3, text: 'Vaccination update', isChecked: false },
    { id: 4, text: 'Heartworm test', isChecked: false },
  ]);

  const handleChecklistChange = (id) => {
    const updatedChecklist = checklist.map(item =>
      item.id === id ? { ...item, isChecked: !item.isChecked } : item
    );
    setChecklist(updatedChecklist);
  };

  return (
    <div>
      <Header/>
      <div className='mt-32'>
      <h1>Wellness Checklist</h1>
      {checklist.map(item => (
        <ChecklistItem
          key={item.id}
          text={item.text}
          isChecked={item.isChecked}
          onChange={() => handleChecklistChange(item.id)}
        />
      ))}
      </div>
      <Footer/>
    </div>
  );
};

export default WellnessPage;
