import { For } from 'solid-js'
import style from './ThemeEditor.module.css'
import ValueEditor from './ValueEditor/ValueEditor'
import { useThemeContext } from '../../App'

export type color = string
export interface theme {
    String: color, // String constant: "this is a string"
    Character: color, // Character constant: 'c', '\n'
    Number: color, // Number constant: 234, 0xff
    Boolean: color, // Boolean constant: TRUE, false
    Float: color, // Floating point constant: 2.3e10
    Operator: color, // "sizeof", "+", "*", etc.
    Identifier: color, // Variable name
    Function: color, // Function name (also: methods for classes)
    Statement: color, // Any statement
    Conditional: color, // if, then, else, endif, switch, etc.
    Repeat: color, // for, do, while, etc.
    Label: color, // case, default, etc.
    Keyword: color, // Any other keyword
    Exception: color, // try, catch, throw
    StorageClass: color, // static, register, volatile, etc.
    Typedef: color, // A typedef
    Special: color, // Special symbol
    Type: color, // int, long, char, etc.
    Structure: color, // struct, union, enum etc.
    Constant: color, // Any constant
    PreProc: color, // Generic Preprocessor
    Include: color, // Preprocessor #include
    Define: color, // Preprocessor #define
    Macro: color, // Same as Define
    PreCondit: color, // Preprocessor #if, #else, #endif, etc.
    SpecialChar: color, // Special character in a constant
    Tag: color, // You can use CTRL-] on this
    Delimiter: color, // Character that needs attention
    SpecialComment: color, // Special things inside a comment
    Debug: color, // Debugging statements
    Underlined: color, // Text that stands out, HTML links
    Ignore: color, // left blank, hidden hl-Ignore
    Error: color, // Erroneous construct
    Comment: color, // Comments such as this text!
    Todo: color, // TODO FIXME and XXX
}

export default function ThemeEditor() {
    const [theme] = useThemeContext()

    return (
        <section class={style.themeEditor}>
            <For each={Object.keys(theme)} >
                {(v, i)=>{
                    let column = (i() % 4) + 1;
                    let gridColumn = column + " / " + (column + 1)
                    return <ValueEditor style={{"grid-column": gridColumn}} value={v as keyof theme}/>
                }}
            </For>
        </section>
    )
}
