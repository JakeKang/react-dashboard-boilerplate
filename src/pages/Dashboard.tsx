import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import DashboardLayout from '@/layouts/DashboardLayout';

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {/* 통계 요약 카드 */}
        <Card>
          <CardHeader>
            <CardTitle>통계 요약</CardTitle>
          </CardHeader>
          <CardContent>
            <p>총 방문자: 1,234</p>
            <p>일일 활성 사용자: 567</p>
            {/* 버튼 컴포넌트 */}
            <Button onClick={() => alert('Button clicked!')}>상세 보기</Button>
          </CardContent>
        </Card>

        {/* 매출 통계 카드 */}
        <Card>
          <CardHeader>
            <CardTitle>매출 통계</CardTitle>
          </CardHeader>
          <CardContent>
            <p>이번 달 매출: $12,345</p>
            {/* 버튼 컴포넌트 */}
            <Button
              variant='secondary'
              onClick={() => alert('Details clicked!')}>
              매출 상세 보기
            </Button>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
