import React from 'react';

const BackgroundAnimation = () => (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink" width="100vw" height="100vh" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMax slice"
      style={{position: 'fixed', top: 0, left: 0, zIndex: -1}}>
    <defs>
      <linearGradient id="bg">
        <stop offset="0%" style={{ stopColor: "#280e7a" }} />
        <stop offset="33%" style={{ stopColor: "#fa7a7b" }} />
        <stop offset="66%" style={{ stopColor: "#01ffd6" }} />
        <stop offset="100%" style={{ stopColor: "#2477d7" }} />
      </linearGradient>
      <path id="wave" fill="url(#bg)" d="M-363.852,502.589c0,0,236.988-41.997,505.475,0
      s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z" />
    </defs>
    <g>
      <use xlinkHref='#wave' opacity=".3">
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="translate"
          dur="10s"
          calcMode="spline"
          values="270 230; -334 180; 270 230"
          keyTimes="0; .5; 1"
          keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
          repeatCount="indefinite" />
      </use>
      <use xlinkHref='#wave' opacity=".6">
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="translate"
          dur="8s"
          calcMode="spline"
          values="-270 230;243 220;-270 230"
          keyTimes="0; .6; 1"
          keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
          repeatCount="indefinite" />
      </use>
      <use xlinkHref='#wave' opacity=".9">
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="translate"
          dur="6s"
          calcMode="spline"
          values="0 230;-140 200;0 230"
          keyTimes="0; .4; 1"
          keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
          repeatCount="indefinite" />
      </use>
    </g>
  </svg>
);

export default BackgroundAnimation;
