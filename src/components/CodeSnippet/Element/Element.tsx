import style from './Element.module.css'
import { theme } from './../../ThemeEditor/ThemeEditor'
import { useThemeContext } from '../../../App';

interface ElementProps {
    v: keyof theme,
    children: any,
}

export default function E(props: ElementProps) {
    const [theme] = useThemeContext()

    return (
        <abbr title={props.v} class={style.Element} style={{color: theme?.[props.v]}}>
            {props.children}
        </abbr>
    )
}
