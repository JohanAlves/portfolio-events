const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "Electric Nights",
    description:
      "Get ready to ignite the dance floor at Electric Nights! This high-energy night club event promises an electrifying experience filled with pulsating beats, stunning light shows, and top-notch DJs spinning the latest EDM and techno tracks. Join the crowd as they dance the night away in a sea of neon colors and create unforgettable memories in this electrifying party atmosphere.",
    location: "Austin Night Club",
    city: "New York - NY",
    date: DaysInFuture(7),
    time: "20:00",
    image: "images/event-1.jpg",
    isFeatured: false,
    tickets: [
      { id: "t1", title: "Normal Ticket", price: 14.99 },
      { id: "t2", title: "VIP Ticket", price: 84.99 },
      { id: "t3", title: "Super Special Ticket", price: 164.99 },
    ],
  },
  {
    id: "e2",
    title: "Glow Party Extravaganza",
    description:
      "Step into a world of luminescence at the Glow Party Extravaganza! This unique night club event transforms the venue into a neon wonderland, where attendees light up the night with glowing accessories and body paint. Immerse yourself in the glow-in-the-dark ambiance while dancing to a mix of chart-topping hits and remixes, making this an unforgettable and visually stunning experience.",
    location: "Dragon Plaza",
    city: "Chicago - IL",
    date: DaysInFuture(13),
    time: "20:00",
    image: "images/event-2.jpg",
    isFeatured: true,
    tickets: [
      { id: "t1", title: "Normal Ticket", price: 14.99 },
      { id: "t2", title: "VIP Ticket", price: 84.99 },
      { id: "t3", title: "Super Special Ticket", price: 164.99 },
    ],
  },
  {
    id: "e3",
    title: "Neon Beats Bash",
    description:
      "Prepare for a vibrant celebration at the Neon Beats Bash! This event brings together the best of both worlds, combining a pulsating dance party with live music performances from talented artists and bands. Neon lights illuminate the venue, setting the stage for an energetic night filled with non-stop dancing, live music, and an enthusiastic crowd ready to revel in the contagious energy of the night.",
    location: "Kosmika Pub",
    city: "New York - NY",
    date: DaysInFuture(16),
    time: "21:00",
    image: "images/event-3.jpg",
    isFeatured: true,
    tickets: [
      { id: "t1", title: "Normal Ticket", price: 14.99 },
      { id: "t2", title: "VIP Ticket", price: 84.99 },
      { id: "t3", title: "Super Special Ticket", price: 164.99 },
    ],
  },
  {
    id: "e4",
    title: "Retro Rewind Party",
    description:
      "Step back in time at the Retro Rewind Party! This event takes you on a nostalgic journey through the greatest hits of the '70s, '80s, and '90s. Dance to classic tunes, dress up in retro fashion, and immerse yourself in the iconic pop culture of yesteryears. Get ready to groove to the beats of disco, rock, and synth-pop as you relive the golden era of music and create new memories with a touch of vintage charm.",
    location: "Euphoria Groove",
    city: "Los Angeles - CA",
    date: DaysInFuture(26),
    time: "20:00",
    image: "images/event-4.jpg",
    isFeatured: false,
    tickets: [
      { id: "t1", title: "Normal Ticket", price: 14.99 },
      { id: "t2", title: "VIP Ticket", price: 84.99 },
      { id: "t3", title: "Super Special Ticket", price: 164.99 },
    ],
  },
  {
    id: "e5",
    title: "Masquerade Mystique",
    description:
      "Unleash your inner enigma at Masquerade Mystique! This elegant night club affair calls for sophistication and intrigue. Attendees adorn ornate masks and dance in an atmosphere of mystery and allure. The music selection ranges from seductive ballads to sultry beats, ensuring an alluring night full of surprises and enchantment. Let the music and ambiance transport you to a world of hidden identities and captivating allure.",
    location: "PulseVibe Nexus",
    city: "Los Angeles - CA",
    date: DaysInFuture(64),
    time: "20:00",
    image: "images/event-5.jpg",
    isFeatured: true,
    tickets: [
      { id: "t1", title: "Normal Ticket", price: 14.99 },
      { id: "t2", title: "VIP Ticket", price: 84.99 },
      { id: "t3", title: "Super Special Ticket", price: 164.99 },
    ],
  },
  {
    id: "e6",
    title: "Salsa Fiesta Nights",
    description:
      "Spice up the dance floor at Salsa Fiesta Nights! Indulge in the passion and rhythm of Latin beats as you learn and showcase your best salsa moves. Expert dance instructors will guide beginners and seasoned dancers alike, ensuring a night of uninhibited fun and fiery energy. So grab a partner or dance solo, and let the vibrant melodies of salsa, merengue, and bachata take over for a night of sizzling entertainment.",
    location: "Dragon Plaza",
    city: "Chicago - IL",
    date: DaysInFuture(73),
    time: "21:00",
    image: "images/event-6.jpg",
    isFeatured: true,
    tickets: [
      { id: "t1", title: "Normal Ticket", price: 14.99 },
      { id: "t2", title: "VIP Ticket", price: 84.99 },
      { id: "t3", title: "Super Special Ticket", price: 164.99 },
    ],
  },
  {
    id: "e7",
    title: "Midnight Carnival Circus",
    description:
      "Enter a whimsical wonderland at the Midnight Carnival Circus! This night club event transforms the venue into a surreal circus playground filled with acrobats, fire-breathers, and captivating performances. Embrace the carnival spirit and dance under the big top to a mix of circus-themed tracks and modern beats. With colorful decorations, circus-themed costumes, and thrilling spectacles, this event promises a night of enchantment and excitement.",
    location: "Austin Night Club",
    city: "New York - NY",
    date: DaysInFuture(82),
    time: "20:00",
    image: "images/event-7.jpg",
    isFeatured: false,
    tickets: [
      { id: "t1", title: "Normal Ticket", price: 14.99 },
      { id: "t2", title: "VIP Ticket", price: 84.99 },
      { id: "t3", title: "Super Special Ticket", price: 164.99 },
    ],
  },
  {
    id: "e8",
    title: "Glamour and Glitz Soiree",
    description:
      "Prepare to dazzle at the Glamour and Glitz Soiree! This upscale night club event exudes elegance and sophistication. Dress to impress in your finest attire as you sip on champagne and dance to the tunes of smooth jazz and modern lounge music. Enjoy a night of opulence and socializing with like-minded individuals in a refined ambiance that celebrates the finer things in life.",
    location: "Kosmika Pub",
    city: "Chicago - IL",
    date: DaysInFuture(123),
    time: "20:00",
    image: "images/event-8.jpg",
    isFeatured: true,
    tickets: [
      { id: "t1", title: "Normal Ticket", price: 14.99 },
      { id: "t2", title: "VIP Ticket", price: 84.99 },
      { id: "t3", title: "Super Special Ticket", price: 164.99 },
    ],
  },
  {
    id: "e9",
    title: "Silent Disco Rave",
    description:
      "Experience a unique auditory adventure at the Silent Disco Rave! Upon entry, you'll receive wireless headphones that allow you to tune into multiple DJs playing different genres simultaneously. Choose your preferred channel, and dance the night away to your own musical journey. The absence of traditional speakers creates an intimate atmosphere where you can connect with friends and strangers through the shared experience of music, making it a night of endless surprises and musical delights.",
    location: "Euphoria Groove",
    city: "New York - NY",
    date: DaysInFuture(138),
    time: "21:00",
    image: "images/event-9.jpg",
    isFeatured: true,
    tickets: [
      { id: "t1", title: "Normal Ticket", price: 14.99 },
      { id: "t2", title: "VIP Ticket", price: 84.99 },
      { id: "t3", title: "Super Special Ticket", price: 164.99 },
    ],
  },
];

function DaysInFuture(days) {
  var date = new Date();
  date.setDate(date.getDate() + days);
  return date.toLocaleDateString("en-UK", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getFilteredEvents(filters) {}

export function getAllCities() {
  const allCities = [];
  DUMMY_EVENTS.map((event) => allCities.push(event.city));
  return [...new Set(allCities)].sort();
}

export function ArrayFormattedCities(max) {
  const allCities = getAllCities();
  const formattedCities = [];
  allCities.map((city) => formattedCities.push({ value: city }));

  return formattedCities;
}

export function getAllLocations() {
  const allLocations = [];
  DUMMY_EVENTS.map((event) => allLocations.push(event.location));
  return [...new Set(allLocations)].sort();
}

export function ArrayFormattedLocations() {
  const allLocations = getAllLocations();
  const formattedLocations = [];
  allLocations.map((location) => formattedLocations.push({ value: location }));
  return formattedLocations;
}

export function getAllEventNames() {
  const allEventNames = [];
  DUMMY_EVENTS.map((event) => allEventNames.push(event.title));
  return [...new Set(allEventNames)].sort();
}

export function ArrayFormattedEventNames() {
  const allEventNames = getAllEventNames();
  const formattedCities = [];
  allEventNames.map((eventName) => formattedCities.push({ value: eventName }));
  return formattedCities;
}

export function getEventById(id) {
  return DUMMY_EVENTS.find((event) => event.id === id);
}
