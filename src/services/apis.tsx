import axios from "axios";

export const getDebitCards = async () => {

  try {
    const response = await axios.get('/dummyData.json',{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      });
    return response.data;
  } catch (error) {
    throw error;
  }
};