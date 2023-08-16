import React from 'react';
import { Link } from 'react-router-dom';
import Admin_header from '../components/Admin_header';


const Admin_page = (props) => {
    return (
      <>
         <Admin_header /> 
       
       {/* COntainer */}
       <div className='bg-purple-300 h-screen'>

        {/* Main ROW  */}

        <div className='flex flex-row gap-2'>

      

       {/* Main BOX  */}
        <div className='border-2 border-gray-400  w-3/12'>     

    

{/* Box 1 */}
<div className='flex md:justify-start justify-center '>

<div className='border-purple-600 bg-purple-800 w-28 rounded-lg py-8 text-center text-black font-bold mx-2 my-2'>
    <h1>Consultants</h1>
    <h1>13</h1>
</div>

{/* Box 2 */}
<div className='border-purple-600 bg-purple-800 w-28 rounded-lg py-8 text-center text-black font-bold mx-2 my-2'>
    <h1>Job Seekers</h1>
    <h1>123</h1>
</div>


</div> 
{/* End */}

{/* Box 1 */}
<div className='flex  md:justify-start justify-center'>

<div className='border-purple-600 bg-purple-800 w-28 rounded-lg py-8 text-center text-black font-bold mx-2 my-2'>
    <h1>Appointments</h1>
    <h1>33</h1>
</div>

{/* Box 2 */}
<div className='border-purple-600 bg-purple-800 w-28 rounded-lg py-8 text-center text-black font-bold mx-2 my-2'>
    <h1>Today</h1>
    <h1>5</h1>
</div>


</div> 
{/* End */}

{/* Box 1 */}
<div className='flex  md:justify-start justify-center'>

<div className='border-purple-600 bg-purple-800 w-28 rounded-lg py-8 text-center text-black font-bold mx-2 my-2'>
    <h1>Approved</h1>
    <h1>13</h1>
</div>

{/* Box 2 */}
<div className='border-purple-600 bg-purple-800 w-28 rounded-lg py-8 text-center text-black font-bold mx-2 my-2'>
    <h1>Pending</h1>
    <h1>20</h1>
</div>


</div> 
{/* End */}


</div>

<div className="bg-purple-300 min-h-screen flex items-center justify-center w-10/12 bg-purple-300">

<div className='w-10/12border-gray-400 '>
  <h1 className='text-gray-500 text-3xl'>Recent Applications</h1>
</div>
</div>

</div>

</div>
      </>
    );
  };
  
  export default Admin_page;