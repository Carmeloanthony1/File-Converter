import { Link } from "react-router-dom";

export default function Footer(){
    const footer_section = [
        {
            title: "Video Converter",
            links: [
                {label: "Mp4 Converter", to: "#"},
                {label: "Video to GIF", to: "#"},
                {label: "MOV to Mp4", to: "#"}
            ],
        },
        {
            title: "Audio Converter",
            links: [
                {label: "Mp3 Converter", to: "#"},
                {label: "Mp4 to Mp3", to: "#"},
            ],
        },
        {
            title: "Image Converter",
            links: [
                {label: "JPG to PDF", to: "#"},
                {label: "PDF to JPG", to: "#"},
                {label: "HEIC to JPG", to: "#"},
                {label: "Image to PDF", to: "#"},
            ],
        },
        {
            title: "Document Converter",
            links: [
                {label: "PDF to WORD", to: "#"},
                {label: "EPUB to PDF", to: "#"},
                {label: "EPUB to MOBI", to: "#"},
                {label: "WORD to PDF", to: "#"},
                {label: "DOCS to PDF", to: "#"},
            ],
        },
    ];
    return (
        <footer className="w-full bg-[#1a1a1a] h-[360px] text-slate-300 text-sm py-10 md:px-16 mt-auto">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-10 border-b border-neutral-700/60">
                    {footer_section.map((section, idx) => (
                        <div key={idx} className="flex flex-col gap-3">
                            <h3 className="text-white font-bold text-base tracking-wide border-b border-neutral-700/40 pb-2">
                                {section.title}
                            </h3>
                            <ul className="flex flex-col gap-2">
                                {section.links.map((link, lIdx) => (
                                    <li key={lIdx}>
                                        <Link to={link.to} className="text-neutral-400 hover:text-white transition-colors block text-sm">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 text-xs text-neutral-400">
                    <div className="flex items-center gap-2">
                        <span className="text-white font-bold text-base tracking-light">File Converter</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}