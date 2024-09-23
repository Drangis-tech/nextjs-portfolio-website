import React from 'react';
import Link from 'next/link';
import { EnvelopeFill, TelephoneFill, Facebook, Instagram, Linkedin } from 'react-bootstrap-icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-8 pb-12 mt-16"> {/* Reduced top padding by 30% */}
      <div className="max-w-7xl mx-auto px-8 lg:px-12"> {/* Increased horizontal padding */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12"> {/* Increased grid gap for spacing */}
          
          {/* Company Logo */}
          <div className="flex flex-col space-y-6"> {/* Increased vertical spacing */}
            <img src="/path-to-your-logo.png" alt="Company Logo" className="w-32" />
            <p className="text-zinc-400">Your company's tagline or short description goes here.</p> {/* Gray text */}
          </div>
          
          {/* Let's Connect Section */}
          <div className="space-y-4"> {/* Increased vertical spacing */}
            <h4 className="font-bold text-lg text-white">Let's Connect</h4> {/* Heading kept white */}
            <div className="flex items-center space-x-3"> {/* Slightly increased space between items */}
              <EnvelopeFill className="text-xl text-white" /> {/* Icon kept white */}
              <span className="text-zinc-400">info@brandforge.lt</span> {/* Gray text */}
            </div>
            <div className="flex items-center space-x-3">
              <TelephoneFill className="text-xl text-white" /> {/* Icon kept white */}
              <span className="text-zinc-400">+370 (669) 53 689</span> {/* Gray text */}
            </div>
          </div>

          {/* Links Section */}
          <div className="space-y-4"> {/* Increased vertical spacing */}
            <h4 className="font-bold text-lg text-white">Links</h4> {/* Heading kept white */}
            <ul className="space-y-3"> {/* Increased vertical spacing in the list */}
              <li><Link href="/atlikti-darbai" className="text-zinc-400 hover:text-zinc-300">Mūsų atlikti darbai</Link></li> {/* Gray links */}
              <li><Link href="/paslaugos" className="text-zinc-400 hover:text-zinc-300">Paslaugos</Link></li>
              <li><Link href="/apie-mus" className="text-zinc-400 hover:text-zinc-300">Apie mus</Link></li>
              <li><Link href="/kainos" className="text-zinc-400 hover:text-zinc-300">Kainos</Link></li>
              <li><Link href="/contact" className="text-zinc-400 hover:text-zinc-300">Susisiekite su mumis</Link></li>
              <li><Link href="/privatumo-politika" className="text-zinc-400 hover:text-zinc-300">Privatumo politika</Link></li>

            </ul>
          </div>

          {/* Follow Us Section */}
          <div className="space-y-4"> {/* Increased vertical spacing */}
            <h4 className="font-bold text-lg text-white">Follow Us</h4> {/* Heading kept white */}
            <div className="flex space-x-6"> {/* Slightly increased horizontal spacing between icons */}
              <Link href="https://linkedin.com/company/brandforge-lt" aria-label="Linkedin">
                <Linkedin className="text-2xl text-white" /> {/* Icon kept white */}
              </Link>
              <Link href="https://facebook.com" aria-label="Facebook">
                <Facebook className="text-2xl text-white" /> {/* Icon kept white */}
              </Link>
              <Link href="https://instagram.com" aria-label="Instagram">
                <Instagram className="text-2xl text-white" /> {/* Icon kept white */}
              </Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;