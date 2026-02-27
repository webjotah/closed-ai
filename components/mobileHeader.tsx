import SidebarMobile from './menuMobile';

export default function MobileHeader() {
  return (
    <div className="w-full flex items-center justify-between absolute top-5 px-8">
      <SidebarMobile />
      <p className="text-3xl font-bold bg-gray-700/40 p-2 rounded-md">
        ClosedAI
      </p>
    </div>
  );
}
