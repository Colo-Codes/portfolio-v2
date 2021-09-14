const CardTestimony = props => {
    return (
        <div class="card text-center shadow-2xl max-w-xs bg-white">
            <div data-theme="mytheme" class="w-full h-36 bg-gray-200 flex items-center justify-around neutral">
                <img src={props.image} class="h-24 w-24" alt="" />
                <div class="text-left w-44">
                    <p class="font-bold neutral">{props.personName}</p>
                    <div class="text-sm font-light mt-2">
                        {props.jobPosition}

                    </div>
                </div>
            </div>
            <div class="card-body text-left justify-between">
                {props.children}
                <div class="justify-center card-actions">
                    <a href={props.goTo} target="_blank" rel="noreferrer" class="btn btn-outline">Read it on LinkedIn</a>
                </div>
            </div>
        </div>
    );
};

export default CardTestimony;