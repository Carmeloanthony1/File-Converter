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
        <footer className="w-full bg-[#1a1a1a] min-h-[360px] text-slate-300 text-sm py-10 md:px-16 mt-auto">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-10 border-b border-neutral-700/60">
                    {footer_section.map((section, idx) => (
                        <div key={idx} className="flex flex-col gap-3">
                            <h3 className="text-white font-bold text-base text-center tracking-wide border-b border-neutral-700/40 pb-2">
                                {section.title}
                            </h3>
                            <ul className="flex flex-col text-center gap-2">
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
                    <div className="flex items-center gap-2 flex-col">
                        <span className="text-white font-bold text-base tracking-light">File Converter</span>
                        <span className="text-white text-base tracking-light">Wanna connect? checkout my social media</span>
                        <div className="flex items-center flex-row gap-2">
                        <a href="https://instagram.com" target="_blank" className="bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors group">
                            <svg className = "w-12 h-12 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                <path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z"/>
                            </svg>
                        </a>    
                        <a href="https://github.com/Carmeloanthony1" target="_blank" className="bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors group">
                            <svg className = "w-12 h-12 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                <path d="M480 96C515.3 96 544 124.7 544 160L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 160C96 124.7 124.7 96 160 96L480 96zM319.7 160C231.3 160 160 232.2 160 320.6C160 390 204.1 447.5 263.4 469C271.8 472.1 280 466.5 280 458.1L280 433.1C275.6 435 270 436.2 265 436.2C244.4 436.2 232.2 425 223.4 404C220 395.6 216.2 390.6 209 389.6C205.3 389.3 204 387.7 204 385.8C204 382.1 210.2 379.2 216.5 379.2C225.6 379.2 233.4 384.8 241.5 396.4C247.7 405.5 254.3 409.5 262.1 409.5C269.9 409.5 274.9 406.7 282.1 399.5C287.4 394.2 291.5 389.5 295.2 386.4C253.9 381.4 224.9 351.7 224.9 313.3C224.9 297.7 230.5 280.8 239.9 269.5C235.8 259.2 236.5 237.3 241.1 228.3C253.6 226.7 270.5 233.3 280.5 242.4C292.4 238.7 304.9 236.8 320.2 236.8C335.5 236.8 348 238.7 359.3 242.1C369 233.3 386.2 226.8 398.7 228.3C403.1 236.7 403.7 258.6 399.6 269.2C409.6 281.1 414.9 297 414.9 313.3C414.9 351.7 385.8 380.8 344 386.1C354.6 393 361.8 408 361.8 425.2L361.8 457.7C361.8 467.1 369.6 472.4 379 468.6C435.6 447 479.9 390.5 479.9 320.5C479.9 232.1 408 159.9 319.6 159.9z"/>
                            </svg>
                        </a>    
                        <a href="https://threads.net" target="_blank" className="bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors group">
                            <svg className = "w-12 h-12 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                <path d="M480 96C515.3 96 544 124.7 544 160L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 160C96 124.7 124.7 96 160 96L480 96zM333.8 160.3C234.8 160.3 167.5 230.5 167.5 332.4C167.5 425.6 233.4 479.7 312 479.7C376.9 479.7 442.6 441.8 442.6 377C442.6 343.1 423.2 320.7 395.1 308C394.7 261.6 369.5 233.7 327.1 233.7C298.8 233.7 274.9 246.5 262.4 267L289.8 286C296.9 274.8 306.7 265.5 324.8 265.5C345.1 265.5 355.6 276.8 358.6 297.8C348.8 296.3 339 295.5 328.8 295.5C273.9 295.5 248.1 320.3 248 353.2C247.9 386.1 273.8 406.3 311.9 406.3C353.7 406.3 378.6 378.1 388.9 343.3C399.5 348.1 406.8 359.3 406.8 376.2C406.8 421.3 354.8 445.8 310.7 445.8C245.7 445.8 203.2 403.1 203.2 333.7C203.2 248.6 259.4 194.1 334.9 194.1C385.6 194.1 410.7 216.3 427.7 246.2L455.7 226.6C437.2 187.9 395.8 160.3 333.7 160.3zM331.8 327.5C340.8 327.5 349.6 328.1 357.5 329.8C351.9 355.4 335.3 372.6 310.8 372.6C296.5 372.6 283.9 365.8 283.9 353.3C283.9 333.6 308.1 327.6 331.9 327.6z"/>
                            </svg>
                        </a>    
                        <a href="https://threads.net" target="_blank" className="bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors group">
                            <svg className = "w-12 h-12 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                    <path d="M112 128C85.5 128 64 149.5 64 176C64 191.1 71.1 205.3 83.2 214.4L291.2 370.4C308.3 383.2 331.7 383.2 348.8 370.4L556.8 214.4C568.9 205.3 576 191.1 576 176C576 149.5 554.5 128 528 128L112 128zM64 260L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 260L377.6 408.8C343.5 434.4 296.5 434.4 262.4 408.8L64 260z"/>
                            </svg>
                        </a>    
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}