import React, { useState, useEffect } from "react";
import "./styles.css";
import Search from "../../component/Search";
import CImageList from "../../component/ImageList";
import { getBreeds } from "../../service/Dog";
import { Alert } from "@mui/material";

export default function Home() {
  const [breeds, setBreeds] = useState([]);
  const [searched, setSearched] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await getBreeds(searched);
      setBreeds(data);
    };
    fetchData().catch(
      <Alert severity="info">
        Opps! Something went wrong. Try again later
      </Alert>,
    );
  }, [searched]);

  return (
    <div className="wrapper">
      <h1>🐶 Dog ℹnfographics 🐾</h1>
      <Search
        onChange={(e) => {
          setSearched(e.target.value);
        }}
      />
      <CImageList breeds={breeds} />
    </div>
  );
}
