// Nine supplied client films. Vertical phone-format clips with their own audio
// and on-screen text; nobody is named on the page because the clips didn't
// come with approved names or quotes to attach to them.
export const clientFilms = [
  { id: "c1", seconds: 48 },
  { id: "c2", seconds: 29 },
  { id: "c3", seconds: 33 },
  { id: "c4", seconds: 25 },
  { id: "c5", seconds: 22 },
  { id: "c6", seconds: 42 },
  { id: "c7", seconds: 19 },
  { id: "c8", seconds: 19 },
  { id: "c9", seconds: 58 },
] as const;

// Celebrity Choice reels are still being edited; none have a supplied file yet,
// so the rail renders honest "coming soon" cards instead of fake playback.
export const celebrityFilmsPendingCount = 2;

export const clock = (seconds: number) => `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
export const spoken = (seconds: number) =>
  seconds < 60 ? `${seconds} seconds` : `${Math.floor(seconds / 60)} minute${seconds >= 120 ? "s" : ""} ${seconds % 60} seconds`;

// "See the difference" before/after stories, from Images/beforerafter.
export const stories = [
  { id: "clip-on-extension", alt: "Before and after client transformation with clip-on extensions" },
  { id: "feather-extension-aashana-panchal", alt: "Before and after Aashana Panchal with feather extensions" },
  { id: "micro-ring-hair-extensions-upasna", alt: "Before and after Upasna with micro ring hair extensions" },
  { id: "topper-5", alt: "Before and after client transformation with a hair topper" },
  { id: "topper-maharukh", alt: "Before and after Maharukh with a hair topper" },
  { id: "topper-zenith-pintu", alt: "Before and after Zenith Pintu with a hair topper" },
  { id: "wig-1", alt: "Before and after client wig transformation" },
  { id: "wig-3", alt: "Before and after client wig transformation" },
  { id: "wig-7", alt: "Before and after client wig transformation" },
] as const;
