import { SetStoreFunction, produce } from "solid-js/store"
import { theme } from "./ThemeEditor"
import { JSX } from "solid-js/h/jsx-runtime"
import style from './ValueEditor.module.css'

interface ValueEditor {
    theme: theme,
    setTheme: SetStoreFunction<theme>,
    value: string,
    style: JSX.CSSProperties,
}

export default function ValueEditor(props: ValueEditor) {
    console.log(props.theme)
    return (
        <div class={style.valueEditor} style={props.style}>
            <input type="color" value={(props.theme as {[key: string]: any})[props.value]} onChange={(color) => {
                props.setTheme(produce((e: {
                    [key: string]: any
                }) => { e[props.value] = color.target.value }))
            }}/>
            {props.value}
        </div>
    )
}
