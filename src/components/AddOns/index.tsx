import { useState } from 'react';
import checkIcon from '../../assets/images/icon-checkmark.svg';
import { addOns } from '../../data';

type AddOnsProps = {
  onAddOnsChange?: (addOns: number[]) => void;
  formData?: {
    addOns: number[];
  };
}

export const AddOns = ({ onAddOnsChange, formData }: AddOnsProps) => {
  const [selectedAddOns, setSelectedAddOns] = useState<number[]>(formData?.addOns ?? []);

  const handleAddOnSelection = (addOnId: number) => {
    setSelectedAddOns([...selectedAddOns, addOnId]);
    onAddOnsChange?.([...selectedAddOns, addOnId]);
  };

  const handleAddOnDeselection = (addOnId: number) => {
    setSelectedAddOns(selectedAddOns.filter((id) => id !== addOnId));
    onAddOnsChange?.(selectedAddOns.filter((id) => id !== addOnId));
  };

  return addOns.map((addOn) => {
    const isSelected = selectedAddOns.includes(addOn.id);

    return (
      <div
        className={`relative border ${
          isSelected
            ? 'border-2 border-[#483eff] bg-[#f7f9ff]'
            : 'border-[#e4e3e9]'
        } rounded-lg p-3 my-4`}
        key={addOn.id}
      >
        <div className='flex items-center gap-4'>
          <div className='relative'>
            <input
              type='checkbox'
              id={addOn.slug}
              className='sr-only'
              onChange={() => isSelected ? handleAddOnDeselection(addOn.id) : handleAddOnSelection(addOn.id)}
              checked={isSelected}
              aria-labelledby={`addon-title-${addOn.id} addon-description-${addOn.id} addon-price-${addOn.id}`}
            />
            <label
              htmlFor={addOn.slug}
              className={`flex items-center justify-center w-5 h-5 rounded border-2 cursor-pointer transition-colors ${
                isSelected 
                  ? 'bg-[#483eff] border-[#483eff]'
                  : 'border-gray-300 bg-white'
              }`}>
              <img
                src={checkIcon}
                alt=''
                className={`w-3 h-3 pointer-events-none transition-opacity ${
                  isSelected ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </label>
          </div>
          <div>
            <h3
              id={`addon-title-${addOn.id}`}
              className='text-md font-bold text-left text-[#04295a]'>
              {addOn.name}
            </h3>
            <p
              id={`addon-description-${addOn.id}`}
              className='text-sm text-[#a2a3a9]'>
              {addOn.description}
            </p>
          </div>
          <p
            id={`addon-price-${addOn.id}`}
            className='flex-1 text-right mr-2 text-sm text-[#483eff]'>
            +${addOn.monthlyPrice}/mo
          </p>
        </div>
      </div>
    );
  });
};
