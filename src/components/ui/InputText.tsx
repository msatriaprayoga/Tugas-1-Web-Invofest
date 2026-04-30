// interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
//   tipe: string;
//   name: string;
//   error?: string;
// }

// const InputText: React.FC<InputTextProps> = ({ tipe, name, error, ...props }) => {
//     return (
//         <div className="flex flex-col gap-1">
//             <input type={tipe} name={name} className={`border p-2 rounded-md focus:border-red-400 outline-none ${error ? 'border-red-500' : ''}`} {...props} />
//         </div>
//     );
// }

// export default InputText;

import type React from "react";

interface InputTextProps{
    label:string;
    nama:string;
    error?:string;
    register:any;
}

export const InputText: React.FC <InputTextProps> = ({
    label,
    nama,
    error,
    register,
}) => {
    return (
        <div className="flex flex-col gap-1 mb-4">
            <label htmlFor={label}>{label}</label>
            <input
                type="text"
                {...register(nama)}className="border p-2"
                placeholder={label} />
            {error && <p className="text-red-500">{error}</p>}
        </div>
    );
};