import SocialMediaLink from "./Link-Components/Social-Media-Link";
import igIcon from '../../assets/instagram.png';
import fbIcon from '../../assets/facebook.png';
import xIcon from '../../assets/twitter.png';
import tgIcon from '../../assets/telegram.png';
import logo from '../../assets/myLogo.png';

function FooterPage() {
    const year = new Date().getFullYear();

    return (
        <>
            <div id="contact" className="flex flex-col items-center justify-end w-full h-auto lg:h-[50vh] bg-zinc-800 px-10 lg:px-20 py-10">
                <div className="flex flex-col lg:grid grid-rows-1 grid-cols-2 w-full h-full gap-10 lg:gap-0">
                    <div className="flex flex-col gap-5 lg:gap-0 lg:grid grid-cols-2 grid-rows-1 w-full h-full">
                        <div className="flex flex-col items-center lg:items-start justify-start">
                            <h2 className="text-3xl font-extrabold tracking-wide font-sans text-white">Contact me</h2>
                        </div>
                        <div className="flex flex-row gap-2 lg:gap-0 lg:flex-col items-start justify-between">
                            <SocialMediaLink link = "https://www.facebook.com/share/1GYZzjP2fJ/?mibextid=wwXIfr" image = { fbIcon } linkTitle = "Vince Salenga" />
                            <SocialMediaLink link = "https://www.instagram.com/vincxzss?igsh=MW1yNDlxd2J2eWNueQ%3D%3D&utm_source=qr" image = { igIcon } linkTitle = "Vince~" />
                            <SocialMediaLink link = "https://x.com/vincxzsss?s=21" image = { xIcon } linkTitle = "Vincxzs" />
                            <SocialMediaLink link = "https://t.me/Vincxzse" image = { tgIcon } linkTitle = "Vince" />
                        </div>
                    </div>
                    <div className="flex lg:grid grid-cols-2 grid-rows-1 w-full h-auto lg:h-full">
                        <div className="hidden lg:flex"></div>
                        <div className="flex flex-col lg:flex-row w-full h-auto lg:h-full items-center justify-end lg:items-end lg:justify-start gap-2">
                            <p>Copyright © { year };</p>
                            <div className="flex flex-row items-center justify-center">
                                <p>Designed by</p>
                                <div className="flex flex-row items-end justify-start">
                                    <img src={ logo } className="h-6 w-auto invert-40" />
                                    <p className="text-white font-bold">Vince</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FooterPage;