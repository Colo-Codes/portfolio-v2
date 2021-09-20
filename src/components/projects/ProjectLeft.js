import ButtonLight from '../UI/ButtonLight';
import H3Header from '../UI/H3Header';
import H4Header from '../UI/H4Header';
import TechStack from '../UI/TechStack';

const ProjectLeft = props => {
    return (
        <div class="mt-32 flex flex-wrap gap-6 max-w-5xl mx-auto px-2 text-white">
            <div class="w-full md:w-9/12 md:mx-auto lg:max-w-xl">
                <H3Header>
                    {props.projectTitle}
                </H3Header>
                {props.children}
                <H4Header>
                    Tech stack used in this project
                </H4Header>
                <p data-theme="mytheme" class="text-secondary mb-5">In this project, I employed the following technologies:</p>
                <div class="grid grid-cols-5 gap-4">
                    <TechStack usedTech={props.techStack} />
                </div>
            </div>
            <div data-theme="mytheme" class="max-w-sm justify-self-end mx-auto">
                <div class="w-6/12 mx-auto lg:mx-0 lg:mr-auto lg:w-8/12 pt-14">
                    <ButtonLight goTo={props.buttonWatchItLive} target='_blank' rel="noreferrer">Watch it live</ButtonLight>
                    <ButtonLight goTo={props.buttonDescription} target='_blank' rel="noreferrer">Full description</ButtonLight>
                    <ButtonLight goTo={props.buttonGitHub} target='_blank' rel="noreferrer">GitHub</ButtonLight>
                    <div class={`${props.bgImage} bg-contain bg-no-repeat opacity-20 w-56 h-56 z-0 hidden lg:block`}></div>
                </div>
            </div>
        </div>
    );
};

export default ProjectLeft;