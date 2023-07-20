import './styles/globals.css'
import { Inter } from 'next/font/google'
import styles from './styles/layout.module.css'
import Navbar from './navbar';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'UT-IT Reporter',
  description: 'Generating UT and IT reports for IMR and IMP projects',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="stylesheet" href="./node_modules/bootstrap/dist/css/bootstrap.min.css" />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <div id={styles.copyRight}>
          <p>© Copyright Huy Vo</p>
        </div>
      </body>
    </html>
  )
}
