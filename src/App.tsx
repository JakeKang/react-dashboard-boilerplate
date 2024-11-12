import DashboardLayout from './layouts/DashboardLayout';

function App() {
  return (
    <DashboardLayout>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        <div className='bg-white rounded-lg shadow p-6'>
          <h2 className='text-lg font-medium mb-4'>통계 요약</h2>
          <div className='space-y-4'>
            <div className='flex justify-between items-center'>
              <span className='text-gray-500'>총 방문자</span>
              <span className='font-medium'>1,234</span>
            </div>
            <div className='flex justify-between items-center'>
              <span className='text-gray-500'>일일 활성 사용자</span>
              <span className='font-medium'>567</span>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default App;
