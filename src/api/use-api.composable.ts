import { onMounted, ref } from "vue";
import DOMPurify from "dompurify";
import { marked } from "marked";

import {
  getReadme,
} from "./github/api";

export const useReadme = () => {
  const data = ref<string | null>(null);

  const getData = async () => {
    const res = await getReadme();
    data.value = DOMPurify.sanitize(marked.parse(res));
  };


  onMounted(async () => {
    await getData();
  });
  return data;
}
