import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title}-Resale Phone`;
  }, [title]);
};
export default useTitle;
