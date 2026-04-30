import LabelInput from "./ui/Labelinput";
import InputText from "./ui/InputText";

interface formInputProps {
    text: string;
    tipe: string;
    name: string;
    register?: any;
    error?:string
};

const FormInput: React.FC<formInputProps> = ({ text, tipe, name, register, error }) => {
    return (
        <div className="flex flex-col gap-1 mb-3">
            <LabelInput text={text} title={name} />
            <InputText tipe={tipe} name={text} error={error} {...register(name)} />
            {error && <p className="text-red-600 text-sm">{error}</p>}
        </div>
    );
};

export default FormInput;