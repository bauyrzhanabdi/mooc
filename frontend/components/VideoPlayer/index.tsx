const VideoPlayer = (props: any) => {
    return (
        <div className={'video-responsive'}>
            <iframe
            width={'853'}
            height={'480'}
            src={props.url}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
            />
        </div>
    )
}

export default VideoPlayer;