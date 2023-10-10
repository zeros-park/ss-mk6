import { dcwStyled } from "@/frame/designComponentWrapper";
import { IReactFC } from "@/types/global";
import Router from "next/router";
import React, { KeyboardEventHandler, useState } from "react";
import styled from 'styled-components';


const Content = styled.div`${() => dcwStyled(({ colorSet }) => ({
    default: {
        width: '100%',
        maxWidth: '550px',
        margin: '0 30px 0 50px'
    },
    minimal: {
        width: 'auto',
        margin: 0,
    },
    lightMode: {
        backgroundColor: colorSet.lightBG,
    },
    darkMode: {
        backgroundColor: colorSet.darkBG,
    }
}))}`
const Item = styled.div`${() => dcwStyled(() => ({
    default: {
        display: 'flex',
        alignItems: 'center',
    },
}))}`
const ItemLayer = styled.div`${() => dcwStyled(() => ({
    default: {
        height: 0,
    },
    minimal: {
        display: 'none'
    }
}))}`

const SearchInput = styled.input`${() => dcwStyled(() => ({
    default: {
        width: '100%',
        height: '30px',
    },
}))}`
const SearchInputWrapper = styled.div`${() => dcwStyled(() => ({
    default: {
        margin: '0 0 0 10px',
        flexGrow: 1
    },
    minimal: {
        display: 'none'
    }
}))}`
const AutoCompLayer = styled.div`${() => dcwStyled(({ colorSet }) => ({
    default: {
        position: 'relative',
        zIndex: 1,
        border: '1px solid red'
    },
    lightMode: {
        backgroundColor: colorSet.lightBG,
    },
    darkMode: {
        backgroundColor: colorSet.darkBG,
    }
}))}`

const SearchContent: IReactFC = () => {
    const [text, setText] = useState('');
    const updateText: KeyboardEventHandler<HTMLInputElement> = (event) => {
        event.preventDefault();
        setText(event.currentTarget.value);
    }

    const goSearchRouter = (text: string) => {
        setText('');
        Router.push(`/search?text=${text}`);
    }

    return (
        <Content>
            <Item>
                <span>검색 </span>
                <SearchInputWrapper>
                    <Item>
                        <SearchInput type='text' value={text} onInput={updateText} />
                        {(text !== '') &&
                            <button>검색</button>
                        }
                    </Item>
                    {(text !== '') &&
                        <ItemLayer>
                            <AutoCompLayer >
                                <div>입력: {text}</div>
                                <div><button onClick={() => goSearchRouter(text)}>1. {text}</button></div>
                                <div><button onClick={() => goSearchRouter(text)}>2. {text}</button></div>
                                <div><button onClick={() => goSearchRouter(text)}>3. {text}</button></div>
                                <div><button onClick={() => goSearchRouter(text)}>4. {text}</button></div>
                                <div><button onClick={() => goSearchRouter(text)}>5. {text}</button></div>
                                <div><button onClick={() => goSearchRouter(text)}>6. {text}</button></div>
                            </AutoCompLayer>
                        </ItemLayer>
                    }
                </SearchInputWrapper>
            </Item>
        </Content>

    );
}

export default SearchContent;