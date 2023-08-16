import axios, { AxiosError, AxiosResponse } from 'axios'
const http = axios.create({
	baseURL: 'https://facebook-backend-lwxu.onrender.com',
	headers: {
		'Content-Type': 'application/json',
	},
})
http.interceptors.request.use(function (config) {
    // Do something before request is sent

    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
http.interceptors.response.use(
	function (response:AxiosResponse<any, any>) {
		// Any status code that lie within the range of 2xx cause this function to trigger
		// Do something with response data
		return response
	},
	function (error: AxiosError) {
		// Any status codes that falls outside the range of 2xx cause this function to trigger
		// Do something with response error
		// 401, 403, 500
		return Promise.reject(error.response?.data) // should be error response body
	}
)


export default http
