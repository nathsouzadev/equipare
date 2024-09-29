import { BriefcaseIcon, HomeIcon } from 'lucide-react';
import Link from 'next/link';

const Sidebar = () => (
  <nav className='space-y-2'>
    <Link
      href='/dashboard/offers'
      className='flex items-center space-x-2 p-2 hover:bg-gray-200 rounded'
    >
      <BriefcaseIcon className='h-5 w-5' />
      <span>Oportunidades</span>
    </Link>
    <Link
      href='/dashboard/companys'
      className='flex items-center space-x-2 p-2 hover:bg-gray-200 rounded'
    >
      <HomeIcon className='h-5 w-5' />
      <span>Empresas</span>
    </Link>
  </nav>
);

export default Sidebar;
