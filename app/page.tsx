import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 flex flex-col relative overflow-hidden">
      {/* Grid background effect */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#15CB72 1.5px, transparent 1.5px), linear-gradient(90deg, #15CB72 1.5px, transparent 1.5px)', backgroundSize: '40px 40px' }} />
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full z-10">
        <div className="flex justify-between items-center">
          <Image
            src="/scalepilot-logo/svg/scalepilot-logo-default.svg"
            alt="ScalePilot Logo"
            width={160}
            height={36}
            className="h-9 w-auto"
            priority
          />
          <Link 
            href="/pricing" 
            className="text-sm font-semibold text-zinc-600 hover:text-primary transition-colors flex items-center gap-2 group"
          >
            Check Pricing
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 relative z-10">
        <div className="max-w-3xl w-full text-center">
          <div className="inline-block bg-primary/10 text-primary text-xs font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-8 animate-fade-in">
            Something Big is Coming
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tight mb-8">
            The future of <span className="text-primary italic">scaling</span> is agentic.
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-500 mb-12 max-w-2xl mx-auto leading-relaxed">
            ScalePilot is an AI-powered scaling platform designed to optimize your business operations and maximize your profit in real-time.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <div className="relative w-full group">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full bg-zinc-50 border border-zinc-200 px-6 py-4 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                <button className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-all">
                  Join Waitlist
                </button>
              </div>
            </div>
          </div>
          
          <p className="mt-6 text-sm text-zinc-400">
            Be the first to know when we launch. No spam, ever.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-zinc-100 pt-12">
          <div className="flex gap-8 text-xs font-medium text-zinc-400 uppercase tracking-widest">
            <Link href="#" className="hover:text-primary transition-colors">Instagram</Link>
            <Link href="#" className="hover:text-primary transition-colors">X (Twitter)</Link>
            <Link href="#" className="hover:text-primary transition-colors">LinkedIn</Link>
          </div>
          <p className="text-xs text-zinc-400 font-medium">
            © 2026 SCALEPILOT. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>

      {/* Decorative Large Background Text */}
      <div className="absolute -bottom-20 left-0 right-0 text-[25vw] font-black text-zinc-50 select-none pointer-events-none text-center whitespace-nowrap -z-10 opacity-50">
        COMING SOON
      </div>
    </div>
  );
}
