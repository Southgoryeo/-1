import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  onOpenVisitModal: () => void;
  onNavigate: (tabId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onOpenVisitModal, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: '홈', id: 'home' },
    { label: '창교 연원', id: 'origin' },
    { label: '중심 교리', id: 'doctrine' },
    { label: '5대 의례', id: 'rites' },
    { label: '성소 접지소', id: 'sanctuary' },
    { label: '신도 접지록', id: 'community' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#161514]/90 backdrop-blur-md border-b border-[#2C2925]">
      {/* Top Bar Contract: 3 zones */}
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Zone 1: Single text element wordmark */}
        <button 
          onClick={() => onNavigate('home')}
          className="text-lg md:text-xl font-serif text-[#EBE6DF] hover:text-[#E06D44] transition-colors tracking-widest whitespace-nowrap cursor-pointer text-left"
        >
          접지회 接地會
        </button>

        {/* Zone 2: 4–6 nav links, single-line typography with hover underlines */}
        <nav className="hidden md:flex items-center gap-7 text-sm text-[#A8A29A]">
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`transition-colors py-1 cursor-pointer whitespace-nowrap relative group ${
                  isActive ? 'text-[#F3EFE8] font-medium' : 'hover:text-[#F3EFE8]'
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-[#E06D44] transition-all duration-200 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenVisitModal}
            className="px-4 py-2 text-xs font-medium text-white bg-[#D95328] hover:bg-[#C2451C] transition-colors rounded-none tracking-wider whitespace-nowrap cursor-pointer shadow-sm"
          >
            성소 방문 안내
          </button>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#A8A29A] hover:text-white cursor-pointer"
            aria-label="메뉴 열기"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#2C2925] bg-[#161514] px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className="block w-full text-left py-2 text-sm text-[#D1CBC2] hover:text-[#E06D44] transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
