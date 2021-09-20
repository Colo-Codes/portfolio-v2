import ButtonDark from '../UI/ButtonDark';
import H3Header from '../UI/H3Header';

const BlogPostIntro = props => {
    return (
        <div class="mt-32 flex flex-wrap-reverse md:flex-nowrap gap-6 max-w-5xl mx-auto px-2">
            <div class="w-2/6 justify-self-end mx-auto">
                <div class={`${props.bgImage} bg-contain bg-no-repeat opacity-10 w-40 md:w-52 h-40 md:h-52 z-0 absolute -ml-5`}></div>
                <div class="w-10/12 mx-auto md:mx-0 md:ml-auto md:w-8/12 pt-7">
                    {/* <div class="badge badge-outline mb-5">Choose a platform</div> */}
                    <ButtonDark goTo={props.linkHashnode} target='_blank' rel="noreferrer">Hashnode</ButtonDark>
                    <ButtonDark goTo={props.linkDevto} target='_blank' rel="noreferrer">Dev.to</ButtonDark>
                    {/* <ButtonDark goTo={"#"}>Medium</ButtonDark> */}
                </div>
            </div>
            <div class="w-full">
                <H3Header>
                    {props.blogTitle}
                </H3Header>
                {props.children}
            </div>
        </div >
    );
};

export default BlogPostIntro;