export default function Player({
    refUser,
    positionX,
    displaySpeechbubble,
    bubbleSrc,
}) {
    return (
        <div
            ref={refUser}
            style={{
                left: `${positionX}%`,
            }}
            className="player-wrapper"
        >
            <div className="speechbubble-wrapper">
                <img
                    style={{ display: displaySpeechbubble }}
                    className="speechbubble"
                    src={bubbleSrc}
                ></img>
            </div>
        </div>
    );
}
