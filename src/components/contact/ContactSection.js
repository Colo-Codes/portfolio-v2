import ContactForm from "./ContactForm";
import ButtonLight from "../UI/ButtonLight";
import H3Header from "../UI/H3Header";
import ParagraphLight from "../UI/ParagraphLight";
import SectionHeader from "../UI/SectionHeader";

const ContactSection = props => {
    return (<div class='bg-black pb-32'>
        <section id='section-contact'>
            <SectionHeader text={'Contact'} headerGradientStyle={'header-contact'} />
            <div class="flex flex-col gap-10 max-w-2xl mx-auto px-2">
                <H3Header class='text-white mt-32'>
                    Let's get in touch!
                </H3Header>
                <p class='text-6xl text-center'>📣</p>
                <div data-theme="mytheme" class='flex flex-wrap justify-around'>
                    <ButtonLight class='w-max btn-sm text-xs lg:btn-md mb-5 sm:mb-0'>work@damiandemasi.com</ButtonLight>
                    <ButtonLight class='w-max btn-sm text-xs lg:btn-md mb-5 sm:mb-0'>Message me on LinkedIn</ButtonLight>
                </div>
                <ParagraphLight>You can shoot me an email, send me a message on LinkedIn, or, if you prefer, use the contact form below.</ParagraphLight>
                <ContactForm />
            </div>
        </section>
    </div>);
};

export default ContactSection;