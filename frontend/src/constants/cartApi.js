import axios from "axios";

export const getCart = async ({ userId }) => {
  try {
    const response = await axios.get(`http://localhost:5001/cart/${userId}`);
    return response.data.cart;
  } catch (error) {
    console.log(error);
  }
};

export const createCart = async ({ userId, newCart }) => {
  try {
    const response = await axios.post(`http://localhost:5001/cart`, {
      userId: userId,
      cart: newCart,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateCart = async ({ userId, newCart }) => {
  try {
    const response = await axios.put(`http://localhost:5001/cart/${userId}`, {
      userId: userId,
      cart: newCart,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
