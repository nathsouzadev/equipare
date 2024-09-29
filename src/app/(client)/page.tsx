'use client';

import { SignIn } from '@clerk/nextjs';
import { useEffect, useState } from 'react';

const Home = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className='flex flex-col min-h-screen'>
      <header className='px-4 lg:px-6 h-14 flex items-center'>
        <a className='flex items-center justify-center' href='#'>
          <span className=''>Equipare</span>
        </a>
      </header>
      <main className='flex-1'>
        <section className='w-full py-12 md:py-24 lg:py-32 xl:py-48'>
          <div className='lg:flex gap-2 items-center justify-center px-4 md:px-6'>
            <div className='flex flex-col items-center space-y-4 text-center pb-8'>
              <div className='space-y-2'>
                <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none'>
                  Bem vinda a Equipare
                </h1>
                <p className='mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 text-justify'>
                  Conecte-se com as empresas que estão comprometidas para reduzir a desigualdade salarial entre gêneros no Brasil
                </p>
              </div>
            </div>
            <div className='flex flex-col items-center justify-center rounded-lg md:p-8'>
              <SignIn
                routing='hash'
                appearance={{
                  layout: {
                    privacyPageUrl: '/privacy',
                    termsPageUrl: '/terms',
                  },
                }}
              />
            </div>
          </div>
        </section>
      </main>
      <footer className='flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t'>
        <p className='text-xs text-gray-500 dark:text-gray-400'>
          © 2024 Equipare Inc. All rights reserved.
        </p>
        <nav className='sm:ml-auto flex gap-4 sm:gap-6'>
          <a className='text-xs hover:underline underline-offset-4' href='#'>
            Terms of Service
          </a>
          <a className='text-xs hover:underline underline-offset-4' href='#'>
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default Home;
