type PersonalInfoProps = {
  onInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formData?: {
    name: string;
    email: string;
    phone: string;
  };
  errors?: {
    name: string;
    email: string;
    phone: string;
  };
}

export const PersonalInfo = ({ onInputChange, formData, errors }: PersonalInfoProps) => {
  return (
    <>
      <div className='flex flex-col gap-4 my-4'>
        <div className='flex flex-col gap-2'>
          <label htmlFor='name' className='flex gap-2 text-[#04295a] text-sm'>
            <span>Name</span>
            {errors?.name && <span className='flex-1 text-right text-red-500 text-sm'>{errors.name}</span>}
          </label>
          <input
            type='text'
            id='name'
            className='border border-gray-300 rounded-md p-2'
            placeholder='e.g. Stephen King'
            onChange={onInputChange}
            name='name'
            value={formData?.name}
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor='email' className='flex gap-2 text-[#04295a] text-sm'>
            <span>Email Address</span>
            {errors?.email && <span className='flex-1 text-right text-red-500 text-sm'>{errors.email}</span>}
          </label>
          <input
            type='email'
            id='email'
            className='border border-gray-300 rounded-md p-2'
            placeholder='e.g. stephenking@lorem.com'
            onChange={onInputChange}
            name='email'
            value={formData?.email}
          />
          
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor='phone' className='flex gap-2 text-[#04295a] text-sm'>
            <span>Phone Number</span>
            {errors?.phone && <span className='flex-1 text-right text-red-500 text-sm'>{errors.phone}</span>}
          </label>
          <input
            type='tel'
            id='phone'
            className='border border-gray-300 rounded-md p-2'
            placeholder='e.g. +1 234 567 890'
            onChange={onInputChange}
            name='phone'
            value={formData?.phone}
          />
        </div>
      </div>
    </>
  );
};
