import iconFigma from '../../assets/img/icon-figma.png';
import iconHTML5 from '../../assets/img/icon-html5.png';
import iconCSS3 from '../../assets/img/icon-css3.png';
import iconGitHub from '../../assets/img/icon-github.png';
import iconJavaScript from '../../assets/img/icon-javascript-black.png';
import ButtonLight from '../UI/ButtonLight';
import TechStackElement from '../UI/TechStackElement';

const techArray = [
    <TechStackElement key='tech1' icon={iconFigma}>Figma</TechStackElement>,
    <TechStackElement key='tech2' icon={iconHTML5}>HTML5</TechStackElement>,
    <TechStackElement key='tech3' icon={iconCSS3}>CSS3</TechStackElement>,
    <TechStackElement key='tech4' icon={iconGitHub}>Git & GitHub</TechStackElement>,
    <TechStackElement key='tech5' icon={iconJavaScript}>JavaScript</TechStackElement>,
];

const ProjectRight = props => {
    !props.techStack.includes('Figma') && techArray.splice(0, 1);
    !props.techStack.includes('HTML5') && techArray.splice(1, 1);
    !props.techStack.includes('CSS3') && techArray.splice(2, 1);
    !props.techStack.includes('GitHub') && techArray.splice(3, 1);
    !props.techStack.includes('JS') && techArray.splice(4, 1);

    return (
        <div class="mt-32 grid grid-cols-3 gap-6 max-w-5xl mx-auto text-white">
            <div data-theme="mytheme" class="w-4/5 justify-self-end">
                <div class="bg-virus bg-contain bg-no-repeat opacity-20 w-60 h-60 z-0 absolute"></div>
                <div class="w-3/5 ml-auto pt-14">
                    <ButtonLight goTo={"#"}>Watch it live</ButtonLight>
                    <ButtonLight goTo={"#"}>description</ButtonLight>
                    <ButtonLight goTo={"#"}>GitHub</ButtonLight>
                </div>
            </div>
            <div class="col-span-2">
                <h3 class="text-2xl font-bold mb-5">
                    {props.projectTitle}
                </h3>
                {props.children}
                <div class="w-full h-72 bg-base-300"></div>
                <h4 class="text-xl font-bold mt-5 mb-3">Tech stack used in this project</h4>
                <p data-theme="mytheme" class="text-secondary mb-5">In this project, I employed the following technologies:</p>
                <div class="grid grid-cols-5 gap-4">
                    {techArray}
                </div>
            </div>
        </div>
    );
};

export default ProjectRight;