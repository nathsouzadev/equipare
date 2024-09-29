import { SignUp } from '@clerk/nextjs';

export default function Page () {
  return (
    <SignUp
      forceRedirectUrl='/dashboard/offers'
      appearance={{
        layout: {
          privacyPageUrl: '/privacy',
          termsPageUrl: '/terms',
        },
      }}
    />
  );
}
