import BlogPostIntro from '../blog_posts/BlogPostIntro';
import ParagraphDark from '../UI/ParagraphDark';
import H4Header from '../UI/H4Header';
import CodeInline from '../UI/CodeInline';
import SectionHeader from '../UI/SectionHeader';

const BlogSection = props => {
    return (
        <section id="section-blog-posts">
            <SectionHeader text={'Blog Posts'} headerGradientStyle={'header-blog-posts'} class={'mt-24 lg:mt-20'} />
            <BlogPostIntro
                blogTitle={'Hammering down React basics, with a paint coat of Material UI'}
                bgImage={'bg-blog-post'}
                linkHashnode={'https://blog.damiandemasi.com/hammering-down-react-basics-with-a-paint-coat-of-material-ui'}
                linkDevto={'https://dev.to/colocodes/hammering-down-react-basics-with-a-paint-coat-of-material-ui-o0h'}>
                <ParagraphDark>
                    <p>This project is an excuse to practice React basic concepts and to experiment with Material UI. I will be building a simple application to build a list of favourite books 📚.</p>
                </ParagraphDark>
                <ParagraphDark>
                    <p>In the past, I was used to coding with an imperative approach: stating line by line all the necessary steps the program needed to execute in order to achieve the desired outcome. With JavaScript, and especially with React, this mindset is changing, moving towards a declarative paradigm. I no longer state line by line what needs to be done, but the end results I’m pursuing.</p>
                </ParagraphDark>
                <ParagraphDark>
                    <p>This declarative approach is still new for me, and it’s taking me some work to get used to it, but I’m feeling more comfortable with it.  (...)</p>
                </ParagraphDark>
            </BlogPostIntro>
            <div class="divider w-1/2 mx-auto opacity-20"></div>
            <BlogPostIntro
                blogTitle={'2 use cases of the useReducer ReactJS hook'}
                bgImage={'bg-blog-post'}
                linkHashnode={'https://blog.damiandemasi.com/2-use-cases-of-the-usereducer-reactjs-hook'}
                linkDevto={'https://dev.to/colocodes/2-use-cases-of-the-usereducer-reactjs-hook-ine'}>
                <ParagraphDark><CodeInline>useReducer</CodeInline> is a Hook that allows us to manage multiple states more efficiently, create complex state logic, and manage states that depend on previous states. The following two use cases are good examples of how we can make use of this hook.</ParagraphDark>
                <H4Header>Manage multiple states</H4Header>
                <ParagraphDark><CodeInline>useReducer</CodeInline> can be used to simplify the way in which multiple states impact a piece of data. In this case, adding, removing, and clearing an array can be achieved by using <CodeInline>useReducer</CodeInline> instead of three separate states.</ParagraphDark>
                <H4Header>Modify complex states, such as arrays or objects: login form</H4Header>
                <ParagraphDark><CodeInline>useReducer</CodeInline> can be especially handy when dealing with multiple states and a complex state logic. By handling a login form with this hook instead of multiple useState hooks we can appreciate how powerful this hook is. (...)</ParagraphDark>
            </BlogPostIntro>
            <div class="divider w-1/2 mx-auto opacity-20"></div>
            <BlogPostIntro
                blogTitle={'5 use cases of the useState ReactJS hook'}
                bgImage={'bg-blog-post'}
                linkHashnode={'https://blog.damiandemasi.com/5-use-cases-of-the-usestate-reactjs-hook'}
                linkDevto={'https://dev.to/colocodes/5-use-cases-of-the-usestate-reactjs-hook-4n00'}>
                <ParagraphDark><CodeInline>useState</CodeInline> is a Hook that needs to be called inside a function component to add some local state to it. React will preserve this state between component re-renders.</ParagraphDark>
                <H4Header>State management</H4Header>
                <ParagraphDark>Let's start with a warning: don't write a <CodeInline>setState</CodeInline> call in the main body of the component function, because it will create an infinite loop. The loop is created because the initial render calls the state update function <CodeInline>setState</CodeInline>, which in time triggers a re-render and a new function evaluation. The <CodeInline>setState</CodeInline> call should be inside a function that is called when an event is detected.</ParagraphDark>
                <H4Header>Conditional rendering</H4Header>
                <ParagraphDark>We can use a state to conditionally render a component or part of it.</ParagraphDark>
                <H4Header>Toggle flags</H4Header>
                <ParagraphDark><CodeInline>useState</CodeInline> can be used to toggle between two values, usually <i>true</i> and <i>false</i>, in order to toggle a flag, such as the display mode.</ParagraphDark>
                <H4Header>Counter</H4Header>
                <ParagraphDark><CodeInline>useState</CodeInline> can be used to keep track of a variable through multiple re-renders, such as in a counter application.</ParagraphDark>
                <H4Header>Get API data and store it in state</H4Header>
                <ParagraphDark>A more complex use of this hook is presented when we need to interact with an API. In this case, we can use a state to store the response of a <CodeInline>fetch()</CodeInline> to the API, and the state of a spinner that will indicate if the data is being fetched.(...)</ParagraphDark>
            </BlogPostIntro>
            <div class='block mx-auto mt-20 text-center'>
                <a href='https://blog.damiandemasi.com/' target='_blank' rel='noreferrer' class='btn'>Read more articles</a>
            </div>
        </section>
    );
};

export default BlogSection;