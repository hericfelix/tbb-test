import React from 'react';

import { UrqlProvider } from './src/contexts';

export const wrapRootElement = ({ element }) => <UrqlProvider>{element}</UrqlProvider>;
