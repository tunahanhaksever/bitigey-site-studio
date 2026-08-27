import React from 'react';
import { Download, X, Code, FileText, CheckCircle2 } from 'lucide-react';

export function ExportModal({ isOpen, onClose, sections, activeTheme }) {
  if (!isOpen) return null;

  const generateFullHtml = () => {
    return `<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bitigey Site Studio Export</title>
    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700;800&family=Inter:wght@300;400;600;700&family=Outfit:wght@600;800&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg-color: ${activeTheme.bg};
            --text-color: ${activeTheme.text};
            --primary-color: ${activeTheme.primary};
            --card-bg: ${activeTheme.card};
            --border-color: ${activeTheme.border};
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
            background-color: var(--bg-color);
            color: var(--text-color);
            font-family: 'Inter', sans-serif;
            line-height: 1.6;
        }
        .container { max-width: 1100px; margin: 0 auto; padding: 0 20px; }
        .hero { text-align: center; padding: 80px 20px; }
        .hero h1 { font-family: 'Cinzel', serif; font-size: 2.8rem; margin-bottom: 20px; color: var(--primary-color); }
        .hero p { font-size: 1.1rem; max-width: 700px; margin: 0 auto 30px; opacity: 0.9; }
        .btn { display: inline-block; padding: 12px 30px; background: var(--primary-color); color: #000; font-weight: bold; border-radius: 50px; text-decoration: none; }
        .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; padding: 60px 0; }
        .card { background: var(--card-bg); border: 1px solid var(--border-color); padding: 30px; border-radius: 16px; }
        .footer { text-align: center; padding: 40px 20px; border-top: 1px solid var(--border-color); font-size: 0.85rem; opacity: 0.7; }
    </style>
</head>
<body>
    <div class="container">
        <!-- Generated with Bitigey Site Studio by Tunahan Haksever -->
        ${sections.map(sec => `
        <section class="section-${sec.type}">
            ${sec.title ? `<h2>${sec.title}</h2>` : ''}
            ${sec.subtitle ? `<p>${sec.subtitle}</p>` : ''}
            ${sec.quoteText ? `<blockquote>${sec.quoteText}</blockquote>` : ''}
        </section>
        `).join('\n')}
    </div>
</body>
</html>`;
  };

  const handleDownload = () => {
    const html = generateFullHtml();
    const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'bitigey-luxury-website.html';
    a.click();
    URL.revokeObjectURL(url);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fade-in">
      <div className="bg-[#111624] border border-white/10 rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden text-slate-200">
        <div className="p-4 border-b border-white/10 flex items-center justify-between bg-[#0e1320]">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
              <Download className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-base text-white">
                Web Sitenizi Dışa Aktarın
              </h3>
              <p className="text-xs text-slate-400">
                1 tıkla bağımsız ve her yerde çalışan saf HTML5/CSS3 kodu
              </p>
            </div>
          </div>
          <button onClick={onClose} className="p-1.5 text-slate-400 hover:text-white rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 space-y-4">
          <div 
            onClick={handleDownload}
            className="bg-gradient-to-r from-amber-950/40 to-black border border-amber-500/40 hover:border-amber-400 p-4 rounded-xl cursor-pointer transition space-y-2 group shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Code className="w-5 h-5 text-amber-400" />
                <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition">
                  Tek Dosya Web Sitesi (.html) Olarak İndir
                </h4>
              </div>
              <span className="text-[10px] bg-amber-500/20 text-amber-300 font-mono px-2 py-0.5 rounded">
                Önerilen ⚡
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Tüm stilleri, fontları ve içerikleri tek bir hafif HTML dosyasında paketler. Doğrudan herhangi bir hostinge (Vercel, Netlify, cPanel) yükleyebilirsiniz.
            </p>
          </div>
        </div>

        <div className="p-4 border-t border-white/10 bg-[#0e1320] flex items-center justify-between text-xs text-slate-400">
          <span>Bitigey Ekosistemi • <strong>Tunahan Haksever</strong></span>
          <button onClick={onClose} className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white transition">
            Kapat
          </button>
        </div>
      </div>
    </div>
  );
}
