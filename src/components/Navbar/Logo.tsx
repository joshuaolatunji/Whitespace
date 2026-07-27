import logo from "../../assets/Logo.png"

function Logo() {
    return (
        <img 
        src={logo} 
        alt="Whitespace logo" 
        className="h-9 w-auto object-contain cursor-pointer ml-50 my-8"/>
    )
}

export default Logo