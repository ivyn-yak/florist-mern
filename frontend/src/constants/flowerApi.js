import axios from "axios";

export const getFlower = async ( id ) => {
  try {
    const response = await axios.get(
      `http://localhost:5001/flowers/${id}`
    );
    return response.data.flower;
  } catch (error) {
    console.log(error);
  }
};
