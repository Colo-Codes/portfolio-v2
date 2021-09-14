import ButtonDark from '../UI/ButtonDark';
import H3Header from '../UI/H3Header';

const BlogPostIntro = props => {
    return (
        <div class="mt-32 grid grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div class="w-4/5 justify-self-end">
                <div class={`${props.bgImage} bg-contain bg-no-repeat opacity-10 w-52 h-52 z-0 absolute -ml-5`}></div>
                <div class="w-3/5 ml-auto pt-7">
                    {/* <div class="badge badge-outline mb-5">Choose a platform</div> */}
                    <ButtonDark goTo={"#"}>Hashnode</ButtonDark>
                    <ButtonDark goTo={"#"}>Dev.to</ButtonDark>
                    <ButtonDark goTo={"#"}>Medium</ButtonDark>
                </div>
            </div>
            <div class="col-span-2">
                <H3Header>
                    {props.blogTitle}
                </H3Header>
                {props.children}

            </div>
        </div >
    );
};

export default BlogPostIntro;