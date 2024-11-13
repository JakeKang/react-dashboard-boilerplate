import { ReactNode } from 'react';

export interface CardProps {
  title: string;
  content: { title: string; content: string | number | ReactNode | undefined }[];
  onClick: () => void;
  active: boolean | undefined;
}

export default function Card({ title, content, onClick, active }: CardProps) {
  return (
    <div
      className={`bg-white rounded-lg shadow p-6 cursor-pointer hover:bg-slate-100 ${active ? `border-2 border-blue-400` : undefined}`}
      onClick={onClick}
    >
      <h2 className="text-lg font-medium mb-4">{title}</h2>
      <div className="space-y-4">
        {content.map(({ title, content }) => {
          return (
            <div className="flex justify-between items-center">
              <span className="text-gray-500">{title}</span>
              <span className="font-medium">{content ? content : `-`}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
