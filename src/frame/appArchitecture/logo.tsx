import React from "react";
import styled from 'styled-components';
import { IReactFC } from '@/types/global';
import { dcwStyled } from "@/frame/designComponentWrapper";
import LogoContent from "@/content/frameRoot/logoContent";
////////////////////////////
// Style
////////////////////////////
const Wrapper = styled.section`${() => dcwStyled(({ layout, colorSet }) => ({
    default: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: `${layout.asideLeftSizeOptions.default}px`,
        height: `${layout.headerHeightSize}px`,
    },
    darkMode: {
        backgroundColor: colorSet.darkBG,
        color: colorSet.darkFont
    },
}))}`

////////////////////////////
// TSX
////////////////////////////
const Logo: IReactFC = ({ children }) => {
    return (
        <Wrapper>
            <LogoContent></LogoContent>
        </Wrapper>
    );
}

export default Logo;