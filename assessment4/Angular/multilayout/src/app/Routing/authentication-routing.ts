export const AUTHENTICATION_ROUTES=[
    //{Path:'',loadChildren:()=>import("../authentication/authentication.module").then(x=>x.AuthenticationModule)}
    {path:'',loadChildren:()=> import("../authentication/authentication.module").then(x=>x.AuthenticationModule)}
];