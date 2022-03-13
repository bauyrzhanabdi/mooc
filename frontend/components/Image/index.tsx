const Image = (props: any) => {

    return (
        <img
            src={props.src}
            width={props.wh || (props.width || 50)}
            height={props.wh || (props.height || 50)}
            style={props.borderRadius && {borderRadius: `${props.borderRadius}px`}}
            />
    )
}
export default Image;