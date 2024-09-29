import { SignUp } from '@clerk/nextjs';

export default function Page () {
  return (
    <SignUp
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
