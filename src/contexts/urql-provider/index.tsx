// gatsby-browser.js
import React from 'react';
import { Client, Provider, cacheExchange, fetchExchange } from 'urql';

import { ProviderProps } from 'src/types';

const graphqlEndpoint =
  process.env.NODE_ENV === 'production'
    ? 'https://prod-endpoint'
    : 'http://localhost:8000/___graphql';

const client = new Client({
  url: graphqlEndpoint,
  exchanges: [cacheExchange, fetchExchange]
});

export const UrqlProvider = ({ children }: ProviderProps) => (
  <Provider value={client}>{children}</Provider>
);
