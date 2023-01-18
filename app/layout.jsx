'use client'

import Menu from './menu';
import { ThemeProvider } from '@mui/system';
import theme from './theme';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <ThemeProvider theme={theme}>
          <Menu />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
