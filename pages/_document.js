import { Html, Head, Main, NextScript } from 'next/document'

export const Metadata = {
  title: 'Paulo Albuquerque',
  description: 'Meu portfólio em react/nextjs',
}

export default function Document() {
  return (
    <Html lang="en">
      <Head /> 
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
