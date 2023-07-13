import { IReactFC } from "@/types/global";
import React, { useState } from "react";
import styled, { CSSObject } from 'styled-components';
import CounterTestItem from "@/content/test-counter";
import ToggleButton from "@/frame/floatingLayer/toggleButton";
import DimdLayerTestItem from "@/content/test-dimdLayer";


const FlexArea = styled.div`
`
const Item = styled.span`
    padding: 5px 5px 5px 5px;
    margin: 5px 5px 5px 5px;
    background: #ffffff;
`
const focused: CSSObject = {
    backgroundColor: 'gray',
    color: 'white'
}
type designMode = 'white' | 'dark' | 'system'

const HeaderContent: IReactFC = () => {
    /**
     * 이걸 redux 로 설정을 변경하고, 실제 디자인을 설정하고, ssr 에도 동작하도록 해보자.
     */
    const [mode, setMode] = useState<designMode>("system");

    return (
        <>
            <FlexArea>
                <CounterTestItem></CounterTestItem>
            </FlexArea>
            <FlexArea>
                <Item>
                    <ToggleButton
                        text={'영역 테스트 레이어 오픈'}
                        options={['center', 'default', true, '중앙/기본']}
                    >
                        <DimdLayerTestItem></DimdLayerTestItem>
                    </ToggleButton>
                    <ToggleButton
                        options="center"
                        text="모드"
                        styledFocus={focused}
                    >
                        <div>
                            <div>
                                <span>current mode: {mode} !!</span>
                            </div>
                            <div>
                                <input id="white" name="mode" type="radio"
                                    onChange={() => setMode("white")}
                                    checked={mode === "white"}
                                />
                                <label htmlFor="white">화이트 모드</label>
                            </div>
                            <div>
                                <input id="dark" name="mode" type="radio"
                                    onChange={() => setMode("dark")}
                                    checked={mode === "dark"}
                                />
                                <label htmlFor="dark">다크 모드</label>
                            </div>
                            <div>
                                <input id="system" name="mode" type="radio"
                                    onChange={() => setMode("system")}
                                    checked={mode === "system"}
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
        </>
    )
}

export default HeaderContent;