import Logo from "../Navbar/Logo";

const footerLinks = {
  Product: ["Overview", "Pricing", "Customer stories"],
  Resources: ["Blog", "Guides & tutorials", "Help center"],
  Company: ["About us", "Careers", "Media kit"],
};

function Footer() {
  return (
    <footer className="bg-[#043873] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <Logo />
          <p className="text-blue-200 text-sm mt-4 max-w-xs">
            Whitepace was created for the ways we live and work to be a better workspace around the world.
          </p>
        </div>

        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="font-semibold mb-4">{title}</h4>
            <ul className="space-y-2 text-sm text-blue-200">
              {links.map((link) => (
                <li key={link}>{link}</li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h4 className="font-semibold mb-4">Try It Today</h4>
          <p className="text-sm text-blue-200 mb-4">
            Get started for free. Add your whole team as your needs grow.
          </p>
          <button className="bg-blue-500 px-4 py-2 rounded-md text-sm font-medium">
            Get started
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;