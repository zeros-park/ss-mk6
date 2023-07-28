import React from "react";
import styled from 'styled-components';
import { IReactFC } from '@/types/global';
import { IStateLayout } from "@/store/slice/frameSlice";
import { useSelector } from "react-redux";
import { IRootStore } from "@/store";
////////////////////////////
// Style
////////////////////////////
const Wrapper = styled.section<IStateLayout>`${props => ({
    backgroundColor: 'green',
    position: 'absolute',
    top: 0,
    left: 0,
    width: `${props.layout.asideLeftSizeOptions.default}px`,
    height: `${props.layout.headerHeightSize}px`,
    [`@media (prefers-color-scheme: dark)`]: {
        backgroundColor: 'yellow'
    },
})}`

const Content = styled.div`
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
`

////////////////////////////
// TSX
////////////////////////////
const Logo: IReactFC = ({ children }) => {
    const layout = useSelector((state: IRootStore) => state.layout.layout);
    console.log('zeros logo draw!!!')
    return (
        <Wrapper layout={layout}>
            <Content>
                {children}
            </Content>
        </Wrapper>
    );
}

export default Logo;