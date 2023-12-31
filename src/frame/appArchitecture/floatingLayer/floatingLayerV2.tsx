import ToggleButton from "@/frame/appArchitecture/floatingLayer/toggleButton";
import { dcwStyled } from "@/frame/designComponentWrapper";
import { IReactFC } from "@/types/global";
import React, { useState, useRef, useEffect } from "react";
import styled, { CSSObject } from 'styled-components';

export type positionType = 'center' | 'left' | 'right' | 'bottom' | 'top' | 'target';
type extendType = 'width' | 'height' | 'full' | 'default';
interface IDimdStyled {
    options: {
        isShowDimd?: boolean,
        isRequestShow?: boolean,
        isShowContent?: boolean,
        isDirectShow?: boolean,
        extendType?: extendType,
        positionType?: positionType,
    }
}

type isShowDimd = boolean;
type headerText = string | null;
type isDirectShow = boolean;

export type IDimdOptions = [positionType, extendType, isShowDimd, headerText, isDirectShow?]

const Dimd = styled.div<IDimdStyled>`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 300;

    &:after {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        content: '';
        background: rgba(0, 0, 0, ${props => (props.options.isShowDimd ? '.4' : '0')});
        backdrop-filter: ${props => (props.options.isDirectShow ? '' : 'blur(1px)')};
        height: 100%;
        transition-property: opacity;
        transition-duration: ${props => (props.options.isDirectShow ? '1ms' : '200ms')};
    }
    &.off:after {
        opacity: 0;
    }
    &.on:after {
        opacity: 1;
    }
`
const Wrapper = styled.div<IDimdStyled>`
    z-index: 450;
    position: fixed;
    display: flex;
    width: 100%;
    height: 100%;
    ${props => {
        const [positionType, extendType] = [props.options.positionType, props.options.extendType];
        if (extendType === 'full') {
            return ('')
        } else if (positionType === 'top' && extendType === 'default') {
            return (`
                align-content: center;
                justify-content: start;
                flex-direction: column;
                flex-wrap: wrap;
            `)
        } else if (positionType === 'top' && extendType === 'width') {
            return (`
                align-content: center;
                justify-content: start;
                flex-direction: column;
                `)
        } else if (positionType === 'top' && extendType === 'height') {
            return (`
                justify-content: center;
                flex-direction: row;
            `)
        } else if (positionType === 'left' && extendType === 'default') {
            return (`
                align-content: center;
                justify-content: start;
                flex-direction: row;
                flex-wrap: wrap;
            `)
        } else if (positionType === 'left' && extendType === 'width') {
            return (`
                justify-content: center;
                flex-direction: column;
            `)
        } else if (positionType === 'left' && extendType === 'height') {
            return (`
                align-content: center;
                justify-content: start;
                flex-direction: row;
                `)
        } else if (positionType === 'right' && extendType === 'default') {
            return (`
                align-content: center;
                justify-content: end;
                flex-direction: row;
                flex-wrap: wrap;
            `)
        } else if (positionType === 'right' && extendType === 'width') {
            return (`
                justify-content: center;
                flex-direction: column;
            `)
        } else if (positionType === 'right' && extendType === 'height') {
            return (`
                align-content: center;
                justify-content: end;
                flex-direction: row;
            `)
        } else if (positionType === 'bottom' && extendType === 'default') {
            return (`
                align-content: center;
                justify-content: end;
                flex-direction: column;
                flex-wrap: wrap;
            `)
        } else if (positionType === 'bottom' && extendType === 'width') {
            return (`
                align-content: center;
                justify-content: end;
                flex-direction: column;
            `)
        } else if (positionType === 'bottom' && extendType === 'height') {
            return (`
                justify-content: center;
                flex-direction: row;
            `)
        } else if (positionType === 'center' && extendType === 'default') {
            return (`
                align-content: center;
                justify-content: center;
                flex-direction: column;
                flex-wrap: wrap;
            `)
        } else if (positionType === 'center' && extendType === 'width') {
            return (`
                align-content: center;
                justify-content: center;
                flex-direction: column;
            `)
        } else if (positionType === 'center' && extendType === 'height') {
            return (`
                justify-content: center;
                justify-content: center;
                flex-direction: row;
            `)
        } else {
            return ('')
        }
    }}
`
const Content = styled.div<IDimdStyled>`${({ options }) => dcwStyled(({ colorSet }) => {
    let extendedAttr: CSSObject = {};
    const positionType = options.positionType;
    if (positionType === 'top') {
        extendedAttr = { [`&.off`]: { transform: `translate(0, -100%)` } }
    } else if (positionType === 'left') {
        extendedAttr = { [`&.off`]: { transform: `translate(-100%, 0)` } }
    } else if (positionType === 'right') {
        extendedAttr = { [`&.off`]: { transform: `translate(100%, 0)` } }
    } else if (positionType === 'bottom') {
        extendedAttr = { [`&.off`]: { transform: `translate(0, 100%)` } }
    } else if (positionType === 'center') {
        extendedAttr = {
            [`&.on`]: { transitionProperty: 'opacity', opacity: 1 },
            [`&.off`]: { transitionProperty: 'opacity', opacity: 0 }
        }
    }

    return {
        default: {
            ...{
                position: 'relative',
                pointerEvents: 'none',
                width: `${options.extendType === 'full' ? '100%' : 'auto'}`,
                height: `${options.extendType === 'full' ? '100%' : 'auto'}`,
                transitionDuration: `${options.isDirectShow ? '1ms' : '200ms'}`,
                transitionProperty: `transform`,
                zIndex: 1,
            },
            ...extendedAttr
        },
        // lightMode: {
        //     backgroundColor: colorSet.lightBG
        // },
        // darkMode: {
        //     backgroundColor: colorSet.darkBG
        // }
    }
})}

`
const Layer = styled.div`${() => dcwStyled(({ colorSet }) => ({
    lightMode: {
        backgroundColor: colorSet.lightBG,
        color: colorSet.lightFont
    },
    darkMode: {
        backgroundColor: colorSet.darkBG,
        color: colorSet.darkFont
    }
}))}`
const WrapperHeader = styled.div<IDimdStyled>`
    display: flex;
    align-items: center;
    ${props => {
        switch (props.options.positionType) {
            case 'left': return (`
                    justify-content: flex-end;
                    flex-direction: row-reverse;
                `)
                break;
            default: return (`
                    justify-content: space-between;
                    flex-direction: row;
                `)
                break;
        }
    }}
`
const HideElementForFocusControll = styled.a``

const FloatingLayerV2: IReactFC<{
    afterClosed: () => void,
    options: IDimdOptions | positionType,
    closeFlag?: boolean,
}> = ({
    afterClosed,
    options,
    closeFlag = false,
    children
}) => {
        const background = useRef<HTMLDivElement>(null);
        const closeBtn = useRef<HTMLButtonElement>(null);
        const content = useRef<HTMLDivElement>(null);
        const [isShowContent, setIsShowContent] = useState(false);
        // todo 추후에 좀더 고민좀 해보자. 썩 맘에 안듬
        const [
            positionType,
            extendType,
            isShowDimd,
            headerText,
            isDirectShow = false
        ]: IDimdOptions = (() => {
            if (typeof options === 'string') {
                return [options as positionType, 'default', true, '옵션테스트', true];
            } else {
                return options as IDimdOptions;
            }
        })()

        const requestHide = () => setIsShowContent(false)

        const tryToHideContent: React.MouseEventHandler<HTMLDivElement> = (event) => {
            if (background.current === event.target) {
                requestHide();
            }
        }
        const rollbackFocus: React.FocusEventHandler<HTMLAnchorElement> = () => {
            closeBtn.current && closeBtn.current.focus();
        }
        const destroyWrapper: React.TransitionEventHandler<HTMLDivElement> = (event) => {
            event.stopPropagation();

            if (isShowContent === false) {
                afterClosed();
            }
        }

        useEffect(() => {
            if (isShowContent === false) {
                /**
                 * dispatch를 통한 업데이트가 리엑트컴포넌트의 재렌더링을 유발하며 비동기적으로 진행이 시작됨
                 * 컴포넌트의 재렌더링은 useEffect 훅이 완료되고 나서 진행됨
                 * dispatch를 통한 데이터 패치가 컴포넌트의 재렌더링 완료시점보다 먼저 종료되는 경우엔
                 * 트렌지션지연시간을 표현하지 못하는 경우가 발생하는 것으로 예측됨
                 * 하여, 렌더링을 확실하게 두가지로 나누기 위해서, setTimeout을 통해 데이터 패치를
                 * 브라우저 엔진의 영역으로 이동함
                 * 
                 * 23.6.19
                 * 컴포넌트 상태를 redux에서 useState로 변경하므로 setTimeout 트릭을 사용하지 않아도 되게 됨
                 */
                // setTimeout(() => {dispacth(show())});
                setIsShowContent(true);
            }
        }, []);

        useEffect(() => {
            if (closeFlag === true) {
                // alert('이 변화를 감지하는지 한번 볼까?')
                requestHide();
            }
        }, [closeFlag])

        return (
            <Dimd
                className={isShowContent ? 'on' : 'off'}
                options={{ isShowDimd, isShowContent, isDirectShow }}
            >
                <Wrapper
                    ref={background}
                    options={{ positionType, extendType }}
                    onClick={tryToHideContent}
                >
                    <Content
                        ref={content}
                        className={isShowContent ? 'on' : 'off'}
                        options={{ positionType, extendType, isDirectShow }}
                        onTransitionEnd={destroyWrapper}
                    >
                        <Layer>
                            {(headerText !== null) &&
                                <>
                                    <WrapperHeader options={{ positionType }}>
                                        <span>{headerText}</span>
                                        <span>
                                            <button ref={closeBtn} onClick={requestHide}>close</button>
                                        </span>
                                    </WrapperHeader>
                                    <hr />
                                </>
                            }
                            <div>
                                {children}
                            </div>
                        </Layer>
                        {
                            (headerText !== null) &&
                            <HideElementForFocusControll
                                onFocus={rollbackFocus}
                                tabIndex={0}
                            />
                        }
                    </Content >
                </Wrapper >
            </Dimd >
        );
    }
export default FloatingLayerV2;