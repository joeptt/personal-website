export default function Player({
    refUser,
    positionX,
    displaySpeechbubble,
    bubbleSrc,
    playerStance,
}) {
    return (
        <>
            <div
                ref={refUser}
                style={{
                    left: `${positionX}%`,
                }}
                className="player-wrapper"
            >
                <img className="player-img" src={playerStance}></img>
                <div className="speechbubble-wrapper">
                    <img
                        style={{ display: displaySpeechbubble }}
                        className="speechbubble"
                        src={bubbleSrc}
                    ></img>
                </div>
            </div>
        </>
    );
}
