import { ComponentType } from 'react';

interface Props {
  Component: ComponentType;
  pageProps: any;
}

function MyApp({ Component, pageProps }: Props) {
  return <Component {...pageProps} />
}

export default MyApp
