import "../styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import MainLayout from "../components/mainLayout";
import { DefaultSeo } from "next-seo";

const DEFAULT_SEO = {
  title: "BarBamBar",
  description: "대한민국 영등포 바밤바",
  canonical: "https://www.barbambar.kr/",
  keywords: "바, 위스키, 칵테일, 영등포",

  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://www.barbambar.kr/",
    site_name: "BarBamBar",
  },
  twitter: {
    handle: "@handle",
    site: "@site",
    cardType: "summary_large_image",
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <DefaultSeo {...DEFAULT_SEO} />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </RecoilRoot>
  );
}

export default MyApp;
