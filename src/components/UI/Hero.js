import locationPin from '../../assets/img/locationPin.png';
import hero1 from '../../assets/img/hero1.webp';
import { useEffect, useState } from 'react';


const Hero = props => {
    const [isAnimated1, setIsAnimated1] = useState(true);
    const [isAnimated2, setIsAnimated2] = useState(false);
    const [isAnimated3, setIsAnimated3] = useState(false);

    useEffect(() => {

        // const timer = setTimeout(() => {
        //     if (isAnimated1) {
        //         setIsAnimated2(!isAnimated2); // Set        
        //         setTimeout(() => { setIsAnimated1(!isAnimated1); }, 2000); // Remove (2000 + 2000 = 4 sec animation)
        //         setTimeout(() => { setIsAnimated3(!isAnimated3); }, 2000); // Remove (2000 + 2000 = 4 sec animation)
        //     }
        //     if (isAnimated2) {
        //         setIsAnimated3(!isAnimated3); // Set        
        //         setTimeout(() => { setIsAnimated2(!isAnimated2); }, 2000); // Remove (2000   + 2000 = 4 sec animation)
        //         setTimeout(() => { setIsAnimated1(!isAnimated1); }, 2000); // Remove (2000 + 2000 = 4 sec animation)
        //     }
        //     if (isAnimated3) {
        //         setIsAnimated1(!isAnimated1); // Set        
        //         setTimeout(() => { setIsAnimated3(!isAnimated3); }, 2000); // Remove (2000 + 2000 = 4 sec animation)
        //         setTimeout(() => { setIsAnimated2(!isAnimated2); }, 2000); // Remove (2000 + 2000 = 4 sec animation)
        //     }
        // }, 2000);
        // console.log(new Date().getSeconds());

        const timer = setTimeout(() => {
            setIsAnimated2(!isAnimated2); // Set
            setTimeout(() => { setIsAnimated1(!isAnimated1); }, 2000); // Remove (2000 + 2000 = 4 sec animation)
            setTimeout(() => {
                setIsAnimated3(!isAnimated3); // Set
                setTimeout(() => { setIsAnimated2(!isAnimated2); }, 2000); // Remove
                setTimeout(() => {
                    setIsAnimated1(!isAnimated1); // Set
                    setTimeout(() => { setIsAnimated3(!isAnimated3); }, 2000); // Remove
                    console.log(isAnimated1, isAnimated2, isAnimated3);
                    console.log(new Date().getSeconds());
                }, 1000);
            }, 2000);
        }, 2000);

        return () => {
            clearTimeout(timer);
        };
    }, [isAnimated1, isAnimated2, isAnimated3]);

    console.log('render');

    const commonClasses = 'inline-block subpixel-antialiased';
    const commonBigTextClasses = 'text-6xl md:text-8xl lg:text-9xl';
    const tailwindClassName = `text-3xl md:text-4xl lg:text-5xl ${commonClasses} ${isAnimated1 && 'name-gradient'}`;
    const tailwindClassWeb = `${commonBigTextClasses} ${commonClasses} ${isAnimated2 && 'first-word-gradient'}`;
    const tailwindClassDeveloper = `pb-4 ${commonBigTextClasses} ${commonClasses} ${isAnimated3 && 'second-word-gradient'}`;

    return (
        <div class='hero min-h-85vh'>
            <div class='text-left hero-content items-start'>
                <div>
                    <img src={hero1} alt='Damian Demasi with a hat in a park on a sunny day.' class='mt-10 hidden lg:block lg:max-w-xs xl:max-w-md' />
                </div>
                <div class='max-w-2xl'>
                    <p class='mb-5'><span><img src={locationPin} class='h-4 inline mb-1 mr-1' alt='Location pin icon' /></span>Adelaide, Australia</p>
                    <h1 class='mb-5 font-bold font-poppins'>
                        <span class={tailwindClassName}>Damian Demasi,</span><br /><span class={tailwindClassWeb}>web</span><br /><span class={tailwindClassDeveloper}>developer</span>
                    </h1>
                    <p class='my-8 md:my-16 text-neutral xl:leading-loose'>
                        I’m a Web Developer based in Adelaide, Australia. Even though I have a Telecommunications Engineering degree and an MBA, coding is my passion and I want it to be my new focus on my professional carrer. Developing applications for the web has become my drive.
                    </p>
                    <button class='btn mr-10 btn-sm text-xs lg:btn-md mb-5 sm:mb-0'>Get my Resume</button>
                    <button class='btn btn-outline btn-sm text-xs lg:btn-md'>work@damiandemasi.com</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;