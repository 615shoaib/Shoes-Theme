import axios from "axios";
import { apikesy } from "../../../Redux/Api/apikesy";
import { fetchCategories } from "./Category"; 

const fetchCategoriesFromApi = async(dispatch) => {
  
    try {
      const response = await axios.get(
        "https://localhost/ZainSite/wp-json/wc/v3/products/categories",
        {
          headers: {
            Authorization: `Basic ${apikesy()}`,
            "content-type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        dispatch(fetchCategories(response.data)); 
      } else {
        throw new Error(`Failed to fetch categories: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
      throw error;
    }
};

export default fetchCategoriesFromApi;
