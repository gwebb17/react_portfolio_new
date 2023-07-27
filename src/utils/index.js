
const navBannerImage = (sizeWidth, sizeHeight) => {
    let enteredWidth = sizeWidth;
    let enteredHeight = sizeHeight;
    return (
        <img src={process.env.PUBLIC_URL + "/react_portfolio_wallpaper.jpg"} alt="nav banner logo" width={enteredWidth} height={enteredHeight} />
    )
}

export default navBannerImage;