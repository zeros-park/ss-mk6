import React from "react";
import styled from 'styled-components';
import CounterTestItem from "@/content/test-counter";

const Wrapper = styled.div`
    ${props => (`
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: ${props.layout.headerHeightSize}px;
        z-index: 200;
        background-color: #beb9c8;
        overflow-x: auto;
    `)}
`

const Content = styled.section`
    ${props => (`
        position: relative;
        margin-left: ${props.layout.asideLeftSizeOptions.default}px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100%;
    `)}
`
const FlexArea = styled.div`
`
const Item = styled.span`
    padding: 5px 5px 5px 5px;
    margin: 5px 5px 5px 5px;
    background: #ffffff;
`
const Header = ({ layoutOptions }) => {
    return (
        <Wrapper layout={layoutOptions}>
            <Content layout={layoutOptions}>
                <FlexArea>
                    {/* <Item>
                        <input type='text' placeholder='검색창'></input>
                        
                    </Item> */}
                    <CounterTestItem></CounterTestItem>
                </FlexArea>
                <FlexArea>
                    <Item>
                        <span>Auth</span>
                    </Item>
                </FlexArea>
            </Content>    
        </Wrapper>
    );
}

export default Header;