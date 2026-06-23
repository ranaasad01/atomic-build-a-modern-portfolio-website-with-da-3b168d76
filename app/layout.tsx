import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Rao Muhammad Ali — SQA Engineer",
  description:
    "Portfolio of Rao Muhammad Ali, an SQA Engineer specializing in test automation, quality assurance, and software testing.",
  keywords: ["SQA engineer", "test automation", "quality assurance", "software testing", "Selenium", "Cypress", "portfolio"],
  openGraph: {
    title: "Rao Muhammad Ali — SQA Engineer",
    description: "Portfolio of Rao Muhammad Ali, an SQA Engineer specializing in test automation, quality assurance, and software testing.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Syne:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0a0a0a] text-white antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
