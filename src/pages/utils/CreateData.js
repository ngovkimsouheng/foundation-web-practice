async function CreateData(payload) {
  const res = await fetch("https://api.escuelajs.co/api/v1/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  return await res.json();
}
export default CreateData;
