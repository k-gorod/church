import React, { type FC } from "react";

interface ITikTok {}

const TikTok: FC<ITikTok> = () => {
  console.log("TikTok");

  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M34.353 17.327C37.4397 19.5413 41.2211 20.8442 45.3051 20.8442V12.9573C44.5322 12.9574 43.7613 12.8765 43.0051 12.7158V18.9239C38.9214 18.9239 35.1405 17.621 32.053 15.4068V31.5018C32.053 39.5533 25.5492 46.0799 17.5268 46.0799C14.5334 46.0799 11.7512 45.1717 9.44006 43.6141C12.0779 46.3209 15.7565 48 19.8263 48C27.8492 48 34.3534 41.4734 34.3534 33.4216V17.327H34.353ZM37.1904 9.37002C35.6129 7.64048 34.5772 5.40538 34.353 2.93438V1.91995H32.1735C32.7221 5.06059 34.5934 7.74377 37.1904 9.37002ZM14.5142 37.4356C13.6329 36.2759 13.1566 34.8572 13.1587 33.3985C13.1587 29.7161 16.1336 26.7303 19.8037 26.7303C20.4877 26.7301 21.1675 26.8352 21.8194 27.0428V18.9796C21.0576 18.8748 20.2888 18.8303 19.5203 18.8466V25.1226C18.868 24.9151 18.1878 24.8096 17.5037 24.8103C13.8335 24.8103 10.8589 27.7958 10.8589 31.4787C10.8589 34.0828 12.3458 36.3374 14.5142 37.4356Z"
        fill="#FF004F"
      />
      <path
        d="M32.0529 15.4067C35.1404 17.6209 38.9213 18.9237 43.005 18.9237V12.7156C40.7255 12.2283 38.7075 11.0328 37.1903 9.37002C34.5931 7.74361 32.722 5.06043 32.1733 1.91995H26.4482V33.4213C26.4352 37.0937 23.4655 40.0673 19.8032 40.0673C17.6451 40.0673 15.7279 39.0349 14.5136 37.4356C12.3454 36.3374 10.8585 34.0827 10.8585 31.4789C10.8585 27.7963 13.8331 24.8105 17.5032 24.8105C18.2064 24.8105 18.8842 24.9204 19.5199 25.1228V18.8468C11.6384 19.0102 5.2998 25.473 5.2998 33.4214C5.2998 37.3892 6.87827 40.9861 9.44013 43.6143C11.7513 45.1717 14.5335 46.08 17.5268 46.08C25.5494 46.08 32.0531 39.5531 32.0531 31.5018V15.4067H32.0529Z"
        fill="black"
      />
      <path
        d="M43.0051 12.7156V11.037C40.9495 11.0401 38.9343 10.4624 37.1903 9.36987C38.7342 11.0661 40.7671 12.2357 43.0051 12.7156ZM32.1734 1.91997C32.1211 1.61982 32.0809 1.3177 32.053 1.01443V0H24.148V31.5016C24.1354 35.1735 21.1658 38.1471 17.5033 38.1471C16.428 38.1471 15.4128 37.891 14.5137 37.4358C15.7279 39.0349 17.6452 40.0671 19.8033 40.0671C23.4652 40.0671 26.4354 37.0938 26.4482 33.4214V1.91997H32.1734ZM19.5203 18.8468V17.0598C18.8598 16.9692 18.1938 16.9237 17.5271 16.924C9.50383 16.9239 3 23.4508 3 31.5016C3 36.5491 5.55612 40.9974 9.44034 43.614C6.87848 40.986 5.30002 37.3889 5.30002 33.4213C5.30002 25.473 11.6385 19.0102 19.5203 18.8468Z"
        fill="#00F2EA"
      />
    </svg>
  );
};

export default TikTok;
