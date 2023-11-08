import { TextField } from "@mui/material";

export default function Search() {
  return (
    <div style={style.wrapper}>
      <div className="search" style={style.search}>
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>
    </div>
  );
}

const style = {
  wrapper: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    display: "flex",
  },
  search: {
    width: "30%",
  },
};
