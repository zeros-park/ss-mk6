import React from "react";
import styled from 'styled-components';
import { IReactFC } from "@/types/global";
import { dcwStyled } from "@/frame/designComponentWrapper";
import AsideContent from "@/content/frameRoot/asideContent";

const Wrapper = styled.section`${() => dcwStyled(({ layout }) => ({
    default: {
        position: 'absolute',
        pointerEvents: 'none',
        top: 0,
        left: 0,
        width: `${layout.asideLeftSizeOptions.default}px;`,
        height: '100%',
    },
    simple: {
        width: `${layout.asideLeftSizeOptions.simple}px`
    },
    minimal: {
        display: 'none'
    },
}))}`

const Aside: IReactFC = () => {
    return (
        <Wrapper>
            <AsideContent></AsideContent>
        </Wrapper>
    );
}

export default Aside;