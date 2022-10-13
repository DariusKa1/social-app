import {
  Routes,
  Route,
} from "react-router-dom"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import NotFound from "./pages/NotFound"
import Header from "./components/header/Header"
import { useDispatch } from "react-redux"
import { fetchPosts } from "./features/posts/postsSlice"

const App = () => {
  const dispatch = useDispatch()
  dispatch(fetchPosts())

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App;
