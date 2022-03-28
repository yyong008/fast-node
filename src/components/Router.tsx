import { Route, Routes } from 'react-router-dom'

import OsPage from '../pages/OsPage'
import ProcessPage from '../pages/ProcessPage'

const AppRouter = (props) => {
  return (
    <Routes>
      <Route path="/" element={<OsPage />}></Route>
      <Route path="/process" element={<ProcessPage />}></Route>
    </Routes>
  )
}

export default AppRouter
