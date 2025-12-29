import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export const SEOHead = ({
  title = 'Domcy Coffee - Authentic Food & Coffee',
  description = 'Tempat nongkrong asik di Banyuwangi. Nikmati Nasi Tempong pedas nendang dan Kopi Authentic. Live Music setiap Sabtu!',
  image = '/domcy-logo.png',
  url = 'https://domcycoffee.com',
}: SEOHeadProps) => {
  const fullTitle = title.includes('Domcy') ? title : `${title} | Domcy Coffee`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Theme Color */}
      <meta name="theme-color" content="#003D2E" />
    </Helmet>
  );
};
