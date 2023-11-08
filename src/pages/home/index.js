import React, { useState, useEffect } from "react";
import "./styles.css";
import Search from "../../component/Search";
import CImageList from "../../component/ImageList";
import { getBreeds } from "../../service/Dog";

export default function Home() {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getBreeds("hound");
      setBreeds(data);
    };
    fetchData().catch(console.error);
  }, []);

  return (
    <div className="Test">
      <h1>🐶 Dog ℹnfographics 🐾</h1>
      <Search />
      <CImageList breeds={breeds} />
    </div>
  );
}
