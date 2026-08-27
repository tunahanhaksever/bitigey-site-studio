import React from 'react';
import { 
  Plus, 
  Layers, 
  LayoutTemplate, 
  Sparkles, 
  Image as ImageIcon, 
  Grid, 
  DollarSign, 
  MessageSquareQuote, 
  Mail, 
  PanelBottom 
} from 'lucide-react';

export function BlocksPanel({ t, onAddBlock }) {
  const blockTypes = [
    { type: 'hero', name: t.heroSection, desc: 'Büyük lüks başlık, buton ve kapak görseli', icon: LayoutTemplate },
    { type: 'features', name: t.featuresSection, desc: '3D cam efektli, ışıltılı özellik kartları', icon: Grid },
    { type: 'gallery', name: t.gallerySection, desc: 'Photoshop filtrelenmiş şık fotoğraf galerisi', icon: ImageIcon },
    { type: 'pricing', name: t.pricingSection, desc: 'Seçkin fiyatlandırma ve üyelik tablosu', icon: DollarSign },
    { type: 'quote', name: t.quoteSection, desc: 'Edebi manifesto, alıntı ve yazar imzası', icon: MessageSquareQuote },
    { type: 'contact', name: t.contactSection, desc: 'Cam efektli doğrudan iletişim formu', icon: Mail },
    { type: 'footer', name: t.footerSection, desc: 'Telif ve bağlantı alt bilgisi', icon: PanelBottom }
  ];

  return (
    <div className="w-80 bg-[#0b0e17] border-r border-white/10 flex flex-col h-full select-none shrink-0 overflow-y-auto">
      <div className="p-3 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Layers className="w-4 h-4 text-amber-400" />
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-200 font-heading">
            {t.tabBlocks}
          </span>
        </div>
        <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded font-mono">
          Lüks Bloklar
        </span>
      </div>

      <div className="p-3 space-y-2.5">
        <p className="text-[11px] text-slate-400 leading-relaxed mb-2">
          Sitenize eklemek istediğiniz lüks tasarım bloğuna tıklayın:
        </p>

        {blockTypes.map((block) => {
          const Icon = block.icon;
          return (
            <div
              key={block.type}
              onClick={() => onAddBlock(block.type)}
              className="p-3 rounded-xl bg-[#121726] border border-white/5 hover:border-amber-500/40 cursor-pointer transition space-y-1 group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="p-1.5 rounded-lg bg-black/50 text-amber-400 group-hover:bg-amber-500 group-hover:text-black transition">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-bold text-slate-200 group-hover:text-amber-300 transition">
                    {block.name}
                  </h4>
                </div>
                <Plus className="w-4 h-4 text-slate-500 group-hover:text-amber-400 transition" />
              </div>
              <p className="text-[10px] text-slate-400 pl-8">
                {block.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
