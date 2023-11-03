import { color } from './../../ThemeEditor/ThemeEditor'
import style from './Element.module.css'

interface ElementProps {
    highlight: color,
    children: any,
}

export default function E(props: ElementProps) {
    return (
        <abbr title="Gami to furras" class={style.Element} style={{color: props.highlight}}>
            {props.children}
        </abbr>
    )
}
