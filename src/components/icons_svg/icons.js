import * as React from "react";

export const GithubIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h512v512H0z" />
    <path
      fill="currentColor"
      d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"
    />
  </svg>
);

export const TwitterIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 209"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h256v209H0z" />
    <path
      fill="#55acee"
      d="M256 25.45a105.04 105.04 0 0 1-30.166 8.27c10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45"
    />
  </svg>
);

export const LinkedInIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <g fill="none">
      <rect width={256} height={256} fill="#fff" rx={60} />
      <rect width={256} height={256} fill="#0A66C2" rx={60} />
      <path
        fill="#fff"
        d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82 19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627 11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38 47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"
      />
    </g>
  </svg>
);

export const SunIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <g strokeDasharray="2">
        <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.2s"
            values="4;2"
          />
        </path>
        <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.2s"
            dur="0.2s"
            values="4;2"
          />
        </path>
      </g>
      <path
        fill="currentColor"
        d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
        opacity="0"
      >
        <set attributeName="opacity" begin="0.5s" to="1" />
      </path>
    </g>
    <g fill="currentColor" fillOpacity="0">
      <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
        <animate
          id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0"
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="22" cy="2" r="3" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="3;12"
        />
      </circle>
      <circle cx="22" cy="2" r="1">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="1;10"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="6"
      fill="currentColor"
      mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)"
    >
      <set attributeName="opacity" begin="0.5s" to="0" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.1s"
        dur="0.4s"
        values="6;10"
      />
    </circle>
  </svg>
);

export const MoonIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" />
    <g
      fill="none"
      stroke="currentColor"
      strokeDasharray="2"
      strokeDashoffset="2"
      strokeLinecap="round"
      strokeWidth="2"
    >
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.2s"
          dur="0.2s"
          values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.2s"
          dur="0.2s"
          values="2;0"
        />
      </path>
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.5s"
          dur="0.2s"
          values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.5s"
          dur="1.2s"
          values="2;0"
        />
      </path>
      <animateTransform
        attributeName="transform"
        dur="30s"
        repeatCount="indefinite"
        type="rotate"
        values="0 12 12;360 12 12"
      />
    </g>
    <g fill="currentColor">
      <path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <g
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" />
      <set attributeName="opacity" begin="0.6s" to="0" />
    </g>
    <mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="18" cy="6" r="12" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="12;3"
        />
      </circle>
      <circle cx="18" cy="6" r="10">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="10;1"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="10"
      fill="currentColor"
      mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)"
      opacity="0"
    >
      <set attributeName="opacity" begin="0.6s" to="1" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.6s"
        dur="0.4s"
        values="10;6"
      />
    </circle>
  </svg>
);

export const CircularText = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="300"
    viewBox="0 0 1024 1024"
    enableBackground="0 0 1024 1024"
    xmlSpace="preserve"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path
      d="
M449.262115,818.633667 
	C454.884216,819.586304 456.318329,822.608643 456.287201,827.859497 
	C456.065857,865.186340 456.209625,902.515259 456.105957,939.843140 
	C456.100098,941.954468 457.682587,945.319519 453.794891,945.915222 
	C450.151093,946.473511 443.252350,942.375183 442.893982,939.716248 
	C442.717163,938.404236 442.797668,937.054688 442.798767,935.722107 
	C442.823730,905.059631 442.857758,874.397217 442.872528,843.734741 
	C442.873352,841.975769 442.724976,840.216675 442.634064,838.191101 
	C439.744080,839.345520 438.879517,841.658875 437.508118,843.426453 
	C418.515289,867.906860 399.532745,892.395630 380.675751,916.980591 
	C378.614410,919.668030 376.620911,920.684814 373.545135,919.194092 
	C370.195709,917.570679 365.607086,917.779602 365.728638,911.869507 
	C366.009583,898.211121 365.764923,884.541992 365.744263,870.877258 
	C365.717041,852.879700 365.717377,834.882141 365.651855,816.884766 
	C365.645477,815.126404 366.108063,813.283386 364.938904,810.991028 
	C359.684113,817.804932 354.621643,824.322693 349.608765,830.878479 
	C335.138214,849.802979 320.690369,868.744873 306.227905,887.675598 
	C300.373718,895.338440 298.887146,895.563904 289.256653,889.786072 
	C292.832977,884.858582 296.298126,879.886719 299.963470,875.066956 
	C320.234406,848.411560 340.735291,821.927795 360.703125,795.047791 
	C364.659058,789.722473 368.154449,791.580139 372.698486,792.732544 
	C377.536285,793.959595 378.228149,796.928955 378.221832,801.225098 
	C378.178162,830.887329 378.300415,860.549866 378.410309,890.212158 
	C378.419373,892.658020 377.876831,895.221802 379.525604,897.787659 
	C382.367706,895.826782 383.985107,892.891968 385.958679,890.354736 
	C403.858765,867.341736 421.791901,844.352417 439.415894,821.128845 
	C442.309937,817.315308 444.825500,816.158325 449.262115,818.633667 
z M258.738037,700.489014 
C266.951172,708.711365 266.842804,709.453979 257.550964,715.383545 
C226.533768,735.176819 195.545975,755.016174 164.511703,774.782593 
C162.806992,775.868347 160.881683,778.485229 158.879684,776.764771 
C156.151794,774.420410 153.964386,771.208130 153.214035,767.579285 
C152.843185,765.785767 155.161087,765.091492 156.511139,764.224121 
C166.457443,757.833923 176.442139,751.503479 186.404724,745.138550 
C188.897095,743.546204 191.352890,741.896729 195.010986,739.495361 
C175.872406,736.123657 164.879028,724.853455 159.033310,708.202637 
C155.465698,698.040771 156.131851,687.881531 160.485245,678.017578 
C169.706818,657.123169 196.153488,644.623108 217.018417,651.265259 
C239.953506,658.566406 251.842453,680.585754 246.684586,706.749756 
C251.109711,705.284180 254.069122,701.501892 258.738037,700.489014 
M196.521179,728.879150 
C212.751099,732.105225 232.540146,719.048584 236.662094,702.433960 
C237.635620,698.509888 238.045624,694.607422 237.199356,690.595642 
C231.619522,664.144470 205.622070,654.212036 183.382172,670.349365 
C172.943268,677.923889 167.336533,688.452637 169.940140,701.524597 
C172.753922,715.651672 180.864746,725.597107 196.521179,728.879150 
z M668.731323,900.333496 
	C670.791199,904.749756 672.467407,908.947571 674.623901,912.881958 
	C676.662292,916.600647 676.420959,919.098938 672.079834,920.525269 
	C670.983032,920.885681 669.953735,921.484253 668.938477,922.053589 
	C666.369385,923.494202 664.787598,922.943176 663.475098,920.142395 
	C651.602600,894.808838 639.629028,869.522644 627.670471,844.229492 
	C622.829956,833.991577 618.115662,823.688782 613.014404,813.581848 
	C610.927307,809.446594 613.221191,808.140381 616.221252,807.027222 
	C618.973572,806.006104 622.066711,802.522095 624.306152,807.905273 
	C625.561157,810.921753 627.239197,813.762268 628.918884,817.059509 
	C636.717651,788.658081 667.726624,779.393555 686.826904,786.562195 
	C708.650635,794.752991 722.624207,821.365051 716.011108,843.983643 
	C712.302612,856.667847 704.036316,865.730469 692.132019,871.382385 
	C680.248535,877.024353 668.140930,877.173523 655.034851,871.606079 
	C659.861145,881.740051 664.209290,890.869995 668.731323,900.333496 
M642.305237,812.863892 
	C636.569885,822.950134 637.050842,833.234558 641.555298,843.526428 
	C648.850464,860.194702 664.845398,868.210632 680.889648,863.388306 
	C697.544434,858.382446 706.642944,843.654968 703.728027,826.420532 
	C701.318787,812.176147 690.733704,800.172546 678.142700,797.406433 
	C664.588074,794.428650 651.176697,800.038879 642.305237,812.863892 
z M130.579651,517.487549 
C149.600342,514.750671 168.197021,512.186218 186.743607,509.299683 
C190.221802,508.758362 191.068527,510.056274 191.736938,512.919250 
C193.554153,520.703003 193.238647,521.245239 185.286636,522.370544 
C183.318909,522.648987 181.379532,523.127686 178.228500,523.751709 
C190.784378,531.765259 197.358093,542.566345 198.634964,556.656494 
C199.913223,570.761841 196.203751,582.919983 185.988647,592.942932 
C170.210510,608.424194 141.587738,610.349548 124.414413,596.923523 
C114.408478,589.100891 109.425735,578.339478 107.832687,566.072021 
C106.235886,553.775635 109.788887,542.741821 118.865036,532.465576 
C103.534660,534.704041 89.459419,536.690613 75.409088,538.840088 
C68.483315,539.899597 64.356918,535.266479 66.365219,528.410767 
C67.041756,526.101257 69.223846,526.238159 70.871780,525.993347 
C87.318169,523.550110 103.783424,521.233826 120.244759,518.891418 
C123.539604,518.422668 126.840317,517.995117 130.579651,517.487549 
M145.897141,528.375366 
C130.797989,532.019958 121.496147,541.313843 119.442032,554.807861 
C117.389778,568.289673 123.350777,581.451355 134.587616,588.248718 
C147.064224,595.796021 166.578033,593.388306 177.398270,583.180603 
C184.401077,576.574219 187.974213,568.332153 187.329193,559.038147 
C185.799591,536.998535 168.507568,524.195190 145.897141,528.375366 
z M393.671722,111.691940 
C397.171295,110.606194 398.715363,111.790955 399.249695,114.962402 
C399.799438,118.225319 400.654297,121.436821 401.664368,125.965309 
C408.278229,113.057106 418.039673,105.692635 431.038635,102.840286 
C444.051453,99.984894 456.284271,101.891457 467.120728,109.938370 
C485.863434,123.856300 491.721863,152.344086 479.919189,171.895020 
C473.168396,183.077545 463.095428,189.634384 450.416565,192.346130 
C437.881104,195.027206 426.313080,192.897369 415.571503,184.520645 
C415.167694,190.063095 416.901154,194.440048 417.758301,198.899063 
C419.452515,207.712326 421.208649,216.540115 423.580292,225.186081 
C424.859161,229.848343 423.097717,231.037994 419.133698,231.842789 
C411.819153,233.327789 411.810333,233.431091 410.249084,226.134125 
C402.730682,190.993881 395.193634,155.857620 387.681641,120.716019 
C386.176392,113.674316 386.213257,113.666435 393.671722,111.691940 
M451.255737,179.796921 
C467.942963,173.538651 475.406342,159.084320 471.575012,140.444595 
C468.465454,125.316322 457.879547,115.202217 442.010986,113.766312 
C431.246552,112.792259 417.188080,117.462067 410.769318,131.128616 
C404.080231,145.370667 406.559448,159.017380 416.130035,170.868576 
C425.028900,181.888092 437.181244,183.945480 451.255737,179.796921 
z M316.728821,792.421692 
C308.226440,812.456604 291.638794,824.568665 272.666168,824.265564 
C255.294952,823.988098 242.499893,815.392700 234.204758,800.573792 
C225.975128,785.871887 227.491928,771.057312 236.273697,757.000916 
C242.867981,746.445923 243.185455,746.395081 252.377411,754.204102 
C266.589661,766.278137 280.573151,778.621033 294.690186,790.807556 
C300.590332,795.900696 301.605499,795.589600 304.519135,788.170593 
C312.288666,768.386719 296.988281,744.368958 275.243927,742.221069 
C274.415558,742.139221 273.583527,742.088135 272.752045,742.044922 
C265.245758,741.654846 264.908966,741.397400 265.605682,733.865906 
C266.154144,727.937317 271.027008,729.818604 274.112183,730.053589 
C301.304596,732.124573 327.761414,761.603088 316.728821,792.421692 
M278.440247,790.068542 
C268.172455,781.239868 257.904663,772.411133 247.641922,763.586792 
C236.915695,776.195312 239.574554,795.000488 253.014526,805.650818 
C265.155365,815.271667 285.064178,814.064758 293.119141,802.946716 
C288.425903,798.823303 283.703400,794.674133 278.440247,790.068542 
z M254.108704,250.845184 
C239.605408,269.494324 225.323853,287.843262 211.070038,306.156494 
C221.009308,314.823334 237.064270,314.208038 248.299896,304.824066 
C257.819061,296.873688 263.873627,286.980438 262.834930,274.028442 
C262.461639,269.373322 264.872467,268.881561 268.501251,268.720642 
C272.303009,268.552094 274.055542,269.412933 274.474792,273.790314 
C276.722534,297.257935 255.329208,323.745605 228.654205,324.923157 
C206.753906,325.889954 182.899124,305.808228 180.743347,284.045776 
C178.350891,259.893951 195.306732,237.886536 219.101547,234.960648 
C232.003067,233.374237 243.331848,237.957016 253.393494,245.906555 
C255.026962,247.197113 255.891556,248.620148 254.108704,250.845184 
M194.698212,266.294678 
C190.160355,279.299316 193.149673,292.290894 202.958496,299.779724 
C215.267685,284.075592 227.584000,268.362396 239.870880,252.686737 
C226.260300,240.587814 203.894318,247.379440 194.698212,266.294678 
z M839.503784,647.282959 
C850.305786,651.772827 858.962830,658.303040 864.681458,668.220642 
C872.986511,682.624023 872.620056,697.169189 864.484985,711.439636 
C856.451904,725.531067 844.374390,733.123535 827.856628,733.459290 
C819.048401,733.638306 811.214172,730.920776 803.548645,727.006531 
C799.817566,725.101440 799.492065,723.146973 801.638855,719.577576 
C812.622986,701.314575 823.374756,682.911926 834.196716,664.551514 
C834.942322,663.286621 836.051880,662.157715 835.895020,660.508240 
C826.679626,654.562622 812.152161,655.814514 802.969727,663.939331 
C792.107178,673.550537 786.229065,685.340393 789.151123,700.306030 
C789.645264,702.836914 789.190430,704.861206 786.317261,704.931702 
C783.425171,705.002747 779.572021,708.231812 777.915100,703.013428 
C776.269348,697.830688 776.145447,692.435120 776.937805,687.166016 
C780.674805,662.316040 804.834900,635.318054 839.503784,647.282959 
M831.013977,721.613464 
C843.708740,720.146606 851.781189,712.802246 856.637817,701.409363 
C862.018372,688.787476 856.710693,672.120300 845.036926,666.045166 
C834.864197,683.374207 824.680603,700.721680 814.331970,718.350342 
C819.952209,721.094849 824.945740,721.901672 831.013977,721.613464 
z
M527.932373,185.343521 
	C509.121002,178.926743 498.346741,166.039124 496.870880,146.713486 
	C495.347656,126.768356 501.980957,109.922638 520.867615,100.603622 
	C535.987732,93.143059 551.442749,94.229576 565.560120,103.634422 
	C579.607605,112.992722 584.347290,127.155777 584.123596,143.442078 
	C584.057983,148.218231 581.949585,149.580460 577.231018,149.152939 
	C555.861328,147.216858 534.458923,145.644684 513.078796,143.819031 
	C508.364197,143.416443 509.224426,146.361359 509.704041,148.954681 
	C512.508911,164.120850 524.765076,174.626266 540.356201,175.806458 
	C551.174316,176.625351 560.759155,173.830460 568.985229,167.029449 
	C569.790344,167.514633 570.294983,167.688171 570.617493,168.032410 
	C577.044128,174.893158 576.869385,176.433380 568.744446,181.292084 
	C555.936829,188.951035 542.368347,189.609589 527.932373,185.343521 
M520.275269,134.106598 
	C535.530273,135.330750 550.779419,136.637177 566.043457,137.736160 
	C571.678955,138.141891 572.436096,136.960556 570.993591,131.372528 
	C566.459106,113.806534 550.277222,104.132950 532.616150,108.378731 
	C520.511719,111.288666 510.445435,124.055908 511.124939,132.951965 
	C513.699463,134.368866 516.602966,133.728714 520.275269,134.106598 
z
M114.428528,475.455261 
	C98.669434,451.942749 109.626244,420.901703 131.437286,411.235718 
	C140.205185,407.350098 149.343399,406.277252 158.806747,407.717072 
	C161.682892,408.154633 163.131714,409.137390 162.599426,412.640228 
	C159.500443,433.034393 156.645966,453.465790 153.737198,473.888641 
	C153.391663,476.314606 153.218430,478.765137 152.923706,481.605530 
	C163.752380,482.740997 172.002716,478.815399 178.599396,471.302704 
	C189.232040,459.193634 190.670532,441.227020 181.847672,427.674561 
	C179.147766,423.527344 181.379333,422.367401 184.119431,420.403046 
	C187.255356,418.154907 189.433533,417.963776 191.908005,421.513306 
	C202.016479,436.013550 201.064331,461.815155 189.618317,477.150818 
	C171.343185,501.636444 133.715530,500.935883 114.428528,475.455261 
M118.395264,451.404022 
	C120.154144,467.388641 130.744400,479.896698 142.584869,479.434845 
	C145.528366,459.754395 148.483749,439.994446 151.509720,419.762512 
	C144.310928,418.905548 138.551651,420.611176 133.184189,423.790894 
	C123.048264,429.795471 119.246109,439.376862 118.395264,451.404022 
z
M799.426636,234.439255 
	C789.735535,242.812042 789.708862,242.834290 797.724609,252.447281 
	C806.895386,263.445496 816.128357,274.391785 825.308838,285.381897 
	C826.352661,286.631531 827.768555,287.678619 827.951233,289.481720 
	C821.071838,298.150787 820.364014,298.120209 813.484314,289.870575 
	C803.884949,278.359833 794.043518,267.047607 784.610962,255.403137 
	C781.516113,251.582596 779.330017,251.027664 775.487610,254.449783 
	C766.290344,262.641022 756.705139,270.395172 747.343445,278.403992 
	C741.923645,283.040558 741.963379,283.123688 737.458862,277.465973 
	C736.228210,275.920258 734.663208,274.581207 733.913452,271.846802 
	C740.482422,266.239075 747.250244,260.397705 754.086365,254.637436 
	C776.241943,235.968704 798.467163,217.382217 820.540588,198.617004 
	C823.515076,196.088257 825.267212,196.071320 827.790283,199.110901 
	C843.106079,217.561707 858.496399,235.952255 874.050171,254.202408 
	C876.995789,257.658752 876.468811,259.575592 873.123108,262.232025 
	C869.919556,264.775543 867.902344,265.918793 864.678162,261.970306 
	C852.671875,247.266632 840.298462,232.862915 828.083069,218.329651 
	C824.048645,213.529800 824.101868,213.536057 819.140808,217.767822 
	C812.683167,223.276199 806.180237,228.731506 799.426636,234.439255 
z
M888.487671,379.383179 
	C910.221619,392.687805 917.882019,422.176025 905.390381,443.426331 
	C893.247620,464.083282 863.383850,471.803711 842.208374,459.760162 
	C821.340454,447.891541 813.225891,418.038086 825.102173,396.826874 
	C837.140015,375.327301 865.796936,367.313263 888.487671,379.383179 
M895.732849,403.816376 
	C885.869934,384.545166 862.202209,383.209198 846.387512,392.892548 
	C835.678040,399.450012 830.663513,409.338745 831.560608,421.435181 
	C833.074768,441.851166 846.654236,452.981232 867.231995,451.821014 
	C892.583252,450.391663 906.429626,427.656921 895.732849,403.816376 
z
M293.154327,168.375061 
	C305.413696,143.413773 333.897278,133.058243 356.719269,144.976654 
	C374.398499,154.209381 383.250305,174.145981 381.811066,189.998993 
	C379.981689,210.150238 366.356323,225.664139 346.981323,230.944870 
	C329.041656,235.834412 310.521240,229.542999 299.652985,214.366547 
	C289.650482,200.399078 286.210846,185.247452 293.154327,168.375061 
M307.158203,167.709534 
	C299.486115,181.462830 301.863037,198.236603 313.160858,210.069946 
	C330.037292,227.746338 360.178375,221.192505 367.634766,198.225220 
	C372.577271,183.001160 364.158325,163.256363 349.477936,155.642471 
	C335.321411,148.300247 317.756195,153.099274 307.158203,167.709534 
z
M919.884277,523.619507 
	C920.712036,530.235657 920.391846,536.373108 918.803772,542.379272 
	C914.497559,558.665405 902.225281,568.294006 884.588074,568.103577 
	C870.799744,567.954651 857.024536,566.619324 843.242798,565.823303 
	C839.424194,565.602783 835.598267,565.491516 831.784241,565.212952 
	C825.624695,564.763000 828.041992,560.097778 827.904907,556.867920 
	C827.765991,553.594971 828.937378,551.707275 832.950073,552.001160 
	C848.046997,553.106689 863.165527,553.925476 878.280090,554.778992 
	C883.108643,555.051575 887.932495,555.020630 892.610413,553.418152 
	C898.225159,551.494690 902.515869,548.052063 905.221619,542.722961 
	C915.624878,522.233093 902.851257,499.735931 880.047119,498.296356 
	C865.442078,497.374420 850.853394,496.143585 836.238464,495.450897 
	C830.709045,495.188873 831.852722,491.717041 831.888672,488.525177 
	C831.925049,485.302063 831.661804,482.257477 836.722595,482.476227 
	C859.167236,483.446350 881.576050,484.934631 903.981384,486.524750 
	C908.462830,486.842804 912.962219,486.931213 917.455261,487.054993 
	C923.252319,487.214722 922.124268,491.308960 922.088257,494.921967 
	C922.048584,498.921112 920.365540,500.644073 916.216614,500.182861 
	C913.662842,499.899017 911.076538,498.758820 907.895752,500.005432 
	C914.260071,506.674225 918.566589,514.176575 919.884277,523.619507 
z
M795.774536,749.237793 
	C802.889587,756.971008 809.583435,764.622925 816.700012,771.859131 
	C821.628662,776.870544 815.986389,778.152283 814.067261,780.709961 
	C811.789551,783.745605 809.551819,783.344727 807.280579,780.424744 
	C805.671753,778.356323 803.687622,776.579895 801.268860,774.041016 
	C800.933655,777.063293 800.697815,779.278564 800.440796,781.491394 
	C798.505127,798.158813 783.801392,814.192383 767.413818,817.515503 
	C755.989136,819.832275 746.277832,816.088440 738.077209,808.461243 
	C731.995483,802.804871 726.517944,796.495361 720.818848,790.431946 
	C714.547363,783.759460 708.461609,776.906372 702.034851,770.388428 
	C698.797180,767.104858 698.068909,764.490479 702.332581,761.721436 
	C702.881348,761.364990 703.351013,760.853943 703.777283,760.347168 
	C706.280151,757.371277 708.422180,757.509216 711.089966,760.472839 
	C720.668579,771.113403 730.451355,781.570007 740.149658,792.102966 
	C745.874817,798.320923 752.009644,804.154053 760.988098,804.600464 
	C773.075623,805.201355 780.873596,797.893494 786.860779,788.639160 
	C792.838379,779.399475 792.257141,769.668579 786.706970,760.311279 
	C782.503235,753.224121 776.230286,747.841248 770.785461,741.786438 
	C764.774780,735.102539 758.693665,728.471863 752.394348,722.062500 
	C749.576721,719.195618 749.662415,717.135803 752.802307,714.869324 
	C753.739136,714.193054 754.593750,713.358276 755.342529,712.474487 
	C757.686890,709.707703 759.536743,710.307861 761.828369,712.800415 
	C772.983521,724.933472 784.284424,736.932556 795.774536,749.237793 
z
M181.913727,329.085754 
	C194.469650,342.685547 206.699768,356.104279 219.164734,369.301178 
	C221.757523,372.046234 221.723038,374.396912 220.093155,377.299164 
	C218.415924,380.285645 218.407318,384.322937 213.156189,384.461761 
	C183.346313,385.249969 153.533081,385.349060 123.717667,385.370117 
	C122.431595,385.371033 121.030296,385.683350 119.962715,384.570496 
	C120.952255,375.297821 123.396042,373.010956 132.194885,372.907684 
	C154.678177,372.643768 177.160980,372.339600 199.644043,372.055725 
	C201.124527,372.037018 202.605453,372.053253 204.194641,372.053253 
	C204.172028,369.570007 202.421875,368.600586 201.266800,367.355103 
	C186.089462,350.989685 170.857513,334.674927 155.646469,318.340790 
	C149.557297,311.802002 149.529099,309.474884 155.969299,301.086578 
	C164.600250,310.401703 173.135773,319.613831 181.913727,329.085754 
z
M888.481323,630.591797 
	C891.793152,620.386719 891.793274,620.386292 882.069275,617.331116 
	C869.214355,613.292297 856.372009,609.213257 843.501099,605.226318 
	C828.991577,600.731873 819.313660,608.808960 821.592834,623.818909 
	C822.131714,627.367676 821.437073,628.820435 818.067627,629.190369 
	C814.868958,629.541504 811.570312,630.191772 810.945679,625.491699 
	C809.542603,614.934021 811.223633,605.057068 818.582642,597.039673 
	C825.104126,589.934814 833.701294,588.771179 842.555298,591.372864 
	C857.877502,595.875122 873.062622,600.845459 888.292664,605.659363 
	C895.553589,607.954346 895.539856,607.995605 897.894409,600.930237 
	C898.157227,600.141418 898.442444,599.360046 898.702026,598.570129 
	C900.425171,593.325012 905.549683,592.060913 909.562866,595.853699 
	C911.159973,597.363098 910.229736,598.933105 909.806030,600.476868 
	C906.793030,611.454041 906.804871,611.385864 917.955811,614.880554 
	C920.190369,615.580872 923.793457,615.314026 924.060303,618.218262 
	C924.372375,621.614563 922.952637,625.069092 921.129944,628.095886 
	C920.250000,629.557190 918.812439,628.967651 917.526306,628.559998 
	C914.037903,627.454407 910.469910,626.552612 907.075562,625.210571 
	C903.519958,623.804749 901.980103,625.043396 900.996338,628.476379 
	C899.347778,634.229431 897.170349,639.832642 895.569580,645.597229 
	C894.268188,650.283386 891.396545,648.680664 888.544556,647.860718 
	C885.502502,646.986023 883.322144,645.817566 884.880615,641.906189 
	C886.293274,638.360718 887.216614,634.620300 888.481323,630.591797 
z
M275.556824,218.458984 
	C286.060974,230.736649 296.231934,242.835541 306.671692,254.697845 
	C310.880035,259.479614 306.291412,260.800903 303.992188,263.188477 
	C301.425110,265.854187 299.420654,266.637268 296.429352,263.116974 
	C271.437195,233.705109 246.246582,204.461884 221.126556,175.158600 
	C217.409027,170.821991 217.661163,171.037659 223.310120,165.670059 
	C226.824951,162.330246 228.622467,163.585327 231.199371,166.626175 
	C245.824814,183.884781 260.604462,201.012741 275.556824,218.458984 
z
M848.650818,314.629272 
	C854.336853,311.769104 859.745911,309.177460 865.004333,306.309662 
	C867.859863,304.752411 869.636597,305.210388 870.874756,308.199097 
	C871.510742,309.734070 872.247253,311.237122 873.058411,312.687469 
	C874.328308,314.958282 873.605713,316.394440 871.400146,317.471802 
	C868.457825,318.908997 865.568726,320.454926 861.721375,322.435852 
	C873.768127,324.378815 881.539978,330.860046 887.500610,340.031586 
	C889.803955,343.575745 889.917053,345.665802 885.533325,347.588196 
	C879.270325,350.334717 879.390320,350.608459 875.787842,344.966156 
	C867.684937,332.274780 855.546631,327.969727 841.216003,333.714172 
	C827.002808,339.411652 813.664001,347.041260 799.972168,353.886353 
	C798.192871,354.775879 796.125244,357.254578 794.217957,355.159668 
	C791.791504,352.494476 789.961609,349.127686 789.757935,345.385529 
	C789.666626,343.708191 791.775940,343.370636 793.059448,342.719727 
	C811.465820,333.386078 829.890686,324.088806 848.650818,314.629272 
z
M622.988403,110.777504 
	C629.671326,112.945320 629.657959,112.941086 627.719666,119.068336 
	C627.033081,121.238792 626.429382,123.435448 625.420593,126.870766 
	C635.508301,119.338898 645.681885,117.890427 656.571167,120.685493 
	C659.290100,121.383392 662.305237,122.066910 660.287292,125.796860 
	C658.688782,128.751480 660.660950,135.041748 653.196411,132.963318 
	C636.941467,128.437317 624.353516,134.877335 618.414917,151.110825 
	C613.506348,164.528854 609.624390,178.320267 605.124268,191.892136 
	C604.399841,194.076935 604.755188,197.718781 601.653015,197.847839 
	C598.423218,197.982224 595.105713,196.701187 592.245422,194.939041 
	C590.607178,193.929855 591.390564,192.238007 591.827698,190.842773 
	C599.933472,164.974213 608.110413,139.127777 616.134094,113.233849 
	C617.355530,109.292168 619.605896,109.412086 622.988403,110.777504 
z
M551.163940,818.997314 
	C558.597595,820.308594 561.960205,824.225159 561.267456,830.266968 
	C560.692993,835.276611 556.376770,838.700928 551.114685,838.321594 
	C546.635437,837.998657 543.147095,834.711182 542.451355,830.157166 
	C541.660278,824.979126 544.527100,821.147339 551.163940,818.997314 
z
M678.182739,222.506012 
	C682.220520,217.428711 687.011047,216.141068 691.415894,218.666107 
	C695.019104,220.731583 696.965454,225.539948 695.762695,229.405060 
	C694.213806,234.382751 689.843811,237.070221 684.521729,236.317947 
	C678.607849,235.482025 675.724182,229.536423 678.182739,222.506012 
z"
    />
  </svg>
);

export const LinkArrow = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
    />
  </svg>
);
