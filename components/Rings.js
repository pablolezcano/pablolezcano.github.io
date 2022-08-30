import { useEffect, useRef, useState } from "react";
import RINGS from "vanta/dist/vanta.rings.min";
import * as THREE from "three";

const Rings = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        RINGS({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          backgroundColor: 0xffffff

        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destory();
    };
  }, [vantaEffect]);
  return (
    
    <div className="landing-header" ref={vantaRef}>
         <div className="header-text">
                <div className="content">
                    <h2 className="name text-nowrap ">Pablo Lezcano</h2>
                    <span> <h5>Desarrollador JS</h5>
                        <ul className="header-links p-0 d-flex justify-content-between align-items-center">
                          <li>
                            <div class="m-2 card-small-a" >
                              <img src="github.svg" alt="" width="35" height="auto"/>
                            </div>
                          </li>
                          <li>
                            <div class="m-2 card-small-a">
                              <img src="linkedin.svg" alt="" width="35" height="auto"/>
                            </div>
                          </li>
                          <li>
                          <div class="m-2 card-small-a">
                            <img src="mail4.svg" alt="" width="35" height="auto"/>
                          </div>
                          </li>
                        </ul>
                        
                        
                    </span>
                    <button>
                    <span> Ver más
                    </span>
                    </button>
                </div>
            </div>
    </div>
  );
}

export default Rings