// types/mdx.d.ts
import { ReactNode } from 'react';

declare module "*.mdx" {
  interface MDXProps {
    children?: ReactNode;
    [key: string]: any; // Allow any additional props
  }
  
  let MDXComponent: (props: MDXProps) => JSX.Element;
  export default MDXComponent;
}