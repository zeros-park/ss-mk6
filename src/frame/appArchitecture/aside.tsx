import React from "react";
import styled from 'styled-components';
import { IReactFC } from "@/types/global";
import { dcwStyled } from "@/frame/designComponentWrapper";
import AsideContent from "@/content/frameRoot/asideContent";

const Wrapper = styled.section<{ isFlexed: boolean }>`${({ isFlexed }) => dcwStyled(({ layout, colorSet }) => ({
    default: {
        pointerEvents: 'auto',
        position: 'relative',
        width: `${layout.asideLeftSizeOptions.default}px;`,
    },
    simple: (isFlexed === false) ? {} : {
        width: `${layout.asideLeftSizeOptions.simple}px`
    },
    minimal: (isFlexed === false) ? {} : {
        display: 'none'
    },
    lightMode: {
        backgroundColor: colorSet.lightBG
    },
    darkMode: {
        backgroundColor: colorSet.darkBG
    }
}))}`

const Aside: IReactFC<{ isFlexed?: boolean }> = ({ isFlexed = true }) => {
    return (
        <Wrapper isFlexed={isFlexed}>
            <AsideContent isFlexed={isFlexed}></AsideContent>
        </Wrapper>
    );
}

export default Aside;