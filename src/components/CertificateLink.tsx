"use client";

import { useState } from "react";

interface CertificateItem {
  label: string;
  href: string;
}

export default function CertificateLink({
  href,
  certificates,
  children,
  className,
}: {
  href?: string;
  certificates?: CertificateItem[];
  children: React.ReactNode;
  className?: string;
}) {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  const handleClick = () => {
    if (href) {
      setPdfUrl(href);
    }
  };

  return (
    <>
      {certificates ? (
        <span className="relative group/cert inline-block">
          <button className={`${className} cursor-pointer`}>
            {children}
          </button>
          <span className="absolute left-0 top-full pt-1 hidden group-hover/cert:flex flex-col z-10">
            <span className="bg-white border border-gray-200 rounded-lg shadow-lg min-w-40 overflow-hidden">
              {certificates.map((cert) => (
                <button
                  key={cert.href}
                  onClick={() => setPdfUrl(cert.href)}
                  className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  {cert.label}
                </button>
              ))}
            </span>
          </span>
        </span>
      ) : (
        <button onClick={handleClick} className={`${className} cursor-pointer`}>
          {children}
        </button>
      )}

      {pdfUrl && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={() => setPdfUrl(null)}
        >
          <div
            className="relative w-[90vw] h-[85vh] max-w-4xl bg-white rounded-xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPdfUrl(null)}
              className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-600"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <iframe
              src={pdfUrl}
              className="w-full h-full"
              title="Certificate"
            />
          </div>
        </div>
      )}
    </>
  );
}
