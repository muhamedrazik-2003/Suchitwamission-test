import React from "react";

function Hero() {
  return (
    <div className="space-y-[30px]">
      <div>
        <h2 className="text-[26px] font-medium">Register for Swatchhatha</h2>
        <h1 className="text-6xl font-extrabold text-green-700">
          Green Leaf Rating
        </h1>
        <h2 className="text-[30px] font-semibold">in Hospitality Facilities</h2>
      </div>
      <div>
        <div className="space-y-2">
          <p className="text-sm text-secondary">Certified in Four Steps</p>
          <div className="flex gap-5 items-center">
            <div className="flex flex-col items-center relative w-[130px]">
              <span className="absolute top-0 left-[20px] text-[26px] text-green-200">
                1
              </span>
              <div className="p-4 bg-green-200 rounded-full">
                <svg
                  width="23"
                  height="25"
                  viewBox="0 0 23 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.88208 13.0628H14.5688"
                    stroke="#039123"
                    strokeWidth="2"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.88208 17.4552H11.6918"
                    stroke="#039123"
                    strokeWidth="2"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.07828 6.25453H13.4707C15.6669 6.25453 15.6669 5.15643 15.6669 4.05833C15.6669 1.86212 14.5688 1.86212 13.4707 1.86212H9.07828C7.98018 1.86212 6.88208 1.86212 6.88208 4.05833C6.88208 6.25453 7.98018 6.25453 9.07828 6.25453Z"
                    stroke="#039123"
                    strokeWidth="2"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.6669 4.08032C19.3236 4.27798 21.1574 5.62865 21.1574 10.6469V17.2356C21.1574 21.628 20.0593 23.8242 14.5688 23.8242H7.98021C2.4897 23.8242 1.3916 21.628 1.3916 17.2356V10.6469C1.3916 5.63963 3.22543 4.27798 6.88211 4.08032"
                    stroke="#039123"
                    strokeWidth="2"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <p className="font-medium text-secondary">Self Assessment</p>
            </div>
            <div className="flex flex-col items-center relative w-[130px]">
              <span className="absolute top-0 left-[20px] text-[26px] text-green-200">
                2
              </span>
              <div className="p-4 bg-green-200 rounded-full">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.9811 5.32108V9.38406C22.9811 11.8548 21.9928 12.8431 19.522 12.8431H16.5572C14.0864 12.8431 13.0981 11.8548 13.0981 9.38406V5.32108C13.0981 2.85035 14.0864 1.86206 16.5572 1.86206H19.522C21.9928 1.86206 22.9811 2.85035 22.9811 5.32108Z"
                    stroke="#039123"
                    strokeWidth="2"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.902 16.3021V20.3651C10.902 22.8358 9.91367 23.8241 7.44294 23.8241H4.47806C2.00733 23.8241 1.01904 22.8358 1.01904 20.3651V16.3021C1.01904 13.8314 2.00733 12.8431 4.47806 12.8431H7.44294C9.91367 12.8431 10.902 13.8314 10.902 16.3021Z"
                    stroke="#039123"
                    strokeWidth="2"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M22.981 16.1374C22.981 20.387 19.544 23.8241 15.2943 23.8241L16.4473 21.9024"
                    stroke="#039123"
                    strokeWidth="2"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1.01904 9.54877C1.01904 5.29912 4.4561 1.86206 8.70576 1.86206L7.55275 3.78374"
                    stroke="#039123"
                    strokeWidth="2"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <p className="font-medium text-secondary">Review</p>
            </div>
            <div className="flex flex-col items-center relative w-[130px]">
              <span className="absolute top-0 left-[20px] text-[26px] text-green-200">
                3
              </span>
              <div className="p-4 bg-green-200 rounded-full">
                <svg
                  width="22"
                  height="25"
                  viewBox="0 0 22 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.16709 2.1174L3.68692 4.18209C2.42394 4.65433 1.3916 6.14793 1.3916 7.48778V15.6477C1.3916 16.9436 2.24823 18.6459 3.29155 19.4257L8.01397 22.951C9.56245 24.1151 12.1104 24.1151 13.6589 22.951L18.3813 19.4257C19.4246 18.6459 20.2812 16.9436 20.2812 15.6477V7.48778C20.2812 6.13695 19.2489 4.64334 17.9859 4.1711L12.5057 2.1174C11.5722 1.77695 10.0786 1.77695 9.16709 2.1174Z"
                    stroke="#039123"
                    strokeWidth="2"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.58569 12.7045L9.3538 14.4726L14.0762 9.75015"
                    stroke="#039123"
                    strokeWidth="2"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <p className="font-medium text-secondary">Approval</p>
            </div>
            <div className="flex flex-col items-center relative w-[130px]">
              <span className="absolute top-0 left-[20px] text-[26px] text-green-200">
                4
              </span>
              <div className="p-4 bg-green-200 rounded-full">
                <svg
                  width="22"
                  height="20"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 19H6C2 19 1 18 1 14V6C1 2 2 1 6 1H16C20 1 21 2 21 6V14C21 18 20 19 16 19Z"
                    stroke="#039123"
                    strokeWidth="2"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13 6H18"
                    stroke="#039123"
                    strokeWidth="2"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14 10H18"
                    stroke="#039123"
                    strokeWidth="2"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16 14H18"
                    stroke="#039123"
                    strokeWidth="2"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.49994 9.2899C8.49958 9.2899 9.3099 8.4796 9.3099 7.47992C9.3099 6.48029 8.49958 5.66992 7.49994 5.66992C6.50031 5.66992 5.68994 6.48029 5.68994 7.47992C5.68994 8.4796 6.50031 9.2899 7.49994 9.2899Z"
                    stroke="#039123"
                    strokeWidth="2"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11 14.33C10.86 12.88 9.71 11.74 8.26 11.61C7.76 11.56 7.25 11.56 6.74 11.61C5.29 11.75 4.14 12.88 4 14.33"
                    stroke="#039123"
                    strokeWidth="2"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <p className="font-medium text-secondary">Certification</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-5">
        <div className="bg-white flex flex-col justify-center items-center gap-1  py-[10px] px-[34px] rounded-lg">
          <div>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_1_5623"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="32"
                height="32"
              >
                <rect width="32" height="32" fill="#ffffff" />
              </mask>
              <g mask="url(#mask0_1_5623)">
                <path
                  d="M2.66663 12V7.99998C2.66663 7.26665 2.92774 6.63887 3.44996 6.11665C3.97218 5.59442 4.59996 5.33331 5.33329 5.33331H26.6666C27.4 5.33331 28.0277 5.59442 28.55 6.11665C29.0722 6.63887 29.3333 7.26665 29.3333 7.99998V16H26.6666V7.99998H5.33329V12H2.66663ZM5.33329 26.6666C4.59996 26.6666 3.97218 26.4055 3.44996 25.8833C2.92774 25.3611 2.66663 24.7333 2.66663 24V20H5.33329V24H14.6666V26.6666H5.33329ZM24 30L21.9666 28.2666C20.0111 26.6 18.75 25.3944 18.1833 24.65C17.6166 23.9055 17.3333 23.1333 17.3333 22.3333C17.3333 21.3333 17.6888 20.4722 18.4 19.75C19.1111 19.0278 19.9777 18.6666 21 18.6666C21.5777 18.6666 22.1277 18.8 22.65 19.0666C23.1722 19.3333 23.6222 19.7222 24 20.2333C24.3555 19.7222 24.7944 19.3333 25.3166 19.0666C25.8389 18.8 26.4 18.6666 27 18.6666C28 18.6666 28.8611 19.0278 29.5833 19.75C30.3055 20.4722 30.6666 21.3333 30.6666 22.3333C30.6666 23.1333 30.3777 23.9055 29.8 24.65C29.2222 25.3944 27.9555 26.6 26 28.2666L24 30ZM24 26.4666L24.9333 25.7C26.1777 24.6333 27 23.8833 27.4 23.45C27.8 23.0166 28 22.6444 28 22.3333C28 22.0666 27.9 21.8333 27.7 21.6333C27.5 21.4333 27.2666 21.3333 27 21.3333C26.8222 21.3333 26.6611 21.3722 26.5166 21.45C26.3722 21.5278 26.2 21.6555 26 21.8333L24 23.7333L21.9666 21.8333C21.7666 21.6555 21.5944 21.5278 21.45 21.45C21.3055 21.3722 21.1555 21.3333 21 21.3333C20.7111 21.3333 20.4722 21.4333 20.2833 21.6333C20.0944 21.8333 20 22.0666 20 22.3333C20 22.6444 20.1944 23.0166 20.5833 23.45C20.9722 23.8833 21.7888 24.6333 23.0333 25.7L24 26.4666ZM9.33329 22.6666C9.06663 22.6666 8.82774 22.6055 8.61663 22.4833C8.40552 22.3611 8.2444 22.1778 8.13329 21.9333L5.83329 17.3333H2.66663V14.6666H6.66663C6.91107 14.6666 7.13885 14.7333 7.34996 14.8666C7.56107 15 7.72218 15.1778 7.83329 15.4L9.33329 18.3666L13.4666 10.0666C13.5777 9.84442 13.7444 9.67776 13.9666 9.56665C14.1888 9.45553 14.4222 9.39998 14.6666 9.39998C14.9111 9.39998 15.1444 9.45553 15.3666 9.56665C15.5888 9.67776 15.7555 9.84442 15.8666 10.0666L18.1333 14.6666H22.6666V17.3333H17.3333C17.0666 17.3333 16.8277 17.2722 16.6166 17.15C16.4055 17.0278 16.2444 16.8444 16.1333 16.6L14.6666 13.6666L10.5 21.9333C10.3888 22.1778 10.2277 22.3611 10.0166 22.4833C9.80552 22.6055 9.57774 22.6666 9.33329 22.6666Z"
                  fill="#1A1A1A"
                />
              </g>
            </svg>
          </div>
          <div className="text-center">
            <h3 className="text-gray-600 font-medium">Healthcare</h3>
            <p className="text-green-700 font-bold">2,000+</p>
          </div>
        </div>
        <div className="bg-white flex flex-col justify-center items-center gap-1  py-[10px] px-[34px] rounded-lg">
          <div>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_1_5630"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="32"
                height="32"
              >
                <rect width="32" height="32" fill="#ffffff" />
              </mask>
              <g mask="url(#mask0_1_5630)">
                <path
                  d="M16 28L6.66671 22.9333V14.9333L1.33337 12L16 4L30.6667 12V22.6667H28V13.4667L25.3334 14.9333V22.9333L16 28ZM16 16.9333L25.1334 12L16 7.06667L6.86671 12L16 16.9333ZM16 24.9667L22.6667 21.3667V16.3333L16 20L9.33337 16.3333V21.3667L16 24.9667Z"
                  fill="#1A1A1A"
                />
              </g>
            </svg>
          </div>
          <div className="text-center">
            <h3 className="text-gray-600 font-medium">Educational</h3>
            <p className="text-green-700 font-bold">1,000+</p>
          </div>
        </div>
        <div className="bg-white flex flex-col justify-center items-center gap-1  py-[10px] px-[34px] rounded-lg">
          <div>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_1_5637"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="32"
                height="32"
              >
                <rect width="32" height="32" fill="#ffffff" />
              </mask>
              <g mask="url(#mask0_1_5637)">
                <path
                  d="M2.66663 26.6666V13.3333L10.6666 5.33331L18.6666 13.3333V26.6666H2.66663ZM5.33329 24H9.33329V20H12V24H16V14.4333L10.6666 9.09998L5.33329 14.4333V24ZM9.33329 17.3333V14.6666H12V17.3333H9.33329ZM21.3333 26.6666V12.2333L14.4333 5.33331H18.2L24 11.1333V26.6666H21.3333ZM26.6666 26.6666V10.0333L21.9666 5.33331H25.7333L29.3333 8.93331V26.6666H26.6666Z"
                  fill="#1A1A1A"
                />
              </g>
            </svg>
          </div>
          <div className="text-center">
            <h3 className="text-gray-600 font-medium">Hospitality</h3>
            <p className="text-green-700 font-bold">5,000+</p>
          </div>
        </div>
        <div className="bg-white flex flex-col justify-center items-center gap-1  py-[10px] px-[34px] rounded-lg">
          <div>
            <svg
              width="33"
              height="32"
              viewBox="0 0 33 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_1_5644"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="33"
                height="32"
              >
                <rect x="0.5" width="32" height="32" fill="#ffffff" />
              </mask>
              <g mask="url(#mask0_1_5644)">
                <path
                  d="M23.1666 12H25.8333V9.33333H23.1666V12ZM23.1666 17.3333H25.8333V14.6667H23.1666V17.3333ZM23.1666 22.6667H25.8333V20H23.1666V22.6667ZM23.1666 28V25.3333H28.5V6.66667H16.5V8.53333L13.8333 6.6V4H31.1666V28H23.1666ZM1.83331 28V14.6667L11.1666 8L20.5 14.6667V28H12.5V21.3333H9.83331V28H1.83331ZM4.49998 25.3333H7.16665V18.6667H15.1666V25.3333H17.8333V16L11.1666 11.2667L4.49998 16V25.3333Z"
                  fill="#1A1A1A"
                />
              </g>
            </svg>
          </div>
          <div className="text-center">
            <h3 className="text-gray-600 font-medium">Common Establishments</h3>
            <p className="text-green-700 font-bold">4,000+</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
