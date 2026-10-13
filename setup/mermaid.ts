import { defineMermaidSetup } from '@slidev/types'

// Цвета диаграмм под палитру доклада
export default defineMermaidSetup(() => {
  return {
    theme: 'base',
    themeVariables: {
      background: '#0f1115',
      textColor: '#fafafa',
      fontFamily: 'Lexend Deca, ui-sans-serif, sans-serif',
      fontSize: '15px',

      primaryColor: '#1a1d24',
      primaryBorderColor: '#3ddc97',
      primaryTextColor: '#fafafa',
      secondaryColor: '#1a1d24',
      secondaryBorderColor: '#ff7a59',
      secondaryTextColor: '#fafafa',
      tertiaryColor: '#1a1d24',
      tertiaryBorderColor: '#8b94a3',
      tertiaryTextColor: '#fafafa',

      lineColor: '#3ddc97',
      edgeLabelBackground: '#0f1115',
    },
  }
})
