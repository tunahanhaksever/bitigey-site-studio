import React, { useState } from 'react';
import { Download, X, Code, Copy, Check, Eye } from 'lucide-react';

export function ExportModal({ isOpen, onClose, sections, activeTheme }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const generateFullHtml = () => {
    return `<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Luxury Website — Generated with Bitigey Site Studio</title>
    <meta name="generator" content="Bitigey Site Studio by Tunahan Haksever">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800;900&family=Inter:wght@300;400;500;600;700;800&family=Outfit:wght@400;600;700;800&family=Playfair+Display:ital,wght@0,600;1,400&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg-color: ${activeTheme.bg || '#07090e'};
            --surface-color: ${activeTheme.surface || '#0e121d'};
            --text-color: ${activeTheme.text || '#f8fafc'};
            --text-muted: ${activeTheme.textMuted || '#94a3b8'};
            --primary-color: ${activeTheme.primary || '#f59e0b'};
            --primary-hover: ${activeTheme.primaryHover || '#d97706'};
            --card-bg: ${activeTheme.card || '#131929'};
            --border-color: ${activeTheme.border || 'rgba(245, 158, 11, 0.25)'};
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
            background-color: var(--bg-color);
            color: var(--text-color);
            font-family: 'Inter', sans-serif;
            line-height: 1.6;
            overflow-x: hidden;
        }
        .container { max-width: 1100px; margin: 0 auto; padding: 0 24px; }
        
        /* Hero */
        .hero { text-align: center; padding: 100px 20px 80px; position: relative; }
        .badge { display: inline-block; padding: 6px 16px; border-radius: 9999px; font-size: 0.75rem; font-weight: 700; letter-spacing: 0.1em; background: rgba(245, 158, 11, 0.15); color: var(--primary-color); border: 1px solid var(--border-color); margin-bottom: 24px; }
        .hero h1 { font-family: 'Cinzel', serif; font-size: clamp(2rem, 5vw, 3.5rem); font-weight: 800; line-height: 1.2; margin-bottom: 24px; background: linear-gradient(135deg, #fff 30%, var(--primary-color) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .hero p { font-size: 1.15rem; max-width: 760px; margin: 0 auto 36px; color: var(--text-muted); line-height: 1.7; }
        .btn-primary { display: inline-flex; align-items: center; justify-content: center; padding: 14px 36px; background: var(--primary-color); color: #000; font-weight: 800; border-radius: 9999px; text-decoration: none; transition: transform 0.2s, background-color 0.2s; box-shadow: 0 10px 25px rgba(245, 158, 11, 0.3); border: none; cursor: pointer; font-size: 0.95rem; }
        .btn-primary:hover { background: var(--primary-hover); transform: translateY(-2px); }
        .hero-img { width: 100%; max-height: 480px; object-fit: cover; border-radius: 24px; border: 1px solid var(--border-color); margin-top: 48px; box-shadow: 0 20px 50px rgba(0,0,0,0.5); }
        
        /* Section Header */
        .section-header { text-align: center; margin-bottom: 48px; }
        .section-title { font-family: 'Outfit', sans-serif; font-size: 2rem; font-weight: 800; margin-bottom: 12px; }
        .section-subtitle { color: var(--text-muted); font-size: 0.95rem; max-width: 600px; margin: 0 auto; }
        
        /* Features Grid */
        .grid-3 { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 28px; padding: 60px 0; }
        .card { background: var(--card-bg); border: 1px solid var(--border-color); padding: 32px; border-radius: 20px; transition: transform 0.3s, border-color 0.3s; }
        .card:hover { transform: translateY(-4px); border-color: var(--primary-color); }
        .card-title { font-size: 1.2rem; font-weight: 700; margin-bottom: 12px; }
        .card-desc { color: var(--text-muted); font-size: 0.9rem; line-height: 1.6; }
        
        /* Gallery */
        .gallery-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 20px; padding: 40px 0; }
        .gallery-item { border-radius: 16px; overflow: hidden; border: 1px solid var(--border-color); aspect-ratio: 1; }
        .gallery-item img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s; }
        .gallery-item:hover img { transform: scale(1.06); }
        
        /* Pricing */
        .pricing-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 28px; padding: 40px 0; }
        .pricing-card { background: var(--card-bg); border: 1px solid var(--border-color); padding: 36px 28px; border-radius: 24px; position: relative; display: flex; flex-direction: column; justify-content: space-between; }
        .pricing-card.popular { border-color: var(--primary-color); box-shadow: 0 0 30px rgba(245, 158, 11, 0.2); }
        .pricing-ribbon { position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: var(--primary-color); color: #000; font-size: 0.7rem; font-weight: 800; padding: 4px 12px; border-radius: 9999px; }
        .pricing-price { font-size: 2.2rem; font-weight: 800; color: var(--primary-color); margin: 16px 0; }
        .pricing-features { list-style: none; margin: 20px 0 28px; font-size: 0.88rem; color: var(--text-muted); space-y: 8px; }
        .pricing-features li { padding: 6px 0; border-bottom: 1px solid rgba(255,255,255,0.05); }
        
        /* Quote */
        .quote-section { text-align: center; padding: 80px 20px; max-width: 800px; margin: 0 auto; }
        .quote-text { font-family: 'Playfair Display', serif; font-size: 1.6rem; font-style: italic; line-height: 1.6; color: var(--primary-color); margin-bottom: 24px; }
        .quote-author { font-weight: 700; font-size: 1rem; }
        .quote-role { color: var(--text-muted); font-size: 0.85rem; }
        
        /* CTA Banner */
        .cta-banner { background: linear-gradient(135deg, var(--surface-color), var(--card-bg)); border: 1px solid var(--primary-color); border-radius: 28px; padding: 60px 32px; text-align: center; margin: 60px 0; box-shadow: 0 20px 60px rgba(0,0,0,0.4); }
        
        /* Contact Form */
        .contact-box { max-width: 540px; margin: 40px auto; background: var(--card-bg); border: 1px solid var(--border-color); padding: 36px; border-radius: 24px; }
        .input-group { margin-bottom: 16px; }
        .input-control { width: 100%; padding: 14px 18px; border-radius: 12px; background: rgba(0,0,0,0.4); border: 1px solid rgba(255,255,255,0.1); color: #fff; font-size: 0.9rem; }
        
        /* Footer */
        .footer { border-top: 1px solid var(--border-color); padding: 50px 20px; text-align: center; color: var(--text-muted); font-size: 0.85rem; }
        .footer-brand { font-family: 'Cinzel', serif; font-size: 1.2rem; font-weight: 800; color: var(--primary-color); margin-bottom: 8px; }
    </style>
</head>
<body>
    <div class="container">
        <!-- Built with Bitigey Site Studio by Tunahan Haksever -->
        ${sections.map(sec => {
          if (sec.type === 'hero') {
            return `
        <section class="hero">
            ${sec.badge ? `<div class="badge">${sec.badge}</div>` : ''}
            <h1>${sec.title || ''}</h1>
            <p>${sec.subtitle || ''}</p>
            ${sec.ctaText ? `<a href="${sec.ctaLink || '#'}" class="btn-primary">${sec.ctaText}</a>` : ''}
            ${sec.image ? `<img src="${sec.image}" alt="Hero Image" class="hero-img" />` : ''}
        </section>`;
          }
          if (sec.type === 'features') {
            return `
        <section style="padding: 60px 0;">
            <div class="section-header">
                <h2 class="section-title">${sec.title || ''}</h2>
                <p class="section-subtitle">${sec.subtitle || ''}</p>
            </div>
            <div class="grid-3">
                ${(sec.cards || []).map(card => `
                <div class="card">
                    <h3 class="card-title">${card.title}</h3>
                    <p class="card-desc">${card.description}</p>
                </div>`).join('\n')}
            </div>
        </section>`;
          }
          if (sec.type === 'gallery') {
            return `
        <section style="padding: 60px 0;">
            <div class="section-header">
                <h2 class="section-title">${sec.title || ''}</h2>
                <p class="section-subtitle">${sec.subtitle || ''}</p>
            </div>
            <div class="gallery-grid">
                ${(sec.images || []).map(img => `
                <div class="gallery-item">
                    <img src="${img}" alt="Gallery Image" />
                </div>`).join('\n')}
            </div>
        </section>`;
          }
          if (sec.type === 'pricing') {
            return `
        <section style="padding: 60px 0;">
            <div class="section-header">
                <h2 class="section-title">${sec.title || ''}</h2>
                <p class="section-subtitle">${sec.subtitle || ''}</p>
            </div>
            <div class="pricing-grid">
                ${(sec.plans || []).map(p => `
                <div class="pricing-card ${p.isPopular ? 'popular' : ''}">
                    ${p.isPopular ? `<div class="pricing-ribbon">EN ÇOK TERCİH EDİLEN</div>` : ''}
                    <div>
                        <h3 style="font-size:1.2rem; font-weight:700;">${p.name}</h3>
                        <div class="pricing-price">${p.price} <span style="font-size:0.8rem; color:var(--text-muted);">${p.period}</span></div>
                        <ul class="pricing-features">
                            ${(p.features || []).map(f => `<li>✓ ${f}</li>`).join('')}
                        </ul>
                    </div>
                    <button class="btn-primary" style="width:100%; padding:12px;">Planı Seç</button>
                </div>`).join('\n')}
            </div>
        </section>`;
          }
          if (sec.type === 'cta') {
            return `
        <section class="cta-banner">
            ${sec.badge ? `<div class="badge">${sec.badge}</div>` : ''}
            <h2 style="font-family:'Cinzel', serif; font-size:2.2rem; margin-bottom:16px;">${sec.title || ''}</h2>
            <p style="color:var(--text-muted); max-width:600px; margin:0 auto 28px;">${sec.subtitle || ''}</p>
            <button class="btn-primary">${sec.buttonText || 'Hemen Başlayın'}</button>
        </section>`;
          }
          if (sec.type === 'quote') {
            return `
        <section class="quote-section">
            <blockquote class="quote-text">${sec.quoteText || ''}</blockquote>
            <div class="quote-author">${sec.author || ''}</div>
            <div class="quote-role">${sec.authorRole || ''}</div>
        </section>`;
          }
          if (sec.type === 'contact') {
            return `
        <section style="padding: 60px 0;">
            <div class="section-header">
                <h2 class="section-title">${sec.title || ''}</h2>
                <p class="section-subtitle">${sec.subtitle || ''}</p>
            </div>
            <div class="contact-box">
                <div class="input-group">
                    <input type="email" placeholder="E-posta adresiniz" class="input-control" />
                </div>
                <div class="input-group">
                    <textarea rows="4" placeholder="Mesajınız..." class="input-control" style="resize:none;"></textarea>
                </div>
                <button class="btn-primary" style="width:100%;">${sec.buttonText || 'Mesajı Gönder'}</button>
            </div>
        </section>`;
          }
          if (sec.type === 'footer') {
            return `
        <footer class="footer">
            <div class="footer-brand">${sec.brandName || 'BİTİGEY'}</div>
            <p style="margin-bottom:8px;">${sec.tagline || ''}</p>
            <p style="font-size:0.75rem; opacity:0.6;">${sec.copyright || '© 2026 Bitigey.'}</p>
        </footer>`;
          }
          return '';
        }).join('\n')}
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

  const handleCopy = () => {
    const html = generateFullHtml();
    navigator.clipboard.writeText(html);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePreviewNewTab = () => {
    const html = generateFullHtml();
    const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
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

        <div className="p-5 space-y-3.5">
          <div 
            onClick={handleDownload}
            className="bg-gradient-to-r from-amber-950/40 to-black border border-amber-500/40 hover:border-amber-400 p-4 rounded-xl cursor-pointer transition space-y-1 group shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2.5">
                <Code className="w-5 h-5 text-amber-400" />
                <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition">
                  Tek Dosya Web Sitesi (.html) İndir
                </h4>
              </div>
              <Download className="w-4 h-4 text-amber-400" />
            </div>
            <p className="text-xs text-slate-400 pl-7">
              Sunucu gerektirmez, doğrudan çift tıklayıp tarayıcınızda açın veya herhangi bir hostinge yükleyin.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={handleCopy}
              className="p-3 bg-[#151c2e] hover:bg-[#1a233a] border border-white/10 rounded-xl text-xs font-bold text-white flex items-center justify-center space-x-2 transition"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-400" />}
              <span>{copied ? 'Kopyalandı!' : 'Kodu Kopyala'}</span>
            </button>

            <button
              onClick={handlePreviewNewTab}
              className="p-3 bg-[#151c2e] hover:bg-[#1a233a] border border-white/10 rounded-xl text-xs font-bold text-white flex items-center justify-center space-x-2 transition"
            >
              <Eye className="w-4 h-4 text-cyan-400" />
              <span>Canlı Yeni Sekmede Aç</span>
            </button>
          </div>
        </div>

        <div className="p-3 bg-[#0c0f18] border-t border-white/5 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-white/10 hover:bg-white/20 text-xs font-semibold text-white rounded-lg transition"
          >
            Kapat
          </button>
        </div>
      </div>
    </div>
  );
}
