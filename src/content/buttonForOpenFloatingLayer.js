import React, { useState } from "react";
import styled from 'styled-components';
import FloatingLayer from "@/frame/floatingLayer";

const Layout = styled.span`
    
`

const ButtonForOpenFloatingLayer = ({cssStyle, text, options, children}) => {
    const [isShow, setIsShow] = useState(false);

    return (
        <>
            <button onClick={() => setIsShow(true)}>{text}</button>
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

export default ButtonForOpenFloatingLayer;