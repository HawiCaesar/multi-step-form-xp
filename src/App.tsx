import { useState } from 'react';

import { TopNavigation } from './components/TopNavigation';
import { steps } from './data';

function App() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const handleNextStep = () => {
    setCurrentStepIndex(currentStepIndex + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStepIndex(currentStepIndex - 1);
  };

  return (
    <div className='md:flex md:flex-row md:bg-white md:rounded-lg md:shadow-md md:mx-auto md:w-[1000px] md:h-[700px] md:py-6'>
      {/* Sidebar / Top bar on mobile */}
      <nav className='bg-gray-800 bg-[url("/src/assets/images/bg-sidebar-mobile.svg")] bg-cover bg-center h-[200px] md:h-[650px] md:w-[300px] md:bg-[url("/src/assets/images/bg-sidebar-desktop.svg")] md:bg-cover md:bg-bottom md:ml-6 md:rounded-lg md:bg-[unset]'>
        <div className='mx-auto flex justify-between items-center px-[7rem] pt-8 gap-4 md:flex-col md:items-start md:px-4'>
          <TopNavigation currentStepIndex={currentStepIndex} />
        </div>
      </nav>
      {/* Content Form on mobile and desktop */}
      <div className='mx-4 md:mx-30 md:flex-1 self-center'>
        <div className='bg-white rounded-lg shadow-md p-4 mt-[-80px] md:mt-0 md:p-0 md:shadow-none'>
          {currentStepIndex !== 4 && (
            <>
              <h2 className='text-2xl font-bold text-[#04295a]'>
                {steps[currentStepIndex].title}
              </h2>
              <p className='text-[#a2a3a9] my-4'>
                {steps[currentStepIndex].description}
              </p>
            </>
          )}
          {steps[currentStepIndex].Component}
          {/* Footer section on desktop & mobile */}
          {currentStepIndex !== 4 && (
            <div className='mx-4 pt-6 md:mx-0'>
              <div
                className={`flex ${
                  currentStepIndex === 0 ? 'justify-end' : 'justify-between'
                } items-center`}
              >
                {currentStepIndex > 0 && currentStepIndex <= 3 && (
                  <button
                    className='bg-white text-gray-500 px-4 py-2 rounded-md cursor-pointer'
                    onClick={handlePreviousStep}
                  >
                    Go Back
                  </button>
                )}

                <button
                  className={`${
                    currentStepIndex === 3 ? 'bg-[#483eff]' : 'bg-[#04295a]'
                  } text-white px-4 py-2 rounded-md cursor-pointer`}
                  onClick={handleNextStep}
                >
                  {currentStepIndex === 3 ? 'Confirm' : 'Next Step'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
