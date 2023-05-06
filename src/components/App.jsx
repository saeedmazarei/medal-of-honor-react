import { Route, Routes } from 'react-router-dom'

import '../style/App.scss'
import Register from './Register'
import Landing from './Landing'
import hashContext from './HashContext'

function App() {
  const queryParams = new URLSearchParams(window.location.search)
  const hashId = queryParams.get("player_id");
  const urlData = {
    appVersion: queryParams.get('app-version'),
    isAndroid: queryParams.get('is_android'),
    appType: queryParams.get('application_type')
  }
  return(
    <hashContext.Provider value={hashId}>
    <Routes>
      <Route path='/' element={<Landing urlData={urlData} />}></Route>
      <Route path='/register' element={<Register urlData={urlData} />}></Route>
    </Routes>
    </hashContext.Provider>
  )
}

export default App
