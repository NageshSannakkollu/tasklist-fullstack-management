import {BrowserRouter,Routes,Route} from "react-router-dom"
import HomePage from "./components/HomePage"
import AddTaskPage from "./components/AddTaskPage"
import UpdateTaskPage from "./components/UpdateTaskPage"
import LoginPage from "./components/LoginPage"
import RegisterUser from "./components/RegisterUser"
import AboutPage from "./components/AboutPage"
import ContactPage from "./components/ContactPage"
import NotFound from "./components/NotFound"

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<HomePage/> } />
      <Route exact path="/about" element={<AboutPage/> } />
      <Route exact path="/contact" element={<ContactPage/> } />
      <Route exact path="/login" element={<LoginPage/>}/>
      <Route exact path="/signup" element={<RegisterUser/>}/>
      <Route exact path="/add-task" element={<AddTaskPage/>} />
      <Route exact path="/update-task/:id" element={<UpdateTaskPage/>}/>
      <Route path="*" element={<NotFound/>} />
    </Routes>
  </BrowserRouter>
)

export default App 