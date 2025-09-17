import "./Footer.scss";
import Logo from "../../assets/logo-white.png";
import SocialIcons from "../SocialIcons/SocialIcons";


function Footer () {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="section-footer">
            <div className="container wrapper">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <a href="/">
                            <img src={Logo.src} alt="Central Poultry Logo" className="w-[150px]" />
                        </a>
                        <p className="my-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived</p>
                        <SocialIcons />
                    </div>

                    <div className="md:ml-12">
                        <h2 className="heading-tertiary text-white mb-4">Useful Links</h2>
                        <ul>
                            <li>
                                <a href="#" className="btn-tertiary">Home</a>
                            </li>
                            <li>
                                <a href="#" className="btn-tertiary">About Us</a>
                            </li>
                            <li>
                                <a href="#" className="btn-tertiary">Our Process</a>
                            </li>
                            <li>
                                <a href="#" className="btn-tertiary">Our Products</a>
                            </li>
                            <li>
                                <a href="#" className="btn-tertiary">Contact Us</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="heading-tertiary text-white mb-4">Contact</h2>
                        <ul className="contact-list">
                            <li className="contact-item">
                                <i className="fa-solid fa-phone"></i>
                                <span>+233 59 160 9995</span>
                            </li>
                            <li className="contact-item">
                                <i className="fa-solid fa-envelope-open"></i>
                                <span>+233 59 160 9995</span>
                            </li>
                            <li className="contact-item">
                                <i className="fa-solid fa-location-dot"></i>
                                <span>+233 59 160 9995</span>
                            </li>
                        </ul>
                        <ul className="flex flex-row mt-12">
                            <li>
                                <a href="/privacy-policy" className="inline-block hover:text-yellow-400 transition duration-300 mr-8">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="/terms" className="inline-block hover:text-yellow-400 transition duration-300">Terms of Use</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <hr className="mt-16 mb-4"/>

                <p className="copy text-center py-8">&copy; {currentYear} Central Poultry Inc. All rights reserved.</p>
            </div>
        </footer>
    )
}




export default Footer