const IMAGE_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/f85718e8-fc6d-4954-bca0-f5eaf78e0842/ea44b42b-ba19-4f35-ad27-45090e34a897/IN-en-20230918-popsignuptwoweeks-perspective_alpha_website_large.jpg";
const LOGO_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/f85718e8-fc6d-4954-bca0-f5eaf78e0842/ea44b42b-ba19-4f35-ad27-45090e34a897/IN-en-20230918-popsignuptwoweeks-perspective_alpha_website_large.jpg";
const ICON_URL =
  "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png";
const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlN2ExYjBjMzg3ZDZiNThjMzM4N2I3YmM0NWY4MDY2MCIsInN1YiI6IjY1MTQyYzE0YTE5OWE2MDBjNDljMTI0YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jm39UP_WvzxhyqXJ8DnbJaTeEkxi160d09KDflLmi3Q",
  },
};
const NOW_PLAYING_URL =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
const MOVIE_OPTIONS = {
  method: "GET",
  url: "https://api.themoviedb.org/3/movie/",
  params: { language: "en-US" },
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlN2ExYjBjMzg3ZDZiNThjMzM4N2I3YmM0NWY4MDY2MCIsInN1YiI6IjY1MTQyYzE0YTE5OWE2MDBjNDljMTI0YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jm39UP_WvzxhyqXJ8DnbJaTeEkxi160d09KDflLmi3Q",
  },
};
const MOVIE_IMAGE_URL = "https://image.tmdb.org/t/p/w500";
const POPULAR_URL =
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

export {
  LOGO_URL,
  IMAGE_URL,
  ICON_URL,
  API_OPTIONS,
  NOW_PLAYING_URL,
  MOVIE_OPTIONS,
  MOVIE_IMAGE_URL,
  POPULAR_URL,
};
