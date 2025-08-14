import { useState } from 'react';

export const TypeOfPlan = () => {
  const [selectedPlan, setSelectedPlan] = useState<number>(1);
  const [isMonthly, setIsMonthly] = useState(true);

  // const handlePlanSelection = (plan: string) => {
  //   setSelectedPlan(plan);
  // }

  const plans = [
    {
      id: 1,
      name: 'Arcade',
      monthlyPrice: 9,
      yearlyPrice: 90,
      icon: '/src/assets/images/icon-arcade.svg'
    },
    {
      id: 2,
      name: 'Advanced',
      monthlyPrice: 12,
      yearlyPrice: 120,
      icon: '/src/assets/images/icon-advanced.svg'
    },
    {
      id: 3,
      name: 'Pro',
      monthlyPrice: 15,
      yearlyPrice: 150,
      icon: '/src/assets/images/icon-pro.svg'
    }
  ];

  const RenderPlans = () => {
    return (
      <div className='flex flex-col md:flex-row gap-2 md:gap-4'>
        {plans.map((plan) => (
          <button
            className={`md:flex-row md:flex-wrap border rounded-lg p-4 ${
              selectedPlan === plan.id
                ? 'border-2 border-[#483eff] bg-[#f7f9ff]'
                : 'border-[#e4e3e9]'
            } cursor-pointer`}
            key={plan.id}
            onClick={(e) => {
              e.preventDefault();
              setSelectedPlan(plan.id);
            }}
            aria-pressed={selectedPlan === plan.id}
            aria-label={`Select ${plan.name} plan`}
            type='button'
          >
            <div className='flex items-start gap-2 md:gap-10 md:flex-col md:w-[100px]'>
              <img
                src={plan.icon}
                alt={`${plan.name} icon`}
                className='mt-1'
              />
              <div className='flex flex-col gap'>
                <h3 className='text-lg font-bold text-left'>{plan.name}</h3>
                <p className='text-sm text-[#a2a3a9] text-left'>
                  ${isMonthly ? plan.monthlyPrice : plan.yearlyPrice}/mo
                </p>
                {!isMonthly && (
                  <p className='text-sm text-[#a2a3a9] md:text-[#04295a]'>2 months free</p>
                )}
              </div>
            </div>
          </button>
        ))}
      </div>
    );
  };

  return (
    <div>
      <div className='flex flex-col gap-4'>
        {RenderPlans()}
        <div className='flex items-center justify-center gap-6 p-4 bg-[#f7f9ff] rounded-lg mt-4'>
          {/* Monthly Label */}
          <span
            className={`text-base font-semibold transition-colors duration-200 ${
              isMonthly ? 'text-slate-800' : 'text-[#a2a3a9]'
            }`}
          >
            Monthly
          </span>

          {/* Toggle Switch */}
          <button
            onClick={() => setIsMonthly(!isMonthly)}
            className={`relative inline-flex h-7 w-12 items-center rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-sm ${'bg-slate-700'}`}
            aria-label='Toggle between monthly and yearly pricing'
          >
            {/* Toggle Circle */}
            <span
              className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform duration-300 ease-in-out shadow-md ${
                isMonthly ? 'translate-x-1' : 'translate-x-6'
              }`}
            />
          </button>

          {/* Yearly Label */}
          <span
            className={`text-base font-semibold transition-colors duration-200 ${
              !isMonthly ? 'text-slate-800' : 'text-[#a2a3a9]'
            }`}
          >
            Yearly
          </span>
        </div>
      </div>
    </div>
  );
};
