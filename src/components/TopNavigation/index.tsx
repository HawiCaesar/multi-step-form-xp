import { steps } from '../../data';

type TopNavigationProps = {
  currentStepIndex: number;
};

export const TopNavigation = ({ currentStepIndex }: TopNavigationProps) => {
  const stepNumber = [
    { id: 0, isLastStep: false },
    { id: 1, isLastStep: false },
    { id: 2, isLastStep: false },
    { id: 3, isLastStep: false },
    { id: 4, isLastStep: true }
  ];

  const currentlyOnLastStep = (id: number) =>
    (id === 3 || id === 4) && currentStepIndex === 4;

  const determineColorAndBorder = (id: number) => {
    if (currentlyOnLastStep(id)) {
      return 'border-[#bee1fe] bg-[#bee1fe] border-0 text-black';
    }

    return currentStepIndex === id
      ? 'border-[#bee1fe] bg-[#bee1fe]'
      : 'border-white text-white';
  };

  return (
    <>
      <div className='flex justify-center items-center gap-4 md:hidden'>
        {stepNumber.map(({ id, isLastStep }, index) => {
          return (
            <div
              key={index}
              className={`flex items-center justify-center border rounded-[50%] w-[32px] h-[32px] ${determineColorAndBorder(
                id
              )} ${isLastStep ? 'hidden' : ''} `}
            >
              <span>{id === 4 ? 4 : id + 1}</span>
            </div>
          );
        })}
      </div>

      <div className='hidden md:flex md:flex-col md:gap-6 md:p-6'>
        {stepNumber.map(({ id, isLastStep }, index) => {
          return (
            <div
              key={index}
              className={`flex items-start gap-4 ${
                isLastStep ? 'hidden' : ''
              } `}
            >
              {/* Step number circle */}
              <div
                className={`flex items-center justify-center border rounded-full w-[32px] h-[32px] flex-shrink-0 md:self-center ${determineColorAndBorder(
                  id
                )} `}
              >
                <span className='font-semibold'>{id + 1}</span>
              </div>

              {/* Step info */}
              <div className='flex flex-col'>
                <span className='text-xs text-gray-300 uppercase tracking-wider'>
                  Step {id + 1}
                </span>
                <span className='text-white font-semibold text-sm mt-1'>
                  {steps[id].subTitle?.toUpperCase()}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
