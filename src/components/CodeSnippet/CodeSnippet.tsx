import style from './CodeSnippet.module.css'
import { theme } from '../ThemeEditor/ThemeEditor'
import { JSXElement } from 'solid-js'

export type codeSnippet = JSXElement

interface CodeSnippetProps {
    theme: theme,
    codeSnippet: any,
}

export default function CodeSnippet(props: CodeSnippetProps) {
    return (
        <code class={[style.codeSnippet, props.theme].join(' ')}>
            {props.codeSnippet}
        </code>
    )
}
