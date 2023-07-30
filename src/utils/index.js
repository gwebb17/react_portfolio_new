const githubIconWhite = (sizeWidthGit, sizeHeightGit) => {
    let enteredWidth = sizeWidthGit;
    let enteredHeight = sizeHeightGit;
    return (
        <img src={process.env.PUBLIC_URL + "/github_icon_white.svg.png"} width={enteredWidth} height={enteredHeight} />
    )
}

const instaIcon = (sizeWidthIG, sizeHeightIG) => {
    let enteredWidth = sizeWidthIG;
    let enteredHeight = sizeHeightIG;
    return (
        <img src={process.env.PUBLIC_URL + "/ig_icon.svg"} width={enteredWidth} height={enteredHeight} />
    )
}

//to export more just add to below {} list separate by comma
export {githubIconWhite, instaIcon};