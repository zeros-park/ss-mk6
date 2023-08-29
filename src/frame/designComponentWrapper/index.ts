import { useSelector } from "react-redux";
import { IRootStore } from "@/store";
import { Ilayout } from "@/store/slice/frameSlice";
import { bgColorSet, colorMode } from "@/store/slice/documentSlice";
import { CSSObject } from 'styled-components';

export interface dcwPropsOnlyLayout {
    layout: Ilayout
}
export interface dcwPropsOnlyColorMode {
    colorMode: colorMode
}
// export interface dcwProps extends dcwPropsOnlyLayout, dcwPropsOnlyColorMode { }

export interface dcwProps {
    layout: Ilayout,
    colorMode: colorMode,
    colorSet: bgColorSet
}

interface cssStyle {
    default?: CSSObject,
    darkMode?: CSSObject,
    lightMode?: CSSObject,
    simple?: CSSObject
    minimal?: CSSObject
}

type dcwStyled = (getDCWstyle: ({ layout, colorMode, colorSet }: dcwProps) => cssStyle) => CSSObject;
export const dcwStyled: dcwStyled = (getDCWstyle) => {
    const layout = useSelector((state: IRootStore) => state.frame.layout);
    const colorMode = useSelector((state: IRootStore) => state.document.colorMode);
    const colorSet = useSelector((state: IRootStore) => state.document.colorSet);

    return dcwStyledTransfomer(getDCWstyle({ layout, colorMode, colorSet }))
}

const dcwStyledTransfomer = (cssStyle: cssStyle) => {
    const layout = useSelector((state: IRootStore) => state.frame.layout);
    const asideCustomize = useSelector((state: IRootStore) => state.frame.asideCustomize);
    const colorMode = useSelector((state: IRootStore) => state.document.colorMode);

    const expendedStyle = layout ? {
        [`@media screen and (max-width: ${layout.mediaWidthOptions.simple}px)`]: cssStyle.simple || {},
        [`@media screen and (max-width: ${layout.mediaWidthOptions.minimal}px)`]: cssStyle.minimal || {},
    } : {}

    let colorModeStyle = {};
    if (colorMode === 'dark') {
        colorModeStyle = cssStyle.darkMode || {}
    } else if (colorMode === 'light') {
        colorModeStyle = cssStyle.lightMode || {}
    } else {
        colorModeStyle = layout ? {
            [`@media (prefers-color-scheme: dark)`]: cssStyle.darkMode || {},
            [`@media (prefers-color-scheme: light)`]: cssStyle.lightMode || {},
        } : {}
    }

    const cssUserCustomize = (asideCustomize === false) ? {} : (cssStyle.simple);

    return {
        ...(cssStyle.default || {}),
        ...cssUserCustomize,
        ...expendedStyle,
        ...colorModeStyle
    }
    // return {
    //     ...(cssStyle.default || {}),
    //     ...expendedStyle,
    //     ...colorModeStyle
    // }
}