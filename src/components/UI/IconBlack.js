const IconBlack = props => {
    return (
        <div>
            <a href={props.goTo} target='_blank' rel='noreferrer' aria-label={props.ariaLabel}><img src={props.icon} alt='' class={'w-10 h-10 mx-auto icon-link-dark'} /></a>
            <p class={'text-center text-xs mt-1'}>{props.children}</p>
        </div>
    );
};

export default IconBlack;