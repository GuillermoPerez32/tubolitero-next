import { Endpoints } from "../constants/endpoints";
import { ApkEndpointResponse } from "../types/ApkEndpointResponse";

export const fetchApkInfo = async () => {
  const response = await fetch(Endpoints.apkInfo);
  return (await response.json()) as ApkEndpointResponse;
};
