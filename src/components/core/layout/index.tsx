import React from 'react';
import { ProductsProvider, UrqlProvider } from 'src/contexts';

import { ProviderProps } from 'src/types';

export function Layout({ children }: ProviderProps) {
  return (
    <UrqlProvider>
      <ProductsProvider>{children}</ProductsProvider>
    </UrqlProvider>
  );
}
