import React from 'react'
import Footer from './footer'
import Header from './header'
import Scrollup from './scrollup'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="grow">
        {children}
      </main>
      <Scrollup />
      <Footer />
    </div>
  )
}

export default Layout
