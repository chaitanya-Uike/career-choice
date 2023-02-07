interface IconProps {
    width: number,
    height: number,
    color: string
}

export default class SVGIcons {
    static ArrowRight({ width, height, color }: IconProps) {
        return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={width} height={height}>
            <path fill={color} d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
        </svg>
    }

    static ArrowLeft({ width, height, color }: IconProps) {
        return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={width} height={height}>
            <path fill={color} d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
        </svg>
    }

    static Tick({ width, height, color }: IconProps) {
        return <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width={width}
            height={height}
        >
            <path fill={color} d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
        </svg>
    }
}