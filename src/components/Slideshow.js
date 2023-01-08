import React from 'react'
import './Slideshow.css';
// https://tinloof.com/blog/how-to-build-an-auto-play-slideshow-with-react
const images = ["new_path_finding.png", "new_mealer_image.png", "new_discord_bot_image.png"];
const imageDescription = ["Path Finding Algorithm Visualizer", "Food Ordering App", "Discord Bot w/ Spotify API Commands"]
const delay = 2500;

const Slideshow = () => {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {resetTimeout();};
  }, [index]);

  return (
    
    <div>
        <h2 className='showcaseTitle'>Project Showcase</h2>
            <div className="slideshow">
                <div className="slideshowSlider">

                    <p>{imageDescription[index]}</p>
                    <img src= {images[index]} alt='Justin Wang Projects'></img>
                    {images.map((index) => (
                    <div
                        className="slide"
                        key={index}
                    ></div>
                    ))}
                </div>

            <div className="slideshowDots">
                {   images.map((_, idx) => (
                <div 
                key={idx} 
                className={`slideshowDot${index === idx ? " active" : ""}`}
                onClick={() => {
                    setIndex(idx);
                }}
                ></div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Slideshow