import Feed from "./components/Feed"
import Header from "./components/Header"
import { AppContext } from "./context/contextApi"
import { BrowserRouter as Router, Routes,Route } from "react-router-dom"

const App = () => {
  return (
      <AppContext>
        <Router>
           <div className="flex flex-col h-full">
               <Header />
               <Routes>
                   <Route path="/" element={<Feed />} />
               </Routes>
           </div>
        </Router>
      </AppContext>
  )
}

export default App