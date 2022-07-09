/// <reference types="react" />
import { CardProps } from '@rneui/base/dist/Card/Card';
import { CardDividerProps } from '@rneui/base/dist/Card/Card.Divider';
import { CardImageProps } from '@rneui/base/dist/Card/Card.Image';
import { CardTitleProps } from '@rneui/base/dist/Card/Card.Title';
import { CardFeaturedSubtitleProps } from '@rneui/base/dist/Card';
import { CardFeaturedTitleProps } from '@rneui/base/dist/Card';
declare const ThemedCard: (import("react").FunctionComponent<CardProps & {
    theme?: {
        colors: import("@rneui/base/dist/helpers/colors").Colors;
    };
}> | import("react").ForwardRefExoticComponent<CardProps & {
    theme?: {
        colors: import("@rneui/base/dist/helpers/colors").Colors;
    };
}>) & {
    Divider: import("react").FunctionComponent<CardDividerProps> | import("react").ForwardRefExoticComponent<CardDividerProps>;
    Image: import("react").FunctionComponent<CardImageProps> | import("react").ForwardRefExoticComponent<CardImageProps>;
    Title: import("react").FunctionComponent<CardTitleProps> | import("react").ForwardRefExoticComponent<CardTitleProps>;
    FeaturedTitle: import("react").FunctionComponent<CardFeaturedTitleProps & {
        theme?: {
            colors: import("@rneui/base/dist/helpers/colors").Colors;
        };
    }> | import("react").ForwardRefExoticComponent<CardFeaturedTitleProps & {
        theme?: {
            colors: import("@rneui/base/dist/helpers/colors").Colors;
        };
    }>;
    FeaturedSubtitle: import("react").FunctionComponent<CardFeaturedSubtitleProps & {
        theme?: {
            colors: import("@rneui/base/dist/helpers/colors").Colors;
        };
    }> | import("react").ForwardRefExoticComponent<CardFeaturedSubtitleProps & {
        theme?: {
            colors: import("@rneui/base/dist/helpers/colors").Colors;
        };
    }>;
};
export default ThemedCard;
export type { CardProps, CardDividerProps, CardFeaturedSubtitleProps, CardFeaturedTitleProps, CardImageProps, };
