import React from "react";
import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";

export default function CImageList({ breeds = [] }) {
  return (
    <div style={style.wrapper}>
      <ImageList>
        <ImageListItem key="Subheader" cols={2}></ImageListItem>
        {breeds.length > 0 &&
          breeds.map((item) => (
            <ImageListItem key={item.image.url}>
              <img
                srcSet={`${item.image.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.image.url}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.name}
                subtitle={
                  <div>
                    <div>Height: {item.weight.metric} metric</div>
                    <div>Lifespan: {item.life_span}</div>
                  </div>
                }
              />
            </ImageListItem>
          ))}
      </ImageList>
    </div>
  );
}

const style = {
  wrapper: {
    textAlign: "start",
    display: "inline-flex",
    maxWidth: "80%",
  },
};
