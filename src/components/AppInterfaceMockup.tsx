import React from 'react';
import { Menu, Wallet, Bell, Plus, ArrowDownToLine, MessageCircle, Play, History, BookOpen, Home, Coins, Phone } from 'lucide-react';

const games = [
  { name: 'SITA MORNING', result: '134-88-369', open: '09:45 AM', close: '10:45 AM' },
  { name: 'SRIDEVI MORNING', result: '378-89-478', open: '10:00 AM', close: '11:00 AM' },
  { name: 'KARNATAKA DAY', result: '116-88-279', open: '10:00 AM', close: '11:00 AM' },
  { name: 'MILAN MORNING', result: '499-24-158', open: '10:30 AM', close: '11:30 AM' },
  { name: 'ANDHRA MORNING', result: '238-35-456', open: '11:00 AM', close: '12:00 PM' },
];

export default function AppInterfaceMockup() {
  return (
    <div className="w-full h-full bg-[#f4f4f4] flex flex-col font-sans overflow-hidden relative select-none">
      {/* Header */}
      <div className="bg-[#f4f4f4] px-4 pt-10 pb-2 flex items-center justify-between z-10">
        <Menu className="w-7 h-7 text-black stroke-[1.5]" />
        
        <div className="flex items-center absolute left-1/2 -translate-x-1/2">
          <div className="w-8 h-8 bg-[#ffaa00] rounded-full flex items-center justify-center text-black font-medium text-lg z-10">S</div>
          <span className="text-xl text-black -ml-1">ara<span className="text-[#ffaa00]">365</span></span>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="bg-[#ffaa00] px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
            <Wallet className="w-4 h-4 text-white stroke-2" />
            <span className="text-white font-bold text-sm">₹0</span>
          </div>
          <div className="relative">
            <Bell className="w-6 h-6 text-black stroke-[1.5]" />
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-[#f4f4f4] leading-none">9+</span>
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto pb-24 no-scrollbar">
        <div className="px-3 pt-2">
          <p className="text-[#e53935] text-center text-[15px] font-medium mb-4 tracking-wide">most trusted and registered platform</p>
          
          <div className="flex gap-3 mb-4">
            <button className="flex-1 bg-[#ffaa00] text-black py-2.5 rounded-full font-medium flex items-center justify-center gap-2 shadow-sm text-sm">
              <Wallet className="w-4 h-4 stroke-[2]" /> Add Funds
            </button>
            <button className="flex-1 bg-[#ffaa00] text-black py-2.5 rounded-full font-medium flex items-center justify-center gap-2 shadow-sm text-sm">
              <ArrowDownToLine className="w-4 h-4 stroke-[2]" /> Withdrawal
            </button>
          </div>

          <div className="flex items-center gap-1 mb-4 px-1">
            <div className="w-6 h-6 bg-[#25D366] rounded-full flex items-center justify-center">
              <MessageCircle className="w-3.5 h-3.5 text-white fill-current" />
            </div>
            <span className="font-bold text-black text-lg">+</span>
            <div className="h-4 w-24 bg-[#e91e63] rounded-sm blur-[2px] ml-1"></div>
          </div>

          <div className="space-y-3">
            {games.map((game, idx) => (
              <div key={idx} className="bg-white p-3.5 rounded-xl shadow-sm border border-gray-100 relative">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-[17px] text-black tracking-tight">{game.name}</h3>
                  <span className="text-[#4caf50] text-[11px] font-medium">Running now</span>
                </div>
                
                <div className="text-[#ffaa00] font-bold text-[22px] tracking-wider mb-2">{game.result}</div>
                
                <div className="flex text-[11px] text-gray-500 w-[65%]">
                  <div className="flex-1">
                    <p className="mb-0.5">Open Bids :</p>
                    <p>{game.open}</p>
                  </div>
                  <div className="flex-1">
                    <p className="mb-0.5">Close Bids :</p>
                    <p>{game.close}</p>
                  </div>
                </div>
                
                <div className="absolute bottom-3.5 right-3.5 flex flex-col items-center">
                  <button className="w-11 h-11 bg-[#ffaa00] rounded-full flex items-center justify-center mb-1">
                    <Play className="w-5 h-5 text-black ml-1 fill-current" />
                  </button>
                  <span className="text-[11px] font-medium text-black">Play Game</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 inset-x-0 bg-white border-t border-gray-100 px-6 py-2 flex justify-between items-center z-20 h-14">
        <History className="w-6 h-6 text-black stroke-[1.5]" />
        <BookOpen className="w-6 h-6 text-black stroke-[1.5]" />
        <div className="relative -top-5">
          <div className="w-14 h-14 bg-[#ffaa00] rounded-full flex items-center justify-center shadow-md border-4 border-[#f4f4f4]">
            <Home className="w-6 h-6 text-black stroke-[1.5]" />
          </div>
        </div>
        <Coins className="w-6 h-6 text-black stroke-[1.5]" />
        <Phone className="w-6 h-6 text-black stroke-[1.5]" />
      </div>
    </div>
  );
}
