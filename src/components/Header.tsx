import { UserButton } from '@clerk/nextjs';
import { MenuIcon, Sidebar } from 'lucide-react';
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
      <div></div>
      <Link href='/' className='flex items-center justify-center ml-4 lg:ml-0'>
        <span className=''>Equipare</span>
      </Link>
      <Badge variant='secondary'>Versão demo</Badge>
      <div className='flex items-center justify-center gap-2 ml-auto'>
        <Dialog>
          <DialogTrigger className='w-full'>
            <Button>Avalie a plataforma</Button>
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
