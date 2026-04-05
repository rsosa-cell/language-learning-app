import { MobileSidebar } from "./mobile-sidebar";

export const MobileHeader = () => {   
  return (
    <nav className="lg:hidden px-6 h-12.5 flex items-center bg-green-500 border-b fixed top-0 w-full z-50">
      <MobileSidebar />
      <span className="ml-4 font-bold text-white"></span>
    </nav>
  );
};