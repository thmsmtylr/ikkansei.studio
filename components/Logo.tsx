import { Metadata } from "next";

export function Logo({ title }: { title: Metadata["title"] }) {
  return (
    <h1>
      <span className="sr-only">{title as string}</span>
      <svg
        width="100%"
        height="18"
        viewBox="0 0 170 38"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
        className="text-jurassic-park dark:text-frosting-cream"
      >
        <path
          d="M6.31195 6.36327C5.57641 7.09881 4.69548 7.46658 3.66914 7.46658C2.64281 7.46658 1.77043 7.09881 1.05199 6.36327C0.350664 5.62773 0 4.74679 0 3.72046C0 2.69413 0.350664 1.82174 1.05199 1.10331C1.77043 0.36777 2.64281 0 3.66914 0C4.69548 0 5.57641 0.36777 6.31195 1.10331C7.0646 1.82174 7.44092 2.69413 7.44092 3.72046C7.44092 4.74679 7.0646 5.62773 6.31195 6.36327ZM0.564483 37.2559V11.0331H6.87643V37.2559H0.564483Z"
          fill="currentColor"
        />
        <path
          d="M27.7289 37.2559L19.6978 25.8123L17.1833 28.5321V37.2559H10.8713V0.46185H17.1833V20.3471L26.0611 10.9818H33.6816L23.8545 21.3991L34.8875 37.2559H27.7289Z"
          fill="currentColor"
        />
        <path
          d="M53.1228 37.2559L45.0918 25.8123L42.5772 28.5321V37.2559H36.2653V0.46185H42.5772V20.3471L51.455 10.9818H59.0756L49.2484 21.3991L60.2815 37.2559H53.1228Z"
          fill="currentColor"
        />
        <path
          d="M68.3047 38C65.756 38 63.6178 37.2645 61.8902 35.7934C60.1796 34.3052 59.3243 32.3381 59.3243 29.892C59.3243 29.0709 59.4099 28.3183 59.5809 27.634C59.7691 26.9327 60.0941 26.2314 60.5559 25.53C61.0349 24.8116 61.6507 24.1873 62.4033 23.657C63.156 23.1267 64.1481 22.6478 65.3797 22.2201C66.6113 21.7754 68.0396 21.4418 69.6646 21.2194L75.2838 20.4497V20.1161C75.2838 16.9345 73.6759 15.3437 70.4601 15.3437C68.8521 15.3437 67.6376 15.7115 66.8166 16.447C65.9955 17.1654 65.4738 18.2174 65.2514 19.603L59.6835 18.2431C60.402 15.5746 61.6421 13.5818 63.404 12.2647C65.1659 10.9476 67.5863 10.289 70.6653 10.289C72.1706 10.289 73.5647 10.4857 74.8476 10.8791C76.1305 11.2555 77.2852 11.8285 78.3115 12.5982C79.3378 13.3509 80.1418 14.3601 80.7234 15.6259C81.305 16.8917 81.5958 18.3543 81.5958 20.0135V37.2559H76.2845L75.6174 34.8953C74.1292 36.9651 71.6917 38 68.3047 38ZM69.9725 32.894C71.4778 32.894 72.7351 32.4664 73.7443 31.6111C74.7707 30.7558 75.2838 29.5755 75.2838 28.0702V25.0169L70.1008 25.8123C68.4587 26.0518 67.2528 26.4623 66.483 27.0439C65.7304 27.6255 65.354 28.4551 65.354 29.5327C65.354 30.542 65.7646 31.3545 66.5856 31.9703C67.4067 32.5861 68.5357 32.894 69.9725 32.894Z"
          fill="currentColor"
        />
        <path
          d="M84.8466 37.2559V11.0331H90.0552L90.9276 14.1891C92.8776 11.589 95.5461 10.289 98.933 10.289C101.961 10.289 104.278 11.2041 105.886 13.0344C107.511 14.8476 108.324 17.6358 108.324 21.3991V37.2559H102.038V22.2201C102.038 18.1661 100.336 16.1391 96.9317 16.1391C95.2553 16.1391 93.8698 16.7207 92.775 17.8839C91.6974 19.047 91.1585 20.7063 91.1585 22.8616V37.2559H84.8466Z"
          fill="currentColor"
        />
        <path
          d="M121.915 38C119.076 38 116.706 37.3158 114.808 35.9473C112.926 34.5618 111.652 32.6374 110.985 30.1742L116.552 28.3781C117.356 31.2861 119.144 32.74 121.915 32.74C123.352 32.74 124.489 32.4749 125.328 31.9446C126.166 31.4144 126.585 30.6788 126.585 29.738C126.585 29.0025 126.243 28.3867 125.559 27.8906C124.891 27.3774 123.626 26.9584 121.761 26.6334C120.547 26.411 119.486 26.1801 118.579 25.9406C117.69 25.684 116.792 25.3419 115.885 24.9142C114.979 24.4866 114.235 23.9991 113.653 23.4517C113.072 22.8872 112.601 22.1859 112.242 21.3477C111.883 20.5096 111.703 19.5602 111.703 18.4997C111.703 16.1733 112.627 14.2233 114.474 12.6496C116.339 11.0758 118.819 10.289 121.915 10.289C124.532 10.289 126.713 10.9476 128.458 12.2647C130.203 13.5818 131.349 15.4292 131.896 17.8069L126.38 19.3977C125.764 16.8319 124.276 15.549 121.915 15.549C120.512 15.549 119.443 15.8141 118.708 16.3444C117.972 16.8575 117.604 17.4904 117.604 18.2431C117.604 19.0813 118.006 19.7056 118.81 20.1161C119.631 20.5267 120.983 20.9115 122.864 21.2708C124.404 21.5445 125.73 21.8866 126.841 22.2971C127.97 22.6905 128.98 23.2122 129.869 23.8623C130.759 24.5123 131.426 25.3162 131.871 26.2741C132.315 27.232 132.538 28.3525 132.538 29.6354C132.538 32.0131 131.554 34.0059 129.587 35.6138C127.637 37.2046 125.08 38 121.915 38Z"
          fill="currentColor"
        />
        <path
          d="M159.651 26.2228H140.048C140.185 27.9676 140.929 29.4985 142.28 30.8157C143.631 32.1328 145.308 32.7914 147.309 32.7914C148.985 32.7914 150.379 32.3894 151.491 31.5854C152.603 30.7643 153.347 29.8321 153.724 28.7887L159.035 30.4308C158.231 32.6887 156.837 34.519 154.853 35.9217C152.868 37.3072 150.354 38 147.309 38C143.529 38 140.364 36.6914 137.815 34.0743C135.284 31.4571 134.018 28.1386 134.018 24.1188C134.018 20.1675 135.284 16.8746 137.815 14.2404C140.364 11.6061 143.512 10.289 147.258 10.289C151.038 10.289 154.049 11.5377 156.289 14.0351C158.53 16.5154 159.651 19.774 159.651 23.8109V26.2228ZM154.083 21.3991C154.049 20.903 153.937 20.3984 153.749 19.8852C153.578 19.3549 153.305 18.8332 152.928 18.3201C152.552 17.7898 152.107 17.3194 151.594 16.9088C151.098 16.4812 150.474 16.1391 149.721 15.8825C148.985 15.6259 148.181 15.4976 147.309 15.4976C145.308 15.4976 143.683 16.0707 142.434 17.2167C141.202 18.3628 140.424 19.7569 140.099 21.3991H154.083Z"
          fill="currentColor"
        />
        <path
          d="M168.264 6.36327C167.529 7.09881 166.648 7.46658 165.621 7.46658C164.595 7.46658 163.723 7.09881 163.004 6.36327C162.303 5.62773 161.952 4.74679 161.952 3.72046C161.952 2.69413 162.303 1.82174 163.004 1.10331C163.723 0.36777 164.595 0 165.621 0C166.648 0 167.529 0.36777 168.264 1.10331C169.017 1.82174 169.393 2.69413 169.393 3.72046C169.393 4.74679 169.017 5.62773 168.264 6.36327ZM162.517 37.2559V11.0331H168.829V37.2559H162.517Z"
          fill="currentColor"
        />
      </svg>
    </h1>
  );
}
