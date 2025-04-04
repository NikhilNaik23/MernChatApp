import React,{ useState} from 'react'
import { FaSearch } from "react-icons/fa";
import useConversation from '../../zustand/useConversation';
import useGetConversation from "../../hooks/useGetConversations"
import toast from 'react-hot-toast';

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const {setSelectedConversation}=useConversation();
  const {conversations}=useGetConversation();

  const handleSubmit =(e)=>{
    e.preventDefault();
    if(!search.trim())return;
    if(search.length < 3){
      return toast.error('Search term must be atleast 3 characters long')
    }

    const conversation = conversations.find((c)=>{return c.fullName.toLowerCase().includes(search.toLowerCase())});
    if(conversation){
      setSelectedConversation(conversation);
      setSearch('');
    }else{
      toast.error("No such user found!!")
    }

  }


  return (
    <form onSubmit={handleSubmit} className='flex items-center gap-2'>
        <input type="text" placeholder='Search...' className='input border-0 rounded-full'
        value={search}
        onChange={(e)=>setSearch(e.target.value)} />
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