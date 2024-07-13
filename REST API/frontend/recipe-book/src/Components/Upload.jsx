import  { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Loader from './Loader';
const Upload = () => {
    const location = useLocation();
    const { state } = location;
    console.log(state);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
    const [image, setImage] = useState(null);
    const [video, setVideo] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!title || !description || !ingredients || !instructions || !image || !video) {
            alert('Please fill all the fields');
            return;
        }
        else {
            setIsLoading(true);
            const formData = new FormData();
            formData.append('title', title);
            formData.append('description', description);
            formData.append('ingredients', ingredients);
            formData.append('instructions', instructions);
            formData.append('image', image);
            formData.append('video', video);
            formData.append('postedBy', state.email);
            console.log(title, description, ingredients, instructions, image, video);
            try {
                const response = await axios.post('http://localhost:3000/api/v1/recipe/create', formData);
                console.log(response.data);
            } catch (error) {
                alert(error.response.data.message);
                console.log(error);
            }
        }
        setIsLoading(false);
        setTitle('');
        setDescription('');
        setIngredients('');
        setInstructions('');
        setImage(null);
        setVideo('');
    };

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <div className="bg-background rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl font-bold mb-4">Upload Your Own Recipe</h2>
                    <form className="grid gap-4" onSubmit={handleSubmit}>
                        <div className="grid gap-2">
                            <label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                htmlFor="title"
                            >
                                Title
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                id="title"
                                placeholder="Enter recipe title"
                                value={title}
                                onChange={(event) => setTitle(event.target.value)}
                            />
                        </div>
                        <div className="grid gap-2">
                            <label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                htmlFor="description"
                            >
                                Description
                            </label>
                            <textarea
                                className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                id="description"
                                placeholder="Enter recipe description"
                                value={description}
                                onChange={(event) => setDescription(event.target.value)}
                            ></textarea>
                        </div>
                        <div className="grid gap-2">
                            <label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                htmlFor="ingredients"
                            >
                                Ingredients
                            </label>
                            <textarea
                                className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                id="ingredients"
                                placeholder="Enter recipe ingredients"
                                value={ingredients}
                                onChange={(event) => setIngredients(event.target.value)}
                            ></textarea>
                        </div>
                        <div className="grid gap-2">
                            <label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                htmlFor="instructions"
                            >
                                Cooking Instructions
                            </label>
                            <textarea
                                className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                id="instructions"
                                placeholder="Enter cooking instructions"
                                value={instructions}
                                onChange={(event) => setInstructions(event.target.value)}
                            ></textarea>
                        </div>
                        <div className="grid gap-2">
                            <label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                htmlFor="image"
                            >
                                Image
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                type="file"
                                id="image"
                                onChange={(event) => setImage(event.target.files[0])}
                            />
                            <label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                htmlFor="image"
                            >
                                Video URL
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                type="text"
                                id="video"
                                onChange={(event) => setVideo(event.target.value)}
                            />
                        </div>


                        <div className="grid gap-2">
                            <button
                                className="w-full rounded-md bg-black text-white py-2 px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/10"
                                type="submit"
                            >
                                Upload
                            </button>
                        </div>
                    </form>
                </div>
            )
            }
        </>
    )
}

export default Upload