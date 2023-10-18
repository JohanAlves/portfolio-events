const DB_URL = process.env.FIREBASE_URL;

export async function getAllEvents() {
  const response = await fetch(DB_URL);
  const data = await response.json();
  const formattedData = [];

  for (const key in data) {
    formattedData.push(data[key]);
  }

  return formattedData;
}

export async function getFeaturedEvents() {
  const response = await fetch(DB_URL + '?orderBy="isFeatured"&equalTo=true');
  const data = await response.json();
  const formattedData = [];

  for (const key in data) {
    formattedData.push(data[key]);
  }

  return formattedData;
}

export async function getEventById(id) {
  const response = await fetch(`${DB_URL}?orderBy="id"&equalTo=${id}`);
  const data = await response.json();
  /* const formattedData = [];
  
    for (const key in data) {
      formattedData.push(data[key]);
    } */

  return data;
}
