import * as React from 'react';
import { HeadFC, PageProps } from 'gatsby';
import { HomeTemplate } from 'src/templates/home';

export default function IndexPage({}: React.FC<PageProps>) {
  return <HomeTemplate />;
}

export const Head: HeadFC = () => <title>Home Page</title>;
