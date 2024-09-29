import { SignIn } from '@clerk/nextjs';

export default function Page () {
  return (
    <SignIn
      forceRedirectUrl='/dashboard'
      appearance={{
        layout: {
          privacyPageUrl: '/privacy',
          termsPageUrl: '/terms',
        },
      }}
    />
  );
}
