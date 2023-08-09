import BlockItem from "@/content/blockItem";
import { dcwStyled } from "@/frame/designComponentWrapper";
import { IReactFC } from "@/types/global";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styled from 'styled-components';

const AsideWrapper = styled.div`
    margin: 5px 5px 5px 5px;
`
interface metched {
    matched: boolean
}
const AsideItem = styled.div<metched>`${({ matched }) => dcwStyled(() => ({
    default: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        backgroundColor: `${matched ? '#e2e0e0' : ''}`,
        height: 40,
        margin: '5px 5px 5px 5px',
        ":hover": {
            backgroundColor: '#cdcbcb',
        },
        borderRadius: 7,
    }
}))}`
const AsideIcon = styled.span<metched>`${({ matched }) => dcwStyled(() => ({
    default: {
        margin: '5px 5px 5px 5px',
        backgroundColor: `${matched ? '#b6c1fa' : '#e0fffa'}`,
        border: '1px solid',
        width: 50,
    },
}))}`
const AsideMenu = styled.span`${() => dcwStyled(() => ({
    default: {
        margin: '5px 5px 5px 5px',
        backgroundColor: '#e0fffa',
        border: '1px solid',
    },
    simple: {
        display: 'none'
    }
}))}`

// const AsideItem = styled.div`
//     margin: 5px 5px 5px 5px;
// `
// const AsideIcon = styled.span`${() => ({
//     margin: '5px 5px 5px 5px',
//     // display: 'inline-block',
//     backgroundColor: '#e0fffa',
//     border: '1px solid',
//     width: 50,
//     height: 50,
// })}`
// const AsideMenu = styled.span`${() => ({
//     margin: '5px 5px 5px 5px',
//     // display: 'inline-block',
//     backgroundColor: '#e0fffa',
//     border: '1px solid',
//     height: 50,
// })}`

const AsideLink: IReactFC<{
    iconText: string,
    href: string,
    text: string,
}> = ({
    iconText,
    href,
    text
}) => {
        const [matched, setMatched] = useState(false);
        const router = useRouter();

        useEffect(() => {
            setMatched((router.pathname === href))
        }, [router.pathname])

        return (
            <AsideWrapper>
                <Link href={href}>
                    <AsideItem matched={matched}>
                        <AsideIcon matched={matched}>{iconText}</AsideIcon>
                        <AsideMenu>{text}</AsideMenu>
                    </AsideItem>
                </Link>
            </AsideWrapper>
        );
    }

export default AsideLink;