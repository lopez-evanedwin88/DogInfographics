import {
  render,
  screen,
  act,
  waitFor,
  fireEvent,
} from "@testing-library/react";
import "@testing-library/jest-dom";

import * as dogAPI from "../service/Dog";
import * as runAfter from "../util/RunAfter";
import Home from "../pages/home";

const dummyBreeds = [
  {
    id: 1,
    name: "Dummy dog name 1",
    image: {
      url: "1-",
    },
    life_span: false,
    weight: {
      metric: 10,
    },
  },
  {
    id: 2,
    name: "Dummy dog name 2",
    image: {
      url: "2-",
    },
    life_span: false,
    weight: {
      metric: 10,
    },
  },
  {
    id: 3,
    name: "Dummy dog name 3",
    life_span: false,
    weight: {
      metric: 10,
    },
  },
];

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

describe("DogInfo", () => {
  //
  it("Check if search and image list component are successfully loaded", () => {
    // render the component on virtual dom
    render(<Home />);

    const searchComponent = screen.getByTestId("searchC");
    const imgListComponent = screen.getByTestId("imgListC");

    //assert the expected result
    expect(searchComponent).toBeVisible();
    expect(imgListComponent).toBeVisible();
  });

  it("Call DogAPI and check if it returns a response data", async () => {
    const mockGetBreeds = jest.spyOn(dogAPI, "getBreeds");
    mockGetBreeds.mockResolvedValue(dummyBreeds);
    await act(async () => render(<Home />));
    expect(mockGetBreeds).toHaveBeenCalled();
  });

  it("Check if it display a list of dog with images", async () => {
    const mockGetBreeds = jest.spyOn(dogAPI, "getBreeds");
    mockGetBreeds.mockResolvedValue(dummyBreeds);
    await act(async () => render(<Home />));
    const breeds = await waitFor(() => screen.findAllByTestId("dogImg"));

    expect(breeds).toHaveLength(3);
  });

  it("Check if the dog list had no images", async () => {
    const mockGetBreeds = jest.spyOn(dogAPI, "getBreeds");
    mockGetBreeds.mockResolvedValue(dummyBreeds);
    await act(async () => render(<Home />));
    const breeds = await waitFor(() => screen.findAllByTestId("dogDefault"));

    expect(breeds).toHaveLength(1);
  });

  it("Check debounce delay 1 second is being called", async () => {
    const mockDebounce = jest.spyOn(runAfter, "runAfter");
    await act(async () => render(<Home />));
    const field = screen
      .getByTestId("search-text-field")
      .querySelector("input");
    expect(field).toBeInTheDocument();

    fireEvent.change(field, { target: { value: "hound" } });

    delay(1000);
    expect(mockDebounce).toHaveBeenCalled();
  });
});
