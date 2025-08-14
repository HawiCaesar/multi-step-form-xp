import { addOns, plans } from '../../data';

type SummaryProps = {
  setCurrentStepIndex: (index: number) => void;
  formData: {
    planId: number;
    isMonthly: boolean;
    userSelectedAddOns: number[];
  };
};

export const Summary = ({ setCurrentStepIndex, formData }: SummaryProps) => {
  const { planId, isMonthly, userSelectedAddOns } = formData;

  const plan = plans.find((plan) => plan.id === planId);
  const selectedAddOns = addOns.filter((addOn) =>
    userSelectedAddOns.includes(addOn.id)
  );

  const planPrice = isMonthly ? plan?.monthlyPrice ?? 0 : plan?.yearlyPrice ?? 0;
  const addOnsPrice = selectedAddOns.reduce((acc, addOn) => acc + (isMonthly ? addOn.monthlyPrice : addOn.yearlyPrice), 0);

  const totalPrice = planPrice + addOnsPrice;

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-col gap-4 bg-[#f7f9ff] p-4 rounded-lg'>
        <div className='flex justify-between border-b border-gray-200 pb-4'>
          <div className='flex flex-col'>
            <h3 className='text-[#04295a] font-bold'>
              {plan?.name} (
              {isMonthly ? 'Monthly' : 'Yearly'})
            </h3>
            <a
              href='#'
              className='text-[#a2a3a9] underline'
              onClick={() => {
                setCurrentStepIndex(1);
              }}
            >
              Change
            </a>
          </div>
          <p className='text-[#04295a] font-bold self-center'>
            ${planPrice}/
            {isMonthly ? 'mo' : 'yr'}
          </p>
        </div>
        <div className='flex flex-col gap-2'>
          {selectedAddOns.map((addOn, index) => (
            <div className='flex justify-between text-[#a2a3a9]' key={index}>
              <p>{addOn.name}</p>
              <p className='text-[#04295a]'>
                +${isMonthly ? addOn.monthlyPrice : addOn.yearlyPrice}/
                {isMonthly ? 'mo' : 'yr'}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-between text-[#a2a3a9] mx-6 py-4'>
        <p>
          Total (per {isMonthly ? 'month' : 'year'})
        </p>
        <p className='text-[#483eff] font-bold'>
          +$
          {totalPrice}/
          {isMonthly ? 'mo' : 'yr'}
        </p>
      </div>
    </div>
  );
};
