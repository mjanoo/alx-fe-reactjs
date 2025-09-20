import axios from "axios";

const BASE_URL = "https://api.github.com/search/users?q";

// Advanced search function
export const fetchUserData = async (username, location, minRepos) => {
  try {
    // Build the query string
    let query = "";
    if (username) query += `${username} `;
    if (location) query += `location:${location} `;
    if (minRepos) query += `repos:>=${minRepos} `;

    const response = await axios.get(`${BASE_URL}${encodeURIComponent(query)}`);
    return response.data.items; // The API returns { items: [...] }
  } catch (error) {
    throw new Error("User not found");
  }
};
