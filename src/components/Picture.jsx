import '../css/picture.css'

const Picture = ({ data }) => {

    // console.log(data);
    return (
        <div className="picture">
            <p>{data.photographer}</p>
            <div className="imgContainer">
                <img src={data.src.large} alt={data.photographer} />
            </div>
            <p>
                Download Image：
                <a href={data.src.large} target="_blank">Click here</a>
            </p>
        </div>
    )
}

export default Picture