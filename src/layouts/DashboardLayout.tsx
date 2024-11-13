import Header from '@/components/Header';
import React from 'react';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <section className="flex-grow px-6 py-6 h-ull">{children}</section>
    </div>
  );
};

export default DashboardLayout;
