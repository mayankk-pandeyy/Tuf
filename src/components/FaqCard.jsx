import React, { useState } from 'react'

const FaqCard = ({ faq }) => {
  const [open, setOpen] = useState(false);

  function openHandler() {
    setOpen(!open);
  }

  return (
    <div className="w-full">
      <div
        className={`flex flex-col gap-3 px-5 py-4 rounded-2xl transition-all duration-300 ${
          open ? 'bg-[#2C2D32]' : ''
        }`}
      >
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={openHandler}
        >
          <div
            className={`sm:text-base text-[12px] font-medium transition-colors duration-300 ${
              open ? 'text-[#FF7E42]' : 'text-white'
            }`}
          >
            {faq.ques}
          </div>
          <div className="text-[#FF7E42] text-xl font-semibold">
            {open ? '-' : '+'}
          </div>
        </div>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            open ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'
          }`}
        >
          <p className="text-gray-300 text-[10px] sm:text-sm">{faq.ans}</p>
        </div>
      </div>
    </div>
  );
};

export default FaqCard;
