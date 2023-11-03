import { For } from 'solid-js'
import style from './ThemeEditor.module.css'
import ValueEditor from './ValueEditor'
import { SetStoreFunction } from 'solid-js/store'

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

interface ThemeEditorProps {
    theme: theme
    setTheme: SetStoreFunction<theme>
}

export default function ThemeEditor(props: ThemeEditorProps) {
    return (
        <section class={style.themeEditor}>
            <For each={Object.keys(props.theme)} >
                {(v,i)=>{
                    let gridColumn = "";
                    switch (i()+1%3) {
                        case 1: gridColumn = "1 / 2"; break;
                        case 2: gridColumn = "2 / 3"; break;
                        case 3: gridColumn = "3 / 4"; break;
                    }
                    return <ValueEditor style={{"grid-column": gridColumn}} theme={props.theme} setTheme={props.setTheme} value={v}/>
                }}
            </For>
        </section>
    )
}
