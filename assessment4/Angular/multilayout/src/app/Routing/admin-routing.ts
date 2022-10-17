export const ADMIN_ROUTES=
[
    //{Path:"",loadChildren:()=>import("../admin/admin.module").then(x=>x.AdminModule)}
    {path: "dashboard",loadChildren:()=>import("../admin/admin-dashboard/admin-dashboard.module").then(x=>x.AdminDashboardModule)},
    {path:"department", loadChildren:()=>import("../admin/department/department.module").then(x=>x.DepartmentModule)},
    {path:"employee",loadChildren:()=>import("../admin/employee/employee.module").then(x=>x.EmployeeModule)}

];

