
import { Outlet } from "react-router"
import { Footer } from "../footer"
import { Navbar } from "../header"


const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout