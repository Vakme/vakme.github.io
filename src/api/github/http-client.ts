import {ajax, AjaxConfig} from "rxjs/ajax";

const ghLink = import.meta.env.VITE_APP_GH_API;

export const githubHttpClient = <T>(config: AjaxConfig) =>  ajax<T>({
  ...config,
  url: `${ghLink}${config.url}`
});
