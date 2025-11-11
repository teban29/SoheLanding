import { Navbar } from "@/components/navbar";
import ParticlesBackground from "@/components/ParticlesBackground";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col min-h-screen bg-white dark:bg-darkbg">
      <ParticlesBackground />
      <Navbar />
      <main className="flex-grow pt-16 dark:text-darkfg flex flex-col relative z-10">
        {children}
      </main>
      <footer>
        <div className="text-center py-6 text-md text-gray-500 dark:text-gray-400">
          © 2024 Sohe Solutions. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
