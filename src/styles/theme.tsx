import { DefaultTheme } from 'styled-components';

export const lightTheme = {
  colors: {
    primary: {
      default: '#56d3bb',
      light: '#d0f3ec',
      dark: '#2dae96',
      darker: '#279781'
    },
    neutral: {
      white: '#ffffff',
      neutral1: '#ebefee',
      neutral2: '#cdd6d3',
      neutral3: '#a5b6b2',
      neutral4: '#738c87',
      neutral5: '#5a6d6a',
      neutral6: '#35403e'
    }
  },
  breakpoints: {
    sm: '480px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    xxl: '1600px'
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '1rem',
    md: '1.25rem',
    lg: '2.5rem'
  }
};
