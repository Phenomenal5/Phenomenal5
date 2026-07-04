import { Outlet } from 'react-router-dom'
import RouteScrollRestoration from '../common/RouteScrollRestoration'
import ScrollToTop from '../common/ScrollToTop'
import Footer from './Footer'
import Navbar from '../navigation/Navbar'

function Layout() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]">
      <Navbar />
      <main className="page-shell">
        <RouteScrollRestoration />
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default Layout
