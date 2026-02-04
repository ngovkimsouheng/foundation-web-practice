export default async function Getdata(endpoint) {
  const response = await fetch(`https://api.escuelajs.co/api/v1/${endpoint}`);
  const data = await response.json();
  return data;
}
