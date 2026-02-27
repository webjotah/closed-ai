import FloatingLines from '@/components/background';
import MobileHeader from '@/components/mobileHeader';
import { ArrowDown } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* background */}
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

      {/* divisor */}
      <div className="absolute bg-linear-to-t from-black to-transparent h-[15vh] top-[85vh] w-screen" />

      {/* header section */}
      <div className="block md:hidden">
        <MobileHeader />
      </div>

      {/* hero section */}
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-5xl font-bold w-full px-[10%] text-start text-white pointer-events-none">
        <div className="relative">
          {/* CAMADA 1: SOMBRA (Fica atrás e dá profundidade sem afetar as cores) */}
          <h1
            className="absolute inset-0 z-0 select-none text-black/60 blur-[12px] text-shadow-lg"
            aria-hidden="true"
          >
            Aprenda Ciência de Dados e IA conosco.
          </h1>

          {/* CAMADA 2: TEXTO REAL (Z-10 para ficar na frente com brilho total) */}
          <h1 className="relative z-10">
            Aprenda{' '}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-sky-300 via-purple-400 to-pink-400">
              Ciência de Dados
            </span>{' '}
            e IA conosco.
          </h1>
        </div>

        <p className="text-lg mt-4 text-gray-100 max-w-2xl font-medium text-shadow-sm">
          Explore algoritmos, análise preditiva e grandes modelos de linguagem
          com quem entende o mercado de inteligência artificial.
        </p>

        <button className="py-1 px-3 bg-pink-500 text-gray-100 rounded-md cursor-pointer hover:bg-pink-400 transition-all text-lg mt-8 pointer-events-auto">
          Ver Eventos <ArrowDown className="inline-block" />
        </button>
      </div>
    </>
  );
}
