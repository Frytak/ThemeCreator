import { produce } from "solid-js/store"
import { theme } from "./../ThemeEditor"
import { JSX } from "solid-js/h/jsx-runtime"
import style from './ValueEditor.module.css'
import { useThemeContext } from "../../../App"

interface ValueEditor {
    value: keyof theme,
    style: JSX.CSSProperties,
}

export default function ValueEditor(props: ValueEditor) {
    const [theme, setTheme] = useThemeContext()

    // OnChange update the theme color
    function onChange(input: Event & { currentTarget: HTMLInputElement, target: HTMLInputElement }) {
        setTheme(produce((theme) => {
            theme[props.value] = input.target.value
        }))
    }

    return (
        <div class={style.valueEditor} style={props.style}>
            <input type="color" class={style.colorInput} value={theme[props.value]} onChange={onChange}/>
            {props.value}
        </div>
    )
}
