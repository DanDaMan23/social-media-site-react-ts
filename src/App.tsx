import { FC } from "react"
import { Routes, Route } from "react-router-dom"

const App: FC = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/login' element={<>Login</>} />
        <Route path='/register' element={<>Register</>} />
        <Route path='/home' element={<>Login Success</>} />
      </Routes>
    </div>
  )
}

export default App
