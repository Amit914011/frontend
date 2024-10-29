import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Dashboard from './components/Admin/Dashboard.jsx'
import SingleCourse from './components/Admin/SingleCourse.jsx'
import ComboCourse from './components/Admin/ComboCourse.jsx'
import DataAnalytics from './components/Admin/DataAnalytics.jsx'
import SingleCourseForm from './components/Admin/SingleCourseForm.jsx'
import SingleCourseView from './components/Admin/SingleCourseView.jsx'
import SingleCourseEdit from './components/Admin/SingleCourseEdit.jsx'


let router=createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<App/>}>

    </Route>
    <Route path='/admin' element={<Layout/>}>
      <Route path='/admin' element={<Dashboard/>}/>
      <Route path='/admin/singlecourse' element={<SingleCourse/>}/>
      <Route path='/admin/combocourse' element={<ComboCourse/>}/>
      <Route path='/admin/dataanalytics' element={<DataAnalytics/>}/>
      <Route path='/admin/singlecourseform' element={<SingleCourseForm/>}/>
      <Route path='/admin/singlecourseview/:id' element={<SingleCourseView/>}/>
      <Route path='/admin/singlecourseedit/:id' element={<SingleCourseEdit/>}/>


    </Route>
    </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>
)
