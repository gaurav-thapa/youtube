const MY_API_KEY = process.env.REACT_APP_MY_API_KEY;

export const GET_YOUTUBE_VIDEOS = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&maxResults=10&key=${MY_API_KEY}`;

export function getSearchSuggestionsURL(searchText) {
  searchText = searchText.replace(" ", "%20");
  return `http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q=${searchText}`;
}

export function getSearchResultsURL(searchText) {
  return `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchText}&key=${MY_API_KEY}`;
}

export function getVideoInfoURL(id) {
  return `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${MY_API_KEY}`;
}
