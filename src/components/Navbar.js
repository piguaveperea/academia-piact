import { Link } from "react-router-dom"
export default function Navbar() {
    return (
        <div>
            <nav className="flex fixed left-0 right-0  bg-piact">
                <div className="">
                    <Link to="/" >PIACT</Link>
                    <Link to="about">About</Link>
                    <button className="bg-yellow-500 px-2">+593985671602</button>
                </div>
            </nav>
        </div>
    )
}