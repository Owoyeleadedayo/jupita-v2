import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "./axios";
import { BaseResponse, LoginBusinessPayload } from "./types";

export const login = async (
  payload: LoginBusinessPayload
): Promise<BaseResponse> => {
  const response = await axiosInstance.post<BaseResponse>("/login", payload);
  return response.data;
};

export const useLogin = () =>
  useMutation({
    mutationFn: login,
  });
