import { title } from "framer-motion/client";
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
}