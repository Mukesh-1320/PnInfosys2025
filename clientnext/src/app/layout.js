
import './globals.css'
import LayoutWrapper from './LayoutWrapper'
import Providers from './provider'
import { Toaster } from 'react-hot-toast'


export const metadata = {
  title: 'PNINFOSYS',
  description: 'Website by PNINFOSYS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className="flex flex-col min-h-screen">
        <Providers>
        <LayoutWrapper>{children}</LayoutWrapper>
        </Providers>
        <Toaster position="top-right" />
        
      </body>
    </html>
  )
}