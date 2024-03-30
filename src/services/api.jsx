// Create the fetchCards function to send a request to the Pixabay API and returns an array of image objects.
const API_KEY = '43151602-eb1f1bcc5753c3756917fcefc'; // Replace 'your_api_key' with your actual Pixabay API key
const BASE_URL = `https://pixabay.com/api/?key=${API_KEY}&q=nature&image_type=photo&per_page=12`;
// Fetches an array of image objects from the Pixabay API
const fetchCards = async () => {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    const cards = data.hits.map(hit => ({
      id: hit.id,
      imageUrl: hit.webformatURL
    }));
    return cards;
  } catch (error) {
    console.error('Error fetching cards:', error);
    return [];
  }
};
// Export the fetchCards function
export { fetchCards };
