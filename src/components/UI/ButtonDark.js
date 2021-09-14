const ButtonDark = props => {
    return (
        <a class="btn mb-5 w-full z-1 relative" href={props.goTo}>{props.children}</a>
    );
};

export default ButtonDark;