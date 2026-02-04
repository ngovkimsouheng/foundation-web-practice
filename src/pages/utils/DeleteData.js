
async function DeleteData(id) {
  const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
    method: "DELETE",
    headers: {
      'Content-Type': 'application/json',
      // Add Authorization header if your API requires authentication
      // 'Authorization': 'Bearer YOUR_TOKEN',
    },
  });
  if (!res.ok) {
    const error = await res.text();
    throw new Error(`Delete failed: ${error}`);
  }
  // Some APIs return empty response for DELETE, handle that
  try {
    return await res.json();
  } catch {
    return { success: true };
  }
}

export default DeleteData;
