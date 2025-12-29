import React from 'react';
import { Navbar } from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-domcy-dark text-zinc-100 font-sans selection:bg-domcy-primary selection:text-white">
      <Navbar />
      <main className="pt-20">{children}</main>
      <footer className="bg-black/50 py-8 border-t border-white/5 mt-auto">
        <div className="max-w-7xl mx-auto px-4 text-center text-zinc-500 text-sm">
          <p>© 2024 Domcy Coffee & Warung Domcy. Donomulyo, Malang.</p>
        </div>
      </footer>
    </div>
  );
};
