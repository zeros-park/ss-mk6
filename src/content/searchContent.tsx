import { IReactFC } from "@/types/global";
import React from "react";
import styled from 'styled-components';


const Item = styled.span`${() => ({
    marginLeft: '20px',

})}`

const Fieldset = styled.fieldset`${() => ({
    marginLeft: '20px',

})}`

const SearchContent: IReactFC = () => {

    return (
        <Item>
            {/* <input type='text' /> */}
            <Fieldset></Fieldset>
            <button>검색</button>
        </Item>

    );
}

export default SearchContent;