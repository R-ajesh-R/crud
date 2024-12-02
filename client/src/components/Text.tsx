import '../styles/text.css'
import { TextProps } from '../types/types';
const TextInput = (props:TextProps) => {
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {name,value}=e.target;
        props.onChange?.({name,value});
    }
    return (
        <div className="text-input-container">
            <label className="text-input-label">{props.label}</label>
            <input 
                type={props.type||'text'} 
                value={props.value||''} 
                onChange={handleChange} 
                name={props.name}
                className="text-input-field"
            />
        </div>
    );
};
export default TextInput;