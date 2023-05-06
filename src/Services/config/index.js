import axios from "axios";

const api= axios.create({
    baseURL: 'https://quizofkings.com/challenge-api/v1/challenge/'
});

export default api;