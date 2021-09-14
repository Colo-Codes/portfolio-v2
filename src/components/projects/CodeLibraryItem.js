import ButtonLight from "../UI/ButtonLight";
import H3Header from "../UI/H3Header";
import ParagraphLight from "../UI/ParagraphLight";

const CodeLibraryItem = props => {
    return (
        <>
            <H3Header class='text-white'>{props.codeLibraryTitle}</H3Header>
            <ParagraphLight>{props.children}</ParagraphLight>
            <div data-theme="mytheme" class="w-max">
                <ButtonLight goTo={"#"}>Read more</ButtonLight>
            </div>

        </>
    );
};

export default CodeLibraryItem;