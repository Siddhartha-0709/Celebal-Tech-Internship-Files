import axios from 'axios';
import { useEffect, useState } from 'react';
import Loader from './Loader';

function Home() {
    const [recipes, setRecipes] = useState([]);
    const [loader, showLoader] = useState(false);
    const getRecipes = async () => {
        try {
            showLoader(true);
            const response = await axios.get('http://localhost:3000/api/v1/recipe/get-recipe');
            console.log(response.data);
            setRecipes(response.data);
        } catch (error) {
            console.log(error);
            alert(error.response.data.message);
        }finally{
            showLoader(false);
        }
    }

    useEffect(() => {
        getRecipes();
    }, []);

    return (
        <>
            {loader?(<Loader/>):(<section className="w-full py-12 px-4 md:px-6 h-screen">
                <div className="container mx-auto max-w-6xl grid gap-8">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {recipes.map((recipe, index) => (
                            <div
                                key={index}
                                className="border bg-card text-card-foreground group overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl"
                                data-v0-t="card"
                                onClick={() => {
                                    window.location.href = `/item/${recipe._id}`
                                }}
                            >
                                <img
                                    src={recipe.imageURL}
                                    alt="Recipe Image"
                                    width="600"
                                    height="400"
                                    className="h-48 w-full object-cover transition-opacity group-hover:opacity-50"
                                    style={{ aspectRatio: '600 / 400', objectFit: 'cover' }}
                                />
                                <div className="p-4">
                                    <h3 className="text-xl font-bold">{recipe.title}</h3>
                                    <p className="text-muted-foreground line-clamp-2">{recipe.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>)}
            <footer></footer>
        </>
    )
}

export default Home