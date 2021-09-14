const ParagraphLight = props => {
    return (
        <p data-theme="mytheme" class="text-secondary mb-5">{props.children}</p>
    );
};

export default ParagraphLight;