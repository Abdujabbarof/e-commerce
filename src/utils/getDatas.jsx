import { useQuery } from "react-query";
import { instance } from './AxiosInstance'

export const useGetData = (keys, url, options) => {
    return useQuery(keys, () => instance.get(url), {...options})
}