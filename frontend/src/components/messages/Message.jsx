import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end'>
        <div className="chat-image avatar">
            <div className="w-10 rounded-full ">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="Tailwind css chat" />
            </div>
        </div>
        <div className='chat-bubble text-white bg-blue-500'>Hi! What is upp?</div>
        <div className='chat-footer items-center text-xs flex gap-1 opacity-50'>12:42</div>
    </div>
  )
}

export default Message


//STARTER CODE


// const Message = () => {
//   return (
//     <div className='chat chat-end'>
//         <div className="chat-image avatar">
//             <div className="w-10 rounded-full ">
//                 <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="Tailwind css chat" />
//             </div>
//         </div>
//         <div className='chat-bubble text-white bg-blue-500'>Hi! What is upp?</div>
//         <div className='chat-footer items-center text-xs flex gap-1 opacity-50'>12:42</div>
//     </div>
//   )
// }

// export default Message
