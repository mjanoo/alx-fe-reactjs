import axios from "axios";

const BASE_URL = "https://api.github.com";

// Advanced search function
export const fetchAdvancedUserData = async ({ username, location, repos }) => {
  try {
    // Build the query string
    let query = "";
    if (username) query += `${username} `;
    if (location) query += `location:${location} `;
    if (repos) query += `repos:>=${repos}`;

    const response = await axios.get(
      `${BASE_URL}/search/users?q=${encodeURIComponent(query)}`
    );

    return response.data.items; // The API returns { items: [...] }
  } catch (error) {
    throw new Error("User not found");
  }
};
