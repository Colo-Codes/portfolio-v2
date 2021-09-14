const H3Header = props => {
    return (
        <h3 class={`text-2xl font-bold mb-5 ${props.class}`}>
            {props.children}
        </h3>
    );
};

export default H3Header;