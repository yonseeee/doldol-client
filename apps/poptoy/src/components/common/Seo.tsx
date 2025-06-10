import { ColorPalette } from '@ui/theme';
import {
  NextSeo,
  ProductJsonLd,
  ProductJsonLdProps,
  WebPageJsonLd,
} from 'next-seo';
import { DefaultSeoProps, OpenGraphMedia } from 'next-seo/lib/types';
import { IS_DEV, SITE_URI } from 'src/lib/config/env';

const defaultSeoTitle = '시리우스는 집가고 싶다';
export const defaultSeoDescription = `집가고 싶은 KB IT's Your Life 사람들의 마음을 알아보자.`;

export const defaultSeoThumbnail =
  'https://pop-home.wha1eson.co.kr/assets/og.png';

export const DefaultSeoPropsValue: DefaultSeoProps = {
  title: defaultSeoTitle,
  titleTemplate: '%s | 시리우스는 집가고 싶다',
  themeColor: ColorPalette['primary-brand'],
  description: defaultSeoDescription,
  canonical: SITE_URI,
  openGraph: {
    url: SITE_URI,
    type: 'website',
    title: '시리우스는 집가고 싶다 | 시리우스',
    description: defaultSeoDescription,
    images: [
      {
        url: defaultSeoThumbnail,
        alt: '시리우스는 집가고 싶다 | 시리우스',
      },
    ],
    locale: 'ko_KR',
    siteName: '시리우스',
  },
};

export const JsonLdPublisher = {
  name: '시리우스는 집가고 싶다',
  logo: {
    url: 'https://pop-home.wha1eson.co.kr/assets/og.png',
  },
  keywords:
    "집가고 싶다 KB IT's Your Life, 시리우스, KB국민은행, KB금융그룹, IT, 금융, 사람들, 마음, 공감",
  slogan: '시리우스는 집가고 싶다',
};

export interface SeoProps {
  path?: string;
  title?: string;
  description?: string;
  thumbnail?: OpenGraphMedia;
  product?: ProductJsonLdProps;
  noRobots?: boolean;
  jsonLdType?: 'webpage' | 'product';
}

export const sliceTextForSeo = (text: string, limit?: number) =>
  text.slice(0, limit ?? 60);

const Seo = ({
  jsonLdType,
  path = '',
  thumbnail,
  noRobots = IS_DEV ? true : false,
  product,
  ...props
}: SeoProps) => {
  const siteUrl = `${SITE_URI}/${path}`;
  const title = props.title || defaultSeoTitle;
  const description = sliceTextForSeo(
    props.description || defaultSeoDescription,
    150
  );

  return (
    <>
      <NextSeo
        {...DefaultSeoPropsValue}
        {...props}
        canonical={siteUrl}
        openGraph={{
          ...DefaultSeoPropsValue.openGraph,
          ...(thumbnail && { images: [thumbnail] }),
          title: `${title} | 시리우스`,
          description,
          type: 'platform',
          url: siteUrl,
        }}
        noindex={noRobots}
        nofollow={noRobots}
      />
      {/* landing, market */}
      {!noRobots && jsonLdType == 'webpage' && (
        <WebPageJsonLd
          id={siteUrl}
          description={`[${title}] ${description}`}
          thumbnailUrl={defaultSeoThumbnail}
          publisher={JsonLdPublisher}
        />
      )}
      {/* market detail */}
      {!noRobots && jsonLdType == 'product' && product && (
        <ProductJsonLd productName={product.productName} />
      )}
    </>
  );
};

export default Seo;
