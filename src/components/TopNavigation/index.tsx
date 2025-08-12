export const TopNavigation = ({ currentStep }: { currentStep: number }) => {
  const stepNumber = [
    { id: 0, isLastStep: false },
    { id: 1, isLastStep: false },
    { id: 2, isLastStep: false },
    { id: 3, isLastStep: false },
    { id: 4, isLastStep: true }
  ];

  return stepNumber.map(({ id, isLastStep }, index) => {
    const currentlyOnLastStep = (id === 3 || id === 4) && currentStep === 4;

    const determineColorAndBorder = () => {
      if (currentlyOnLastStep) {
        return 'border-[#bee1fe] bg-[#bee1fe] border-0 text-black';
      }

      return currentStep === id
        ? 'border-[#bee1fe] bg-[#bee1fe]'
        : 'border-white text-white';
    };

    return (
      <div
        key={index}
        className={`flex items-center justify-center border rounded-[50%] w-[32px] h-[32px] ${determineColorAndBorder()} ${
          isLastStep ? 'hidden' : ''
        } `}
      >
        {id === 4 ? 4 : id + 1}
      </div>
    );
  });
};
