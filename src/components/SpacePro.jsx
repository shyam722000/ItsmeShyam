import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const NebulaBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000); // Black background

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    if (containerRef.current) {
      containerRef.current.appendChild(renderer.domElement);
    }

    // Starfield
    const starGeometry = new THREE.BufferGeometry();
    const starCount = 5000;
    const starPositions = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      starPositions[i * 3] = THREE.MathUtils.randFloatSpread(1000);
      starPositions[i * 3 + 1] = THREE.MathUtils.randFloatSpread(1000);
      starPositions[i * 3 + 2] = THREE.MathUtils.randFloatSpread(1000);
    }

    starGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(starPositions, 3)
    );

    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.7,
      sizeAttenuation: true,
      transparent: true,
      blending: THREE.AdditiveBlending,
    });

    const starMesh = new THREE.Points(starGeometry, starMaterial);
    scene.add(starMesh);

    // Comet/Shooting Star
    const cometGeometry = new THREE.SphereGeometry(1, 16, 16);
    const cometMaterial = new THREE.MeshBasicMaterial({ color: 0xffaa00 });
    const comet = new THREE.Mesh(cometGeometry, cometMaterial);
    comet.visible = false; // Initially hidden
    scene.add(comet);

    // Comet trail (particles)
    const trailGeometry = new THREE.BufferGeometry();
    const trailCount = 100;
    const trailPositions = new Float32Array(trailCount * 3);
    trailGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(trailPositions, 3)
    );

    const trailMaterial = new THREE.PointsMaterial({
      color: 0xffaa00,
      size: 0.5,
      transparent: true,
      blending: THREE.AdditiveBlending,
    });

    const trail = new THREE.Points(trailGeometry, trailMaterial);
    scene.add(trail);

    let cometVelocity = new THREE.Vector3();
    let cometActive = false;
    let cometTimeout;

    const spawnComet = () => {
      comet.position.set(
        THREE.MathUtils.randFloatSpread(400),
        THREE.MathUtils.randFloatSpread(400),
        -500
      );
      cometVelocity.set(
        Math.random() * 2 - 1,
        Math.random() * 2 - 1,
        Math.random() * 4 + 5
      );
      comet.visible = true;
      cometActive = true;

      // Remove comet after a while
      cometTimeout = setTimeout(() => {
        comet.visible = false;
        cometActive = false;
      }, 2000); // Comet duration
    };

    // Lights
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1, 500);
    pointLight.position.set(100, 100, 100);
    scene.add(pointLight);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      // Star rotation
      starMesh.rotation.y += 0.0005;

      // Comet movement
      if (cometActive) {
        comet.position.add(cometVelocity);

        // Update comet trail
        const positions = trailGeometry.attributes.position.array;
        for (let i = trailCount - 1; i > 0; i--) {
          positions[i * 3] = positions[(i - 1) * 3];
          positions[i * 3 + 1] = positions[(i - 1) * 3 + 1];
          positions[i * 3 + 2] = positions[(i - 1) * 3 + 2];
        }
        positions[0] = comet.position.x;
        positions[1] = comet.position.y;
        positions[2] = comet.position.z;

        trailGeometry.attributes.position.needsUpdate = true;
      }

      renderer.render(scene, camera);
    };

    camera.position.z = 300;
    animate();

    // Periodically spawn comets
    const cometInterval = setInterval(spawnComet, 5000);

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(cometInterval);
      clearTimeout(cometTimeout);

      // Safeguard before accessing containerRef.current
      if (containerRef.current && renderer.domElement.parentNode === containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} style={{ position: "absolute", width: "100%", height: "100%" }} />;
};

export default NebulaBackground;
