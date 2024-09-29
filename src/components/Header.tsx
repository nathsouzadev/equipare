import { UserButton } from '@clerk/nextjs';
import { MenuIcon } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import Link from 'next/link';
import { Badge } from './ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTrigger,
} from './ui/dialog';
import Sidebar from './Sidebar';

const Header = () => {
  return (
    <header className='px-4 lg:px-6 h-14 flex items-center border-b'>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant='ghost'
            className='lg:hidden'
            size='icon'
            aria-label='Open menu'
          >
            <MenuIcon className='h-6 w-6' />
          </Button>
        </SheetTrigger>
        <SheetContent side='left' className='w-64'>
          <Sidebar />
        </SheetContent>
      </Sheet>
      <div className='flex flex-col px-auto'>
        <Link
          href='/'
          className='flex items-center justify-center lg:ml-0'
        >
          Equipare
        </Link>
        <Badge variant='secondary'>Versão demo</Badge>
      </div>
      <div className='flex items-center justify-center gap-2 ml-auto'>
        <Dialog>
          <DialogTrigger className='w-full'>
            <Button className='bg-yellow-600/80'>Avalie a plataforma</Button>
          </DialogTrigger>
          <DialogContent className='bg-translucid border-0'>
            <DialogDescription>
              <iframe
                src='https://forms.gle/viuLpY6GZcjSeBsL9'
                height='500'
                className='rounded-md mx-auto w-full'
              ></iframe>
            </DialogDescription>
          </DialogContent>
        </Dialog>
        <UserButton />
      </div>
    </header>
  );
};

export default Header;
