import axios from 'axios';

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "f7175a39b1bf891c574acd46377b9d9f",
    language: "ko-KR"
  }    
})

export default instance;