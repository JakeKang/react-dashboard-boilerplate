import React from 'react';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='min-h-screen bg-gray-100'>
      <header className='bg-white shadow-md py-4'>
        <div className='container mx-auto px-4'>
          <h1 className='text-2xl font-bold'>Dashboard</h1>
        </div>
      </header>
      <main className='container mx-auto px-4 py-6'>{children}</main>
    </div>
  );
};

export default DashboardLayout;
