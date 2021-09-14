import ButtonLight from '../UI/ButtonLight';
import H3Header from '../UI/H3Header';
import TechStack from './TechStack';

const ProjectRight = props => {
    return (
        <div class="mt-32 grid grid-cols-3 gap-6 max-w-5xl mx-auto text-white">
            <div data-theme="mytheme" class="w-4/5 justify-self-end">
                <div class={`${props.bgImage} bg-contain bg-no-repeat opacity-20 w-60 h-60 z-0 absolute -ml-20`}></div>
                <div class="w-3/5 ml-auto pt-14">
                    <ButtonLight goTo={"#"}>Watch it live</ButtonLight>
                    <ButtonLight goTo={"#"}>description</ButtonLight>
                    <ButtonLight goTo={"#"}>GitHub</ButtonLight>
                </div>
            </div>
            <div class="col-span-2">
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
        </div>
    );
};

export default ProjectRight;