import React from "react";

const GenderCheckbox = ({ onCheckboxChange, seletedGender }) => {
  return (
    <div className="flex gap-2">
      <div className="flex flex-col">
        <label className={`label gap-2 cursor-pointer ${seletedGender === 'male'?"selected":""}`}>
          <span className="text-white">Male</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900 "
            checked={seletedGender === "male"}
            onChange={() => {
              onCheckboxChange("male");
            }}
          />
        </label>
      </div>
      <div className="flex flex-col">
        <label className={`label gap-2 cursor-pointer ${seletedGender === 'female'?"selected":""}`}>
          <span className="text-white">Female</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900"
            checked={seletedGender === "female"}
            onChange={() => {
              onCheckboxChange("female");
            }}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;

//STARTER CODE
// import React from 'react'

// const GenderCheckbox = () => {
//   return (
//     <div className='flex gap-2'>
//         <div className='flex flex-col'>
//             <label className={`label gap-2 cursor-pointer`}>
//                 <span className='text-white'>Male</span>
//                 <input type='checkbox' className='checkbox border-slate-900'/>
//             </label>
//         </div>
//         <div className='flex flex-col'>
//             <label className={`label gap-2 cursor-pointer`}>
//                 <span className='text-white'>Female</span>
//                 <input type='checkbox' className='checkbox border-slate-900'/>
//             </label>
//         </div>
//     </div>
//   )
// }

// export default GenderCheckbox
