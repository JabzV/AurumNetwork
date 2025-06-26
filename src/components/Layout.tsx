import { useEffect } from "react";
import { Footer } from "./elements/Footer";
import { Navbar } from "./elements/Navbar";

interface LayoutProps {
  title: string;
  children?: React.ReactNode;
}

export const Layout = ({ title, children }: LayoutProps) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <section id="home" className="w-full min-h-screen bg-body text-white overflow-x-hidden">
      
      <Navbar />
   
      <main className="w-full">{children}</main>
      
      <Footer />
    </section>
  );
};
