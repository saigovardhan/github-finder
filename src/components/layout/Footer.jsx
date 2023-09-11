import { FaIcons } from "react-icons/fa";
function Footer(){
    const year = new Date().getFullYear()
    return (
      <footer className="footer pb-5 bg-gray-700 text-primary-content footer-center">
        <p className="text-xl font-bold text-gray-500">Github Finder 2023</p>
        <p>Copyright &copy; {year}</p>
      </footer>
    );
}

export default Footer