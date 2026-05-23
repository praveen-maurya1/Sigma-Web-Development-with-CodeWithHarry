import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';

function App() {
  const [data, setdata] = useState([])

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/posts";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        // console.log(json);
        setdata(json)
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  },[])
  // console.log(data)

  return (
    <>
      <Navbar />

      <div className="flex w-[85vw] flex-wrap m-auto">
        {data.map((item) => (
          <Card key={item.id} userData={item} />
        ))}
      </div>
    </>
  )

}

export default App
