import ButtonLight from '../UI/ButtonLight';
import H3Header from '../UI/H3Header';
import TechStack from '../UI/TechStack';

const ProjectLeft = props => {
    return (
        <div class="mt-32 flex flex-wrap gap-6 max-w-5xl mx-auto px-2 text-white">
            <div class="w-full md:w-9/12 md:mx-auto lg:max-w-xl">
                <H3Header>
                    {props.projectTitle}
                </H3Header>
                {props.children}
                <div class="w-full h-72 bg-base-300"></div>
                <h4 class="text-xl font-bold mt-5 mb-3">Tech stack used in this project</h4>
                <p data-theme="mytheme" class="text-secondary mb-5">In this project, I employed the following technologies:</p>
                <div class="grid grid-cols-5 gap-4">
                    <TechStack usedTech={props.techStack} />
                </div>
            </div>
            <div data-theme="mytheme" class="max-w-sm justify-self-end mx-auto">
                <div class="w-6/12 mx-auto lg:mx-0 lg:mr-auto lg:w-8/12 pt-14">
                    <ButtonLight goTo={"#"}>Watch it live</ButtonLight>
                    <ButtonLight goTo={"#"}>description</ButtonLight>
                    <ButtonLight goTo={"#"}>GitHub</ButtonLight>
                    <div class={`${props.bgImage} bg-contain bg-no-repeat opacity-20 w-56 h-56 z-0 hidden lg:block`}></div>
                </div>
            </div>






        </div>
    );
};

export default ProjectLeft;