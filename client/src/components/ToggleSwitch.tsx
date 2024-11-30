import { ToggleSwitchProps } from "../types/types";

const ToggleSwitch = ({isOn,setIsOn}:ToggleSwitchProps) => {

    const handleToggle = () => {
      setIsOn(!isOn);
    };
  
    return (
      <div className="toggle-switch">
        <div
          className={`switch ${isOn ? "on" : "off"}`}
          onClick={handleToggle}
          role="button"
          tabIndex={0}
        >
          <div className="slider" />
        </div>
        <p>{isOn ? "Sign In" : "Sign Up"}</p>
      </div>
    );
  };
export default ToggleSwitch;