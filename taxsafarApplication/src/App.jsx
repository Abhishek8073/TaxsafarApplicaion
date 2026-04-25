import { BrowserRouter, Routes, Route } from 'react-router-dom'
import  {AppLayout}  from './helpers/pageHelpers'

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  )
}

export default App
