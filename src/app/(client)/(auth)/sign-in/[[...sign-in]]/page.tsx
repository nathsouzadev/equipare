import { SignIn } from '@clerk/nextjs';

export default function Page () {
  return (
    <SignIn
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
