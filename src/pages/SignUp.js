import Field from "../components/Field"
export default function SignUp(){
    const fields = [
        {
            input: 'text',
            label: 'Nombres'
        },
        {
            input: 'text',
            label: 'Apellidos'
        },
        {
            input: 'email',
            label: 'Correo electronico'
        },
        {
            input:'password',
            label: 'Contraseña'
        }
    ]
    return(
        <div>
            <div className="flex">
                <span className="flex h-6 w-6 border rounded-full justify-center font-bold border-blue-500" >1</span>
                <span className="ml-2" >Información personal</span>
            </div>
            <div className="flex">
                {fields.map((field)=>(
                    <Field label={field.label} input={field.input} />
                ))}
            </div>

        </div>
    )
}