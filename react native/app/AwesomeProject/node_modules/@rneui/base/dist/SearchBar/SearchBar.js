import React from 'react';
import { SearchBarIOS } from './SearchBar-ios';
import { SearchBarAndroid } from './SearchBar-android';
import { SearchBarDefault } from './SearchBar-default';
const SEARCH_BAR_COMPONENTS = {
    ios: SearchBarIOS,
    android: SearchBarAndroid,
    default: SearchBarDefault,
};
export class SearchBar extends React.Component {
    searchBar;
    static defaultProps = {
        platform: 'default',
    };
    focus = () => {
        this.searchBar.focus();
    };
    blur = () => {
        this.searchBar.blur();
    };
    clear = () => {
        this.searchBar.clear();
    };
    cancel = () => {
        this.searchBar?.cancel();
    };
    render() {
        const Component = SEARCH_BAR_COMPONENTS[this.props.platform] || SearchBarDefault;
        return (<Component ref={(ref) => {
                this.searchBar = ref;
            }} {...this.props}/>);
    }
}
