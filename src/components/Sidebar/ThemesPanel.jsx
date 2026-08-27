import React from 'react';
import { Palette, Check, Sparkles } from 'lucide-react';
import { COLOR_THEMES } from '../../data/defaultData';

export function ThemesPanel({ t, activeTheme, onSelectTheme }) {
  return (
    <div className="w-80 bg-[#0b0e17] border-r border-white/10 flex flex-col h-full select-none shrink-0 overflow-y-auto">
      <div className="p-3 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Palette className="w-4 h-4 text-amber-400" />
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-200 font-heading">
            {t.tabThemes}
          </span>
        </div>
      </div>

      <div className="p-3 space-y-3">
        <p className="text-[11px] text-slate-400 leading-relaxed">
          Tüm sitenin renklerini, arka planlarını ve tipografisini 1 tıkla lüks bir temaya dönüştürün:
        </p>

        {COLOR_THEMES.map((theme) => {
          const isSelected = activeTheme.id === theme.id;
          return (
            <div
              key={theme.id}
              onClick={() => onSelectTheme(theme)}
              className={`p-3.5 rounded-xl border cursor-pointer transition space-y-2.5 ${
                isSelected
                  ? 'bg-gradient-to-r from-amber-950/30 to-black border-amber-500/60 shadow-lg shadow-amber-950/20'
                  : 'bg-[#121726] border-white/5 hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-200">{theme.name}</span>
                {isSelected && <Check className="w-4 h-4 text-amber-400" />}
              </div>

              {/* Renk Çubukları */}
              <div className="flex items-center space-x-1.5">
                <div className="w-6 h-6 rounded-full border border-white/20" style={{ backgroundColor: theme.bg }} title="Arka Plan" />
                <div className="w-6 h-6 rounded-full border border-white/20" style={{ backgroundColor: theme.surface }} title="Yüzey" />
                <div className="w-6 h-6 rounded-full border border-white/20" style={{ backgroundColor: theme.card }} title="Kart" />
                <div className="w-6 h-6 rounded-full border border-white/20" style={{ backgroundColor: theme.primary }} title="Vurgu Rengi" />
                <div className="w-6 h-6 rounded-full border border-white/20" style={{ backgroundColor: theme.accent }} title="İkincil Vurgu" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
