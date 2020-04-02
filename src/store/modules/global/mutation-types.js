export const HIDE_ROUTE_LOADING = 'HIDE_ROUTE_LOADING';
export const GET_USERINFO_LOGIN = 'GET_USERINFO_LOGIN';
export const GET_PROVINCES = 'GET_PROVINCES';
export const GET_CITIES = 'GET_CITIES';
export const GET_AREAS = 'GET_AREAS';
export const GET_FIRSTINDUSTRY = 'GET_FIRSTINDUSTRY';
export const GET_SECONDINDUSTRY = 'GET_SECONDINDUSTRY';
export const GET_THIRDINDUSTRY = 'GET_THIRDINDUSTRY';
export const GET_FOURINDUSTRY = 'GET_FOURINDUSTRY';


// 登录
export const api_login = `${metadata.apiHost}/login`;

// 注册
export const api_register = `${metadata.apiHost}/register`;
export const api_registrationCodeRequest = `${metadata.apiHost}/register/registrationCodeRequest`;
export const api_getProvinces = `${metadata.apiHost}/Dict/getProvinces`;
export const api_getCities = `${metadata.apiHost}/Dict/getCities`;
export const api_getAreas = `${metadata.apiHost}/Dict/getArea`;
export const api_getFirstIndustry = `${metadata.apiHost}/dict/getFirstIndustry`;
export const api_getSecondIndustry = `${metadata.apiHost}/dict/getSecondIndustry`;
export const api_getThirdIndustry = `${metadata.apiHost}/dict/getThirdIndustry`;
export const api_getFourIndustry = `${metadata.apiHost}/dict/getFourIndustry`;

// 忘记密码
export const api_findPwdCodeRequest = `${metadata.apiHost}/find_password/codeRequest`;
export const api_findPwdVerify = `${metadata.apiHost}/find_password/verify`;
export const api_findPwdReset  = `${metadata.apiHost}/find_password/reset`;
