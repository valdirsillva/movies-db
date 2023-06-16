
import ReactPlayer from 'react-player'

export const Player = ({ contextUrl }) => {
    return (
        <ReactPlayer
            url={contextUrl}
            controls={true}
            width={540}
            height={340}
        />


    )
}