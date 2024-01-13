const DB_URL = process.env.FIREBASE_URL;

export async function getAllEvents() {
  const response = await fetch(DB_URL);
  const data = Object.values(await response.json());

  for (let i = 0; i < data.length; i++) {
    const newDate = updateEventsDate(data[i]);
    data[i].date = newDate;
  }

  return data;
}

export async function getFeaturedEvents() {
  const response = await fetch(DB_URL + '?orderBy="isFeatured"&equalTo=true');
  const data = Object.values(await response.json());

  for (let i = 0; i < data.length; i++) {
    const newDate = updateEventsDate(data[i]);
    data[i].date = newDate;
  }

  return data;
}

export async function getEventById(id) {
  const response = await fetch(DB_URL + `?orderBy="id"&equalTo="${id}"`);
  const data = Object.values(await response.json());

  for (let i = 0; i < data.length; i++) {
    const newDate = updateEventsDate(data[i]);
    data[i].date = newDate;
  }

  return data;
}

function updateEventsDate(event) {
  const currentYear = new Date().getFullYear().toString();
  const newDate = event.date.replace("2023", currentYear);

  return newDate;
}
