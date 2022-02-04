export default function CardDirective(props){
    return(
        <div className="">
            <div className="flex">
            <img className="flex justify-center" src={props.image} alt={props.job} />
            </div>
            <div className="">   
                <h2>{props.job}</h2>
                <h1>{props.name}</h1>
            </div>
           
        </div>
    )
}