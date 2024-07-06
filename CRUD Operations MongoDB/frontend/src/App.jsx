// import './App.css'
import Login from './Components/Login';
import SignUp from './Components/Signup'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todo from './Components/Todo';
import HomePage from './Components/HomePage';
import { Link } from 'react-router-dom';
function App() {

  return (
    <>
      <BrowserRouter>
        <header className="bg-primary py-4 text-primary-foreground bg-gray-950 border-b text-white">
          <div className="container mx-auto px-4 flex items-center">
            <Link to={"/"}>
              <h1 className="text-xl font-bold">TaskDone</h1>
            </Link>
            {/* <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMS43MTQyODU3MTQyODU3MTQyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNpcmNsZS1jaGVjay1iaWciPjxwYXRoIGQ9Ik0yMiAxMS4wOFYxMmExMCAxMCAwIDEgMS01LjkzLTkuMTQiLz48cGF0aCBkPSJtOSAxMSAzIDNMMjIgNCIvPjwvc3ZnPg==" alt="" /> */}
            <iframe className='absolute left-24' src="https://lottie.host/embed/22ca8cbe-30df-4f1a-b266-e98838606726/9oYVdSl4XI.json" height={"80px"} width={"80px"}></iframe>
          </div>
          {/* <p className="text-lg ml-4">Helping you stay to productive !</p> */}
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
        <footer className="bg-primary py-4 text-primary-foreground bg-gray-950 text-white h-24">
  <div className="container mx-auto px-4 flex items-center justify-between">
    <div className="flex items-center">
      <Link to={"/"}>
        <h1 className="text-xl font-bold">TaskDone</h1>
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
    </>
  )
}

export default App
