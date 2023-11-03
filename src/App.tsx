import CodeSnippet from './components/CodeSnippet/CodeSnippet'
import ThemeEditor, { theme } from './components/ThemeEditor/ThemeEditor'
import E from './components/CodeSnippet/Element/Element'
import { createStore } from 'solid-js/store'
import style from './App.module.css'

function App() {
    const [theme, setTheme] = createStore<theme>({
        String: '#ff0000',
        Character: '#ff0000',
        Number: '#ff0000',
        Boolean: '#ff0000',
        Float: '#ff0000',
        Operator: '#ff0000',
        Identifier: '#ff0000',
        Function: '#1DD197',
        Statement: '#ff0000',
        Conditional: '#ff0000',
        Repeat: '#ff0000',
        Label: '#ff0000',
        Keyword: '#ff0000',
        Exception: '#ff0000',
        StorageClass: '#ff0000',
        Typedef: '#ff0000',
        Special: '#ff0000',
        Type: '#ff0000',
        Structure: '#ff0000',
        Constant: '#ff0000',
        PreProc: '#ff0000',
        Include: '#ff0000',
        Define: '#ff0000',
        Macro: '#ff0000',
        PreCondit: '#ff0000',
        SpecialChar: '#ff0000',
        Tag: '#ff0000',
        Delimiter: '#ff0000',
        SpecialComment: '#ff0000',
        Debug: '#ff0000',
        Underlined: '#ff0000',
        Ignore: '#ff0000',
        Error: '#ff0000',
        Comment: '#ff0000',
        Todo: '#ff0000',
    })

    const exampleCodeSnippets = [
        (
            <>
                <E highlight={theme.Keyword}>fn</E> <E highlight={theme.Function}>main</E>() <E highlight={theme.Operator}>{'->'}</E> <E highlight={theme.Type}>Result</E><E highlight={theme.Operator}>{'<'}</E>(), <E highlight={theme.Structure}>KaavioError</E><E highlight={theme.Operator}>{'>'}</E> {'{'}<br/>
                &emsp;&emsp;&emsp;&emsp;<E highlight={theme.Keyword}>let</E> <E highlight={theme.StorageClass}>mut</E> <E highlight={theme.Identifier}>console</E> <E highlight={theme.Operator}>=</E> <E highlight={theme.Structure}>Console</E><E highlight={theme.Delimiter}>::</E><E highlight={theme.Function}>new</E>()<E highlight={theme.Special}>?</E>;<br/>
                {'}'}
            </>
        )
    ]

    return (
        <main class={style.App} >
            <section class={style.welcome}>
                <h1>Welcome to Theme Creator!</h1>
                <p>Creating themes for code is hard. Having to reload, go to some project to check how it looks like with different languages is tidious. That's why I made this website! You can choose from the default code snippets or create your own and edit the theme!</p>
            </section>

            <section class={style.codeSnippets}>
                <CodeSnippet theme={theme} codeSnippet={exampleCodeSnippets[0]}/>
            </section>

            <section class={style.themeEditor}>
                <ThemeEditor theme={theme} setTheme={setTheme}/>
            </section>
        </main>
    )
}

export default App
