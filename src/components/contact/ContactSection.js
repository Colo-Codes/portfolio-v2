import { useState } from "react";
import ContactForm from "./ContactForm";
import ButtonLight from "../UI/ButtonLight";
import H3Header from "../UI/H3Header";
import ParagraphLight from "../UI/ParagraphLight";
import SectionHeader from "../UI/SectionHeader";

const ContactSection = props => {
    const [successMessage, setSuccessMessage] = useState('');

    const clickHandler = e => {
        navigator.clipboard.writeText('work@damiandemasi.com');
        setSuccessMessage('tooltip tooltip-open tooltip-accent');
        setTimeout(() => {
            setSuccessMessage('');
        }, 2000);
    };

    return (<div class='bg-black pb-32'>
        <section id='section-contact'>
            <SectionHeader text={'Contact'} headerGradientStyle={'header-contact'} />
            <div class="flex flex-col gap-10 max-w-2xl mx-auto px-2">
                <H3Header class='text-white mt-32'>
                    Let's get in touch!
                </H3Header>
                <p class='text-6xl text-center'>📣</p>
                <div data-theme="mytheme" class='flex flex-wrap justify-around'>
                    {/* <ButtonLight class='w-max btn-sm text-xs lg:btn-md mb-5 sm:mb-0'>work@damiandemasi.com</ButtonLight> */}
                    <div class="dropdown dropdown-hover">
                        <a href='mailto:work@damiandemasi.com' target='_blank' rel="noreferrer" tabindex="0" class="btn btn-primary mb-1 w-full z-1 relative lg:btn-md">work@damiandemasi.com</a>
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
                    <ButtonLight class='w-max btn-sm text-xs lg:btn-md mb-5 sm:mb-0' goTo='https://www.linkedin.com/in/damian-demasi-5451378/' target='_blank'>Message me on LinkedIn</ButtonLight>
                </div>
                <ParagraphLight>You can shoot me an email, send me a message on LinkedIn, or, if you prefer, use the contact form below.</ParagraphLight>
                <ContactForm />
            </div>
        </section>
    </div>);
};

export default ContactSection;