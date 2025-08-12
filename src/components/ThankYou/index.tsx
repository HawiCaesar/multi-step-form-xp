export const ThankYou = () => {
  return (
    <div className='flex flex-col gap-4'>
      <img src={'/src/assets/images/icon-thank-you.svg'} alt='thank you' className="mx-auto"/>
      <h1 className='text-2xl font-bold text-[#04295a] text-center'>Thank you!</h1>
      <p className='text-[#a2a3a9] text-center px-4 pb-6'>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};
