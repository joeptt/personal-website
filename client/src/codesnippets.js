useEffect(() => {
    setPlayerStance(playerStanding);
}, [playerStanding]);

useEffect(() => {
    getStanceImages();
}, [getStanceImages]);

const cleanUpData = useCallback((rawData) => {
    for (let i = 0; i < rawData.length; i++) {
        if (rawData[i].fields.title === "playerStanding") {
            setPlayerStanding(rawData[i].fields.file.url);
        } else if (rawData[i].fields.title === "playerSitting") {
            setPlayerSitting(rawData[i].fields.file.url);
        } else if (rawData[i].fields.title === "playerWalkingRight1") {
            setPlayerWalkingRight1(rawData[i].fields.file.url);
        } else if (rawData[i].fields.title === "playerWalkingRight2") {
            setPlayerWalkingRight2(rawData[i].fields.file.url);
        } else if (rawData[i].fields.title === "playerWalkingLeft1") {
            setPlayerWalkingLeft1(rawData[i].fields.file.url);
        } else if (rawData[i].fields.title === "playerWalkingLeft2") {
            setPlayerWalkingLeft2(rawData[i].fields.file.url);
        }
    }
}, []);

const getStanceImages = useCallback(async () => {
    try {
        const response = await client.getEntries({
            content_type: "stanceImages",
        });
        const responseData = response.items[0].fields.stanceImages;

        if (responseData) {
            cleanUpData(responseData);
        } else {
            setPlayerStanding("");
            setPlayerSitting("");
            setPlayerWalkingRight1("");
            setPlayerWalkingRight2("");
            setPlayerWalkingLeft1("");
            setPlayerWalkingLeft2("");
        }
    } catch (error) {
        console.log(error);
    }
}, []);
