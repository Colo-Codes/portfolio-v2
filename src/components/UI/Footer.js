import iconLinkedIn from '../../assets/img/icon-linkedin.png';
import iconTwitter from '../../assets/img/icon-twitter.png';
import iconGitHub from '../../assets/img/icon-github.png';
import iconReact from '../../assets/img/icon-react.svg';
import iconTailwind from '../../assets/img/icon-tailwind.svg';
import locationPin from '../../assets/img/locationPin.png';
import IconBlack from "./IconBlack";
import NavbarFooter from "./NavbarFooter";
import { useState } from 'react';


const Footer = props => {
    const [successMessage, setSuccessMessage] = useState('');

    const clickHandler = e => {
        navigator.clipboard.writeText('work@damiandemasi.com');
        setSuccessMessage('tooltip tooltip-open tooltip-accent');
        setTimeout(() => {
            setSuccessMessage('');
        }, 2000);
    };

    return (
        <footer class='flex flex-wrap justify-evenly gap-5 lg:gap-10 max-w-5xl m-auto mt-32'>
            <NavbarFooter />
            <div class='text-left hero-content items-start'>
                <div class='max-w-2xl'>
                    <p class='mb-5'><span><img src={locationPin} class='h-4 inline mb-1 mr-1' alt='Location pin icon' /></span>Adelaide, Australia</p>
                    <h1 class='mb-5  font-bold font-poppins'>
                        <span class='block text-md lg:text-xl'>Damian Demasi,</span><span class='text-3xl lg:text-5xl subpixel-antialiased'>web<br />developer</span>
                    </h1>
                    <button class='btn mr-10 btn-sm text-xs lg:btn-md mb-5 sm:mb-0'>Get my Resume</button>
                    <div class="dropdown dropdown-hover">
                        <a href='mailto:work@damiandemasi.com' target='_blank' rel="noreferrer" tabindex="0" class="m-1 btn btn-outline btn-sm text-xs lg:btn-md">work@damiandemasi.com</a>
                        <ul tabindex="0" class="p-2 shadow dropdown-content bg-base-100 rounded-box ">
                            <li>
                                <a class='btn btn-ghost btn-sm text-xs lg:btn-md' href='mailto:work@damiandemasi.com' target='_blank' rel="noreferrer">Open in email client</a>
                            </li>
                            <li>
                                <button class='btn btn-ghost btn-sm text-xs lg:btn-md' onClick={clickHandler}>
                                    <span data-tip="Copied to clipboard!" class={successMessage}>
                                        Copy email address
                                    </span>
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div class="mt-14 flex justify-between">
                        <IconBlack icon={iconLinkedIn} goTo={'#'}>LinkedIn</IconBlack>
                        <IconBlack icon={iconTwitter} goTo={'#'}>Twitter</IconBlack>
                        <IconBlack icon={iconGitHub} goTo={'#'}>GitHub</IconBlack>
                    </div>
                    <div class='mt-10 text-xs'>
                        <p>👨‍💻 Portfolio site made by Damian Demasi, using<img src={iconReact} alt="" class='w-7 inline -mx-1' />ReactJS, <img src={iconTailwind} alt="" class='w-4 inline mx-1' />TailwindCSS and DaisyUI.</p>
                        <p>Icons from <a href='https://www.flaticon.com/' target='_blank' rel='noreferrer' class='link ' >Flaticon.</a></p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;