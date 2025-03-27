import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { axiosInstance } from "./axios";
import { BaseResponse, RegisterBusinessPayload } from "./types";

export const register = async (
    payload: RegisterBusinessPayload
): Promise<BaseResponse> => {
  const response = await axiosInstance.post<BaseResponse>("/register-business",payload);
  return response.data;
};

export const useRegister = (): UseMutationResult<
  BaseResponse,
  unknown,
  RegisterBusinessPayload
> => {
  return useMutation({
    mutationFn: register,
  });
};