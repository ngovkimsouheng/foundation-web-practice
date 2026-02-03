export default async function Getdata(endpoint) {
  const response = await fetch(`https://dummyjson.com/${endpoint}`);
  const data = await response.json();
  return data;
}
