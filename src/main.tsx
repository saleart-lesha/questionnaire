import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ClerkProvider } from '@clerk/clerk-react'
import { ruRU } from '@clerk/localizations'
import { BrowserRouter } from 'react-router-dom'
import Routing from './page/Routing'
import { createGlobalStyle } from 'styled-components'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

const Global = createGlobalStyle`

@font-face {
  font-family: 'Heebo';
  src: url('./app/fonts/Heebo-Black.ttf') format('truetype');
  font-weight: 900;
  font-style: normal;
}

@font-face {
  font-family: 'Heebo';
  src: url('./app/fonts/Heebo-Bold.ttf') format('truetype');
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: 'Heebo';
  src: url('./app/fonts/Heebo-Medium.ttf') format('truetype');
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: 'Heebo';
  src: url('./app/fonts/Heebo-Regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
}

*{
margin: 0;
padding: 0;
box-sizing: border-box;

font-family: 'Heebo', sans-serif;

}
`

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/' localization={ruRU}>
        <>
          <Global />
          <Routing />
        </>
      </ClerkProvider>
    </BrowserRouter>
  </StrictMode>,
)
