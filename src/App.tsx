//import { useState } from 'react';

function App() {
  //const [count, setCount] = useState(0);

  return (
    <div className=''>
      {/* Sidebar / Top bar on mobile */}
      <nav className='bg-gray-800 bg-[url("/src/assets/images/bg-sidebar-mobile.svg")] bg-cover bg-center h-[200px]'>
        <div className='mx-auto flex justify-between items-center px-[7rem] pt-8 gap-4'>
          {/* Active state */}
          <div className='flex items-center justify-center border border-[#bee1fe] bg-[#bee1fe] rounded-[50%] w-[32px] h-[32px]'>1</div>
          <div className='flex items-center justify-center border border-white rounded-[50%] w-[32px] h-[32px] text-white'>2</div>
          <div className='flex items-center justify-center border border-white rounded-[50%] w-[32px] h-[32px] text-white'>3</div> 
          <div className='flex items-center justify-center border border-white rounded-[50%] w-[32px] h-[32px] text-white'>4</div>
        </div>
      </nav>
      {/* Content Form on mobile and desktop */}
      <div className='mx-4'>
        <div className='bg-white rounded-lg shadow-md p-4 mt-[-80px]'>
          <h2 className='text-2xl font-bold'>Personal info</h2>
          <p className='text-gray-500 my-4'>
            Please provide your name, email address, and phone number.
          </p>
          <div className='flex flex-col gap-4 my-4'>
            <div className='flex flex-col gap-2'>
              <label htmlFor='name' className='text-gray-500'>
                Name
              </label>
              <input
                type='text'
                id='name'
                className='border border-gray-300 rounded-md p-2'
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor='email' className='text-gray-500'>
                Email
              </label>
              <input
                type='email'
                id='email'
                className='border border-gray-300 rounded-md p-2'
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor='phone' className='text-gray-500'>
                Phone
              </label>
              <input
                type='tel'
                id='phone'
                className='border border-gray-300 rounded-md p-2'
              />
            </div>
          </div>
        </div>
      </div>
      {/* Footer section on desktop & mobile */}
      <div className='mx-4'>
        <div className='bg-white rounded-lg shadow-md p-4 mt-[10px]'>
          <div className='flex justify-between items-center'>
            <button className='bg-white text-gray-500 px-4 py-2 rounded-md'>Go Back</button>
            <button className='bg-[#04295a] text-white px-4 py-2 rounded-md'>Next Step</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
