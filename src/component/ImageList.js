import React from "react";
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Paper,
} from "@mui/material";
import Image from "mui-image";
import defaultLogo from "../assets/default_dog.png";

export default function CImageList({ breeds = [] }) {
  console.log("dongski", breeds);
  return (
    <div style={style.wrapper}>
      <ImageList>
        <ImageListItem key="Subheader" cols={2}></ImageListItem>
        {breeds.length > 0 &&
          breeds.map((item) => (
            <ImageListItem
              key={
                item.image
                  ? item.image.url
                  : process.env.REACT_APP_BASE_API_HOST
              }
            >
              <Image
                src={
                  item.image
                    ? `${item.image.url}?w=248&fit=crop&auto=format`
                    : defaultLogo
                }
                fit="cover"
                duration={200}
                easing="cubic-bezier(0.7, 0, 0.6, 1)"
                showLoading={false}
                errorIcon={true}
                shift={null}
                distance="200px"
                shiftDuration={900}
                bgColor="inherit"
                showLoading
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
