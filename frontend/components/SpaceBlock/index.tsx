
interface SpaceBlockProps {
    width?: string;
    height?: string;
    backgroundColor?: string;
}
const SpaceBlock: React.FC<SpaceBlockProps> = (props) => {
    const blockStyle = {
        height: props.height,
        width: props.width,
        backgroundColor: props.backgroundColor,
    }
    return (
        <>
            <div style={{...blockStyle}}/>
        </>
    )
}

export default SpaceBlock;