import React from 'react';
import { 
  Sparkles, 
  Layers, 
  Palette, 
  Sliders, 
  Bot, 
  Settings, 
  Globe, 
  Download, 
  Monitor, 
  Tablet, 
  Smartphone, 
  ExternalLink,
  Save,
  Check
} from 'lucide-react';

export function Navbar({
  t,
  currentLang,
  onChangeLang,
  deviceMode,
  onChangeDeviceMode,
  onOpenGemini,
  onOpenExport,
  onSave
}) {
  return (
    <header className="h-14 bg-[#0a0d14] border-b border-white/10 px-4 flex items-center justify-between select-none z-30 shrink-0">
      {/* Sol: Bitigey Logo & Slogan */}
      <div className="flex items-center space-x-3">
        <div className="flex items-center space-x-2.5 bg-gradient-to-r from-amber-500/20 via-gold-500/15 to-transparent border border-amber-500/30 px-3 py-1.5 rounded-xl shadow-sm">
          <div className="w-5 h-5 rounded-md bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center text-black font-extrabold text-xs">
            B
          </div>
          <span className="font-serif-title font-bold text-sm tracking-widest text-amber-300">
            BİTİGEY <span className="text-white font-sans font-extrabold text-xs">STUDIO</span>
          </span>
          <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">
            v2.0 AI
          </span>
        </div>
      </div>

      {/* Orta: Cihaz Önizleme Seçici */}
      <div className="flex items-center space-x-1 bg-black/50 p-1 rounded-xl border border-white/5">
        <button
          onClick={() => onChangeDeviceMode('desktop')}
          className={`flex items-center space-x-1.5 px-3 py-1 rounded-lg text-xs transition ${
            deviceMode === 'desktop' ? 'bg-amber-500 text-black font-bold shadow-md' : 'text-slate-400 hover:text-white'
          }`}
        >
          <Monitor className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">{t.desktop}</span>
        </button>

        <button
          onClick={() => onChangeDeviceMode('tablet')}
          className={`flex items-center space-x-1.5 px-3 py-1 rounded-lg text-xs transition ${
            deviceMode === 'tablet' ? 'bg-amber-500 text-black font-bold shadow-md' : 'text-slate-400 hover:text-white'
          }`}
        >
          <Tablet className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">{t.tablet}</span>
        </button>

        <button
          onClick={() => onChangeDeviceMode('mobile')}
          className={`flex items-center space-x-1.5 px-3 py-1 rounded-lg text-xs transition ${
            deviceMode === 'mobile' ? 'bg-amber-500 text-black font-bold shadow-md' : 'text-slate-400 hover:text-white'
          }`}
        >
          <Smartphone className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">{t.mobile}</span>
        </button>
      </div>

      {/* Sağ: Gemini Butonu, Dil Seçici, Dışa Aktar */}
      <div className="flex items-center space-x-2.5">
        {/* Gemini Canlı Köprü Butonu */}
        <button
          onClick={onOpenGemini}
          className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-600/20 hover:from-cyan-500/30 hover:to-blue-600/30 text-cyan-300 border border-cyan-500/40 text-xs font-bold shadow-sm transition group"
        >
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 group-hover:rotate-12 transition" />
          <span>{t.askGemini}</span>
        </button>

        {/* Dil Seçici (EN, TR, DE) */}
        <div className="flex items-center space-x-1 bg-black/40 border border-white/10 rounded-lg p-0.5 text-xs font-mono">
          <Globe className="w-3.5 h-3.5 text-slate-400 ml-1.5" />
          <button
            onClick={() => onChangeLang('en')}
            className={`px-1.5 py-0.5 rounded transition ${currentLang === 'en' ? 'bg-white/20 text-white font-bold' : 'text-slate-400'}`}
          >
            EN
          </button>
          <button
            onClick={() => onChangeLang('tr')}
            className={`px-1.5 py-0.5 rounded transition ${currentLang === 'tr' ? 'bg-white/20 text-white font-bold' : 'text-slate-400'}`}
          >
            TR
          </button>
          <button
            onClick={() => onChangeLang('de')}
            className={`px-1.5 py-0.5 rounded transition ${currentLang === 'de' ? 'bg-white/20 text-white font-bold' : 'text-slate-400'}`}
          >
            DE
          </button>
        </div>

        {/* Dışa Aktar */}
        <button
          onClick={onOpenExport}
          className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold text-xs shadow-lg shadow-amber-950/40 transition"
        >
          <Download className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">{t.exportSite}</span>
        </button>
      </div>
    </header>
  );
}
