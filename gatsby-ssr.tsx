import React from 'react';

import { Layout } from './src/components/core/layout';

export const wrapRootElement = ({ element }) => <Layout>{element}</Layout>;
