import { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Loader from './Loader';
const Upload = () => {
    const location = useLocation();
    const { state } = location;
    // console.log(state);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
    const [image, setImage] = useState(null);
    const [video, setVideo] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const [recipes, setRecipes] = useState([]);

    const getUserRecipe = async () => {
        try {
            const response = await axios.post('https://recipebook-loih.onrender.com/api/v1/user/get-recipe', { email: state.email });
            console.log(response.data);
            setRecipes(response.data);
        } catch (error) {
            console.log(error);
            alert(error.response.data.message);
        }
    }
    const deleteRecipe = async (id) => {
        try {
            const response = await axios.post('https://recipebook-loih.onrender.com/api/v1/user/delete-recipe', {id});
            console.log(response.data);
            alert(response.data.message);
            getUserRecipe();
        } catch (error) {
            console.log(error);
            alert(error.response.data.message);
        }
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!title || !description || !ingredients || !instructions || !image || !video || !state) {
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
            console.log(title, description, ingredients, instructions, image, video, state.email);
            try {
                console.log('Sending');
                const response = await axios.post('https://recipebook-loih.onrender.com/api/v1/recipe/create', formData);
                console.log(response.data);
                getUserRecipe();
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

    useEffect(() => {
        getUserRecipe();
    }, []);


    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
                    <div className="bg-background rounded-lg shadow-lg p-4 sm:p-6">
                        <h2 className="text-xl sm:text-2xl font-bold mb-2">Upload Your Own Recipe</h2>
                        <hr className="mb-4" />
                        <form className="grid gap-4" onSubmit={handleSubmit}>
                            <div className="grid gap-2">
                                <label className="text-sm font-medium leading-none" htmlFor="title">Title</label>
                                <input
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                    id="title"
                                    placeholder="Enter recipe title"
                                    value={title}
                                    onChange={(event) => setTitle(event.target.value)}
                                />
                            </div>
                            <div className="grid gap-2">
                                <label className="text-sm font-medium leading-none" htmlFor="description">Description</label>
                                <textarea
                                    className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                    id="description"
                                    placeholder="Enter recipe description"
                                    value={description}
                                    onChange={(event) => setDescription(event.target.value)}
                                ></textarea>
                            </div>
                            <div className="grid gap-2">
                                <label className="text-sm font-medium leading-none" htmlFor="ingredients">Ingredients</label>
                                <textarea
                                    className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                    id="ingredients"
                                    placeholder="Enter recipe ingredients"
                                    value={ingredients}
                                    onChange={(event) => setIngredients(event.target.value)}
                                ></textarea>
                            </div>
                            <div className="grid gap-2">
                                <label className="text-sm font-medium leading-none" htmlFor="instructions">Cooking Instructions</label>
                                <textarea
                                    className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                    id="instructions"
                                    placeholder="Enter cooking instructions"
                                    value={instructions}
                                    onChange={(event) => setInstructions(event.target.value)}
                                ></textarea>
                            </div>
                            <div className="grid gap-2">
                                <label className="text-sm font-medium leading-none" htmlFor="image">Image</label>
                                <input
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                    type="file"
                                    id="image"
                                    onChange={(event) => setImage(event.target.files[0])}
                                />
                                <label className="text-sm font-medium leading-none" htmlFor="video">Video URL</label>
                                <input
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                    type="text"
                                    id="video"
                                    onChange={(event) => setVideo(event.target.value)}
                                />
                            </div>
                            <div className="grid gap-2">
                                <button
                                    className="w-full rounded-md bg-black text-white py-2 px-4 text-sm font-medium transition-colors hover:bg-primary/10"
                                    type="submit"
                                >
                                    Upload
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="overflow-y-auto bg-background rounded-lg shadow-lg p-4 sm:p-6">
                        <h1 className="text-xl sm:text-2xl font-bold mb-2">Your Uploaded Recipes</h1>
                        <hr className="mb-4" />
                        {!recipes ? (
                            <p className="text-center text-lg mt-10">No recipes uploaded yet!</p>
                        ) : (
                            <div>
                                {recipes?.map((recipe, index) => (
                                    <div key={index} className="flex flex-col sm:flex-row items-start mb-4">
                                        <div className="w-full sm:w-1/2">
                                            <img src={recipe.imageURL} alt="" className="w-full h-auto rounded-md" />
                                        </div>
                                        <div className="w-full sm:w-1/2 pl-0 sm:pl-4 mt-4 sm:mt-0">
                                            <h2 className="text-lg sm:text-xl font-bold">{recipe.title}</h2>
                                            <p className="text-sm" title={recipe.description}>
                                                {recipe.description.substring(0, 200) + (recipe.description.length > 100 ? '...' : '')}
                                            </p>
                                            <button
                                                className="text-sm bg-red-500 text-white py-2 px-4 mt-4 rounded-md hover:bg-red-600"
                                                onClick={() => {
                                                    deleteRecipe(recipe._id);
                                                }}
                                                style={{marginLeft: window.innerWidth < 720 ? "310px" : "340px"}}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

            )
            }
        </>
    )
}

export default Upload