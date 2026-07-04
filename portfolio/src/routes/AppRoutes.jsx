import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from '../components/layout/Layout'

const HomePage = lazy(() => import('../pages/HomePage'))
const AboutPage = lazy(() => import('../pages/AboutPage'))
const ProjectsPage = lazy(() => import('../pages/ProjectsPage'))
const ExperiencePage = lazy(() => import('../pages/ExperiencePage'))
const EngineeringPage = lazy(() => import('../pages/EngineeringPage'))
const LabsPage = lazy(() => import('../pages/LabsPage'))
const ContactPage = lazy(() => import('../pages/ContactPage'))
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'))

function PageFallback() {
  return <div className="min-h-[60vh] bg-[var(--color-bg-primary)]" aria-label="Loading page" />
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'projects', element: <ProjectsPage /> },
      { path: 'experience', element: <ExperiencePage /> },
      { path: 'engineering', element: <EngineeringPage /> },
      { path: 'labs', element: <LabsPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])

function AppRoutes() {
  return (
    <Suspense fallback={<PageFallback />}>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default AppRoutes
