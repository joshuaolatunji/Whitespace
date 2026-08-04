import logo from "../../assets/Logo.png"

function Logo() {
    return (
        <img 
        src={logo} 
        alt="Whitespace logo" 
        className="h-7 w-auto sm:h-8 lg:h-8.5 object-contain cursor-pointer my-4 lg:my-8"/>
    )
}

export default Logo