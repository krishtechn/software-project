/// <reference types="react" />
import { TabProps } from '@rneui/base/dist/Tab/Tab';
import { TabItemProps } from '@rneui/base/dist/Tab/Tab.Item';
export type { TabProps, TabItemProps };
export declare const ThemedTab: (import("react").FunctionComponent<TabProps & {
    theme?: {
        colors: import("@rneui/base/dist/helpers/colors").Colors;
    };
}> | import("react").ForwardRefExoticComponent<TabProps & {
    theme?: {
        colors: import("@rneui/base/dist/helpers/colors").Colors;
    };
}>) & {
    Item: import("react").FunctionComponent<TabItemProps> | import("react").ForwardRefExoticComponent<TabItemProps>;
};
export default ThemedTab;
