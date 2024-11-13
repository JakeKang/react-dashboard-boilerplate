import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export interface RobotStatusTableProps {
  selectKey: string | number;
  onClick: (e: string) => void;
}

const invoices = [
  {
    robot: 'ROBOT_001',
    location: '3층 회의실',
    battery: 100,
    patrol: '순찰중',
    status: true,
    alarm: '정상',
    cctv: true,
  },
  {
    robot: 'ROBOT_002',
    location: '1층 로비',
    battery: 50,
    patrol: '순찰중',
    status: true,
    alarm: '정상',
    cctv: true,
  },
  {
    robot: 'ROBOT_003',
    location: '순찰 대기',
    battery: 15,
    patrol: '대기',
    status: false,
    alarm: '정상',
    cctv: false,
  },
];

export default function RobotStatusTable({ selectKey, onClick }: RobotStatusTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">로봇</TableHead>
          <TableHead>위치</TableHead>
          <TableHead>베터리</TableHead>
          <TableHead>순찰</TableHead>
          <TableHead>상태</TableHead>
          <TableHead>알림</TableHead>
          <TableHead>CCTV</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow
            key={invoice.robot}
            className={`cursor-pointer hover:bg-gray-300 ${invoice.robot === selectKey ? `border-solid border-2 border-violet-300` : ``}`}
            onClick={() => onClick(invoice.robot)}
          >
            <TableCell>{invoice.robot}</TableCell>
            <TableCell>{invoice.location}</TableCell>
            <TableCell
              className={`${invoice.battery > 50 ? `text-green-400` : `text-red-400`}`}
            >{`${invoice.battery}%`}</TableCell>
            <TableCell>{invoice.patrol}</TableCell>
            <TableCell className={`${invoice.status ? 'text-green-400' : 'text-red-400'}`}>
              {invoice.status ? 'ON' : 'OFF'}
            </TableCell>
            <TableCell>{invoice.alarm}</TableCell>
            <TableCell className={`${invoice.cctv ? `text-green-400` : `text-red-400`}`}>
              {invoice.cctv ? 'ON' : 'OFF'}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
