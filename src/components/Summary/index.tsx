export const Summary = () => {
  const stepSummary = [
    {
      type: 'monthly',
      plan: {
        name: 'Arcade',
        price: 9
      },
      addOns: [
        {
          name: 'Online service',
          price: 1
        },
        {
          name: 'Larger storage',
          price: 2
        }
      ]
    }
  ];

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-col gap-4 bg-[#f7f9ff] p-4 rounded-lg'>
        <div className='flex justify-between border-b border-gray-200 pb-4'>
          <div className='flex flex-col'>
            <h3 className='text-[#04295a] font-bold'>
              {stepSummary[0].plan.name} (
              {stepSummary[0].type === 'monthly' ? 'Monthly' : 'Yearly'})
            </h3>
            <a href='/' className='text-[#a2a3a9] underline'>
              Change
            </a>
          </div>
          <p className='text-[#04295a] font-bold self-center'>
            ${stepSummary[0].plan.price}/
            {stepSummary[0].type === 'monthly' ? 'mo' : 'yr'}
          </p>
        </div>
        <div className='flex flex-col gap-2'>
          {stepSummary[0].addOns.map((addOn, index) => (
            <div className='flex justify-between text-[#a2a3a9]' key={index}>
              <p>{addOn.name}</p>
              <p className='text-[#04295a]'>
                +${addOn.price}/
                {stepSummary[0].type === 'monthly' ? 'mo' : 'yr'}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-between text-[#a2a3a9] mx-6 py-4'>
        <p>
          Total (per {stepSummary[0].type === 'monthly' ? 'month' : 'year'})
        </p>
        <p className='text-[#483eff] font-bold'>
          +$
          {stepSummary[0].plan.price +
            stepSummary[0].addOns.reduce((acc, addOn) => acc + addOn.price, 0)}
          /{stepSummary[0].type === 'monthly' ? 'mo' : 'yr'}
        </p>
      </div>
    </div>
  );
};
