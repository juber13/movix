import axios from "axios"

const customHookApi = async (url, params) => {

  try {
    const response = await axios(url, {
      params,
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MmNhM2I4NTAyNmEzNjhmODBlYzFmZTdiY2M0ZGI2NyIsInN1YiI6IjYzZjc5ZDE1NjhiMWVhMDA4NjY4ZmEzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wRTRJ028nqEeEpsf8Xzgkch43vDKfVodY8s2OLesGAU"
      }
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export default customHookApi