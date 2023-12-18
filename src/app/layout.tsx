import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Head } from 'next/document'
import Navbar from './components/Navbar'
import SWRConfigContext from '@/app/context/SWRConfigContext'
import {useRouter} from 'next/navigation'
import TransitionContext from './context/TransitionContext'
import { NavigationContextProvider } from './context/NavigationContext'
import InitTransition from './components/transition/InitTransition'
import Background from './components/BackgroundPage'
import { getBackgroundImage } from './service/webtoonInfo'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const backgroundImage = await getBackgroundImage();
  return (
    <html lang="en">
        <body className={inter.className}>
          {/* <InitTransition/> */}
          <Background backgroundImage={backgroundImage}></Background>
          <NavigationContextProvider>
            <Navbar></Navbar>
            <div className = 'relative'>
              {/* <SWRConfigContext> */}
                      <main>
                      
                        {children}
                    
                      </main>
              {/* </SWRConfigContext> */}
            </div>
            <div id = "modal"></div>
          </NavigationContextProvider>
        </body>
    </html>
  )
}
