import { color } from "../ThemeEditor/ThemeEditor"

interface ElementProps {
    highlight: color,
    children: any,
}

export default function E(props: ElementProps) {
    return (
        <span style={{color: props.highlight}}>
            {props.children}
        </span>
    )
}
