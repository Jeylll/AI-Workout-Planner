import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Onboarding from "./pages/Onboarding"
import Profile from "./pages/Profile"
import Auth from "./pages/Auth"
import Account from "./pages/Account"
import NavBar from "./components/layouts/NavBar"
import { NeonAuthUIProvider } from '@neondatabase/neon-js/auth/react'
import { authClient } from "./lib/auth"
import AuthProvider from "./context/AuthContext"

function App() {
  return (
    <NeonAuthUIProvider authClient={authClient} defaultTheme="dark">
      <AuthProvider>
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <NavBar/>
              <main>
                <Routes>
                  <Route index element={<Home />} />
                  <Route path="/onboarding" element={<Onboarding />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/auth/:pathname" element={<Auth />} />
                  <Route path="/account/:pathname" element={<Account />} />
                </Routes>
              </main>
          </div>
        </BrowserRouter> 
      </AuthProvider>
    </NeonAuthUIProvider>
  )
}

export default App
