import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ChakraProvider } from '@chakra-ui/react';

import { ProductsProvider } from '@contexts/products-provider';
import { UrqlProvider } from '@contexts/urql-provider';

import { Header } from '../header';

import { ProviderProps } from 'src/types';

import { lightTheme } from 'src/styles/theme';

import '../../../styles/global.css';

export function Layout({ children }: ProviderProps) {
  return (
    <UrqlProvider>
      <ProductsProvider>
        <ThemeProvider theme={lightTheme}>
          <ChakraProvider>
            <Header />

            {children}
          </ChakraProvider>
        </ThemeProvider>
      </ProductsProvider>
    </UrqlProvider>
  );
}
