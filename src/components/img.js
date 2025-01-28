import React from "react";

function Img({ src }) {
  const images = {
    arrowDown: `<svg width="24" height="24" viewBox="0 0 24 24" fill="#59636e" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0001 6H14.6701C17.9801 6 19.3401 8.35 17.6801 11.22L16.3401 13.53L15.0001 15.84C13.3401 18.71 10.6301 18.71 8.97005 15.84L7.63005 13.53L6.29005 11.22C4.66005 8.35 6.01005 6 9.33005 6H12.0001Z" stroke="##59636e" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    circle: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z" stroke="#59636e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 13C12.1046 13 13 12.1046 13 11C13 9.89543 12.1046 9 11 9C9.89543 9 9 9.89543 9 11C9 12.1046 9.89543 13 11 13Z" stroke="#59636e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    projects: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.73 19.7C7.55 18.82 8.8 18.89 9.52 19.85L10.53 21.2C11.34 22.27 12.65 22.27 13.46 21.2L14.47 19.85C15.19 18.89 16.44 18.82 17.26 19.7C19.04 21.6 20.49 20.97 20.49 18.31V7.04C20.5 3.01 19.56 2 15.78 2H8.22C4.44 2 3.5 3.01 3.5 7.04V18.3C3.5 20.97 4.96 21.59 6.73 19.7Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.09607 11H8.10505" stroke="#292D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.8984 11H16.3984" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.09607 7H8.10505" stroke="#292D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.8984 7H16.3984" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    discussions: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 6.25V11.35C22 12.62 21.58 13.69 20.83 14.43C20.09 15.18 19.02 15.6 17.75 15.6V17.41C17.75 18.09 16.99 18.5 16.43 18.12L15.46 17.48C15.55 17.17 15.59 16.83 15.59 16.47V12.4C15.59 10.36 14.23 9 12.19 9H5.39999C5.25999 9 5.13 9.01002 5 9.02002V6.25C5 3.7 6.7 2 9.25 2H17.75C20.3 2 22 3.7 22 6.25Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.59 12.4V16.47C15.59 16.83 15.55 17.17 15.46 17.48C15.09 18.95 13.87 19.87 12.19 19.87H9.47L6.45 21.88C6 22.19 5.39999 21.86 5.39999 21.32V19.87C4.37999 19.87 3.53 19.53 2.94 18.94C2.34 18.34 2 17.49 2 16.47V12.4C2 10.5 3.18 9.19002 5 9.02002C5.13 9.01002 5.25999 9 5.39999 9H12.19C14.23 9 15.59 10.36 15.59 12.4Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    codespaces: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5 19.9V4.1C10.5 2.6 9.86 2 8.27 2H4.23C2.64 2 2 2.6 2 4.1V19.9C2 21.4 2.64 22 4.23 22H8.27C9.86 22 10.5 21.4 10.5 19.9Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 10.9V4.1C22 2.6 21.36 2 19.77 2H15.73C14.14 2 13.5 2.6 13.5 4.1V10.9C13.5 12.4 14.14 13 15.73 13H19.77C21.36 13 22 12.4 22 10.9Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 19.9V18.1C22 16.6 21.36 16 19.77 16H15.73C14.14 16 13.5 16.6 13.5 18.1V19.9C13.5 21.4 14.14 22 15.73 22H19.77C21.36 22 22 21.4 22 19.9Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    telescope: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.0301 10.77L20.6901 6.97998C21.2601 6.59998 21.4101 5.81998 21.0301 5.25998L19.2101 2.54996C18.8301 1.97996 18.0501 1.82996 17.4901 2.20996L11.8301 5.99997L15.0301 10.77Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.1739 6.4792L7.39624 9.67908L9.95614 13.5012L14.7338 10.3013L12.1739 6.4792Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.83004 15.9L9.78004 13.26L7.54004 9.91998L3.59004 12.56C3.13004 12.87 3.01004 13.49 3.32004 13.95L4.45004 15.63C4.75004 16.08 5.37004 16.2 5.83004 15.9Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.0501 12.2L7.56006 22" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 12.2L16.44 22" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    closeIcon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 17L17 7M17 17L7 7" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    closeIconWhite: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 17L17 7M17 17L7 7" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    immersive: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9V7C2 4 4 2 7 2H17C20 2 22 4 22 7V9" stroke="#59636e" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 15V17C2 20 4 22 7 22H17C20 22 22 20 22 17V15" stroke="#59636e" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.7002 9.25977L12.0002 12.3298L17.2602 9.27979" stroke="#59636e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 17.7698V12.3198" stroke="#59636e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.7602 6.29006L7.56023 8.07009C6.84023 8.47009 6.24023 9.48008 6.24023 10.3101V13.7001C6.24023 14.5301 6.83023 15.5401 7.56023 15.9401L10.7602 17.7201C11.4402 18.1001 12.5602 18.1001 13.2502 17.7201L16.4502 15.9401C17.1702 15.5401 17.7702 14.5301 17.7702 13.7001V10.3101C17.7702 9.48008 17.1802 8.47009 16.4502 8.07009L13.2502 6.29006C12.5602 5.90006 11.4402 5.90006 10.7602 6.29006Z" stroke="#59636e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    arrowRight: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.91016 19.9201L15.4302 13.4001C16.2002 12.6301 16.2002 11.3701 15.4302 10.6001L8.91016 4.08008" stroke="#59636e" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    newRepository: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4.67019V16.7402C22 17.7002 21.22 18.6002 20.26 18.7202L19.93 18.7602C17.75 19.0502 14.39 20.1602 12.47 21.2202C12.21 21.3702 11.78 21.3702 11.51 21.2202L11.47 21.2002C9.54997 20.1502 6.20003 19.0502 4.03003 18.7602L3.73999 18.7202C2.77999 18.6002 2 17.7002 2 16.7402V4.66018C2 3.47018 2.96997 2.57019 4.15997 2.67019C6.25997 2.84019 9.43997 3.90022 11.22 5.01022L11.47 5.16018C11.76 5.34018 12.24 5.34018 12.53 5.16018L12.7 5.05019C13.33 4.66019 14.13 4.27019 15 3.92019V8.00021L17 6.67019L19 8.00021V2.78024C19.27 2.73024 19.53 2.7002 19.77 2.6802H19.83C21.02 2.5802 22 3.47019 22 4.67019Z" stroke="#59636e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 5.49023V20.4902" stroke="#59636e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 2.78027V8.00024L17 6.67023L15 8.00024V3.92023C16.31 3.40023 17.77 2.98027 19 2.78027Z" stroke="#59636e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    importRepository: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8.98987V20.3499C16 21.7999 14.96 22.4099 13.69 21.7099L9.76001 19.5199C9.34001 19.2899 8.65999 19.2899 8.23999 19.5199L4.31 21.7099C3.04 22.4099 2 21.7999 2 20.3499V8.98987C2 7.27987 3.39999 5.87988 5.10999 5.87988H12.89C14.6 5.87988 16 7.27987 16 8.98987Z" stroke="#59636e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 5.10999V16.47C22 17.92 20.96 18.53 19.69 17.83L16 15.77V8.98999C16 7.27999 14.6 5.88 12.89 5.88H8V5.10999C8 3.39999 9.39999 2 11.11 2H18.89C20.6 2 22 3.39999 22 5.10999Z" stroke="#59636e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 12H11" stroke="#59636e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 14V10" stroke="#59636e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    buildingRepository: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 22H5C3 22 2 21 2 19V11C2 9 3 8 5 8H10V19C10 21 11 22 13 22Z" stroke="#59636e" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.11 4C10.03 4.3 10 4.63 10 5V8H5V6C5 4.9 5.9 4 7 4H10.11Z" stroke="#59636e" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 8V13" stroke="#59636e" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 8V13" stroke="#59636e" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 17H15C14.45 17 14 17.45 14 18V22H18V18C18 17.45 17.55 17 17 17Z" stroke="#59636e" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 13V17" stroke="#59636e" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 19V5C10 3 11 2 13 2H19C21 2 22 3 22 5V19C22 21 21 22 19 22H13C11 22 10 21 10 19Z" stroke="#59636e" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    overview: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4.67019V16.7402C22 17.7002 21.22 18.6002 20.26 18.7202L19.93 18.7602C17.75 19.0502 14.39 20.1602 12.47 21.2202C12.21 21.3702 11.78 21.3702 11.51 21.2202L11.47 21.2002C9.54997 20.1502 6.20003 19.0502 4.03003 18.7602L3.73999 18.7202C2.77999 18.6002 2 17.7002 2 16.7402V4.66018C2 3.47018 2.96997 2.57019 4.15997 2.67019C6.25997 2.84019 9.43997 3.90022 11.22 5.01022L11.47 5.16018C11.76 5.34018 12.24 5.34018 12.53 5.16018L12.7 5.05019C13.33 4.66019 14.13 4.27019 15 3.92019V8.00021L17 6.67019L19 8.00021V2.78024C19.27 2.73024 19.53 2.7002 19.77 2.6802H19.83C21.02 2.5802 22 3.47019 22 4.67019Z" stroke="#808890" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 5.49023V20.4902" stroke="#808890" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 2.78027V8.00024L17 6.67023L15 8.00024V3.92023C16.31 3.40023 17.77 2.98027 19 2.78027Z" stroke="#808890" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    cub: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.16992 7.43994L11.9999 12.5499L20.7699 7.46994" stroke="#808890" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 21.61V12.54" stroke="#808890" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.92965 2.47979L4.58965 5.43979C3.37965 6.10979 2.38965 7.78979 2.38965 9.16979V14.8198C2.38965 16.1998 3.37965 17.8798 4.58965 18.5498L9.92965 21.5198C11.0696 22.1498 12.9396 22.1498 14.0796 21.5198L19.4196 18.5498C20.6296 17.8798 21.6196 16.1998 21.6196 14.8198V9.16979C21.6196 7.78979 20.6296 6.10979 19.4196 5.43979L14.0796 2.46979C12.9296 1.83979 11.0696 1.83979 9.92965 2.47979Z" stroke="#808890" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
  };
  return (
    <div
      dangerouslySetInnerHTML={{ __html: images[src] || "" }}
      className="svgicon"
    />
  );
}

export default Img;
