
export const Home = resolve => require(['../pages/home/home.vue'], resolve)
export const Login = resolve => require(['../pages/login/login.vue'], resolve)
export const CompletInfo = resolve => require(['../pages/completInfo/completInfo.vue'], resolve)
export const RetrievePassword =  resolve => require(['../pages/retrievePassword/retrievePassword.vue'], resolve)
export const GetVerificationCode =  resolve => require(['../pages/getVerificationCode/getVerificationCode.vue'], resolve)
export const SetPassword =  resolve => require(['../pages/setPassword/setPassword.vue'], resolve)
export const Register =  resolve => require(['../pages/register/register.vue'], resolve)

// 家族管理
export const FamilyOverview = resolve => require(['../pages/familyManagement/familyOverview/familyOverview.vue'], resolve)
export const LineageBook = resolve => require(['../pages/familyManagement/lineageBook/lineageBook.vue'], resolve)
export const FamilyHistory = resolve => require(['../pages/familyManagement/familyHistory/familyHistory.vue'], resolve)
export const UserCenter = resolve => require(['../pages/familyManagement/userCenter/userCenter.vue'], resolve)