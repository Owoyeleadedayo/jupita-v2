export type BaseResponse = {
  token: string;
  status: string;
  status_code: number;
  message?: string;
};

export type LoginBusinessPayload = {
  email: string;
  password: string;
};

export type RegisterBusinessPayload = {
  business_name: string;
  business_email: string;
  phone_number: string;
  business_type: string;
  business_reg_number: string;
  password: string;
};