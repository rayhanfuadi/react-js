import { useApiStore } from "./apiStores";

export const useApiStore2 = () => {
    const { fetchApi, addData } = useApiStore();
    return { fetchApi, addData };
}