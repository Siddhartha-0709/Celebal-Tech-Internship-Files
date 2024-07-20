import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Components/Home'
import Upload from './Components/Upload'
import SignUp from './Components/SignUp'
import Login from './Components/Login'
import Item from './Components/Item'

function App() {
  return (
    <BrowserRouter>
      <header className="bg-background py-4 flex items-center justify-between px-4 lg:px-8 border-b-4 border-black">
  <Link to="/" className="flex items-center">
    <h1 className="text-2xl font-bold text-primary">RecipeeZ</h1>
    <iframe src="https://lottie.host/embed/d1c352ca-99e4-4f94-84df-1501eee40d0e/W0QdqPIfIf.json" height="40" width="80" className="ml-2"></iframe>
  </Link>
  <div className="flex gap-4">
    <Link
      className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-4 sm:px-8"
      style={{ backgroundColor: '#F31559', color: 'white' }}
      to="/signup"
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
              <h1 className="text-xl font-bold">RecipeeZ</h1>
            </Link>
            <iframe src="https://lottie.host/embed/d1c352ca-99e4-4f94-84df-1501eee40d0e/W0QdqPIfIf.json" height="40px" width="80px"></iframe>
            {/* <iframe className="" src="https://lottie.host/embed/22ca8cbe-30df-4f1a-b266-e98838606726/9oYVdSl4XI.json" height="80px" width="80px"></iframe> */}
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