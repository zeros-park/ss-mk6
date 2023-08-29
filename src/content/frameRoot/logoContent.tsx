import { IReactFC } from "@/types/global";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IRootStore } from "@/store";
import { setAsideFlod, toggleAsideCustomize } from "@/store/slice/frameSlice";
import FloatingLayer from "@/frame/appArchitecture/floatingLayer/floatingLayer";
import LogoIcon from "@/content/logoIcon";
import styled from "styled-components";
import { dcwStyled } from "@/frame/designComponentWrapper";
import AsideContent from "@/content/frameRoot/asideContent";

const LayerWrapper = styled.section`${() => dcwStyled(({ layout }) => ({
    default: {
        width: `${layout.asideLeftSizeOptions.default}px;`,
        height: '100%',
    },
}))}`

const LogoContent: IReactFC = () => {
    const dispatch = useDispatch();
    const currentLayout = useSelector((state: IRootStore) => state.frame.currentLayout);
    const asideFlod = useSelector((state: IRootStore) => state.frame.asideFlod);
    const [closeFlag, setCloseFlag] = useState(false);

    const requestClose: React.MouseEventHandler<HTMLButtonElement> = (el) => {
        setCloseFlag(true)
    }
    const clickLogo: React.MouseEventHandler<HTMLButtonElement> = (el) => {
        setCloseFlag(false)

        if (currentLayout === 'minimal') {
            dispatch(setAsideFlod(asideFlod === false))
        } else if (currentLayout === 'simple') {
            dispatch(setAsideFlod(asideFlod === false))
        } else {
            dispatch(toggleAsideCustomize())
        }
    }

    return (
        <>
            <LogoIcon onClick={clickLogo}></LogoIcon>
            {(asideFlod === false) &&
                <FloatingLayer
                    fireClose={() => dispatch(setAsideFlod(true))}
                    options={['left', 'height', true, null]}
                    closeFlag={closeFlag}
                >
                    <LayerWrapper>
                        <AsideContent isFlexed={false}>
                            <LogoIcon onClick={requestClose}></LogoIcon>
                        </AsideContent>
                    </LayerWrapper>
                </FloatingLayer>
            }
        </>
    )
}

export default LogoContent;