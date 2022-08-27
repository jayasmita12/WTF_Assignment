import React from 'react'
import {Routes,Route} from "react-router-dom"
import Footer from './Footer'
import Navbar from './Navbar'
import { NearestGym } from './NearestGym'

export const AllRoutes = () => {
  return (
    <div>
       <Navbar/>
        <Routes>
            <Route path="/"></Route>
        <Route path="/nearesat_gym" element={<NearestGym/>}></Route>
        </Routes>
        <Footer/>
    </div>
  )
}
