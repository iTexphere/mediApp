/**
 * API post data types
 */
export interface IPostLoginDto {
  user_name: string;
  password: string;
}

export interface IPostRegisterDto {
  first_name: string;
  last_name: string;
  user_name: string;
  password: string;
  nic: string;
  email: string;
  mobile_number: string;
  city: string;
  district: string;
  role?: string;
}

export interface IPostMedicalLoginDto {
  user_name: string;
  password: string;
}

export interface IPostMedicalRegisterDto {
  dr_name: string;
  specialist_in: string;
  reg_no: string;
  center_name: string; 
  start_time: string;
  end_time: string;
  open_days: string;
  city: string;
  district: string;
  dr_notes: string;
  user_name: string;
  password: string;
  role?: string;
}

/**
 * API response types
 */

export interface ILoginResponseDto {
  status: string;
  user_info: {
    user_name: string;
    role: string;
    info: any;
  };
  access_token: string;
}

export interface IRegisterResponseDto {
  status: string;
  data: {
    user_info: {
      user_name: string;
      role: string;
      updated_at: string;
      created_at: string;
      id: number;
    };
  };

  patient_info: {
    first_name: string;
    last_name: string;
    username: string;
    password: string;
    nic: string;
    email: string;
    mobile_number: string;
    city: string;
    district: string;
    updated_at: string;
    created_at: string;
    id: number;
  };
}
