import RobotStatusTable from '@/components/RobotStatusTable';
import DashboardLayout from '@/layouts/DashboardLayout';
import { useState } from 'react';

const Dashboard = () => {
  const [selectKey, setSelectKey] = useState<string>('ROBOT_001');

  const handleSelectKey = (key: string) => {
    setSelectKey(key);
  };
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="flex flex-col col-span-2 h-full gap-5">
          <div className="bg-white p-2">
            <img className="w-full object-contain" src="@/../public/robot_location.png" />
          </div>
          <RobotStatusTable selectKey={selectKey} onClick={handleSelectKey} />
        </div>
        <div className="flex flex-col flex-grow border-2 border-solid border-black h-full">CCTV display</div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
