import { IReactFC } from "@/types/global";
import React, { useEffect, useRef, useState } from "react";
import styled from 'styled-components';
import { dcwStyled } from "@/frame/designComponentWrapper";
import { useDispatch, useSelector } from "react-redux";
import { IRootStore } from "@/store";
import { debounce } from "@/utils/debounce";

const Wrapper = styled.section`${() => dcwStyled(({ layout, colorSet }) => ({
    default: {
        pointerEvents: 'none',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        // zIndex: -1
    },
    darkMode: {
        backgroundColor: colorSet.darkBG,
        color: colorSet.darkFont
    },
}))}`
const Content = styled.div`${() => dcwStyled(({ layout, colorSet }) => ({
    default: {
        pointerEvents: 'auto',
        marginTop: `${layout.headerHeightSize}px`,
        // paddingTop: `${layout.headerHeightSize}px`,
        overflowY: 'auto',
        overflowX: 'hidden'
    },
    // darkMode: {
    //     backgroundColor: colorSet.darkBG,
    //     color: colorSet.darkFont
    // },
}))}`

const FullYScrollWrapper: IReactFC = ({ children }) => {
    return (
        <Wrapper>
            <Content>
                {children}
            </Content>
        </Wrapper>
    );
}

export default FullYScrollWrapper;