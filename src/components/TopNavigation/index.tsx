export const TopNavigation = ({ currentStep }: { currentStep: number }) => {
  const stepNumber = [0, 1, 2, 3];

  return stepNumber.map((stepNumber, index) => (
    <div
      key={index}
      className={`flex items-center justify-center border rounded-[50%] w-[32px] h-[32px] ${
        currentStep === stepNumber
          ? `border-[#bee1fe] bg-[#bee1fe]`
          : `border-white text-white`
      }`}
    >
      {stepNumber + 1}
    </div>
  ));
};
