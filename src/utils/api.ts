import axios, { AxiosResponse } from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";
const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
const options = {
    params: { hl: "en", gl: "US" },
    headers: {
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
    },
};

export const fetchDataFromApi = async (url: string): Promise<any> => {
    const { data }: AxiosResponse<any> = await axios.get(
        `${BASE_URL}/${url}`,
        options
    );
    return data;
};
