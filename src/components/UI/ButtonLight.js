const ButtonLight = props => {
    return (
        <a class="btn btn-primary mb-5 w-full z-1 relative" href={props.goTo}>{props.children}</a>
    );
};

export default ButtonLight;