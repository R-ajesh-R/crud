export interface ToggleSwitchProps {
    isOn: boolean;
    setIsOn: React.Dispatch<React.SetStateAction<boolean>>;
  }

export interface FormProps{
  children: React.ReactNode;
  onSubmit: (formData: Record<string, string|string[]>)=>void; 
  dynamicKey?: boolean;
  key?: string;
}

export interface Option {
  value: string;
  displayValue: string;
}

export interface SelectProps{
  label: string;
  options: Option[];
  onChange?: ({name,value}:{name:string,value:string})=>void;
  name: string;
}

// export interface CheckBoxProps{
//   label: string;
//   values: string[];
//   name: string;
//   options: string[];
//   onChange?: ({name,value}:{name:string,value:string|string[]})=>void;
//   dynamicKey?: boolean;
//   key?: string;
// }

export interface CheckBoxProps {
  label: string;
  values: string[];
  name: string;
  options: string[];
  onChange?: ({ name, value }: { name: string; value: string | string[] }) => void;
  [key: string]: any; // Restrict additional properties to specific types
}

export interface TextProps{ 
  label : string;
  value?: string;
  onChange?: ({name,value}:{name:string,value:string|string[]})=>void;
  name: string;
  type?: string;
}