import React, { ReactEventHandler, useState } from "react";
import styled, { CSSObject } from 'styled-components';
import FloatingLayer, { IDimdOptions, positionType } from "@/frame/floatingLayer/floatingLayer";
import { IReactFC } from "@/types/global";

interface IProps {
    options: {
        styled: CSSObject,
        isShow: boolean,
        styledFocus: CSSObject,
    }
}
const Button = styled.button<IProps>`
    ${({ options }) => [
        options.styled,
        (options.isShow === true) ? options.styledFocus : {}
    ]}
`

const ToggleButton: IReactFC<{
    styled?: CSSObject,
    styledFocus?: CSSObject,
    text: string,
    options: IDimdOptions | positionType
}> = ({
    styled = {},
    styledFocus = {},
    text,
    options,
    children
}) => {
        const [isShow, setIsShow] = useState(false);
        const setButtonState: ReactEventHandler<HTMLButtonElement> = (event) => {
            setIsShow(true)
        }

        return (
            <span>
                <Button
                    onClick={setButtonState}
                    options={{ styled, isShow, styledFocus }}
                >
                    {text}
                </Button>
                {isShow &&
                    <FloatingLayer
                        fireClose={() => setIsShow(false)}
                        options={options}
                    >
                        {children}
                    </FloatingLayer>

                }
            </span>
        )
    }

export default ToggleButton;