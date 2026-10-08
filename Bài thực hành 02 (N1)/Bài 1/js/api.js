const API_URL = 'https://6ac6f593bea0e72cf5c95270.mockapi.io/api/books';

export const getBooks = async () => {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Lỗi tải dữ liệu!");
  return await res.json();
};

export const addBookAPI = async (bookData) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bookData)
  });
  return await res.json();
};

export const deleteBookAPI = async (id) => {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
};