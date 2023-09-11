import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/layout/Navbar'
import Footer from "./components/layout/Footer"
import NotFound from './pages/NotFound'
import About from './pages/About'
import Home from './pages/Home'
import React from 'react'
import { GithubProvider } from "./users/GithubContext";
function App() {
  return (
    <GithubProvider >
      <BrowserRouter>
      <div className="flex flex-col justify-between h-screen w-full">
        <Navbar />
        <main className="container mx-auto pb-16">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/*" element={<NotFound/>}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
    </GithubProvider>
  );
}

export default App;
