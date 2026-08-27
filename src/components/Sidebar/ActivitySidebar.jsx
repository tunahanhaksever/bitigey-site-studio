import React from 'react';
import { 
  Layers, 
  Palette, 
  Sliders, 
  Sparkles, 
  Settings,
  Image as ImageIcon 
} from 'lucide-react';

export function ActivitySidebar({ t, activeTab, setActiveTab }) {
  const tabs = [
    { id: 'blocks', label: t.tabBlocks, icon: Layers },
    { id: 'photos', label: t.tabPhotos, icon: Sliders },
    { id: 'themes', label: t.tabThemes, icon: Palette },
    { id: 'ai', label: t.tabAi, icon: Sparkles }
  ];

  return (
    <aside className="w-16 bg-[#080b12] border-r border-white/10 flex flex-col items-center py-4 select-none z-20 justify-between shrink-0">
      <div className="flex flex-col items-center space-y-3 w-full">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-11 h-11 rounded-2xl flex flex-col items-center justify-center transition-all relative group ${
                isActive
                  ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40 shadow-lg shadow-amber-950/40'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
              title={tab.label}
            >
              <Icon className="w-5 h-5" />
              {isActive && (
                <div className="absolute -left-[1px] w-1 h-5 bg-amber-400 rounded-r"></div>
              )}
            </button>
          );
        })}
      </div>

      <div className="flex flex-col items-center space-y-2">
        <a
          href="https://github.com/tunahanhaksever/bitigey-site-studio"
          target="_blank"
          rel="noreferrer"
          className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/5 transition"
          title="GitHub Repo (tunahanhaksever)"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
        </a>
      </div>
    </aside>
  );
}
