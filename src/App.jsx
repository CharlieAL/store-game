import { BrowserRouter, Route, Routes, } from 'react-router-dom'

import Home from './page/Home'
import Layout from './components/Layout'
import News from './page/News'
import Streams from './page/Streams'
import GameStore from './page/Gamestore'

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path='/News'
          element={
            <Layout>
              <News />
            </Layout>
          }
        />
        <Route
          path='/GameStore'
          element={
            <Layout>
              <GameStore />
            </Layout>
          }
        />
        <Route
          path='/Streams'
          element={
            <Layout>
              <Streams />
            </Layout>
          }
        />
        <Route path='*' element={<h1>Not Found 404</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
