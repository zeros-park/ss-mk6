import React, { useState } from "react";
import styled from 'styled-components';
import FloatingLayer, { IDimdOptions } from "@/frame/floatingLayer/floatingLayer";
import { IReactFC } from "@/types/global";


const Button = styled.button<{ styled: string }>`
    ${props => props.styled}
`

const ToggleButton: IReactFC<{
    styledString?: string,
    text?: string,
    options: IDimdOptions
}> = ({ styledString = '', text, options, children }) => {
    const [isShow, setIsShow] = useState(false);

    return (
        <>
            <Button
                onClick={() => setIsShow(true)}
                styled={styledString}
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
        </>
    )

}

export default ToggleButton;