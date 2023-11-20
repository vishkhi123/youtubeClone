export const GOOGLE_API_KEY="AIzaSyDP1eLB6jj2GRzyN73imLACHy_rouogykw";

export const YOUTUBE_VIDEOS_API="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+GOOGLE_API_KEY;

//GET https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=[YOUR_API_KEY] HTTP/1.1

//Authorization: Bearer [YOUR_ACCESS_TOKEN]
//Accept: application/json

export const YOUTUBE_SEARCH_API="http://suggestqueries.google.com/complete/search?client=firefox&q=";

export const YOUTUBE_SEARCH_VIDEO="https://www.googleapis.com/youtube/v3/search?part=snippet&q=namastejavascript&maxResults=25&key="+GOOGLE_API_KEY;
//https://www.googleapis.com/youtube/v3/search?part=snippet&q=namastejavascript&maxResults=25&key=AIzaSyDP1eLB6jj2GRzyN73imLACHy_rouogykw