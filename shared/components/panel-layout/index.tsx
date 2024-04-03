'use client';
import PanelLayoutSidebar from './components/sidebar';
import { ThemeProvider } from '../ui/theme-provider';
import { TrpcProvider } from '@/shared/utils/trpc/trpc-provider';
import BasicOnboardingModal from '../basic-onboarding-modal';

const PanelLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <TrpcProvider>
          <div className="flex flex-row w-screen h-screen max-md:flex-col">
            {/* sidebar */}
            <PanelLayoutSidebar />

            {/* content */}
            <div className="flex container h-full overflow-scroll mx-auto py-8 max-md:z-10 max-md:pt-16">
              {children}
            </div>
          </div>
          <BasicOnboardingModal />
        </TrpcProvider>
      </ThemeProvider>
    </>
  );
};

export default PanelLayout;
