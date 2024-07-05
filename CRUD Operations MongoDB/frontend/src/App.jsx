// import './App.css'
import Login from './Components/Login';
import SignUp from './Components/Signup'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todo from './Components/Todo';

function App() {

  return (
    <>
      <BrowserRouter>
        <header className="bg-primary py-4 text-primary-foreground bg-gray-950 border-b text-white">
          <div className="container mx-auto px-4 flex items-center">
            <h1 className="text-xl font-bold">TaskDone</h1>
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMS43MTQyODU3MTQyODU3MTQyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNpcmNsZS1jaGVjay1iaWciPjxwYXRoIGQ9Ik0yMiAxMS4wOFYxMmExMCAxMCAwIDEgMS01LjkzLTkuMTQiLz48cGF0aCBkPSJtOSAxMSAzIDNMMjIgNCIvPjwvc3ZnPg==" alt="" />
          </div>
          {/* <p className="text-lg ml-4">Helping you stay to productive !</p> */}
        </header>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
