import axios from "axios";

const instanceMovies = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie'
});
  


export default instanceMovies;
// Add a request interceptor
/*instanceMovies.interceptors.request.use(function (config) {
    config.params={
        api_key : "4cef01add3ed74048591b83881eee0c9"
    }
    console.log(config.params);
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });*/