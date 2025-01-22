import React, {
  useRef,
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";
import { useNavigate } from "react-router-dom";
import * as THREE from "three";
import "./space.css";

const SpaceBackground = forwardRef((_, ref) => {
  const mountRef = useRef(null);
  const navigate = useNavigate();
  const [zoomProgress, setZoomProgress] = useState(0);
  const [showButtons, setShowButtons] = useState(false);
  const zoomDuration = 1;
  const speed = useRef(0.1);

  const triggerKeyPress = () => {
    speed.current = 0.8;
    setZoomProgress((prev) => {
      const newProgress = prev + 1;
      if (newProgress >= zoomDuration) {
        setShowButtons(true);
      }
      return newProgress;
    });
  };

  useImperativeHandle(ref, () => ({
    triggerKeyPress,
  }));

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.6,
      1000
    );
    camera.position.z = 20;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Add particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.1,
    });

    const particlesCount = 5000;
    const positions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 100;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    let zoomInterval = null;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Simulate traveling through space
      const positions = particles.geometry.attributes.position.array;
      for (let i = 0; i < particlesCount * 3; i += 3) {
        positions[i + 2] += speed.current; // Move particles closer to the camera
        if (positions[i + 2] > 50) {
          positions[i + 2] = -50; // Reset particles behind the camera
        }
      }
      particles.geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // Keydown and keyup listeners
    const handleKeyDown = (e) => {
      if (e.key === "ArrowUp") {
        speed.current = 0.5; // Increase travel speed
        if (!zoomInterval) {
          zoomInterval = setInterval(() => {
            setZoomProgress((prev) => {
              if (prev >= zoomDuration) {
                clearInterval(zoomInterval);
                zoomInterval = null;
                setShowButtons(true); // Show buttons after 3 seconds
                return zoomDuration;
              }
              return prev + 1;
            });
          }, 1000); // Increment every second
        }
      }
    };

    const handleKeyUp = (e) => {
      if (e.key === "ArrowUp") {
        speed.current = 0.1;
        clearInterval(zoomInterval);
        zoomInterval = null;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      clearInterval(zoomInterval);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      renderer.dispose();
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, [zoomProgress]);
  const handleProjectsClick = () => {
    navigate("/projects"); 
  };
  const handleContactClick = () => {
    navigate("/ContactMe"); 
  };
  const handleaboutClick = () => {
    navigate("/about"); 
  };

  return (
    <div
      ref={mountRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    >
      {showButtons && (
        <div className="buttons-container">
          <button onClick={handleProjectsClick}>Projects</button>
          {/* <button onClick={handleContactClick}>Contact</button> */}
          <button onClick={handleaboutClick}>About</button>
        </div>
      )}
    </div>
  );
});

export default SpaceBackground;
