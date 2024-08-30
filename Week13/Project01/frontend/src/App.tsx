
import { BrowserRouter, Route,  Routes } from "react-router-dom";
import  Signup  from "./pages/Signup";
import  Signin  from "./pages/Signin";
import { Blog } from "./pages/Blog";
import { Blogs } from "./pages/Blogs";
import { CreateBlog } from "./pages/CreateBlog";
import { Appbar } from "./components/Appbar";
function App() {
  return (
    <>
      <BrowserRouter>
      <Appbar></Appbar>
        <Routes>
          <Route path="/" element={<Blogs/>} />
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/blogs" element={<Blogs></Blogs>}></Route>
          <Route path="/blogs/:id" element={<Blog />}/>
          <Route path="/createNew" element={<CreateBlog/>}/>
        </Routes>
      </BrowserRouter>

    </>
  )
}
export default App;