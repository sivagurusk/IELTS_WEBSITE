import React, { useRef, useEffect } from "react";
import Globe from "react-globe.gl";

export default function GlobeSection() {
  const globeRef = useRef();

  useEffect(() => {
    if (globeRef.current) {
      globeRef.current.controls().autoRotate = true;
      globeRef.current.controls().autoRotateSpeed = 1.5;
    }
  }, []);

  const studentLocations = [
    { lat: 28.6139, lng: 77.209, color: "cyan", name: "India", students: 1200 },
    { lat: 51.5072, lng: -0.1276, color: "magenta", name: "UK", students: 800 },
    { lat: 40.7128, lng: -74.006, color: "cyan", name: "USA", students: 950 },
    { lat: -33.8688, lng: 151.2093, color: "magenta", name: "Australia", students: 600 },
    { lat: 35.6762, lng: 139.6503, color: "cyan", name: "Japan", students: 400 },
  ];

  const arcsData = [
    { startLat: 28.6139, startLng: 77.209, endLat: 51.5072, endLng: -0.1276, color: ["cyan", "magenta"] },
    { startLat: 51.5072, startLng: -0.1276, endLat: 40.7128, endLng: -74.006, color: ["magenta", "cyan"] },
    { startLat: 28.6139, startLng: 77.209, endLat: -33.8688, endLng: 151.2093, color: ["cyan", "magenta"] },
    { startLat: 40.7128, startLng: -74.006, endLat: 35.6762, endLng: 139.6503, color: ["cyan", "magenta"] },
  ];

  return (
    <section className="py-20 px-8 bg-gradient-to-r from-dark to-gray-900 text-center">
      <h3 className="text-3xl font-bold mb-6 text-neonBlue">Students Around the World</h3>
      <p className="text-gray-300 max-w-xl mx-auto mb-12">
        Our IELTS students come from <span className="text-neonPink font-semibold">40+ countries</span> worldwide 🌍
      </p>
      <div className="flex justify-center">
        <div className="w-[600px] h-[600px]">
          <Globe
            ref={globeRef}
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"

            ringsData={studentLocations}
            ringColor={(d) => () => d.color}
            ringMaxRadius={5}
            ringPropagationSpeed={2}
            ringRepeatPeriod={2000}

            arcsData={arcsData}
            arcColor={(d) => d.color}
            arcDashLength={0.4}
            arcDashGap={2}
            arcDashAnimateTime={3000}

            labelsData={studentLocations}
            labelLat={(d) => d.lat}
            labelLng={(d) => d.lng}
            labelText={(d) => `${d.name} (${d.students}+ Students)`}
            labelSize={2.0}
            labelDotRadius={0.5}
            labelColor={(d) => d.color}
            labelAltitude={0.02}
            labelResolution={3}

            backgroundColor="rgba(0,0,0,0)"
          />
        </div>
      </div>
      <style jsx>{`
        .globe-label {
          font-weight: bold;
          text-shadow: 0 0 5px cyan, 0 0 10px cyan, 0 0 20px cyan;
        }
      `}</style>
    </section>
  );
}
