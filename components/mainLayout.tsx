import NavBar from "./navbar";
import Image from "next/image";
import { useEffect, useState } from "react";

type AppLayoutProps = {
  children: React.ReactNode;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export default function MainLayout({ children }: AppLayoutProps) {
  const [showScrollToTopButton, setShowScrollToTopButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setShowScrollToTopButton(true);
      } else {
        setShowScrollToTopButton(false);
      }
    });
  }, []);

  return (
    <div className="h-screen flex flex-col">
      <NavBar />
      <main className="flex-1"> {children}</main>
      {showScrollToTopButton && (
        <div
          className="fixed lg:bottom-10 lg:right-10 bottom-5 right-5 bg-gray-400 px-2 pt-2 pb-1 rounded-full opacity-60 cursor-pointer hover:opacity-80"
          onClick={scrollToTop}
        >
          <Image
            src="/img/arrow_upward.svg"
            height={32}
            width={32}
            alt="scrollToTop"
          />
        </div>
      )}
    </div>
  );
}
