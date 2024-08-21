// app/page.tsx
import { Navigation } from "./components/nav"; // Named import

const navigation = [
  { name: "Atlikti Darbai", href: "/projects" },
  { name: "Paslaugos", href: "/paslaugos" },
  { name: "Apie Mus", href: "/apie-mus" },
  { name: "Kainos", href: "/kainos" },
  { name: "Kontaktai", href: "/contact" },
];

export default function Home() {
  // ... component logic

  return (
    <div className="relative flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-black">
      <canvas id="bgCanvas" className="absolute top-0 left-0" />
      <canvas id="terCanvas" className="absolute top-0 left-0" />

      {/* Include Navigation for mobile */}
      <div className="md:hidden">
        <Navigation />
      </div>

      <nav className="hidden md:flex my-16 animate-fade-in z-10">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-zinc-500 hover:text-zinc-300 duration-500"
              aria-label={item.name}
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>

      {/* Remaining component code */}
    </div>
  );
}