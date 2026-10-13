import { defineMermaidSetup } from '@slidev/types'

// Цвета диаграмм под палитру HolyJS
export default defineMermaidSetup(() => {
  return {
    theme: 'base',
    themeVariables: {
      background: '#010a12',
      textColor: '#fafafa',
      fontFamily: 'Lexend Deca, ui-sans-serif, sans-serif',
      fontSize: '15px',

      primaryColor: '#0d1620',
      primaryBorderColor: '#f644d1',
      primaryTextColor: '#fafafa',
      secondaryColor: '#0d1620',
      secondaryBorderColor: '#00e2fd',
      secondaryTextColor: '#fafafa',
      tertiaryColor: '#0d1620',
      tertiaryBorderColor: '#ff5e29',
      tertiaryTextColor: '#fafafa',

      lineColor: '#f644d1',
      edgeLabelBackground: '#010a12',
    },
  }
})
