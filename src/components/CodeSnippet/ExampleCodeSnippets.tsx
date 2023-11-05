import E from "./Element/Element"

const exampleCodeSnippets = {
    rustTrait: () => { return (<>
        <E v={"Keyword"}>trait</E> <E v={"Structure"}>TraitSnippet</E><E v={"Operator"}>{'<'}</E><E v={"Typedef"}>T</E><E v={"Operator"}>{'>'}</E> {'{'}<br/>
            &emsp;&emsp;&emsp;&emsp;<E v={"Keyword"}>fn</E> <E v={"Function"}>get_x</E>(<E v={"StorageClass"}>&mut</E> <E v={"Constant"}>self</E>) <E v={"Operator"}>-{'>'}</E> <E v={"Type"}>u128</E>;<br/>
            &emsp;&emsp;&emsp;&emsp;<E v={"Keyword"}>fn</E> <E v={"Function"}>get_y</E>(<E v={"StorageClass"}>&mut</E> <E v={"Constant"}>self</E>) <E v={"Operator"}>-{'>'}</E> <E v={"Type"}>u128</E>;<br/>
<br/>
            &emsp;&emsp;&emsp;&emsp;<E v={"Keyword"}>fn</E> <E v={"Function"}>welcome_everybody</E>() {'{'}<br/>
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<E v={"Macro"}>println!</E>(<E v={"String"}>"Hello people!!!"</E>);<br/>
            &emsp;&emsp;&emsp;&emsp;{'}'}<br/>
<br/>
            &emsp;&emsp;&emsp;&emsp;<E v={"Keyword"}>fn</E> <E v={"Function"}>multiply</E>(<E v={"StorageClass"}>&</E><E v={"Constant"}>self</E>) <E v={"Operator"}>-{'>'}</E> <E v={"Structure"}>Result</E><E v={"Operator"}>{'<'}</E><E v={"Type"}>u128</E>, <E v={"Structure"}>EnumSnippet</E><E v={"Operator"}>{'>'}</E> {'{'}<br/>
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<E v={"Constant"}>self</E>.<E v={"Function"}>get_x</E>().<E v={"Function"}>checked_mul</E>(<E v={"Constant"}>self</E>.<E v={"Function"}>get_y</E>()).<E v={"Function"}>ok_or</E>(<E v={"Structure"}>EnumSnippet</E><E v={"Delimiter"}>::</E><E v={"Constant"}>SappyInsane</E>)<br/>
            &emsp;&emsp;&emsp;&emsp;{'}'}<br/>
        {'}'}<br/>
    </>)},
    rust1: () => { return (
        <>
            <E v={"Keyword"}>fn</E> <E v={"Function"}>main</E>() <E v={"Operator"}>{'->'}</E> <E v={"Type"}>Result</E><E v={"Operator"}>{'<'}</E>(), <E v={"Structure"}>KaavioError</E><E v={"Operator"}>{'>'}</E> {'{'}<br/>
            &emsp;&emsp;&emsp;&emsp;<E v={"Keyword"}>let</E> <E v={"StorageClass"}>mut</E> <E v={"Identifier"}>console</E> <E v={"Operator"}>=</E> <E v={"Structure"}>Console</E><E v={"Delimiter"}>::</E><E v={"Function"}>new</E>()<E v={"Special"}>?</E>;<br/>
            {'}'}
        </>
    )}
}

export default exampleCodeSnippets
