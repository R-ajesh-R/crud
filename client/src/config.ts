//for local

import { Option } from "./types/types";

export const serverURL = "http://localhost:5000/api/";

//for production deployment

// export const serverURL = "api/";

//External values

export const RolesSelectOptions:Option[] =[{value:'admin',displayValue:'Admin'},{value:'user',displayValue:'User'}];

export const RolesAccessOptions: string[]=['View','Add','Edit','Delete'];

export const RolesMenuOptions:Option[] =[{value:'country',displayValue:'Country'},{value:'state',displayValue:'State'},{value:'tasks',displayValue:'Tasks'}];