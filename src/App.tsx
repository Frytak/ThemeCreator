import CodeSnippet from './components/CodeSnippet/CodeSnippet'
import ThemeEditor, { theme } from './components/ThemeEditor/ThemeEditor'
import { SetStoreFunction, createStore } from 'solid-js/store'
import style from './App.module.css'
import { createContext, useContext } from 'solid-js'
import exampleCodeSnippets from './components/CodeSnippet/ExampleCodeSnippets'


const ThemeContext = createContext<[theme | undefined, SetStoreFunction<theme> | undefined]>([undefined, undefined])
export function useThemeContext(): [theme, SetStoreFunction<theme>] | undefined {
    const [theme, setTheme] = useContext(ThemeContext)

    if (theme === undefined || setTheme === undefined) { return }
    return [theme, setTheme]
}

function App() {
    const [theme, setTheme] = createStore<theme>({
        String: '#ff0000',
        Character: '#ff0000',
        Number: '#ff0000',
        Boolean: '#ff0000',
        Float: '#ff0000',
        Operator: '#ff0000',
        Identifier: '#ff0000',
        Function: '#ff0000',
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


    return (
        <main class={style.App} >
            <section class={style.welcome}>
                <h1>Welcome to Theme Creator!</h1>
                <p>Creating themes for code is hard. Having to reload, go to some project to check how it looks like with different languages is tidious. That's why I made this website! You can choose from the default code snippets or create your own and edit the theme!</p>
            </section>

            <ThemeContext.Provider value={[theme, setTheme]}>
                <section class={style.codeSnippets}>
                    <CodeSnippet codeSnippet={exampleCodeSnippets.rustTrait}/>
                </section>

                <section class={style.themeEditor}>
                    <ThemeEditor/>
                </section>
            </ThemeContext.Provider>
        </main>
    )
}

export default App
