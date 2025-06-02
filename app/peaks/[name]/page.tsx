import React from 'react'

function page({params} :any) {
   
  return (
    <div className='text-black text-4xl mt-8 text-center'>    اطلاعات  قله {params.name}   </div>
  )
}

export default page