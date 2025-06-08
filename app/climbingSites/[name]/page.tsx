import React from "react";

// Add this function to generate static params
export async function generateStaticParams() {
  return [
    { name: 'site1' },
    { name: 'site2' },
    { name: 'site3' },
    // Add all the climbing site names you want to pre-generate
  ];
}

// Add proper TypeScript typing for the params
function page() {
  // You can now access the dynamic parameter

  
  return (
    <div className="text-black text-4xl mt-8 text-center">
      اطلاعات سایت سنگنوردی 
    </div>
  );
}

export default page;