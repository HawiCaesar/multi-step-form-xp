export const PersonalInfo = () => {
  return (
    <>
      <div className='flex flex-col gap-4 my-4'>
        <div className='flex flex-col gap-2'>
          <label htmlFor='name' className='text-[#04295a] text-sm'>
            Name
          </label>
          <input
            type='text'
            id='name'
            className='border border-gray-300 rounded-md p-2'
            placeholder='e.g. Stephen King'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor='email' className='text-[#04295a] text-sm'>
            Email Address
          </label>
          <input
            type='email'
            id='email'
            className='border border-gray-300 rounded-md p-2'
            placeholder='e.g. stephenking@lorem.com'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor='phone' className='text-[#04295a] text-sm'>
            Phone Number
          </label>
          <input
            type='tel'
            id='phone'
            className='border border-gray-300 rounded-md p-2'
            placeholder='e.g. +1 234 567 890'
          />
        </div>
      </div>
    </>
  );
};
