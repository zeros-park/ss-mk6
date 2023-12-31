import { IReactFC } from "@/types/global";
import React from "react";
import styled, { CSSObject } from 'styled-components';
import ToggleButton from "@/frame/appArchitecture/floatingLayer/toggleButton";
import DimdLayerTestItem from "@/content/test-dimdLayer";
import { useDispatch, useSelector } from "react-redux";
import { setColorMode, colorMode } from "@/store/slice/documentSlice";
import { dcwStyled } from "@/frame/designComponentWrapper";
import { IRootStore } from "@/store";
import SearchContent from "@/content/searchContent";

const Content = styled.div`${() => dcwStyled(({ colorSet }) => ({
    default: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%',
    },
    minimal: {
        justifyContent: 'end',
    }
}))}`
const FlexArea = styled.div`${() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
})}
`
const Item = styled.span`${() => ({
    padding: '5px 5px 5px 5px',
    background: '#ffffff'
})}
`
const focused: CSSObject = {
    backgroundColor: 'gray',
    color: 'white'
}

const HeaderContent: IReactFC = () => {
    const colorMode = useSelector((state: IRootStore) => state.document.colorMode)
    const dispacth = useDispatch();
    const updateColorMode = (mode: colorMode) => {
        dispacth(setColorMode(mode))
    }
    const isCheck = (mode: colorMode) => (colorMode === mode)

    return (
        <>
            <Content>
                <FlexArea>
                    <SearchContent></SearchContent>
                </FlexArea>
                <FlexArea>
                    <Item>
                        <ToggleButton
                            text={'test'}
                            options={['center', 'default', true, '중앙/기본']}
                        >
                            <DimdLayerTestItem></DimdLayerTestItem>
                        </ToggleButton>
                    </Item>
                    <Item>
                        <ToggleButton
                            options="center"
                            text={colorMode + '모드'}
                            styledFocus={focused}
                        >
                            <div>
                                <div>
                                    <span>current mode: {colorMode} !!</span>
                                </div>
                                <div>
                                    <input id="light" name="mode" type="radio"
                                        onChange={() => updateColorMode("light")}
                                        checked={isCheck("light")}
                                    />
                                    <label htmlFor="light">라이트 모드</label>
                                </div>
                                <div>
                                    <input id="dark" name="mode" type="radio"
                                        onChange={() => updateColorMode("dark")}
                                        checked={isCheck("dark")}
                                    />
                                    <label htmlFor="dark">다크 모드</label>
                                </div>
                                <div>
                                    <input id="system" name="mode" type="radio"
                                        onChange={() => updateColorMode("system")}
                                        checked={isCheck("system")}
                                    />
                                    <label htmlFor="system">시스템 모드</label>
                                </div>
                            </div>
                        </ToggleButton>

                    </Item>
                    <Item>
                        <span>Auth</span>
                    </Item>
                </FlexArea>
            </Content>
        </>
    )
}

export default HeaderContent;