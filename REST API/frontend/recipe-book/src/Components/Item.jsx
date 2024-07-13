import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
function Item() {
    const { id } = useParams();
    console.log(id)
    // alert(id);
    const [data, setData] = useState([]);
    const getProductDetails = async () => {
        console.log(`http://localhost:3000/api/v1/recipe/recipe/${id}`);
        const response = await axios.get(`http://localhost:3000/api/v1/recipe/view?id=${id}`);
        console.log(response.data);
        setData(response.data);
    }
    useEffect(() => {
        getProductDetails();
    }, []);
    return (
        <>
            <section className="overflow-hidden h-screen">
                <div className="mx-auto max-w-5xl px-5 py-24">
                    <div className="mx-auto flex flex-wrap items-center lg:w-4/5">
                        <img
                            className="h-64 w-full rounded object-cover lg:h-96 lg:w-1/2"
                            src={data.imageURL}
                        />
                        <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
                            <h2 className="text-sm font-semibold tracking-widest text-gray-500">
                                {/* {data.ti} */}
                            </h2>
                            <h1 className="my-4 text-3xl font-semibold text-black">{data.title}</h1>
                            {/* <div className="my-4 flex items-center">
          <span className="flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="text-yellow-500"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="text-yellow-500"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="text-yellow-500"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="text-yellow-500"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="text-yellow-500"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <span className="ml-3 inline-block text-xs font-semibold">
              4 Reviews
            </span>
          </span>
        </div> */}
                            <p className="leading-relaxed">
                                {data.description}
                            </p>
                            <h3 className="text-2xl font-bold mt-10">Ingredients</h3>
                            <p className="leading-relaxed">
                                {data.ingredients}
                            </p>
                            <h3 className="text-2xl font-bold mt-10">Instructions</h3>
                            <p className="leading-relaxed">
                                {data.instructions}
                            </p>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Item