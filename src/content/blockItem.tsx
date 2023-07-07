import { IReactFC } from "@/types/global";
import React from "react";
import styled from 'styled-components';

const Layout = styled.div`
    background-color: #e1e1f9;
    padding: 10px 10px 10px 10px;
`

const Item = styled.div`
    background-color: #e0fffa;
    height: 50px;
    padding: 5px 5px 5px 5px;
    border: 1px solid;
`

const BlockItem: IReactFC<{
    item?: object,
    text: string,
}> = ({ item, text, children }) => {
    if (item !== undefined) {
        console.log('item: ', item);
    }

    return (
        <Layout>
            <Item>
                <div>{text}</div>
                {children}
            </Item>
        </Layout>

    );
}

export default BlockItem;