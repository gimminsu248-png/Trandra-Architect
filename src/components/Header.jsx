import React from 'react';
import { Share2, Globe, Github } from 'lucide-react';

const handleShare = async () => {
    const shareData = {
        title: document.title,
        text: 'Trandra Architect - AI-Powered Pine Script Generator & Indicator Wiki',
        url: window.location.href,
    };

    try {
        if (navigator.share) {
            await navigator.share(shareData);
        } else {
            await navigator.clipboard.writeText(window.location.href);
            alert(lang === 'KR' ? '링크가 클립보드에 복사되었습니다!' : 'Link copied to clipboard!');
        }
    } catch (err) {
        console.error('Error sharing:', err);
    }
};

return (
    <header className="h-16 border-b border-border bg-surface flex items-center justify-between px-6 sticky top-0 z-50">
        <div
            onClick={onLogoClick}
            className="flex items-center gap-3 cursor-pointer group transition-all"
        >
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <Share2 className="text-white w-5 h-5" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-white to-text-secondary bg-clip-text text-transparent group-hover:from-primary group-hover:to-white transition-all">
                Trandra Architect
            </h1>
        </div>

        <div className="flex items-center gap-4">
            <button
                onClick={handleShare}
                className="p-2 rounded-md bg-secondary hover:bg-opacity-80 transition-all border border-border text-text-secondary hover:text-white"
                title={lang === 'KR' ? '공유하기' : 'Share'}
            >
                <Share2 className="w-4 h-4" />
            </button>
            <button
                onClick={() => setLang(lang === 'KR' ? 'EN' : 'KR')}
                className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary hover:bg-opacity-80 transition-all border border-border text-sm font-medium"
            >
                <Globe className="w-4 h-4" />
                <span>{lang}</span>
            </button>
            <a
                href="https://github.com/gimminsu248-png/Trandra-Architect"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-white transition-colors"
            >
                <Github className="w-6 h-6" />
            </a>
        </div>
    </header>
);
};

export default Header;
