export const fetchMovies = async () => {
  const API_KEY = 'c27a106';
  const response = await fetch(`https://www.omdbapi.com/?s=horror&apikey=${API_KEY}`);
  const data = await response.json();
  return data.Search || [];
};
