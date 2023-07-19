import { lightTheme } from 'src/styles/theme';
import 'styled-components';

type CustomTheme = typeof lightTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {}
}
