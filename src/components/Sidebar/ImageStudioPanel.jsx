import React, { useState, useRef, useEffect } from 'react';
import { 
  Sliders, 
  Crop, 
  Maximize2, 
  Download, 
  Upload, 
  RefreshCw, 
  Sun, 
  Contrast, 
  Sparkles, 
  Layers, 
  Palette, 
  Check, 
  Image as ImageIcon,
  Plus
} from 'lucide-react';

export function ImageStudioPanel({ t, onApplyToActiveSection }) {
  const [imageSrc, setImageSrc] = useState('https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1200&q=80');
  
  // Boyutlandırma
  const [width, setWidth] = useState(1200);
  const [height, setHeight] = useState(675);
  const [aspectRatio, setAspectRatio] = useState('16:9');

  // Renklendirme ve Filtreler (Photoshop / Picsart değerleri)
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(110);
  const [saturate, setSaturate] = useState(120);
  const [hueRotate, setHueRotate] = useState(0);
  const [blur, setBlur] = useState(0);
  const [sepia, setSepia] = useState(0);
  const [grayscale, setGrayscale] = useState(0);
  const [invert, setInvert] = useState(0);
  const [activePreset, setActivePreset] = useState('presetOriginal');

  const canvasRef = useRef(null);
  const fileInputRef = useRef(null);

  // Filtre Stringi
  const getFilterStyle = () => {
    return `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturate}%) hue-rotate(${hueRotate}deg) blur(${blur}px) sepia(${sepia}%) grayscale(${grayscale}%) invert(${invert}%)`;
  };

  // Hazır Filtre Presets
  const applyPreset = (presetName) => {
    setActivePreset(presetName);
    if (presetName === 'presetOriginal') {
      setBrightness(100); setContrast(100); setSaturate(100); setHueRotate(0); setBlur(0); setSepia(0); setGrayscale(0); setInvert(0);
    } else if (presetName === 'presetCyberpunk') {
      setBrightness(115); setContrast(140); setSaturate(180); setHueRotate(190); setBlur(0); setSepia(0); setGrayscale(0); setInvert(0);
    } else if (presetName === 'presetGoldenHour') {
      setBrightness(105); setContrast(115); setSaturate(140); setHueRotate(35); setBlur(0); setSepia(30); setGrayscale(0); setInvert(0);
    } else if (presetName === 'presetNoir') {
      setBrightness(95); setContrast(160); setSaturate(0); setHueRotate(0); setBlur(0); setSepia(0); setGrayscale(100); setInvert(0);
    } else if (presetName === 'presetVintage') {
      setBrightness(90); setContrast(110); setSaturate(85); setHueRotate(15); setBlur(0); setSepia(60); setGrayscale(0); setInvert(0);
    } else if (presetName === 'presetVibrant') {
      setBrightness(110); setContrast(130); setSaturate(200); setHueRotate(0); setBlur(0); setSepia(0); setGrayscale(0); setInvert(0);
    }
  };

  // Dosya Yükleme
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImageSrc(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // En/Boy Oranı Değiştirme
  const handleAspectChange = (ratio) => {
    setAspectRatio(ratio);
    if (ratio === '16:9') { setWidth(1200); setHeight(675); }
    else if (ratio === '4:3') { setWidth(1200); setHeight(900); }
    else if (ratio === '1:1') { setWidth(800); setHeight(800); }
    else if (ratio === '9:16') { setWidth(675); setHeight(1200); }
  };

  // Görseli İndir (Canvas Render)
  const handleDownload = () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = imageSrc;
    img.onload = () => {
      canvas.width = width;
      canvas.height = height;
      ctx.filter = getFilterStyle();
      ctx.drawImage(img, 0, 0, width, height);
      const link = document.createElement('a');
      link.download = 'bitigey-edited-photo.jpg';
      link.href = canvas.toDataURL('image/jpeg', 0.95);
      link.click();
    };
  };

  return (
    <div className="w-80 bg-[#0b0e17] border-r border-white/10 flex flex-col h-full select-none shrink-0 overflow-y-auto">
      {/* Üst Başlık */}
      <div className="p-3 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Palette className="w-4 h-4 text-amber-400" />
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-200 font-heading">
            {t.imgTitle}
          </span>
        </div>
        <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded font-mono">
          Picsart Engine
        </span>
      </div>

      <div className="p-3 space-y-4">
        {/* Canlı Görsel Önizleme */}
        <div className="space-y-2">
          <div className="relative rounded-xl overflow-hidden border border-amber-500/30 bg-black/60 aspect-video flex items-center justify-center">
            <img
              src={imageSrc}
              alt="Preview"
              className="w-full h-full object-cover transition"
              style={{ filter: getFilterStyle() }}
            />
            <div className="absolute bottom-2 left-2 bg-black/70 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-mono text-amber-300 border border-white/10">
              {width} × {height} px ({aspectRatio})
            </div>
          </div>

          <div className="flex space-x-2">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              accept="image/*"
              className="hidden"
            />
            <button
              onClick={() => fileInputRef.current.click()}
              className="flex-1 flex items-center justify-center space-x-1.5 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs font-medium text-slate-200 transition"
            >
              <Upload className="w-3.5 h-3.5 text-amber-400" />
              <span>{t.uploadPhoto}</span>
            </button>

            <button
              onClick={() => applyPreset('presetOriginal')}
              className="p-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-slate-400 hover:text-white transition"
              title="Filtreleri Sıfırla"
            >
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 1. Boyutlandırma & Oranlar */}
        <div className="space-y-2 bg-[#121726] p-3 rounded-xl border border-white/5">
          <div className="flex items-center space-x-1.5 text-xs font-semibold text-amber-300">
            <Crop className="w-3.5 h-3.5" />
            <span>{t.aspectRatio} & Boyutlandırma</span>
          </div>

          <div className="grid grid-cols-4 gap-1.5 text-center">
            {['16:9', '4:3', '1:1', '9:16'].map(r => (
              <button
                key={r}
                onClick={() => handleAspectChange(r)}
                className={`py-1 rounded text-[11px] font-mono transition ${
                  aspectRatio === r
                    ? 'bg-amber-500 text-black font-bold'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10'
                }`}
              >
                {r}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs pt-1">
            <div>
              <label className="text-[10px] text-slate-400 block mb-0.5">{t.width}</label>
              <input
                type="number"
                value={width}
                onChange={(e) => setWidth(Number(e.target.value))}
                className="w-full bg-black/50 border border-white/10 rounded px-2 py-1 text-xs text-white font-mono"
              />
            </div>
            <div>
              <label className="text-[10px] text-slate-400 block mb-0.5">{t.height}</label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
                className="w-full bg-black/50 border border-white/10 rounded px-2 py-1 text-xs text-white font-mono"
              />
            </div>
          </div>
        </div>

        {/* 2. Hazır Photoshop & Instagram Filtreleri */}
        <div className="space-y-2 bg-[#121726] p-3 rounded-xl border border-white/5">
          <div className="flex items-center space-x-1.5 text-xs font-semibold text-amber-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.filters}</span>
          </div>

          <div className="grid grid-cols-3 gap-1.5">
            {[
              { id: 'presetOriginal', name: t.presetOriginal },
              { id: 'presetGoldenHour', name: t.presetGoldenHour },
              { id: 'presetCyberpunk', name: t.presetCyberpunk },
              { id: 'presetNoir', name: t.presetNoir },
              { id: 'presetVintage', name: t.presetVintage },
              { id: 'presetVibrant', name: t.presetVibrant }
            ].map(p => (
              <button
                key={p.id}
                onClick={() => applyPreset(p.id)}
                className={`p-1.5 rounded text-[10px] text-center truncate transition ${
                  activePreset === p.id
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold'
                    : 'bg-black/40 text-slate-400 hover:text-white border border-transparent'
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>
        </div>

        {/* 3. İnce Renklendirme Ayarları (Sliders) */}
        <div className="space-y-3 bg-[#121726] p-3 rounded-xl border border-white/5">
          <div className="flex items-center space-x-1.5 text-xs font-semibold text-amber-300">
            <Sliders className="w-3.5 h-3.5" />
            <span>İnce Renklendirme & Ayar</span>
          </div>

          {/* Parlaklık */}
          <div className="space-y-1">
            <div className="flex justify-between text-[11px] text-slate-300">
              <span>{t.brightness}</span>
              <span className="font-mono text-amber-400">{brightness}%</span>
            </div>
            <input
              type="range"
              min="20"
              max="200"
              value={brightness}
              onChange={(e) => setBrightness(Number(e.target.value))}
              className="w-full"
            />
          </div>

          {/* Kontrast */}
          <div className="space-y-1">
            <div className="flex justify-between text-[11px] text-slate-300">
              <span>{t.contrast}</span>
              <span className="font-mono text-amber-400">{contrast}%</span>
            </div>
            <input
              type="range"
              min="50"
              max="250"
              value={contrast}
              onChange={(e) => setContrast(Number(e.target.value))}
              className="w-full"
            />
          </div>

          {/* Doygunluk */}
          <div className="space-y-1">
            <div className="flex justify-between text-[11px] text-slate-300">
              <span>{t.saturation}</span>
              <span className="font-mono text-amber-400">{saturate}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="300"
              value={saturate}
              onChange={(e) => setSaturate(Number(e.target.value))}
              className="w-full"
            />
          </div>

          {/* Renk Tonu (Hue) */}
          <div className="space-y-1">
            <div className="flex justify-between text-[11px] text-slate-300">
              <span>{t.hueRotate}</span>
              <span className="font-mono text-amber-400">{hueRotate}°</span>
            </div>
            <input
              type="range"
              min="0"
              max="360"
              value={hueRotate}
              onChange={(e) => setHueRotate(Number(e.target.value))}
              className="w-full"
            />
          </div>

          {/* Sepya & Siyah-Beyaz */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            <button
              onClick={() => setSepia(prev => prev > 0 ? 0 : 70)}
              className={`py-1 rounded text-[11px] border transition ${
                sepia > 0 ? 'bg-amber-500/20 text-amber-300 border-amber-500/40' : 'bg-black/30 border-white/5 text-slate-400'
              }`}
            >
              Sepya Modu
            </button>
            <button
              onClick={() => setGrayscale(prev => prev > 0 ? 0 : 100)}
              className={`py-1 rounded text-[11px] border transition ${
                grayscale > 0 ? 'bg-amber-500/20 text-amber-300 border-amber-500/40' : 'bg-black/30 border-white/5 text-slate-400'
              }`}
            >
              Siyah-Beyaz
            </button>
          </div>
        </div>

        {/* Aksiyonlar: İndir / Siteye Ekle */}
        <div className="space-y-2 pt-1">
          <button
            onClick={() => onApplyToActiveSection(imageSrc, getFilterStyle())}
            className="w-full flex items-center justify-center space-x-1.5 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold rounded-lg text-xs shadow-lg shadow-amber-950/40 transition"
          >
            <Plus className="w-4 h-4" />
            <span>{t.insertIntoSite}</span>
          </button>

          <button
            onClick={handleDownload}
            className="w-full flex items-center justify-center space-x-1.5 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs font-medium text-slate-200 transition"
          >
            <Download className="w-3.5 h-3.5 text-amber-400" />
            <span>{t.downloadImage}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
