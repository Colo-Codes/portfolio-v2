const H4Header = props => {
    return (
        <h3 class={`text-xl font-bold mb-5 mt-3 ${props.class}`}>
            {props.children}
        </h3>
    );
};

export default H4Header;