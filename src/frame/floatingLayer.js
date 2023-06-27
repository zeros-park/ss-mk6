import React, { useState, useRef, useEffect } from "react";
import styled from 'styled-components';
/**
 * todo : 추후 ts로 변경하면 사라질 방식임
 */
const validPositionType = (positionType) => {
    return ['center', 'left', 'right', 'bottom', 'top']
    .indexOf(positionType) !== -1;
}
/**
 * todo : 추후 ts로 변경하면 사라질 방식임
 */
const validExtendType = (extendType) => {
    return ['width', 'height', 'full', 'default']
    .indexOf(extendType) !== -1;
}
const validTypes = (positionType, extendType) => {
    return validPositionType(positionType) && validExtendType(extendType);
}

const Dimd = styled.div`
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
        backdrop-filter: blur(1px);
        height: 100%;
        transition-property: opacity;
        transition-duration: 500ms;
    }
    &.off:after {
        opacity: 0;
    }
    &.on:after {
        opacity: 1;
    }
`
const Wrapper = styled.div`
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
const Content = styled.div`
    background-color: white;
    width: ${props => (props.options.extendType === 'full' ? '100%' : 'auto')};
    height: ${props => (props.options.extendType === 'full' ? '100%' : 'auto')};
    transition-duration: 200ms;
    transition-property: transform;
    ${props => {
        const positionType = props.options.positionType;
        if (positionType === 'top') {
            return (`
                &.off {
                    transform: translate(0, -100%);
                }
            `)
        } else if (positionType === 'left') {
            return (`
                &.off {
                    transform: translate(-100%, 0);
                }
            `)
        } else if (positionType === 'right') {
            return (`
                &.off {
                    transform: translate(100%, 0);
                }
            `)
        } else if (positionType === 'bottom') {
            return (`
                &.off {
                    transform: translate(0, 100%);
                }
            `)
        } else if (positionType === 'center') {
            return (`
                &.on {
                    transition-property: opacity;
                    opacity: 1;
                }
                &.off {
                    transition-property: opacity;
                    opacity: .5;
                }
            `)
        } else {
            return ('')
        }

        
    }}

`

const Layer = styled.div`
    background-color: white;

`
const WrapperHeader = styled.div`
    display: flex;
    align-items: center;
    min-width: 190px;
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

const FloatingLayer = ({fireClose, options, children}) => {
    const background = useRef();
    const closeBtn = useRef();
    const content = useRef();
    const [isShowContent, setIsShowContent] = useState(false);
    const [positionType, extendType, isShowDimd, headerText] = options;

    const isValidOptions = () => validTypes(positionType, extendType)
    const requestHide = () => setIsShowContent(false)

    const tryToHideContent = (event) => {
        if (background.current === event.target) {
            requestHide();
        }
    }
    const rollbackFocus = () => {
        closeBtn.current.focus();
    }
    const destroyWrapper = (event) => {
        event.stopPropagation();

        if (event.target.classList.contains('off')) {
            fireClose();
        }
    }
    
    useEffect(() => {
        if (isValidOptions() && (isShowContent === false)) {
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
    }, [isValidOptions()]);

    return (
        <Dimd 
            className={isShowContent ? 'on' : 'off'}
            options={{isShowDimd, isShowContent}}
        >
            <Wrapper 
                ref={background}
                options={{positionType, extendType}}
                onClick={tryToHideContent}
            >
                <Content 
                    ref={content}  
                    className={isShowContent ? 'on' : 'off'}
                    options={{positionType, extendType}}
                    onTransitionEnd={destroyWrapper}
                >
                    <Layer>
                        <WrapperHeader options={{positionType}}>
                            <span>{headerText}</span>
                            <span>
                                <button ref={closeBtn} onClick={requestHide}>close</button>
                            </span>
                        </WrapperHeader>
                        <hr/>
                        <div>
                            {children}
                        </div>
                    </Layer>
                    <HideElementForFocusControll
                        onFocus={rollbackFocus}
                        tabIndex='0'
                    />
                </Content>
            </Wrapper>
            
        </Dimd>
    );
}
export default FloatingLayer;