import React from 'react';
import Link from 'next/link';
import { EnvelopeFill, TelephoneFill, Facebook, Instagram, Linkedin } from 'react-bootstrap-icons';

const Footer: React.FC = () => {
  return (
    <div className="border-t border-[#27272a] z-20 relative bg-black pt-4">
      <footer className="bg-transparent text-white pt-8 pb-12 mt-16">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            
            {/* Company Logo */}
            <div className="flex flex-col items-center space-y-6">
            <img src="/logopilnas.svg" alt="Company Logo" className="w-10" />              <div className="text-center text-zinc-400">
                <p>© 2024 Brandforge</p>
              </div>
            </div>
            
            {/* Let's Connect Section */}
            <div className="space-y-4">
              <h4 className="font-bold text-lg text-white">Susirašom?</h4>
              <div className="flex items-center space-x-3">
                <EnvelopeFill className="text-xl text-white" />
                <span className="text-zinc-400">info@brandforge.lt</span>
              </div>
              <div className="flex items-center space-x-3">
                <TelephoneFill className="text-xl text-white" />
                <span className="text-zinc-400">+370 (669) 53 689</span>
              </div>
            </div>

            {/* Links Section */}
            <div className="space-y-4 mb-12 relative">
              <h4 className="font-bold text-lg text-white">Nuorodos</h4>
              <ul className="space-y-3">
                <li><Link href="/atlikti-darbai" className="text-zinc-400 hover:text-zinc-300">Mūsų atlikti darbai</Link></li>
                <li><Link href="/paslaugos" className="text-zinc-400 hover:text-zinc-300">Paslaugos</Link></li>
                <li><Link href="/apie-mus" className="text-zinc-400 hover:text-zinc-300">Apie mus</Link></li>
                <li><Link href="/kainos" className="text-zinc-400 hover:text-zinc-300">Kainos</Link></li>
                <li><Link href="/contact" className="text-zinc-400 hover:text-zinc-300">Susisiekite su mumis</Link></li>
              </ul>
            </div>

            {/* Follow Us Section */}
            <div className="space-y-4 flex flex-col relative">
              <h4 className="font-bold text-lg text-white">Sekite mus per:</h4>
              <div className="flex items-center space-x-6">
                <Link href="https://linkedin.com/company/brandforge-lt" aria-label="Linkedin">
                  <Linkedin className="text-2xl text-white hover:text-[#0077B5]" />
                </Link>
                <Link href="https://facebook.com" aria-label="Facebook">
                  <Facebook className="text-2xl text-white hover:text-[#1877F2]" />
                </Link>
                <Link href="https://instagram.com" aria-label="Instagram">
                  <Instagram className="text-2xl text-white hover:text-[#C13584]" />
                </Link>
              </div>
              <div className="mt-6">
                <Link href="/privatumo-politika" className="text-zinc-400 hover:text-zinc-300">
                  Privatumo politika
                </Link>
              </div>
            </div>

          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;