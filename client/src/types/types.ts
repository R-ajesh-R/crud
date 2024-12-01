export interface ToggleSwitchProps {
    isOn: boolean;
    setIsOn: React.Dispatch<React.SetStateAction<boolean>>;
  }

export interface FormProps{
  children: React.ReactNode;
}

interface Option {
  value: string;
  displayValue: string;
}

export interface SelectProps{
  label: string;
  options: Option[]
}