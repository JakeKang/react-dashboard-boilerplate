import { UserCircleIcon, EnvelopeIcon, BellIcon } from '@heroicons/react/24/outline';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-full mx-auto px-6 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center gap-2">
              <UserCircleIcon className="size-8" />
              <div className="">관리자</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <EnvelopeIcon className="size-6 cursor-pointer hover:text-slate-500" />
            <BellIcon className="size-6 cursor-pointer hover:text-slate-500" />
            <div className="cursor-pointer hover:text-slate-500">TEMI</div>
          </div>
        </div>
      </div>
    </header>
  );
}
