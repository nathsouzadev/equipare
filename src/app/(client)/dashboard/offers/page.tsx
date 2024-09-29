'use client';

import { useEffect, useState } from 'react';
import { UserButton, useUser } from '@clerk/nextjs';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  CheckCircle2Icon,
  MenuIcon,
} from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Sidebar from '@/components/Sidebar';
import { cn } from '@/lib/utils';

const initialJobOpportunities = [
  {
    id: 1,
    companyName: 'TechCorp',
    positionName: 'Frontend Developer',
    publishDate: '2024-03-01',
    endDate: '2024-03-31',
    applied: false,
  },
  {
    id: 2,
    companyName: 'DataSystems',
    positionName: 'Data Analyst',
    publishDate: '2024-03-05',
    endDate: '2024-04-05',
    applied: false,
  },
  {
    id: 3,
    companyName: 'CloudNet',
    positionName: 'DevOps Engineer',
    publishDate: '2024-03-10',
    endDate: '2024-04-10',
    applied: false,
  },
  {
    id: 4,
    companyName: 'AIInnovate',
    positionName: 'Machine Learning Engineer',
    publishDate: '2024-03-15',
    endDate: '2024-04-15',
    applied: false,
  },
];

const DashboardPage = () => {
  const [isMounted, setIsMounted] = useState(false);
  const clerkUser = useUser();
  const [showAlert, setShowAlert] = useState(false);
  const [jobOpportunities, setJobOpportunities] = useState(
    initialJobOpportunities,
  );

  const handleApply = (id: number) => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000); // Hide alert after 3 seconds

    setJobOpportunities((jobs) =>
      jobs.map((job) => (job.id === id ? { ...job, applied: true } : job)),
    );
  };

  useEffect(() => {
    if (clerkUser.isLoaded) {
      setIsMounted(true);
    }
  }, [clerkUser.isLoaded]);

  if (!isMounted)
    return (
      <>
        <div className='shadow rounded-md p-4 w-full mx-auto'>
          <div className='animate-pulse flex space-x-4'>
            <div className='rounded-full bg-gray-800 h-10 w-10'></div>
            <div className='flex-1 space-y-6 py-1'>
              <div className='h-2 bg-gray-800 rounded'></div>
              <div className='space-y-3'>
                <div className='grid grid-cols-3 gap-4'>
                  <div className='h-2 bg-gray-800 rounded col-span-3'></div>
                  <div className='h-2 bg-gray-800 rounded col-span-3'></div>
                </div>
                <div className='h-2 bg-gray-800 rounded'></div>
              </div>
            </div>
          </div>
        </div>
      </>
    );

  return (
    <div className='flex flex-col min-h-screen'>
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
        <Link
          href='/'
          className='flex items-center justify-center ml-4 lg:ml-0'
        >
          <span className=''>Equipare</span>
        </Link>
        <div className='ml-auto'>
          <UserButton />
        </div>
      </header>

      <div className='flex-1 flex'>
        <aside className='w-64 border-r bg-gray-100 p-4 hidden lg:block'>
          <Sidebar />
        </aside>

        {/* Main Content */}
        <main className='flex-1 p-4 max-w-full'>
          <h1 className='text-2xl font-bold mb-6'>Vagas abertas</h1>

          {showAlert && (
            <Alert className='mb-4'>
              <CheckCircle2Icon className='h-4 w-4' />
              <AlertTitle>Candidatura feita com sucesso</AlertTitle>
              <AlertDescription>
                Confira seu e-mail para conferir os próximos passos
              </AlertDescription>
            </Alert>
          )}

          <Card>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Empresa</TableHead>
                    <TableHead>Cargo</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {jobOpportunities.map((job) => (
                    <TableRow key={job.id}>
                      <TableCell>{job.companyName}</TableCell>
                      <TableCell>{job.positionName}</TableCell>
                      <TableCell>
                        <Button
                          onClick={() => handleApply(job.id)}
                          className={cn(
                            'min-w-full',
                            job.applied ? 'bg-blue-500 hover:bg-blue-600' : '',
                          )}
                          disabled={job.applied}
                        >
                          {job.applied ? 'Inscrita' : 'Candidatar-se'}
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </main>
      </div>

      <footer className='flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t'>
        <p className='text-xs text-gray-500 dark:text-gray-400'>
          © 2024 Equipare Inc. All rights reserved.
        </p>
        <nav className='sm:ml-auto flex gap-4 sm:gap-6'>
          <Link className='text-xs hover:underline underline-offset-4' href='#'>
            Terms of Service
          </Link>
          <Link className='text-xs hover:underline underline-offset-4' href='#'>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
};

export default DashboardPage;
