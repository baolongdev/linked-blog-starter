import { DefaultSeoProps } from "next-seo";

const description = "E-Museum là một nền tảng trực tuyến hoặc ứng dụng dành riêng cho việc số hóa và truy cập các tài sản và triển lãm của bảo tàng hoàn toàn miễn phí."
// See https://www.npmjs.com/package/next-seo for more options
const config: DefaultSeoProps = {
  titleTemplate: "%s | E-Museum",
  defaultTitle: "E-Museum | Bảo tàng số",
  canonical: 'https://www.museum.blong12.com/',
  description,
  
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    title: 'E-Museum',
    description,
    url: 'https://www.museum.blong12.com/',
    images: [{
      url: 'https://www.museum.blong12.com/favicon/og-image.png',
      width: 1200,
      height: 787,
      alt: 'Og Image Alt',
    }]
  },
  twitter: {
    site: '@__BLong12__',
    cardType: 'summary_large_image',
  },
  additionalLinkTags: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon/32.png',
      sizes: '32x32'
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon/16.png',
      sizes: '16x16'
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/favicon/180.png"
    },
    {
      rel: "shortcut icon",
      type: "image/png",
      href: "/favicon/196.png"
    },
    {
      rel: "manifest",
      href: "/favicon/site.webmanifest"
    }
  ]
};

export default config;