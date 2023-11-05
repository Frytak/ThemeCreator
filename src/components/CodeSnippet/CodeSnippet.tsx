import style from './CodeSnippet.module.css'

interface CodeSnippetProps {
    codeSnippet: any,
}

export default function CodeSnippet(props: CodeSnippetProps) {

    return (
        <code class={style.codeSnippet}>
            {props.codeSnippet}
        </code>
    )
}
