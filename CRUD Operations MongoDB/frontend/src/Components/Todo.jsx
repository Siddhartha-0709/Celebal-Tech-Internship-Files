/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Loader from "./Loader";
import axios from "axios";

const Todo = () => {
    const location = useLocation();
    const { state } = location;
    console.log(state);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [loader, showLoader] = useState(false);
    const [todo, setTodo] = useState([]);

    const handleAddTodo = async (event) => {
        event.preventDefault();
        console.log("Title:", title);
        console.log("Description:", description);
        showLoader(true);
        try {
            const response = await axios.post('https://lobster-app-lh22k.ondigitalocean.app/api/todo/v1/todo/create', {
                title,
                description,
                userEmail: state.email
            })
            console.log(response);
            alert("Todo created successfully");
            await getTodo();
        } catch (error) {
            console.log(error);
            alert(error.response.data.message);
        } finally {
            showLoader(false);
        }
        // Reset form fields
        setTitle("");
        setDescription("");

    };

    const getTodo = async () => {
        showLoader(true);
        try {
            const response = await axios.post('https://lobster-app-lh22k.ondigitalocean.app/api/todo/v1/todo/get', {
                userEmail: state.email
            })
            console.log(response);
            setTodo(response.data.todos);
        } catch (error) {
            console.log(error);
            alert(error.response.data.message);
        } finally {
            showLoader(false);
        }
    }

    const handleCompletePressed = async (id) => {
        showLoader(true);
        console.log('Modifying todo: ', id);
        try {
            const response = await axios.post('https://lobster-app-lh22k.ondigitalocean.app/api/todo/v1/todo/updatestatus', {
                id: id
            })
            console.log(response);
            await getTodo();
        } catch (error) {
            console.log(error);
            alert(error.response.data.message);
        } finally {
            showLoader(false);
        }
    }

    const handleDeletePressed = async (id) => {
        showLoader(true);
        console.log('Deleting todo: ', id);
        try {
            const response = await axios.post('https://lobster-app-lh22k.ondigitalocean.app/api/todo/v1/todo/delete', {
                id: id
            })
            console.log(response);
            await getTodo();
        } catch (error) {
            console.log(error);
            alert(error.response.data.message);
        } finally {
            showLoader(false);
        }
    }
    useEffect(() => {
        getTodo();
    }, []);
    return (
        <div className="flex min-h-screen flex-col bg-white text-black">
            
            {loader ? (<Loader />) : (<main className="flex-1 container mx-auto px-4 py-8">
                <h1 className="text-3xl">Hello {state.name.substr(0, state.name.indexOf(" "))},</h1>
                <h1 className="text-lg italic ">"The key is not to prioritize what's on your schedule, but to schedule your priorities." - Stephen Covey </h1>
                <br />
                <br />
                <br />
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div>
                        <h2 className="mb-4 text-xl font-bold">Your Tasks</h2>
                        <div className="space-y-4">
                            {todo.length > 0 ? (
                                todo.map((item) => (
                                    <div className="rounded-md border bg-card p-4 shadow-sm" key={item._id}>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h3 className="text-lg font-bold text-black">{item.title}</h3>
                                                <p className="text-muted-foreground text-gray-950">{item.description}</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <button className="w-20 inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 rounded-md px-3 text-black ml-1 " onClick={() => { handleCompletePressed(item._id) }}>
                                                    {item.completed ? (<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMGZmMmEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaXJjbGUtY2hlY2siPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIi8+PHBhdGggZD0ibTkgMTIgMiAyIDQtNCIvPjwvc3ZnPg=="/>) : (<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMGZmMmEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaXJjbGUteCI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiLz48cGF0aCBkPSJtMTUgOS02IDYiLz48cGF0aCBkPSJtOSA5IDYgNiIvPjwvc3ZnPg=="  />)}
                                                </button>
                                                <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 rounded-md px-3 bg-red-500 text-black hover:bg-red-600" onClick={() => { handleDeletePressed(item._id) }}>
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="text-center text-lg font-medium">
                                    No tasks added yet !
                                </p>
                            )}
                        </div>
                    </div>
                    <div>
                        <h2 className="mb-4 text-xl font-bold">Add a New Task</h2>
                        <div className="rounded-md border bg-card p-4 shadow-sm">
                            <form onSubmit={handleAddTodo} className="space-y-4 text-black">
                                <div>
                                    <label
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        htmlFor="title"
                                    >
                                        Title
                                    </label>
                                    <input
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        id="title"
                                        placeholder="Enter a title"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        name="title"
                                    />
                                </div>
                                <div>
                                    <label
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        htmlFor="description"
                                    >
                                        Description
                                    </label>
                                    <textarea
                                        className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        id="description"
                                        name="description"
                                        placeholder="Enter a description"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    ></textarea>
                                </div>
                                <button
                                    className="bg-black text-white inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 h-10 px-4 py-2 w-full bg-black text-white hover:bg-black/80"
                                    type="submit"
                                >
                                    Add Todo
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-center border-t mt-4">
                    <iframe src="https://lottie.host/embed/0d5c6341-f251-47b2-8cac-9ee27c7c4731/bvKXvAyuHc.json" height={"400px"} width={"400px"}></iframe>
                </div>
            </main>)}
        </div>
    );
};

export default Todo;
