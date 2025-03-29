const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="h-full p-6 w-full bg-gray-400/10 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-sm">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-800"> ChatApp</span>
        </h1>
        <form>
          <div>
            <label className="label p-2 flex justify-between">
              <span className="text-base text-gray-50">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className=" input text-white h-10 bg-gray-500/10"
            ></input>
          </div>
          <div>
            <label className="label p-2 flex justify-between">
              <span className="text-base text-gray-50">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className=" text-white input h-10 bg-gray-500/10"
            ></input>
          </div>
          <a href="#" className="text-sm hover:underline hover:text-black mt-2 inline-block">
            {"Don't"} have an account?
          </a>
          <div>
            <button className="btn btn-block btn-sm bg-blue-500 border-0 rounded-lg mt-2">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;



//STARTER CODE

// const Login = () => {
//     return (
//       <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//         <div className="h-full p-6 w-full bg-gray-400/10 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-sm">
//           <h1 className="text-3xl font-semibold text-center text-gray-300">
//             Login
//             <span className="text-blue-800"> ChatApp</span>
//           </h1>
//           <form>
//             <div>
//               <label className="label p-2 flex justify-between">
//                 <span className="text-base text-gray-50">Username</span>
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter Username"
//                 className=" input text-white h-10 bg-gray-500/10"
//               ></input>
//             </div>
//             <div>
//               <label className="label p-2 flex justify-between">
//                 <span className="text-base text-gray-50">Password</span>
//               </label>
//               <input
//                 type="password"
//                 placeholder="Enter Password"
//                 className=" text-white input h-10 bg-gray-500/10"
//               ></input>
//             </div>
//             <a href="#" className="text-sm hover:underline hover:text-black mt-2 inline-block">
//               {"Don't"} have an account?
//             </a>
//             <div>
//               <button className="btn btn-block btn-sm bg-blue-500 border-0 rounded-lg mt-2">Login</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     );
//   };
  
//   export default Login;
  