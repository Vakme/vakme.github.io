import DOMPurify from "dompurify";
import { marked } from "marked";
import {useObservable} from "@vueuse/rxjs";
import {map} from "rxjs";

import {
  getReadme,
} from "./github/api";

export const useReadme = () => {
  return useObservable(getReadme().pipe(map(res => DOMPurify.sanitize(marked.parse(res)))));
}
