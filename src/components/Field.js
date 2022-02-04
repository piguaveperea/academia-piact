export default function Field (props){
    return(
        <div>
            <label className="block">{props.label}</label>
            <input className="py-1.5 rounded-md border-blue-300  border w-full outline-none focus:border-piact"  type={props.input} />
        </div> 
    )
}