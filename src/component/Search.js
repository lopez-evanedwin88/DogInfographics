import { TextField } from "@mui/material";
import { runAfter } from "../util/RunAfter";

export default function Search({ onChange }) {
  return (
    <div style={style.wrapper}>
      <div className="search" data-testid={"searchC"}>
        <TextField
          data-testid="search-text-field"
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
          onChange={runAfter(1000, onChange)}
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
};
