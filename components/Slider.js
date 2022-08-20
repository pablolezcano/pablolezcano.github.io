import { useKeenSlider } from 'keen-slider/react' // import from 'keen-slider/react.es' for to get an ES module
import {skills} from "../profile";

export default () => {
    const [refCallback, slider, sliderNode] = useKeenSlider(
        {
          loop: true,
        },
        [
          (slider) => {
            let timeout
            let mouseOver = false
            function clearNextTimeout() {
              clearTimeout(timeout)
            }
            function nextTimeout() {
              clearTimeout(timeout)
              if (mouseOver) return
              timeout = setTimeout(() => {
                slider.next()
              }, 2000)
            }
            slider.on("created", () => {
              slider.container.addEventListener("mouseover", () => {
                mouseOver = true
                clearNextTimeout()
              })
              slider.container.addEventListener("mouseout", () => {
                mouseOver = false
                nextTimeout()
              })
              nextTimeout()
            })
            slider.on("dragStarted", clearNextTimeout)
            slider.on("animationEnded", nextTimeout)
            slider.on("updated", nextTimeout)
          },
        ]
      )
  
    return (
      <div ref={refCallback} className="keen-slider">
        {
            skills.map(({skill, description, id}, index) => (
                <div className="keen-slider__slide" key={index}>
            <h3>{skill}</h3>
            <h5>{description}</h5>
            <p>{id}</p>
                </div>
            ))
        }
      </div>
    )
}
