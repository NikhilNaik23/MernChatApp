import React from 'react'
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  return (
    <form className='flex items-center gap-2'>
        <input type="text" placeholder='Search...' className='input border-0 rounded-full' />
        <button type='submit' className='btn btn-circle hover:bg-gray-700 bg-sky-500 text-white'><FaSearch /> </button>
    </form>
  )
}

export default SearchInput

//STARTER CODE
// import React from 'react'
// import { FaSearch } from "react-icons/fa";

// const SearchInput = () => {
//   return (
//     <form className='flex items-center gap-2'>
//         <input type="text" placeholder='Search...' className='input border-0 rounded-full' />
//         <button type='submit' className='btn btn-circle hover:bg-gray-700 bg-sky-500 text-white'><FaSearch /> </button>
//     </form>
//   )
// }

// export default SearchInput