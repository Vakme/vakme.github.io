import {AjaxError, AjaxResponse} from "rxjs/ajax";
import {catchError, EMPTY, Observable, of, switchMap} from "rxjs";
import {useToast} from "vue-toastification";

import { routes } from "./routes";
import {githubHttpClient} from "./http-client";

const toast = useToast()

export const handleAPI = <T>() => (source$: Observable<AjaxResponse<T>>): Observable<T | never> => {
  return source$.pipe(
    switchMap((res: AjaxResponse<T>) => {
      if (res.response) {
        return of(res.response);
      }
      return EMPTY;
    }),
    catchError((error: AjaxError) => {
      toast.error(`${error.name}: ${JSON.parse(error.response).message}`)
      return EMPTY;
    })
  );
};

export const getReadme = (): Observable<string | never> => {
  return githubHttpClient<string>({
    url: routes.readme,
    method: "GET",
    headers: {
      Accept: "application/vnd.github.raw",
    },
    responseType: 'text'
  }).pipe(handleAPI<string>());
};
