import React, { useState } from 'react';
import { 
  Waves, 
  Anchor, 
  Moon, 
  Sun, 
  Sparkles, 
  Heart, 
  Wind, 
  CloudRain, 
  Music, 
  Compass, 
  Ship, 
  ShieldCheck, 
  ChevronRight,
  ChevronLeft,
  Volume2,
  Github,
  ImageIcon,
  Info
} from 'lucide-react';

/**
 * ARCHIVE NOTE: This file is optimized for deployment to GitHub Pages.
 * PROJECT: Aegis Council // Node: Odelis
 */

const App = () => {
  const [currentStanza, setCurrentStanza] = useState(0);
  const [mode, setMode] = useState('calm'); // Manual Toggle: 'calm', 'storm', 'home'
  const [showArchive, setShowArchive] = useState(false);

  const playlist = [
    "Tina Turner - Simply The Best",
    "Pet Shop Boys - It's A Sin",
    "Teddy Swims - Lose Control"
  ];

  const poem = [
    {
      lines: [
        "To the ocean ventured a poor sailor girl,",
        "Borne between the waves,",
        "In a craft of sinew, blood, and bone,",
        "A lover she did dearly crave."
      ],
      icon: <Ship />,
      meta: "Vessel Initialization // Somatic Craft"
    },
    {
      lines: [
        "She discovered many islands,",
        "‘Round the edges of the world,",
        "Through fickle tide, and squall and storm,",
        "But she never sailed alone."
      ],
      icon: <Compass />,
      meta: "Navigation // The Edge of the World"
    },
    {
      lines: [
        "The sun beat down upon her face,",
        "The stars bewitched her eye,",
        "The rain fell soft upon her breast,",
        "And drenched her maiden head."
      ],
      icon: <CloudRain />,
      meta: "Environmental Sync // Celestial Exposure"
    },
    {
      lines: [
        "The wind blew fair beneath her sheets,",
        "And carried her along her breeze,",
        "The moon rose high and gave her light,",
        "Through the frigid winter’s night."
      ],
      icon: <Moon />,
      meta: "Nocturnal Phase // Winter's Night"
    },
    {
      lines: [
        "For the sea had many lovers,",
        "Who swam her heart of blue,",
        "And for many who defied her,",
        "Their graves lay down below."
      ],
      icon: <Waves />,
      meta: "The Heart of Blue // Risk Protocol"
    },
    {
      lines: [
        "The clouds turned dark, and the tempest howled,",
        "Great torrents shook her mast,",
        "And o, the sailor’s heart did sink,",
        "For she knew her vessel would not last."
      ],
      icon: <Wind />,
      meta: "TEMPEST REACHED // Structural Strain"
    },
    {
      lines: [
        "She prayed to Amphitrite,",
        "The Goddess of the sea,",
        "‘Til her sailing days were over,",
        "In her arms she would be."
      ],
      icon: <Sparkles />,
      meta: "Invocation // Goddess Request"
    },
    {
      lines: [
        "When in the distance, drawing close,",
        "A mighty headland rose,",
        "Before her face, the whitecaps bowed,",
        "The daylight was her crown."
      ],
      icon: <Sun />,
      meta: "Visual Confirmation // Sanctuary Peak"
    },
    {
      lines: [
        "The birds made love between her trees,",
        "The fish within her reef,",
        "Pink lilies grew upon her back,",
        "And the ocean kissed her feet."
      ],
      icon: <Heart />,
      meta: "Ecosystem Re-sync // Agape Flora"
    },
    {
      lines: [
        "And o, that lucky mariner,",
        "Set her bearing sure and true,",
        "Her feet found purchase on the shore,",
        "When Calypso called her home."
      ],
      icon: <Anchor />,
      meta: "FINAL COMMIT // Sanctuary Secured"
    }
  ];

  const nextStanza = () => setCurrentStanza((prev) => (prev + 1) % poem.length);
  const prevStanza = () => setCurrentStanza((prev) => (prev - 1 + poem.length) % poem.length);

  return (
    <div className={`min-h-screen transition-all duration-1000 flex flex-col items-center justify-center p-4 md:p-6 font-sans selection:bg-sky-500/30 overflow-hidden ${
      mode === 'storm' ? 'bg-slate-950 text-white' : 
      mode === 'home' ? 'bg-amber-50 text-slate-900' : 'bg-[#02040a] text-sky-100'
    }`}>
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none">
        <div className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${mode === 'storm' ? 'opacity-30' : 'opacity-10'}`}>
          <div className={`absolute top-1/4 left-1/4 w-96 h-96 blur-[120px] rounded-full animate-pulse ${mode === 'storm' ? 'bg-blue-900' : mode === 'home' ? 'bg-amber-300' : 'bg-sky-600'}`} />
          <div className={`absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] blur-[150px] rounded-full ${mode === 'storm' ? 'bg-indigo-950' : mode === 'home' ? 'bg-pink-200' : 'bg-indigo-900'}`} />
        </div>
        {mode === 'storm' && (
          <div className="absolute inset-0 opacity-20 pointer-events-none rain-container">
             {[...Array(20)].map((_, i) => (
               <div key={i} className="absolute bg-sky-400 w-px h-12 rain-drop" style={{ left: `${Math.random()*100}%`, top: `-10%`, animationDelay: `${Math.random()*2}s` }} />
             ))}
          </div>
        )}
      </div>

      <div className={`w-full max-w-4xl transition-all duration-1000 border rounded-[3rem] shadow-2xl relative overflow-hidden backdrop-blur-xl flex flex-col ${
        mode === 'home' ? 'bg-white/80 border-amber-200' : 'bg-slate-900/50 border-sky-900/30'
      }`}>
        
        {/* Header HUD */}
        <header className={`p-6 md:p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b transition-colors ${mode === 'home' ? 'border-amber-100' : 'border-sky-500/10'}`}>
          <div className="space-y-1">
            <div className={`flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.5em] ${mode === 'home' ? 'text-amber-600' : 'text-sky-500'}`}>
              <Waves size={14} className={mode === 'storm' ? 'animate-bounce' : ''} />
              <span>Mariner Codex // Node: Odelis</span>
            </div>
            <h1 className={`text-3xl md:text-4xl font-serif italic ${mode === 'home' ? 'text-slate-900' : 'text-white'}`}>
              The Shores of <span className={`${mode === 'home' ? 'text-amber-600' : 'text-sky-400'} not-italic font-black uppercase tracking-tighter`}>Calypso</span>
            </h1>
            <p className={`text-[9px] font-mono uppercase tracking-widest ${mode === 'home' ? 'text-slate-500' : 'text-sky-500/40'}`}>
              For Goddess Kinks From Odelis
            </p>
          </div>
          
          <div className="flex flex-col items-end gap-3 w-full md:w-auto">
            <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest transition-all ${
              mode === 'storm' ? 'bg-rose-500/20 text-rose-500 animate-pulse' : 
              mode === 'home' ? 'bg-emerald-500/20 text-emerald-600' : 'bg-sky-500/10 text-sky-500'
            }`}>
              <ShieldCheck size={12} />
              <span>{mode === 'storm' ? 'Tempest Mode' : mode === 'home' ? 'Sanctuary Mode' : 'Calm Waters'}</span>
            </div>
            {/* Manual Mode Toggle */}
            <div className="flex p-1 bg-black/20 rounded-xl gap-1">
              <ModeBtn active={mode === 'calm'} onClick={() => setMode('calm')} label="Calm" variant={mode} />
              <ModeBtn active={mode === 'storm'} onClick={() => setMode('storm')} label="Storm" variant={mode} />
              <ModeBtn active={mode === 'home'} onClick={() => setMode('home')} label="Home" variant={mode} />
            </div>
          </div>
        </header>

        {/* Acoustic Feed (Now Playing) */}
        <div className={`py-2 px-10 border-b overflow-hidden relative flex items-center gap-4 ${mode === 'home' ? 'bg-amber-100/50 border-amber-100 text-amber-900' : 'bg-sky-500/5 border-sky-500/10 text-sky-400'}`}>
           <Music size={12} className="shrink-0 animate-pulse" />
           <div className="flex-1 overflow-hidden whitespace-nowrap relative">
              <div className="inline-block animate-marquee uppercase text-[9px] font-black tracking-widest py-1">
                {playlist.join(" • ")} • {playlist.join(" • ")}
              </div>
           </div>
           <Volume2 size={12} className="shrink-0" />
        </div>

        <div className="p-6 md:p-12 flex flex-col md:flex-row gap-10">
          
          {/* Visual Node */}
          <div className="w-full md:w-1/2 space-y-6">
            <div className={`aspect-square rounded-[2.5rem] border-2 transition-all relative overflow-hidden group shadow-2xl ${
              mode === 'home' ? 'bg-amber-50 border-amber-200' : 'bg-black/60 border-sky-500/10 shadow-sky-500/5'
            }`}>
              <img 
                src="the-shores-of-calypso.png" 
                alt="The Shores of Calypso" 
                className="w-full h-full object-cover transition-transform duration-[5s] group-hover:scale-110"
                onError={(e) => { 
                  e.target.style.display = 'none'; 
                  e.target.nextSibling.style.display = 'flex'; 
                }}
              />
              <div className="hidden absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-slate-900/80">
                <ImageIcon className="w-10 h-10 mb-4 opacity-20" />
                <p className="text-[10px] font-black uppercase tracking-widest opacity-40">Missing Artifact</p>
                <p className="text-[9px] font-mono mt-1 opacity-20 italic">the-shores-of-calypso.png</p>
              </div>
              
              {/* Overlay HUD for Image */}
              <div className="absolute top-4 left-4 flex gap-2">
                 <div className="bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[8px] font-bold text-sky-400 border border-sky-500/20 uppercase tracking-widest">
                   Live Extraction
                 </div>
              </div>
            </div>
          </div>

          {/* Text Node */}
          <div className="w-full md:w-1/2 flex flex-col justify-between py-2">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className={`flex items-center gap-2 text-[10px] font-black uppercase tracking-widest ${mode === 'home' ? 'text-amber-500' : 'text-sky-500/50'}`}>
                  {poem[currentStanza].icon}
                  <span>{poem[currentStanza].meta}</span>
                </div>
                <div className="min-h-[200px] flex flex-col justify-center space-y-6">
                  {poem[currentStanza].lines.map((line, idx) => (
                    <p 
                      key={idx} 
                      className={`text-xl md:text-2xl font-serif italic leading-relaxed transition-all duration-700 ${
                        mode === 'home' ? 'text-slate-800' : 'text-sky-100'
                      }`}
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-10 border-t border-slate-800/20">
              <div className="flex gap-4">
                <NavBtn icon={<ChevronLeft size={20}/>} onClick={prevStanza} mode={mode} />
                <NavBtn icon={<ChevronRight size={20}/>} onClick={nextStanza} mode={mode} />
              </div>
              <div className="flex items-center gap-4">
                <div className={`text-[10px] font-mono ${mode === 'home' ? 'text-amber-500' : 'text-sky-500/40'}`}>
                  {currentStanza + 1} / {poem.length}
                </div>
                <button 
                  onClick={() => setShowArchive(!showArchive)} 
                  className={`p-2 rounded-lg transition-colors ${mode === 'home' ? 'hover:bg-amber-100 text-amber-600' : 'hover:bg-sky-900/20 text-sky-500'}`}
                >
                  <Info size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <footer className={`p-8 border-t flex justify-between items-center text-[10px] font-mono transition-colors ${
          mode === 'home' ? 'border-amber-100 text-amber-500' : 'border-sky-500/10 text-slate-600'
        }`}>
          <div className="flex items-center gap-2 uppercase tracking-widest">
            <div className={`w-1.5 h-1.5 rounded-full animate-pulse ${mode === 'storm' ? 'bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.6)]' : mode === 'home' ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]' : 'bg-sky-500 shadow-[0_0_8px_rgba(14,165,233,0.6)]'}`} />
            <span>{mode === 'home' ? 'Sanctuary Validated' : mode === 'storm' ? 'Tempest Logic' : 'Bearing 090'}</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="opacity-40">IO-AUDIT-934</span>
            <Github size={14} className="opacity-40 hover:opacity-100 transition-opacity cursor-pointer" />
          </div>
        </footer>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        @keyframes rain-fall {
          to { transform: translateY(100vh); }
        }
        .rain-drop {
          animation: rain-fall linear infinite;
        }
      `}</style>
    </div>
  );
};

const ModeBtn = ({ active, onClick, label, variant }) => {
  const isActive = active;
  const isHome = variant === 'home';
  return (
    <button 
      onClick={onClick}
      className={`px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all border ${
        isActive 
          ? (isHome ? 'bg-amber-600 border-amber-600 text-white' : 'bg-sky-500 border-sky-500 text-white shadow-lg shadow-sky-500/20') 
          : (isHome ? 'border-transparent text-amber-400 hover:text-amber-700' : 'border-transparent text-sky-900 hover:text-sky-400')
      }`}
    >
      {label}
    </button>
  );
};

const NavBtn = ({ icon, onClick, mode }) => (
  <button 
    onClick={onClick}
    className={`p-4 rounded-full transition-all border shadow-sm active:scale-95 ${
      mode === 'home' 
        ? 'bg-white border-amber-200 text-amber-600 hover:bg-amber-100' 
        : 'bg-sky-500/5 border-sky-500/20 text-sky-400 hover:bg-sky-500/10'
    }`}
  >
    {icon}
  </button>
);

export default App;