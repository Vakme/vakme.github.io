import axios from "axios";
import { setupCache } from 'axios-cache-interceptor';

const ghLink = import.meta.env.VITE_APP_GH_API;

export const httpClient = setupCache(axios.create({
  baseURL: ghLink,
}));
