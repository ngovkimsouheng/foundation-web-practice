async function UpdateData(id, updatedProduct) {
  const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      // 'Authorization': 'Bearer YOUR_TOKEN', // Uncomment if needed
    },
    body: JSON.stringify(updatedProduct),
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error(`Update failed: ${error}`);
  }

  return await res.json();
}

export default UpdateData;
