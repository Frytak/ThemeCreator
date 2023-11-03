import { SetStoreFunction, produce } from "solid-js/store"
import { theme } from "./../ThemeEditor"
import { JSX } from "solid-js/h/jsx-runtime"
import style from './ValueEditor.module.css'

interface ValueEditor {
    theme: theme,
    setTheme: SetStoreFunction<theme>,
    value: string,
    style: JSX.CSSProperties,
}

export default function ValueEditor(props: ValueEditor) {
    // Default color
    const defaultValue = (props.theme as {[key: string]: any})[props.value];

    // OnChange update the theme color
    function onChange(input: Event & { currentTarget: HTMLInputElement, target: HTMLInputElement }) {
        props.setTheme(produce((theme: { [key: string]: any }) => {
            theme[props.value] = input.target.value
        }))
    }

    return (
        <div class={style.valueEditor} style={props.style}>
            <input type="color" class={style.colorInput} value={defaultValue} onChange={onChange}/>
            {props.value}
        </div>
    )
}
