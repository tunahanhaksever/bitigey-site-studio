import React, { useState } from 'react';
import { 
  Sparkles, 
  ExternalLink, 
  Copy, 
  Check, 
  Bot, 
  Send, 
  Wand2, 
  Lightbulb,
  Compass,
  Layers,
  ArrowRight
} from 'lucide-react';

export function GeminiAiPanel({ t, onApplyAiContent }) {
  const [promptInput, setPromptInput] = useState('');
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedResults, setGeneratedResults] = useState([]);

  const quickPrompts = [
    { text: t.prompt1, category: 'Edebi Slogan' },
    { text: t.prompt2, category: 'Hizmet Metinleri' },
    { text: t.prompt3, category: 'Bitigey Manifestosu' },
    { text: t.prompt4, category: 'Renk & Tasarım' }
  ];

  const handleOpenGeminiWeb = (customText) => {
    const textToCopy = customText || promptInput || 'Create a luxury modern website layout and copywriting inspired by Bitigey digital culture.';
    navigator.clipboard.writeText(textToCopy);
    window.open('https://gemini.google.com/', '_blank');
  };

  const handleGenerate = () => {
    if (!promptInput.trim()) return;
    setIsGenerating(true);

    setTimeout(() => {
      let result = {};
      if (promptInput.toLowerCase().includes('slogan') || promptInput.toLowerCase().includes('başlık')) {
        result = {
          type: 'hero',
          title: 'SÖZÜN VE DİJİTAL ESTETİĞİN YENİ ANITI: BİTİGEY',
          subtitle: 'Gelenekten geleceğe uzanan, yapay zeka ile yoğrulmuş edebi üretim ve bağımsız düşünce alanı.'
        };
      } else if (promptInput.toLowerCase().includes('hizmet') || promptInput.toLowerCase().includes('özellik')) {
        result = {
          type: 'features',
          title: 'Geleceğin Dijital Edebiyat Standartları',
          subtitle: 'Bitigey ekosisteminin sunduğu benzersiz yayıncılık ve yaratıcı araçlar.'
        };
      } else {
        result = {
          type: 'quote',
          quoteText: '"Yazı, insanın zamanın akışına bıraktığı en soylu imzadır."',
          author: 'Bitigey AI Co-Pilot'
        };
      }

      setGeneratedResults(prev => [result, ...prev]);
      setIsGenerating(false);
    }, 700);
  };

  return (
    <div className="w-80 bg-[#0b0e17] border-r border-white/10 flex flex-col h-full select-none shrink-0 overflow-y-auto">
      {/* Üst Başlık */}
      <div className="p-3 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="p-1 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-cyan-400 border border-cyan-500/30">
            <Sparkles className="w-4 h-4" />
          </div>
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-200 font-heading">
            {t.tabAi}
          </span>
        </div>
        <span className="text-[10px] bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded font-mono">
          Gemini Pro
        </span>
      </div>

      <div className="p-3 space-y-4">
        {/* Doğrudan Gemini Tarayıcı Köprüsü Kartı */}
        <div className="p-3.5 rounded-xl bg-gradient-to-br from-cyan-950/40 via-[#0e1424] to-blue-950/40 border border-cyan-500/30 shadow-lg space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-white flex items-center space-x-1.5">
              <Bot className="w-4 h-4 text-cyan-400" />
              <span>Google Gemini Web</span>
            </span>
            <span className="text-[10px] bg-cyan-500/20 text-cyan-300 px-1.5 py-0.5 rounded font-mono">
              Canlı Köprü
            </span>
          </div>

          <p className="text-[11px] text-slate-300 leading-relaxed">
            Tek tıkla tarayıcınızda <strong>Google Gemini</strong>'yi açın, hazır promptları kopyalayıp anında lüks içerik üretin.
          </p>

          <button
            onClick={() => handleOpenGeminiWeb()}
            className="w-full flex items-center justify-center space-x-1.5 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold rounded-lg text-xs shadow-md shadow-cyan-950/50 transition"
          >
            <span>{t.openGeminiWeb}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Yapay Zeka İstek Kutusu */}
        <div className="space-y-2 bg-[#121726] p-3 rounded-xl border border-white/5">
          <label className="text-xs font-semibold text-cyan-300 block">
            {t.aiHeading}
          </label>
          <textarea
            rows="3"
            placeholder={t.aiPromptPlaceholder}
            value={promptInput}
            onChange={(e) => setPromptInput(e.target.value)}
            className="w-full bg-black/50 border border-white/10 rounded-lg p-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 resize-none"
          />

          <div className="flex space-x-2">
            <button
              onClick={handleGenerate}
              disabled={isGenerating || !promptInput.trim()}
              className="flex-1 flex items-center justify-center space-x-1.5 py-1.5 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 rounded-lg text-xs font-medium transition disabled:opacity-40"
            >
              <Wand2 className={`w-3.5 h-3.5 ${isGenerating ? 'animate-spin' : ''}`} />
              <span>{t.generateNow}</span>
            </button>
            <button
              onClick={() => handleOpenGeminiWeb(promptInput)}
              className="px-2.5 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-slate-300 hover:text-white transition text-xs"
              title="Gemini'de Aç"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Üretilen AI İçerikler */}
        {generatedResults.length > 0 && (
          <div className="space-y-2">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
              Üretilen Şablonlar
            </span>
            {generatedResults.map((res, i) => (
              <div key={i} className="bg-black/40 border border-cyan-500/30 rounded-lg p-2.5 text-xs space-y-1.5">
                <h5 className="font-bold text-cyan-300">{res.title || res.quoteText}</h5>
                {res.subtitle && <p className="text-[11px] text-slate-400">{res.subtitle}</p>}
                <button
                  onClick={() => onApplyAiContent(res)}
                  className="w-full py-1 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-200 rounded text-[11px] font-medium transition"
                >
                  Bu Metni Siteye Uygula
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Hazır Prompt Şablonları */}
        <div className="space-y-2 bg-[#121726] p-3 rounded-xl border border-white/5">
          <div className="flex items-center space-x-1.5 text-xs font-semibold text-slate-300">
            <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
            <span>{t.geminiFeaturesTitle}</span>
          </div>

          <div className="space-y-2">
            {quickPrompts.map((qp, idx) => (
              <div
                key={idx}
                onClick={() => {
                  setPromptInput(qp.text);
                  handleOpenGeminiWeb(qp.text);
                }}
                className="p-2 bg-black/40 hover:bg-white/5 border border-white/5 hover:border-cyan-500/30 rounded-lg cursor-pointer transition space-y-1 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-cyan-400 font-mono">{qp.category}</span>
                  <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-cyan-300 transition" />
                </div>
                <p className="text-[11px] text-slate-300 leading-snug">
                  {qp.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
