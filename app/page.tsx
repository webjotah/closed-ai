import FloatingLines from '@/components/background';
import MobileHeader from '@/components/mobileHeader';

export default function Home() {
  return (
    <>
      <div style={{ width: '100%', height: '100vh', position: 'absolute' }}>
        <FloatingLines
          enabledWaves={['middle', 'bottom', 'top']}
          // Array - specify line count per wave; Number - same count for all waves
          lineCount={5}
          // Array - specify line distance per wave; Number - same distance for all waves
          lineDistance={7.5}
          bendRadius={5}
          bendStrength={-0.5}
          interactive={true}
          parallax={true}
        />
      </div>
      <div className="absolute bg-linear-to-t from-black to-transparent h-[15vh] top-[85vh] w-screen" />
      <div className="block md:hidden">
        <MobileHeader />
      </div>
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black h-screen"></div>
    </>
  );
}
