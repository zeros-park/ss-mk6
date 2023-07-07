import React from "react"

export type ILayout = {
    mediaWidthOptions: {
        minimal: number,
        simple: number,
    },
    asideLeftSizeOptions: {
        minimal: null,
        simple: number,
        default: number,
    },
    headerHeightSize: number,
}
export type ITSXLayoutProps = {
    layout: ILayout
}

export type IStyledLayoutProps = {
    layout: ILayout
}
export type IReactFC<T = {}> = React.FC<{
    children?: React.ReactNode
} & T>

