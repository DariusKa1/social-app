import { createGlobalStyle } from "styled-components"

export const mainColor = "rgb(46, 46, 46)"

const GlobalStyle = createGlobalStyle`
    h1, h2, h3, h4, h5, p {
            margin-block-start: 0em;
            margin-block-end: 0em;
        } 

    body {
        margin: 0;
        color: white;
        background-color: ${mainColor};
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        min-width: 400px;
        
    }

    code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
`
export default GlobalStyle