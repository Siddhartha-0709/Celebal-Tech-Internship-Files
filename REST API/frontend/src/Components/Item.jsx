import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Item() {
  const { id } = useParams();
  const [data, setData] = useState({});

  const getProductDetails = async () => {
    try {
      const response = await axios.get(`https://recipebook-loih.onrender.com/api/v1/recipe/view?id=${id}`);
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getProductDetails();
  }, [id]);

  return (
    <>
      <section className="w-full">
        <div className="container mx-auto px-5 py-24">
          <div className="w-full">
            <img
              className="h-full w-full rounded object-cover lg:h-96"
              src={data.imageURL}
              alt={data.title}
            />
          </div>
          <div className="mt-6 w-full">
            <h2 className="text-sm font-semibold tracking-widest text-gray-500">
              {/* Optional subheading */}
            </h2>
            <h1 className="my-4 text-3xl font-semibold text-black">{data.title}</h1>
            <p className="leading-relaxed">{data.description}</p>
            <h3 className="text-2xl font-bold mt-10">Ingredients</h3>
            <p className="leading-relaxed">{data.ingredients}</p>
            <h3 className="text-2xl font-bold mt-10">Instructions</h3>
            <p className="leading-relaxed">{data.instructions}</p>
            <h3 className="text-2xl font-bold mt-10">Video</h3>
            {/* <p className="leading-relaxed">Link to video: {data.videoURL}</p> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default Item;
