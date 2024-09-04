import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Input from './Input';
import Info from './Info';

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-1/2">
      <div className=" rounded-md ">
        <button
          className="flex justify-start items-center w-full px-1 py-2 text-left"
          onClick={toggleAccordion}
        >
          <span className="text-serene font-medium">View My Preferences</span>
          {isOpen ? (
            <ChevronUp className="h-5 w-5 text-serene" />
          ) : (
            <ChevronDown className="h-5 w-5 text-serene" />
          )}
        </button>
        {isOpen && (
          <div className="px-4 py-2 bg-[#272727] w-full rounded">
                <div className='w-full space-y-10 mb-6'>
                    <Info desc={'My Prefrences'} center={'text-center'}/>
                   <Input full={'w-full'} placeholder={'I have been feeling depressed'} name={'What led you to consider a therapy today?'} />
                   
                   <Input full={'w-full'} placeholder={'I have been feeling depressed'} name={'What led you to consider a therapy today?'} />
                   
                   <Input full={'w-full'} placeholder={'I have been feeling depressed'} name={'What led you to consider a therapy today?'} />
                   
                   <Input full={'w-full'} placeholder={'I have been feeling depressed'} name={'What led you to consider a therapy today?'} />
                   
                   <Input full={'w-full'} placeholder={'I have been feeling depressed'} name={'What led you to consider a therapy today?'} />  
                </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;