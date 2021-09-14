const SectionHeader = props => {

    const h2Classes = `${props.headerGradientStyle} text-5xl font-bold font-poppins text-center w-min subpixel-antialiased mx-auto p-2`;

    return (
        <div class="-mt-32 text-secondary">
            <h2 class={h2Classes}>
                {props.text}
            </h2>
        </div>
    );
};

export default SectionHeader;