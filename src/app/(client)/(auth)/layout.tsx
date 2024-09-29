export default function AuthLayout ({
  children,
}: Readonly<{
    children: React.ReactNode;
  }>) {
  return <div className='flex justify-center w-full pt-24'>
    {children}
  </div>
}
