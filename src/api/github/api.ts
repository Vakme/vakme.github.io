import { httpClient } from "./http-client";
import { routes } from "./routes";

// TODO: error handling
export const getReadme = async (): Promise<string> => {
  const res = await httpClient.get(routes.readme, {
    headers: {
      Accept: "application/vnd.github.raw",
    },
  });
  return res.data;
};
