import About from "../pages/about"
import Contact from "../pages/contact"
import Landing from "../pages/landing"
import PageNotFound from "../pages/pageNotFound"
import Projects from "../pages/projects"

export const Routs = [
    { path: '/', element: <Landing /> },
    { path: '/about', element: <About /> },
    { path: '/contact', element: <Contact /> },
    { path: '/projects/:param', element: <Projects /> },
    { path: '*', element: <PageNotFound /> },
]