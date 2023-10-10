import { dcwStyled } from "@/frame/designComponentWrapper";
import { IReactFC } from "@/types/global";
import React, { MouseEventHandler, useRef, useState, WheelEvent, WheelEventHandler } from "react";
import styled from 'styled-components';


const Wrapper = styled.span`${() => ({
    display: 'inline-block'
})}`

const Position = styled.div`${() => ({
    height: 0,
})}`
const PositionTop = styled.div`${() => ({
    height: 0,
    position: 'relative'
})}`
const PositionBottom = styled.div`${() => ({
    height: 0,
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    justifyContent: 'center'
})}`
const InfoHolder = styled.span`${() => dcwStyled(({ colorSet }) => ({
    default: {
        position: 'absolute',
        padding: '10px 10px 10px 10px',
        margin: '5px 0 5px 0',
        borderRadius: '8px',
        fontSize: 14,
        backdropFilter: 'blur(2px)',
        whiteSpace: 'nowrap',
        boxShadow: 'rgba(0, 0, 0, 0.75) 0px 3px 10px',
        width: 400
    },
    lightMode: {
        backgroundColor: 'rgba(0, 0, 0, .6)',
        color: '#d1d0d0'
    },
    darkMode: {
        backgroundColor: 'rgba(255, 255, 255, .2)',
        color: '#d1d0d0'
    }
}))}`
const InfoContent = styled.span`${() => dcwStyled(({ colorSet }) => ({
    // default: {
    //     opacity: 1,
    // },
    // lightMode: {
    //     // backgroundColor: colorSet.darkBG,
    //     color: colorSet.darkFont
    // },
    // darkMode: {
    //     // backgroundColor: colorSet.lightBG,
    //     color: colorSet.lightFont
    // }
}))}`
// const Test1 = styled.div<{ x: number, y: number }>`${({ x, y }) => dcwStyled(({ colorSet }) => ({
const Test1 = styled.div`${() => dcwStyled(({ colorSet }) => ({
    default: {
        position: 'absolute',
        background: 'gray',
        // height: 100,
        // width: 300,
        // inset: '0px auto auto 0px',
        top: 0,
        // left: 350,
        // transform: `translate(${x}px, ${y}px)`,
        // transition: 'none 150ms ease 0ms',
        // top: y,
        // left: x,
        // willChange: 'scroll-position'
        // z- index: 450;

        //     position: fixed;
        // display: -webkit-box;
        // display: -webkit-flex;
        // display: -ms-flexbox;
        // display: flex;
        // width: 100%;
        // height: 100%;
        // -webkit-align-content: center;
        // -ms-flex-line-pack: center;
        // align-content: center;
        // -webkit-box-pack: start;
        // -webkit-justify-content: start;
        // -ms-flex-pack: start;
        // justify-content: start;
        // -webkit-flex-direction: column;
        // -ms-flex-direction: column;
        // flex-direction: column;
        // -webkit-flex-wrap: wrap;
        // -ms-flex-wrap: wrap;
        // flex-wrap: wrap;
    },
}))}`

const MouseoverInfo: IReactFC<{ text: string }> = ({ text, children }) => {
    const [isShowTop, setIsShowTop] = useState(false);
    const [isShowBottom, setIsShowBottom] = useState(false);
    // const [isShowBottom, setIsShowBottom] = useState(true);
    const [isMouseOver, setMouseOver] = useState(false);

    const showInfoText: MouseEventHandler<HTMLSpanElement> = (event) => {

        setMouseOver(true);
        setIsShowBottom(true);
        setIsShowTop(true);
        console.log(`zeros MouOvr [${isMouseOver}]`);
    }
    const hideInfoText = () => {
        setMouseOver(false);
        setIsShowTop(false);
        setIsShowBottom(false);
    }

    // 이걸 그냥 위 아래 뷰포트 밖의 바에 움직이도록 두는게 더 좋을듯, 어떤 컨텐츠가 와도 관계없으니까.
    const positionLayer = useRef<HTMLDivElement>(null);
    const target = useRef<HTMLDivElement>(null);

    return (
        <Wrapper
            onMouseOver={(event) => showInfoText(event)}
            onMouseOut={() => hideInfoText()}
        // onWheel={() => hideInfoText()}
        >

            <PositionTop>
                {/* {isShowTop &&
                    <InfoHolder>
                        <InfoContent>{text}</InfoContent>
                    </InfoHolder>
                } */}
            </PositionTop>
            <div>
                {children}
            </div>
            <PositionBottom>
                {
                    isShowBottom &&
                    <>
                        <InfoHolder>
                            <InfoContent>{text}</InfoContent>
                        </InfoHolder>
                    </>
                }
                {/* <>
                    <InfoHolder>
                        <InfoContent>{text}</InfoContent>
                    </InfoHolder>
                </> */}
            </PositionBottom >


        </Wrapper >
    );
}

export default MouseoverInfo;