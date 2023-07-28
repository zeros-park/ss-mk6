import React from "react";
import styled from 'styled-components';
import { IReactFC } from "@/types/global";
import { IStateLayout } from "@/store/slice/frameSlice";
import { useSelector } from "react-redux";
import { IRootStore } from "@/store";
import YScrollWrapper from "@/frame/appArchitecture/YScrollWrapper";

const Wrapper = styled.section`${{
    position: "absolute",
    pointerEvents: 'none',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
}}`
const Content = styled.main<IStateLayout>`${({ layout }) => ({
    position: 'relative',
    height: '100%',
    marginLeft: `${layout.asideLeftSizeOptions.default}px`,
    marginTop: `${layout.headerHeightSize}px`,
    [`@media screen and (max-width: ${layout.mediaWidthOptions.simple}px)`]: {
        marginLeft: `${layout.asideLeftSizeOptions.simple}px`
    },
    [`@media screen and (max-width: ${layout.mediaWidthOptions.minimal}px)`]: {
        marginLeft: 0
    }
})}`
const Main: IReactFC = ({ children }) => {
    const layout = useSelector((state: IRootStore) => state.layout.layout);

    return (
        <Wrapper>
            <Content layout={layout}>
                <YScrollWrapper layout={layout}>
                    {children}
                </YScrollWrapper>
            </Content>
        </Wrapper>
    );
}

export default Main;