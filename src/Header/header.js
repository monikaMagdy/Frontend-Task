import { FaCartPlus, FaDrawPolygon } from "react-icons/fa";
function Header(props) {
    return (
        <div>
            <div class="header_class header">
                <div className="header_title">
                    <p className="welcome">Welcome to iCloudReady! </p>
                    <div class="subtitle">
                        <p>You have started your   </p>
                        <p class="sub-text"> 30 day trial </p>
                    </div>

                </div>
                <div class="header_mid_text">
                    <p> Our architects are here to help</p>
                    <p className="subtitle_2"> Book a free session</p>

                </div>
                <div className="header_icons">
                    < FaCartPlus className="drawer_icon" />
                    <FaDrawPolygon className="drawer_icon" />
                </div>
            </div>
        </div>
    );
}
export default Header;