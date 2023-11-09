const baseOptions = {
  headers: {
    "x-api-key": process.env.REACT_APP_BASE_API_KEY,
  },
};

export const getBreeds = async (name = "", page = 0) => {
  const options = {
    ...baseOptions,
    method: "GET",
  };

  const composeURL = name === "" ? "/breeds?" : `/breeds/search?q=${name}&`;

  try {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_API_URL}${composeURL}limit=10&page=${page}`,
      options,
    );
    // network error in the 4xx–5xx range
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    //Fetching image
    // data.map((obj) => ({
    //   ...obj,
    //   url: getDogImage(obj.reference_image_id),
    // }));

    return data;
  } catch (error) {
    return error;
  }
};

const getDogImage = async (referenceImageUrl = "") => {
  const options = {
    ...baseOptions,
    method: "GET",
  };

  try {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_API_URL}/images/${referenceImageUrl}`,
      options,
    );
    // network error in the 4xx–5xx range
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data.url;
  } catch (error) {
    return error;
  }
};
