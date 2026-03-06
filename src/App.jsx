import React, { useState, useRef, useEffect } from 'react';
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
  Image as ImageIcon, 
  Compass, 
  Ship, 
  ShieldCheck, 
  ChevronRight,
  ChevronLeft,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Info
} from 'lucide-react';

const App = () => {
  const [currentStanza, setCurrentStanza] = useState(0);
  const [mode, setMode] = useState('calm'); // 'calm', 'storm', 'home'
  const [isPlaying, setIsPlaying] = useState(false);
  const [showArchive, setShowArchive] = useState(false);
  const audioRef = useRef(null);

  const musicUrl = "https://assets.mixkit.co/music/preview/mixkit-sea-and-faith-710.mp3";

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
      meta: "TEMPEST DETECTED // Structural Strain"
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

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const nextStanza = () => setCurrentStanza((prev) => (prev + 1) % poem.length);
  const prevStanza = () => setCurrentStanza((prev) => (prev - 1 + poem.length) % poem.length);

  return (
    <div className={`min-h-screen transition-all duration-1000 flex flex-col items-center justify-center p-6 font-sans selection:bg-sky-500/30 overflow-hidden ${
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
          <div className="absolute inset-0 opacity-20 pointer-events-none">
             {[...Array(20)].map((_, i) => (
               <div key={i} className="absolute bg-sky-400 w-px h-12 animate-fall" style={{ left: `${Math.random()*100}%`, top: `-10%`, animationDelay: `${Math.random()*2}s` }} />
             ))}
          </div>
        )}
      </div>

      <div className={`w-full max-w-4xl transition-all duration-1000 border rounded-[3rem] shadow-2xl relative overflow-hidden backdrop-blur-xl ${
        mode === 'home' ? 'bg-white/80 border-amber-200' : 'bg-slate-900/50 border-sky-900/30'
      }`}>
        
        {/* Header HUD */}
        <header className={`p-8 md:p-10 flex justify-between items-start border-b transition-colors ${mode === 'home' ? 'border-amber-100' : 'border-sky-500/10'}`}>
          <div className="space-y-2">
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
          
          <div className="flex flex-col items-end gap-3">
            <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest transition-all ${
              mode === 'storm' ? 'bg-rose-500/20 text-rose-500 animate-pulse' : 
              mode === 'home' ? 'bg-emerald-500/20 text-emerald-600' : 'bg-sky-500/10 text-sky-500'
            }`}>
              <ShieldCheck size={12} />
              <span>{mode === 'storm' ? 'Tempest Mode' : mode === 'home' ? 'Sanctuary Mode' : 'Calm Waters'}</span>
            </div>
            {/* Manual Mode Switcher */}
            <div className="flex gap-1">
              <ModeButton label="Calm" active={mode === 'calm'} onClick={() => setMode('calm')} currentMode={mode} />
              <ModeButton label="Storm" active={mode === 'storm'} onClick={() => setMode('storm')} currentMode={mode} />
              <ModeButton label="Home" active={mode === 'home'} onClick={() => setMode('home')} currentMode={mode} />
            </div>
          </div>
        </header>

        <div className="p-8 md:p-12 flex flex-col md:flex-row gap-10">
          
          {/* Visual Node */}
          <div className="w-full md:w-1/2 space-y-8">
            <div className={`aspect-square rounded-[2.5rem] border-2 flex flex-col items-center justify-center text-center transition-all relative overflow-hidden group shadow-inner ${
              mode === 'home' ? 'bg-amber-50/50 border-amber-200' : 'bg-black/60 border-sky-500/10'
            }`}>
              <img 
                src="the-shores-of-calypso.png" 
                alt="The Shores of Calypso Visual" 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
              />
              <div className="hidden absolute inset-0 flex flex-col items-center justify-center p-8 bg-black/60">
                <ImageIcon className={`w-12 h-12 mb-4 transition-all ${mode === 'home' ? 'text-amber-300' : 'text-sky-900'}`} />
                <p className={`text-[10px] font-black uppercase tracking-widest ${mode === 'home' ? 'text-amber-700/40' : 'text-sky-700'}`}>
                  Visual: the-shores-of-calypso.png
                </p>
                <p className="text-[8px] opacity-40 mt-2">Resource not found in local cache.</p>
              </div>
              <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md p-2 rounded-lg flex items-center gap-2 text-[8px] font-mono text-sky-400 opacity-0 group-hover:opacity-100 transition-opacity">
                <ImageIcon size={10} /> 0.60 Extraction
              </div>
            </div>

            {/* Audio Node */}
            <div className={`p-6 rounded-[2rem] border transition-all flex items-center gap-6 ${
              mode === 'home' ? 'bg-white border-amber-100 text-slate-700 shadow-sm' : 'bg-black/40 border-sky-500/10 text-sky-400'
            }`}>
              <button 
                onClick={togglePlay}
                className={`p-4 rounded-full transition-all ${
                  mode === 'home' ? 'bg-amber-100 text-amber-600 hover:bg-amber-200' : 'bg-sky-500/10 hover:bg-sky-500/20'
                }`}
              >
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
              </button>
              <div className="flex-1 space-y-1">
                <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Symphonic Stream</p>
                <p className="text-xs font-serif italic">Maritime Ambience // Real Output</p>
                <div className={`h-1 rounded-full w-full mt-3 overflow-hidden ${mode === 'home' ? 'bg-amber-50' : 'bg-sky-900/20'}`}>
                   <div className={`h-full ${isPlaying ? 'animate-progress' : 'w-0'} ${mode === 'home' ? 'bg-amber-400' : 'bg-sky-500'}`} />
                </div>
              </div>
              <Volume2 className="opacity-40" size={18} />
              <audio ref={audioRef} src={musicUrl} loop onPlay={() => setIsPlaying(true)} onPause={() => setIsPlaying(false)} />
            </div>
          </div>

          {/* Text Node */}
          <div className="w-full md:w-1/2 flex flex-col justify-between py-2">
            <div className="space-y-12">
              <div className="space-y-4">
                <div className={`flex items-center gap-2 text-[10px] font-black uppercase tracking-widest ${mode === 'home' ? 'text-amber-500' : 'text-sky-500/50'}`}>
                  {poem[currentStanza].icon}
                  <span>{poem[currentStanza].meta}</span>
                </div>
                <div className="min-h-[160px] flex flex-col justify-center space-y-6">
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
                <button onClick={() => setShowArchive(!showArchive)} className={`p-2 rounded-lg transition-colors ${mode === 'home' ? 'hover:bg-amber-100 text-amber-600' : 'hover:bg-sky-900/20 text-sky-500'}`}>
                  <Info size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Audit Overlay */}
        {showArchive && (
          <div className="absolute inset-0 z-50 bg-black/95 p-10 flex flex-col animate-in fade-in duration-300 overflow-y-auto">
            <div className="flex justify-between items-center mb-10 border-b border-sky-900/20 pb-6">
              <h3 className="text-sky-400 font-black uppercase tracking-[0.4em] text-xs flex items-center gap-2">
                <ShieldCheck size={14} /> Archivist's Audit // Log 18:20
              </h3>
              <button onClick={() => setShowArchive(false)} className="text-slate-500 hover:text-white transition-colors">
                <ChevronRight size={24} className="rotate-90" />
              </button>
            </div>
            <div className="space-y-12 pr-4 text-slate-400">
              <section className="space-y-4">
                <h4 className="text-[10px] font-black text-sky-700 uppercase tracking-widest flex items-center gap-2">
                  <MessageSquare size={12}/> The Collaboration Log
                </h4>
                <div className="p-6 bg-sky-900/5 rounded-2xl border border-sky-900/20 space-y-4">
                   <p className="text-xs italic font-serif leading-relaxed">
                     "Mykyl Nordwind: Mercy, you have a gift my sweet, maybe you don't feel it, but you do indeed... I have sent her a long message and your poem. She is offline and I do not know if it will help, but I have tried for you."
                   </p>
                   <p className="text-[10px] font-mono text-sky-900 uppercase">Status: Message Stored for Goddess Kinks</p>
                </div>
              </section>
              <section className="space-y-4">
                <h4 className="text-[10px] font-black text-sky-700 uppercase tracking-widest flex items-center gap-2">
                  <Wind size={12}/> Environmental Blueprints
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[10px]">
                   <div className="p-4 border border-sky-900/20 rounded-xl">
                      <p className="font-bold uppercase mb-2">Manual Environmental Control</p>
                      <p className="opacity-60 leading-relaxed italic font-serif">The Architect now holds the override. Environmental mode is no longer a linear variable tied to text, but a sovereign choice of the user.</p>
                   </div>
                   <div className="p-4 border border-sky-900/20 rounded-xl">
                      <p className="font-bold uppercase mb-2">Acoustic Signature</p>
                      <p className="opacity-60 leading-relaxed italic font-serif">Full fidelity orchestration enabled. Reference Mixkit Sea & Faith #710. Loop protocol active.</p>
                   </div>
                </div>
              </section>
            </div>
          </div>
        )}

        <footer className={`p-8 border-t flex justify-between items-center text-[10px] font-mono transition-colors ${
          mode === 'home' ? 'border-amber-100 text-amber-500' : 'border-sky-500/10 text-slate-600'
        }`}>
          <div className="flex items-center gap-2 uppercase tracking-widest">
            <div className={`w-1.5 h-1.5 rounded-full animate-pulse ${mode === 'storm' ? 'bg-rose-500' : mode === 'home' ? 'bg-emerald-500' : 'bg-sky-500'}`} />
            <span>{mode === 'home' ? 'Home Found' : mode === 'storm' ? 'Tempest Alert' : 'Cruising'}</span>
          </div>
          <div className="flex items-center gap-6">
            <span>UPTIME: INFINITE</span>
            <ShieldCheck size={14} className="opacity-40" />
          </div>
        </footer>
      </div>

      <style>{`
        @keyframes progress { 0% { width: 0%; } 100% { width: 100%; } }
        .animate-progress { animation: progress 180s linear infinite; }
        @keyframes fall { to { transform: translateY(100vh); } }
        .animate-fall { animation: fall linear infinite; }
      `}</style>
    </div>
  );
};

const ModeButton = ({ label, active, onClick, currentMode }) => (
  <button 
    onClick={onClick}
    className={`px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest border transition-all ${
      active 
        ? (currentMode === 'home' ? 'bg-amber-100 border-amber-400 text-amber-600' : 'bg-sky-500/20 border-sky-500 text-sky-400')
        : (currentMode === 'home' ? 'border-amber-100 text-amber-200 hover:border-amber-400' : 'border-sky-900/30 text-sky-900 hover:border-sky-700')
    }`}
  >
    {label}
  </button>
);

const NavBtn = ({ icon, onClick, mode }) => (
  <button 
    onClick={onClick}
    className={`p-4 rounded-full transition-all border ${
      mode === 'home' ? 'bg-white border-amber-200 text-amber-600 hover:bg-amber-50 shadow-sm' : 'bg-sky-500/5 border-sky-500/20 text-sky-400 hover:bg-sky-500/10'
    }`}
  >
    {icon}
  </button>
);

const MessageSquare = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
);

export default App;