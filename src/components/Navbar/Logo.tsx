import logo from "../../assets/Logo.png"

function Logo() {
    return (
        <img 
        src={logo} 
        alt="Whitespace logo" 
        className="h-34px w-191px object-contain cursor-pointer my-8"/>
    )
}

export default Logo