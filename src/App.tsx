import { useState } from 'react';

import { TopNavigation } from './components/TopNavigation';
import { steps } from './data';

function App() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    planId: 0,
    isMonthly: true,
    userSelectedAddOns: [] as number[]
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleNextStep = () => {
    const newErrors = {
      name: formData.name.trim() ? '' : 'Name is required',
      email: !formData.email.trim() 
        ? 'Email is required' 
        : !formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) 
          ? 'Invalid email address' 
          : '',
      phone: formData.phone.trim() ? '' : 'Phone is required'
    };

    setErrors(newErrors);

    // Only proceed if no errors
    if (!newErrors.name && !newErrors.email && !newErrors.phone) {
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };

  const handlePreviousStep = () => {
    setCurrentStepIndex(currentStepIndex - 1);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  const handleInputValidate = (name: string, value: string) => {
    const newErrors = { ...errors };
    
    if (name === 'email') {
      if (!value.trim()) {
        newErrors.email = 'Email is required';
      } else if (!value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        newErrors.email = 'Invalid email address';
      } else {
        newErrors.email = '';
      }
    } else if (name === 'name') {
      newErrors.name = value.trim() ? '' : 'Name is required';
    } else if (name === 'phone') {
      newErrors.phone = value.trim() ? '' : 'Phone is required';
    }
    
    setErrors(newErrors);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    handleInputValidate(name, value);
    setFormData({ ...formData, [name]: value });
  };

  const onTypeOfPlanChange = (planId: number, isMonthly: boolean) => {
    setFormData({ ...formData, planId, isMonthly });
  };

  const onAddOnsChange = (addOns: number[]) => {
    setFormData({ ...formData, userSelectedAddOns: [...addOns] });
  };

  const renderCurrentStepComponent = () => {
    const CurrentStepComponent = steps[currentStepIndex].Component;
    return (
      <CurrentStepComponent
        onTypeOfPlanChange={onTypeOfPlanChange}
        onAddOnsChange={onAddOnsChange}
        onInputChange={handleInputChange}
        formData={formData}
        errors={errors}
        setCurrentStepIndex={setCurrentStepIndex}
      />
    );
  };

  return (
    <div className='md:flex md:flex-row md:bg-white md:rounded-lg md:shadow-md md:mx-auto md:w-[1000px] md:h-[700px] md:py-6 md:mt-[130px]'>
      {/* Sidebar / Top bar on mobile */}
      <nav className='bg-gray-800 bg-[url("/src/assets/images/bg-sidebar-mobile.svg")] bg-cover bg-center h-[200px] md:h-[650px] md:w-[300px] md:bg-[url("/src/assets/images/bg-sidebar-desktop.svg")] md:bg-cover md:bg-bottom md:ml-6 md:rounded-lg md:bg-[unset]'>
        <div className='mx-auto flex justify-between items-center px-[7rem] pt-8 gap-4 md:flex-col md:items-start md:px-4'>
          <TopNavigation currentStepIndex={currentStepIndex} />
        </div>
      </nav>
      {/* Content Form on mobile and desktop */}
      <div className='mx-4 md:mx-30 md:flex-1 self-center'>
        <form onSubmit={handleSubmit}>
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
            {renderCurrentStepComponent()}
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
                      type='button'
                    >
                      Go Back
                    </button>
                  )}

                  <button
                    className={`${
                      currentStepIndex === 3 ? 'bg-[#483eff]' : 'bg-[#04295a]'
                    } text-white px-4 py-2 rounded-md cursor-pointer`}
                    onClick={handleNextStep}
                    type={currentStepIndex === 4 ? 'submit' : 'button'}
                  >
                    {currentStepIndex === 3 ? 'Confirm' : 'Next Step'}
                  </button>
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
