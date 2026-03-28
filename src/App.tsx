import React, { useState, useEffect } from 'react';
import { Menu, X, Zap, ShieldCheck, HeadphonesIcon, ChevronDown, Download } from 'lucide-react';
import { motion } from 'motion/react';
import AppInterfaceMockup from './components/AppInterfaceMockup';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#fdfdfd]">
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-[#FFD700]/30 to-[#FF8C00]/20 blur-[100px] animate-blob" />
      <div className="absolute top-[20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-bl from-[#FFA500]/20 to-[#FFD700]/30 blur-[120px] animate-blob" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-[-20%] left-[20%] w-[70vw] h-[70vw] rounded-full bg-gradient-to-tr from-[#FF8C00]/20 to-[#FFD700]/20 blur-[150px] animate-blob" style={{ animationDelay: '4s' }} />
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/50 backdrop-blur-md border-b border-white/40 shadow-[0_2px_10px_rgba(0,0,0,0.05)] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[70px]">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold bg-gradient-to-br from-[#FFD700] via-[#FFD700] to-[#FF8C00] bg-clip-text text-transparent drop-shadow-sm">
              Sara365
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-[#1a1a1a] hover:text-[#F39C12] font-medium transition-colors">Home</a>
              <a href="#rates" className="text-[#1a1a1a] hover:text-[#F39C12] font-medium transition-colors">Game Rates</a>
              <a href="#charts" className="text-[#1a1a1a] hover:text-[#F39C12] font-medium transition-colors">Charts</a>
              <a href="#faq" className="text-[#1a1a1a] hover:text-[#F39C12] font-medium transition-colors">FAQ</a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-[#1a1a1a] hover:text-[#F39C12] focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-white/40 shadow-lg absolute w-full">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <a href="#home" className="text-[#1a1a1a] hover:text-[#F39C12] block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#rates" className="text-[#1a1a1a] hover:text-[#F39C12] block px-3 py-2 rounded-md text-base font-medium">Game Rates</a>
            <a href="#charts" className="text-[#1a1a1a] hover:text-[#F39C12] block px-3 py-2 rounded-md text-base font-medium">Charts</a>
            <a href="#faq" className="text-[#1a1a1a] hover:text-[#F39C12] block px-3 py-2 rounded-md text-base font-medium">FAQ</a>
          </div>
        </div>
      )}
    </header>
  );
};

const Hero = () => {
  const downloadAPK = () => {
    // Exact link from the original website
    const apkUrl = 'https://sara365.fun/Sara365.apk';
    
    // Track the download event
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead');
      (window as any).fbq('track', 'CompleteRegistration');
    }

    // Create a temporary anchor element
    const a = document.createElement('a');
    a.href = apkUrl;
    a.download = 'Sara365.apk';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <section id="home" className="flex flex-col items-center justify-center pt-12 pb-8 text-center px-4 relative">
      {/* Decorative background glow for the button */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[100px] bg-[#FFD700]/30 blur-[60px] rounded-full pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        className="mb-8 relative z-10 w-full max-w-[800px]"
      >
        <motion.button 
          onClick={downloadAPK}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="relative w-full overflow-hidden bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFD700] bg-[length:200%_auto] text-black py-5 rounded-full font-extrabold text-xl md:text-2xl flex items-center justify-center gap-3 shadow-[0_0_40px_rgba(255,165,0,0.4)] border-2 border-white/20 transition-all duration-300 hover:shadow-[0_0_60px_rgba(255,165,0,0.6)] group animate-[gradient_3s_linear_infinite]"
        >
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-[150%] group-hover:animate-[shine_1.5s_ease-in-out_infinite] z-0" />
          
          <Download className="w-7 h-7 relative z-10 animate-bounce" />
          <span className="relative z-10 tracking-wide uppercase">Download App Now</span>
          
          {/* Inner glow */}
          <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(255,255,255,0.5)] z-0 pointer-events-none" />
        </motion.button>
        <p className="mt-4 text-sm font-medium text-[#4a4a4a] flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-green-600" /> 100% Safe & Secure Download
        </p>
      </motion.div>

      {/* Lazy Loaded Hero Image (Mobile Mockup) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
        className="w-full max-w-[320px] md:max-w-[360px] mx-auto mt-12 relative z-10"
      >
        {/* Decorative elements behind the phone */}
        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[100%] bg-gradient-to-tr from-[#FFD700]/40 to-[#FF8C00]/40 blur-[80px] rounded-full pointer-events-none" />
        
        {/* Phone Frame */}
        <div className="relative rounded-[3rem] border-[8px] border-gray-900 bg-gray-900 shadow-[0_30px_60px_rgba(0,0,0,0.3)] overflow-hidden aspect-[9/19.5]">
          {/* Top Notch */}
          <div className="absolute top-0 inset-x-0 h-6 bg-gray-900 rounded-b-3xl w-40 mx-auto z-20 flex justify-center items-center gap-2">
            <div className="w-12 h-1.5 bg-gray-800 rounded-full" />
            <div className="w-2 h-2 bg-gray-800 rounded-full" />
          </div>
          
          {/* App Screenshot / Mockup */}
          <div className="w-full h-full bg-white">
            <AppInterfaceMockup />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const WelcomeText = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-white/90 backdrop-blur-md border border-white/40 rounded-3xl shadow-[0_15px_35px_rgba(0,0,0,0.12)] p-8 md:p-10 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-5 text-[#1a1a1a]">Welcome to Sara365</h2>
        <p className="text-lg leading-relaxed text-[#4a4a4a]">
          Experience the next generation of Satta Matka gaming. At Sara365, we blend tradition with cutting-edge technology to provide you with the fastest, most secure, and most transparent gaming environment in the industry.
        </p>
      </motion.div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      name: 'Instant Payouts',
      description: 'Get your winnings credited to your account within minutes. No delays, no excuses.',
      icon: Zap,
    },
    {
      name: 'Secure Platform',
      description: 'State-of-the-art encryption ensures your data and transactions are always protected.',
      icon: ShieldCheck,
    },
    {
      name: '24/7 Support',
      description: 'Our dedicated team is always available to help you with any queries or issues.',
      icon: HeadphonesIcon,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div 
            key={feature.name}
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="bg-white/90 backdrop-blur-md border border-white/40 rounded-3xl shadow-[0_15px_35px_rgba(0,0,0,0.12)] p-10 text-center transition-all duration-400 hover:-translate-y-4 hover:scale-105 hover:bg-white hover:shadow-[0_30px_60px_rgba(0,0,0,0.15)]"
          >
            <div className="inline-block mb-6">
              <feature.icon className="w-12 h-12 text-[#FFD700]" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold text-[#0A192F] mb-4">{feature.name}</h3>
            <p className="text-[#4a4a4a] leading-relaxed">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const GameRates = () => {
  const rates = [
    { name: 'Single Digit', bet: '1 RS', win: '9.5 Rs' },
    { name: 'Jodi Digits', bet: '1 RS', win: '95 Rs' },
    { name: 'Red Brackets', bet: '1 RS', win: '95 Rs' },
    { name: 'Single Pana', bet: '1 RS', win: '150 Rs' },
    { name: 'Double Pana', bet: '1 RS', win: '300 Rs' },
    { name: 'Triple Pana', bet: '1 RS', win: '900 Rs' },
    { name: 'Half Sangam A', bet: '1 RS', win: '1000 Rs' },
    { name: 'Half Sangam B', bet: '1 RS', win: '1000 Rs' },
    { name: 'Full Sangam', bet: '1 RS', win: '10000 Rs' },
  ];

  return (
    <section id="rates" className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 relative">
          <h2 className="text-4xl font-bold text-[#1a1a1a] mb-4">Game Rates</h2>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-gradient-to-br from-[#FFD700] via-[#FFD700] to-[#FF8C00] rounded-full"></div>
        </div>
        
        {/* Desktop Table */}
        <div className="hidden md:block bg-white/90 backdrop-blur-md border border-white/40 rounded-3xl shadow-[0_15px_35px_rgba(0,0,0,0.12)] overflow-hidden">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gradient-to-br from-[#FFD700] via-[#FFD700] to-[#FF8C00] text-white">
                <th className="py-5 px-6 text-lg font-semibold text-center">Name</th>
                <th className="py-5 px-6 text-lg font-semibold text-center">Bet</th>
                <th className="py-5 px-6 text-lg font-semibold text-center">Winning</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/10">
              {rates.map((rate, index) => (
                <tr key={index} className="hover:bg-white/50 transition-colors">
                  <td className="py-4 px-6 text-center text-[#1a1a1a] font-medium">{rate.name}</td>
                  <td className="py-4 px-6 text-center text-[#4a4a4a]">{rate.bet}</td>
                  <td className="py-4 px-6 text-center text-[#1a1a1a] font-semibold">{rate.win}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden flex flex-col gap-4">
          {rates.map((rate, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white/90 backdrop-blur-md border border-white/40 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.12)] p-5 text-center transition-transform hover:-translate-y-1"
            >
              <div className="font-semibold text-lg text-[#1a1a1a] mb-3">{rate.name}</div>
              <div className="flex justify-between mt-4">
                <div className="flex flex-col items-center">
                  <span className="text-sm text-[#4a4a4a]">Bet</span>
                  <span className="font-semibold text-base mt-1">{rate.bet}</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm text-[#4a4a4a]">Winning</span>
                  <span className="font-semibold text-base mt-1 text-[#FF8C00]">{rate.win}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Charts = () => {
  const markets = [
    'Kalyan Jodi', 'Milan Day Panel', 'Madhur Day Panel', 
    'Kalyan Night Panel', 'Kalyan Panel', 'Sridevi', 
    'Main Bazar', 'Rajdhani Night', 'Milan Night'
  ];

  return (
    <section id="charts" className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/90 backdrop-blur-md border border-white/40 rounded-3xl shadow-[0_15px_35px_rgba(0,0,0,0.12)] p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-8">Sara365 Satta Matka Chart Collection</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
            {markets.map((market, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-[#fdfdfd] border border-black/5 rounded-xl p-4 text-center font-medium text-[#1a1a1a] transition-all hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(0,0,0,0.05)] cursor-pointer"
              >
                {market} Chart
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "How do I register on Sara365?",
      answer: "Registration is simple and quick. Click on the 'Download App' button, install the application, and follow the on-screen instructions to create your account using your mobile number."
    },
    {
      question: "Is it safe to add money to my wallet?",
      answer: "Yes, absolutely. We use industry-standard encryption and partner with trusted payment gateways to ensure all your transactions are 100% secure."
    },
    {
      question: "How long does withdrawal take?",
      answer: "We pride ourselves on instant payouts. Once you initiate a withdrawal request, the amount is typically credited to your bank account within 10-15 minutes."
    },
    {
      question: "What are the minimum deposit and withdrawal amounts?",
      answer: "The minimum deposit amount is ₹300, and the minimum withdrawal amount is ₹500. There is no maximum limit for withdrawals."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/90 backdrop-blur-md border border-white/40 rounded-3xl shadow-[0_15px_35px_rgba(0,0,0,0.12)] p-8 md:p-12"
        >
          <div className="text-center mb-12 relative">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">Frequently Asked Questions</h2>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-gradient-to-br from-[#FFD700] via-[#FFD700] to-[#FF8C00] rounded-full"></div>
          </div>

          <div className="max-w-3xl mx-auto space-y-5">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-[#fdfdfd] rounded-xl overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.05)]"
              >
                <button
                  className="w-full px-5 py-5 text-left flex justify-between items-center focus:outline-none hover:bg-[#f0f0f0] transition-colors"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-semibold text-[#1a1a1a]">
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`w-5 h-5 text-[#4a4a4a] transition-transform duration-300 ${openIndex === index ? 'transform rotate-180' : ''}`} 
                  />
                </button>
                
                <div 
                  className={`px-5 overflow-hidden transition-all duration-300 ease-in-out bg-white ${openIndex === index ? 'max-h-[500px] py-5' : 'max-h-0 py-0'}`}
                >
                  <p className="text-[#4a4a4a] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-16 pb-8 text-center md:text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <span className="text-2xl font-bold bg-gradient-to-br from-[#FFD700] via-[#FFD700] to-[#FF8C00] bg-clip-text text-transparent mb-4 block">
              Sara365
            </span>
            <p className="text-white/80">
              Your premier destination for exciting online gaming adventures!
            </p>
          </div>
          
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-bold mb-2">Quick Links</h3>
            <a href="#home" className="text-white/80 hover:text-[#F5B041] transition-colors">Home</a>
            <a href="#rates" className="text-white/80 hover:text-[#F5B041] transition-colors">Game Rates</a>
            <a href="#charts" className="text-white/80 hover:text-[#F5B041] transition-colors">Charts</a>
            <a href="#faq" className="text-white/80 hover:text-[#F5B041] transition-colors">FAQ</a>
          </div>
          
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-bold mb-2">Legal</h3>
            <a href="#" className="text-white/80 hover:text-[#F5B041] transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/80 hover:text-[#F5B041] transition-colors">Data Deletion</a>
            <a href="#" className="text-white/80 hover:text-[#F5B041] transition-colors">Terms & Conditions</a>
            <a href="#" className="text-white/80 hover:text-[#F5B041] transition-colors">Disclaimer</a>
          </div>
          
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-bold mb-2">Contact Us</h3>
            <p className="text-white/80">+91 91222 57775</p>
            <p className="text-white/80">support@Sara365.net</p>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-sm text-white/70 flex flex-col items-center gap-4">
          <p>Copyright &copy; 2025 Sara365. All Rights Reserved</p>
          <p className="max-w-4xl text-center">
            Our website is operated by Sara International, a company established under the law of Isle of Man, with registered address at I+D Ballanca Meadow-IM4-2HT, Isle Of Man, and having its gaming sublicense issued by Isle of Man e-Gaming and all rights to operate the gaming software worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
};

const FloatingDownloadBtn = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const downloadAPK = () => {
    const apkUrl = 'https://sara365.fun/Sara365.apk';
    
    // Track the download event
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead');
      (window as any).fbq('track', 'CompleteRegistration');
    }

    const a = document.createElement('a');
    a.href = apkUrl;
    a.download = 'Sara365.apk';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <motion.button 
      onClick={downloadAPK}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 bg-gradient-to-r from-[#FFD700] to-[#FF8C00] text-black px-6 py-4 md:px-8 md:py-5 rounded-full font-extrabold text-base md:text-lg flex items-center gap-2 shadow-[0_10px_30px_rgba(255,140,0,0.5)] border-2 border-white/30 transition-all duration-500 hover:shadow-[0_15px_40px_rgba(255,140,0,0.7)] group ${visible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-[150%] group-hover:animate-[shine_1.5s_ease-in-out_infinite] z-0 rounded-full" />
      <Download className="w-5 h-5 relative z-10 animate-bounce" />
      <span className="relative z-10 uppercase tracking-wide">Download</span>
    </motion.button>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-transparent text-[#1a1a1a] font-sans relative overflow-x-hidden">
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <WelcomeText />
        <Features />
        <GameRates />
        <Charts />
        <FAQ />
      </main>
      <Footer />
      <FloatingDownloadBtn />
    </div>
  );
}
