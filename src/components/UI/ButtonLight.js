const ButtonLight = props => {
    return (
        <a class={`btn btn-primary mb-5 w-full z-1 relative ${props.class}`} href={props.goTo} target={props.target}>{props.children}</a>
    );
};

export default ButtonLight;