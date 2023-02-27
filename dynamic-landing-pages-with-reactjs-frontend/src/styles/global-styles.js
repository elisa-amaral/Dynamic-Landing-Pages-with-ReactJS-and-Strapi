/* eslint-disable no-unused-vars */
import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.font.family.default};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.font.family.secondary};
    margin: ${({ theme }) => theme.spacings.large} 0;
  }

  p {
    margin: ${({ theme }) => theme.spacings.medium} 0;
  }

  ul, ol {
    margin: ${({ theme }) => theme.spacings.medium};
    padding: ${({ theme }) => theme.spacings.medium};
  }

  a {
    color: ${({ theme }) => theme.colors.secondary};
  }

  table {
    overflow: hidden;
    overflow-x: auto;
    min-width: 36rem;
    width: 100%;
    border-collapse: collapse;
  }

    table caption
  {
      font-style: italic;
      font-size: 1.8rem;
      text-align: left;
      margin-bottom: 1rem;
  }

  table td, table th {
      white-space: nowrap;
      text-align: left;
      padding: 1rem;
      border: 0.2rem solid ${({ theme }) => theme.colors.white};
  }

  tfoot td, table th {
      background: ${({ theme }) => theme.colors.lightGray};
  }

`
