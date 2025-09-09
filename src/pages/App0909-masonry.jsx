import Masonry from 'react-masonry-css'
import '../css/Masonry.css'



const App0909 = () => {

    var photos = [
        { id: 1, src: './images/p5.jpg' },
        { id: 2, src: './images/p6.jpg' },
        { id: 3, src: './images/p3.jpg' },
        { id: 4, src: './images/p4.jpg' },
        { id: 5, src: './images/p7.jpg' },
    ]

    const breakpointColumnsObj = {
        default: 3,
        1100: 2,
        700: 1,
    };





    return (
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
            {/* array of JSX items */}
            {
                photos.map((p) => {
                    return (
                        <div key={p.id}>
                            <img src={p.src} alt="" />
                        </div>
                    )
                })
            }
        </Masonry>
    )
}

export default App0909