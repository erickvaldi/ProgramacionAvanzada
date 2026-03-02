export const fetchHabits = async () => {
  const response = await fetch("http://localhost:3001/api/habitos");
  
  if (!response.ok) {
    throw new Error("Failed to fetch habits");
  }

  return response.json();
};