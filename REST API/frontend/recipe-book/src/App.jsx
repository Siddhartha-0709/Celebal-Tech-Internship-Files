import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Components/Home'
import Upload from './Components/Upload'
import SignUp from './Components/SignUp'
import Login from './Components/Login'
import Item from './Components/Item'

function App() {
  return (
    <BrowserRouter>
      <header className="bg-background py-4 flex items-center justify-between px-4" style={{borderBottom: '3px solid #000000'}}>
        <Link to={"/"}>
        <h1 className="text-3xl font-bold text-primary">RecipeBook</h1>
        </Link>
        <div className="flex gap-4">
          <Link
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8"
            style={{ backgroundColor: '#F31559', color: 'white' }}
            to={"/signup"}
          >
            Upload Recipes
          </Link>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/item/:id" element={<Item />} />
      </Routes>
      <footer className="bg-primary py-4 text-primary-foreground bg-gray-950 text-white h-24">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center">
            <Link to={"/"}>
              <h1 className="text-xl font-bold">RecipeBook</h1>
            </Link>
            <iframe className="" src="https://lottie.host/embed/22ca8cbe-30df-4f1a-b266-e98838606726/9oYVdSl4XI.json" height="80px" width="80px"></iframe>
          </div>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/sidd-myself/" className="text-sm hover:underline">
              About the Developer
            </a>
          </div>
        </div>
      </footer>
    </BrowserRouter>
  )
}

export default App