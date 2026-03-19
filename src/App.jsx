import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar   from './components/Navbar.jsx'
import Footer   from './components/Footer.jsx'
import Home     from './pages/Home.jsx'
import Awards   from './pages/Awards.jsx'
import Authors  from './pages/Authors.jsx'
import Services from './pages/Services.jsx'
import About    from './pages/About.jsx'
import Blog     from './pages/Blog.jsx'
import Contact  from './pages/Contact.jsx'
import Admin    from './pages/Admin.jsx'
import NotFound from './pages/NotFound.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/"         element={<Home />} />
            <Route path="/awards"   element={<Awards />} />
            <Route path="/authors"  element={<Authors />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about"    element={<About />} />
            <Route path="/blog"     element={<Blog />} />
            <Route path="/contact"  element={<Contact />} />
            <Route path="/admin"    element={<Admin />} />
            <Route path="*"         element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
