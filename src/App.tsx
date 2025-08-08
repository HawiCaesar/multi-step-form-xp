import { useState } from 'react';

import { PersonalInfo } from "./components/PersonalInfo";
import { TypeOfPlan } from "./components/TypeOfPlan";
import { TopNavigation } from './components/TopNavigation';
import { AddOns } from './components/AddOns';

const steps = [
  {
    id: 0,
    title: 'Personal info',
    description: 'Please provide your name, email address, and phone number.',
    Component: <PersonalInfo />
  },
  {
    id: 1,
    title: 'Select your plan',
    description: 'You have the option of monthly or yearly billing.',
    Component: <TypeOfPlan />
  },
  {
    id: 2,
    title: 'Pick add-ons',
    description: 'Add-ons help enhance your gaming experience.',
    Component: <AddOns />
  }
]

function App() {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  }

  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
  }

  return (
    <div className=''>
      {/* Sidebar / Top bar on mobile */}
      <nav className='bg-gray-800 bg-[url("/src/assets/images/bg-sidebar-mobile.svg")] bg-cover bg-center h-[200px]'>
        <div className='mx-auto flex justify-between items-center px-[7rem] pt-8 gap-4'>
          <TopNavigation currentStep={currentStep} />
        </div>
      </nav>
      {/* Content Form on mobile and desktop */}
      <div className='mx-4'>
        <div className='bg-white rounded-lg shadow-md p-4 mt-[-80px]'>
          <h2 className='text-2xl font-bold text-[#04295a]'>{steps[currentStep].title}</h2>
          <p className='text-[#a2a3a9] my-4'>
            {steps[currentStep].description}
          </p>
          {steps[currentStep].Component}
        </div>
      </div>
      {/* Footer section on desktop & mobile */}
      <div className='mx-4'>
        <div className='bg-white rounded-lg shadow-md p-4 mt-[10px]'>
          <div className={`flex ${currentStep === 0 ? 'justify-end' : 'justify-between'} items-center`}>

            {currentStep > 0 && currentStep <= 3 && (
              <button className='bg-white text-gray-500 px-4 py-2 rounded-md' onClick={handlePreviousStep}>Go Back</button>
            )}

            <button className='bg-[#04295a] text-white px-4 py-2 rounded-md' onClick={handleNextStep}>{currentStep === 3 ? 'Confirm' : 'Next Step'}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
