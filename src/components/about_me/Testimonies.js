import reviewCesar from '../../assets/img/cesar-villagra.webp';
import reviewExequiel from '../../assets/img/exequiel-barrirero.webp';
import reviewAdrian from '../../assets/img/adrian-dzienisik.webp';
import CardTestimony from "./CardTestimony";

const Testimonies = props => {
    return (
        <div class="flex flex-wrap gap-10 justify-evenly max-w-6xl mx-auto -mt-80 ">
            <CardTestimony image={reviewCesar} goTo='https://www.linkedin.com/in/damian-demasi/' personName='César Ariel Villagra' jobPosition={
                <>
                    <p>Certified Scrum Master</p>
                    <p>Project Manager</p>
                    <p>Mobile Core Networks</p>
                    <p>Expert Engineer</p>
                </>}>
                <p>“Damian is an excellent person to work with. His detailed knowledge of the business requirements makes him a very important resource. His professionalism & commitment are the keys for the successful delivery on time of the projects. He always has a keen eye on the 'day to day' details as well as the ability to differentiate immediate, near term and long term goals. His leadership skills makes working with him an enriching, challenging & enjoyable experience.”</p>
            </CardTestimony>
            <CardTestimony image={reviewExequiel} goTo='https://www.linkedin.com/in/damian-demasi/' personName='Exequiel Barrirero' jobPosition={
                <>
                    <p>Co-Founder</p>
                    <p>DevOps Cloud Engineer @ Binbash</p>
                    <p>AWS Certified Architect</p>
                </>}>
                <p>“After sharing several month at HP with Damian, I can say that he is a very enthusiast engineer, and has an amazing ability to learn new things by his own. He has an excellent technical background and was always willing to assist in any situation. Moreover, he was always adding value to our team, enforcing his co-workers with training and knowledge sharing. Hence, I don't hesitate to recommend him as employee, partner and person.”</p>
            </CardTestimony>
            <CardTestimony image={reviewAdrian} goTo='https://www.linkedin.com/in/damian-demasi/' personName='Adrián Dzienisik' jobPosition={
                <>
                    <p>Telecommunications Engineer</p>
                    <p>Product & Business Analyst</p>
                    <p>SAFe 4 Certified Practitioner</p>
                </>}>
                <p>“I had the pleasure to work with Damian at Claro for over 2 years, and I can say he is an excellent professional and a great person to work with. He consistently demonstrated a solid technical background, as well as excellent leadership and communication skills. He was a great mentor to me, and a committed team member, always adding value and sharing his knowledge of the business. In addition to this, his personality, positive attitude and dedication makes working with him a real enjoyable and valuable experience.”</p>
            </CardTestimony>
        </div>
    );
};

export default Testimonies;