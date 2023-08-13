const githubIconWhite = (sizeWidthGit, sizeHeightGit) => {
    let enteredWidth = sizeWidthGit;
    let enteredHeight = sizeHeightGit;
    return (
        <img src={process.env.PUBLIC_URL + "/github_icon_white.svg.png"} width={enteredWidth} height={enteredHeight} alt="github"/>
    )
}

const musicNote = () => {
    return (
        <img src={process.env.PUBLIC_URL + "/note.png"}/>
    )
}

//to export more just add to below {} list separate by comma
export {githubIconWhite, musicNote};