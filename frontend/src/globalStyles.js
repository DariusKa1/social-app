import { createGlobalStyle } from "styled-components"

export const mainColor = "rgb(46, 46, 46)"

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        color: white;
        background-color: ${mainColor};
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

    }

    code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
`
export default GlobalStyle