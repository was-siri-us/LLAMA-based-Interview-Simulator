import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/clerk-react"
import Dashboard from './pages/Dashboard'
import TopicDetail from './components/TopicComponent'
import Performance from './pages/Performance'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Interview from './pages/Interview'
import Results from "./pages/Results"
import { Toaster } from "@/components/ui/toaster"
import Archive from "./pages/Archive"
import Home from './pages/Home';
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* <Route index path="/" element={<Home />} /> */}
      <Route index path="/" element={<><SignedIn><Dashboard /></SignedIn><SignedOut><RedirectToSignIn /></SignedOut></>} />
      <Route path="/custom" element={<><SignedIn><TopicDetail /></SignedIn><SignedOut><RedirectToSignIn /></SignedOut></>} />
      <Route path="/frontend" element={<><SignedIn><TopicDetail /></SignedIn><SignedOut><RedirectToSignIn /></SignedOut></>} />
      <Route path="/backend" element={<><SignedIn><TopicDetail /></SignedIn><SignedOut><RedirectToSignIn /></SignedOut></>} />
      <Route path="/fullstack" element={<><SignedIn><TopicDetail /></SignedIn><SignedOut><RedirectToSignIn /></SignedOut></>} />
      <Route path="/devops" element={<><SignedIn><TopicDetail /></SignedIn><SignedOut><RedirectToSignIn /></SignedOut></>} />
      <Route path="/soft-test" element={<><SignedIn><TopicDetail /></SignedIn><SignedOut><RedirectToSignIn /></SignedOut></>} />
      <Route path="/proj-man" element={<><SignedIn><TopicDetail /></SignedIn><SignedOut><RedirectToSignIn /></SignedOut></>} />
      <Route path="/prod-man" element={<><SignedIn><TopicDetail /></SignedIn><SignedOut><RedirectToSignIn /></SignedOut></>} />
      <Route path="/ui-ux" element={<><SignedIn><TopicDetail /></SignedIn><SignedOut><RedirectToSignIn /></SignedOut></>} />
      <Route path="/mark-spe" element={<><SignedIn><TopicDetail /></SignedIn><SignedOut><RedirectToSignIn /></SignedOut></>} />
      <Route path="/interview" element={<><SignedIn><Interview /></SignedIn><SignedOut><RedirectToSignIn /></SignedOut></>} />
      <Route path="/result" element={<><SignedIn><Results /></SignedIn><SignedOut><RedirectToSignIn /></SignedOut></>} />
      <Route path="/archive" element={<><SignedIn><Archive /></SignedIn><SignedOut><RedirectToSignIn /></SignedOut></>} />
      <Route path="/performance" element={<><SignedIn><Performance /></SignedIn><SignedOut><RedirectToSignIn /></SignedOut></>} />
      {/* <Route index path="/" element={<Results />} /> */}
      {/* <Results /> */}
    </>
  )
)

const App = () => {
  return (
    <>
      <Toaster />
      <RouterProvider router={router} />
    </>
  )
}

export default App
