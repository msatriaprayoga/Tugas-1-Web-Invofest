import FormInput from "../components/FormInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod"
import { useForm } from "react-hook-form";
import { Button } from "../components/ui/Button";
    
const loginSchema = z.object({
    email: z.string().min(1, "Email harus diisi"),
    password: z.string().min(8, "Password minimal 8 angka")
});

export default function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(loginSchema)
    });
    return (
        <div>
            <form onSubmit={handleSubmit(() => {})}>
                <FormInput text="Email" tipe="text" name="email" register={register} error={errors.email?.message} />
                <FormInput text="Password" tipe="password" name="password" register={register} error={errors.password?.message} />

                <div>
                    <Button label="Login" variant="primary" />
                </div>
            </form>
        </div>
    )
}