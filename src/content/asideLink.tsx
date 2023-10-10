import { dcwStyled } from "@/frame/designComponentWrapper";
import { IRootStore } from "@/store";
import { updateRouterRefreshTrigger } from "@/store/slice/documentSlice";
import { setAsideFlod } from "@/store/slice/frameSlice";
import { IReactFC } from "@/types/global";
import Link from "next/link";
import React, { MouseEventHandler } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';

const AsideWrapper = styled.div`
    padding: 5px 5px 5px 5px;
`
interface metched {
    matched: boolean
}
interface tFlexed {
    isFlexed: boolean
}
const AsideItem = styled.div<metched>`${({ matched }) => dcwStyled(() => ({
    default: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        backgroundColor: `${matched ? '#e2e0e0' : ''}`,
        [":hover"]: {
            backgroundColor: '#cdcbcb',
        },
        borderRadius: 7,
    }
}))}`
const AsideIcon = styled.span<metched>`${({ matched }) => dcwStyled(() => ({
    default: {
        margin: '5px 5px 5px 5px',
        backgroundColor: `${matched ? '#b6c1fa' : '#e0fffa'}`,
        border: '1px solid'
    },
}))}`
const AsideMenu = styled.span<tFlexed>`${({ isFlexed }) => dcwStyled(({ layout }) => ({
    default: {
        margin: '5px 5px 5px 5px',
        backgroundColor: '#e0fffa',
        border: '1px solid',
    },
    simple: (isFlexed === false) ? {} : {
        display: 'none'
    },
}))}`

const AsideLink: IReactFC<{
    iconText: string,
    href: string,
    text: string,
    isFlexed: boolean,
}> = ({
    iconText,
    href,
    text,
    isFlexed,
}) => {
        const routerPathname = useSelector((state: IRootStore) => state.document.routerPathname);
        const matched = (routerPathname === href);
        const dispatch = useDispatch();

        const checkSameRouter: MouseEventHandler<HTMLAnchorElement> = (event) => {
            if (matched) {
                // event.preventDefault();
                // alert('동일한 라우터로 실행이 되었음으로 확인함')
                dispatch(updateRouterRefreshTrigger());
            } else {
                dispatch(setAsideFlod(true))
            }
        }

        return (
            <AsideWrapper>
                <Link href={href} onClick={checkSameRouter}>
                    <AsideItem matched={matched}>
                        <AsideIcon matched={matched}>{iconText}</AsideIcon>
                        <AsideMenu isFlexed={isFlexed}>{text}</AsideMenu>
                    </AsideItem>
                </Link>
            </AsideWrapper>
        );
    }

export default AsideLink;