import React from "react";
import styled, { CSSObject } from 'styled-components';
import ToggleButton from "@/frame/appArchitecture/floatingLayer/toggleButton";

const Layout = styled.div`${{
    padding: '10px 10px 10px 10px',
}}`

const styledCss: CSSObject = {
    backgroundColor: '#a3f9be',
    padding: '5px 5px 5px 5px',
    margin: '0 0 2px 2px',
}
const DimdLayerTestItem = () => {
    return (
        <>
            <Layout>
                <span>레이어 테스트 기능 모음</span>
                <hr />
                <div>
                    <div>해더를 고정으로 둔 플로팅 레이어를 만든다. 백그라운드 딤드를 기본으로 하고, 클릭 시 닫힌다.</div>
                    <div>설정된 방향에서 레이어가 노출되는 트렌스폼을 갖고있고, 중첩을 지원한다.</div>
                    <div>레이어 오픈시, 레이어를 닫기 전까지는 해당 레이어 안에 포커스를 가둔다.</div>
                </div>
            </Layout>
            <Layout>
                {/* 상단 레이어 테스트 */}
                <ToggleButton
                    styled={styledCss}
                    text={'상단-기본 레이어 오픈'}
                    options={['top', 'default', true, '상단/기본']}
                >
                    <ToggleButton
                        styled={styledCss}
                        text={'상단-세로확장 레이어 오픈'}
                        options={['top', 'height', false, '상단/세로']}
                    >
                        <ToggleButton
                            styled={styledCss}
                            text={'상단-가로확장 레이어 오픈'}
                            options={['top', 'width', false, '상단/가로']}
                        >
                            <ToggleButton
                                styled={styledCss}
                                text={'상단-풀 레이어 오픈'}
                                options={['top', 'full', false, '상단/풀']}
                            >
                                <span>top end</span>
                            </ToggleButton>
                        </ToggleButton>
                    </ToggleButton>
                </ToggleButton>
                {/* 좌측 레이어 테스트 */}
                <ToggleButton
                    styled={styledCss}
                    text={'좌측-기본 레이어 오픈'}
                    options={['left', 'default', true, '좌측/기본']}
                >
                    <ToggleButton
                        styled={styledCss}
                        text={'좌측-세로확장 레이어 오픈'}
                        options={['left', 'height', false, '좌측/세로']}
                    >
                        <ToggleButton
                            styled={styledCss}
                            text={'좌측-가로확장 레이어 오픈'}
                            options={['left', 'width', false, '좌측/가로']}
                        >
                            <ToggleButton
                                styled={styledCss}
                                text={'좌측-풀 레이어 오픈'}
                                options={['left', 'full', false, '좌측/풀']}
                            >
                                <span>left end</span>
                            </ToggleButton>
                        </ToggleButton>
                    </ToggleButton>
                </ToggleButton>
                {/* 우측 레이어 테스트 */}
                <ToggleButton
                    styled={styledCss}
                    text={'우측-기본 레이어 오픈'}
                    options={['right', 'default', true, '우측/기본']}
                >
                    <ToggleButton
                        styled={styledCss}
                        text={'우측-세로확장 레이어 오픈'}
                        options={['right', 'height', false, '우측/세로']}
                    >
                        <ToggleButton
                            styled={styledCss}
                            text={'우측-가로확장 레이어 오픈'}
                            options={['right', 'width', false, '우측/가로']}
                        >
                            <ToggleButton
                                styled={styledCss}
                                text={'우측-풀 레이어 오픈'}
                                options={['right', 'full', false, '우측/풀']}
                            >
                                <span>right end</span>
                            </ToggleButton>
                        </ToggleButton>
                    </ToggleButton>
                </ToggleButton>
                {/* 하단 레이어 테스트 */}
                <ToggleButton
                    styled={styledCss}
                    text={'하단-기본 레이어 오픈'}
                    options={['bottom', 'default', true, '하단/기본']}
                >
                    <ToggleButton
                        styled={styledCss}
                        text={'하단-세로확장 레이어 오픈'}
                        options={['bottom', 'height', false, '하단/세로']}
                    >
                        <ToggleButton
                            styled={styledCss}
                            text={'하단-가로확장 레이어 오픈'}
                            options={['bottom', 'width', false, '하단/가로']}
                        >
                            <ToggleButton
                                styled={styledCss}
                                text={'하단-풀 레이어 오픈'}
                                options={['bottom', 'full', false, '하단/풀']}
                            >
                                <span>bottom end</span>
                            </ToggleButton>
                        </ToggleButton>
                    </ToggleButton>
                </ToggleButton>
                {/* 중앙 레이어 테스트 */}
                <ToggleButton
                    styled={styledCss}
                    text={'중앙-기본 레이어 오픈'}
                    options={['center', 'default', true, '중앙/기본']}
                >
                    <ToggleButton
                        styled={styledCss}
                        text={'중앙-세로확장 레이어 오픈'}
                        options={['center', 'height', false, '중앙/세로']}
                    >
                        <ToggleButton
                            styled={styledCss}
                            text={'중앙-가로확장 레이어 오픈'}
                            options={['center', 'width', false, '중앙/가로']}
                        >
                            <ToggleButton
                                styled={styledCss}
                                text={'중앙-풀 레이어 오픈'}
                                options={['center', 'full', false, '중앙/풀']}
                            >
                                <span>center end</span>
                            </ToggleButton>
                        </ToggleButton>
                    </ToggleButton>
                </ToggleButton>
            </Layout>
        </>

    );
}

export default DimdLayerTestItem;