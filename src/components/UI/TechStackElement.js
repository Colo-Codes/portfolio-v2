const TechStackElement = props => {
    return (
        <div class="flex flex-col items-center"><img src={props.icon} class="h-8 w-8 inline mb-1 mr-1 turn-white" alt="" /><span class="text-xs text-center">{props.children}</span></div>
    );
};

export default TechStackElement;