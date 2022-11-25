import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const ErrorPage = () => {
    const {logOut}=useContext(AuthContext)
  const handleLogOut = () => {
    logOut()
    .then(()=>{})
    .then(e=>console.log(e))
 }
  return (
        <div>
           
             <section className='flex items-center h-screen p-16 bg-gray-100 text-purple-800'>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
       
        <div className='max-w-md text-center'>
          <h2 className='mb-8 font-extrabold text-9xl text-black'>
            <span className='sr-only'>Error</span>404
          </h2>
          <p className='text-2xl font-semibold md:text-3xl mb-8'>
            Sorry, we couldn't find this page.
          </p>
          <Link
            to='/'
            className='px-8 py-3 font-semibold rounded bg-purple-900 hover:bg-gray-700 text-gray-100'
          >
            Back to homepage
              </Link>
         
                 <Link
            to='/login'
            className='ml-2 px-4 py-3 font-semibold rounded bg-purple-900 hover:bg-gray-700 text-gray-100'
          >
            <button onClick={handleLogOut}>Logout</button>
          </Link>
          
        </div>
      </div>
    </section>
        </div>
    );
};

export default ErrorPage;