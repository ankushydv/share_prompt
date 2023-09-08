import './globals.css'
import Nav from '@/components/Nav'
import Provider from "@/components/Provider"

export const metadata = {
  title: 'Prompt AI App',
  description: 'Discover & Share AI prompt',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Provider>
          <main>
            <div className='main'>
              <div className='gradient' />
            </div>
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  )
}
