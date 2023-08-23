import React from 'react';

const CHAINS_ID = {
  ethereum: '1',
  matic: '137',
  sepolia: '11155111',
  optimism: '10',
  base: '8453',
  zora: '7777777',
  covalent: '1131378225',
};

export const ALLOWED_CHAINS_ID = [
  CHAINS_ID.ethereum,
  CHAINS_ID.matic,
  CHAINS_ID.sepolia,
  CHAINS_ID.optimism,
  CHAINS_ID.base,
  CHAINS_ID.zora,
  CHAINS_ID.covalent,
];

export const successSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="84"
    height="24"
    viewBox="0 0 84 24"
    fill="none"
  >
    <rect width="84" height="24" rx="4" fill="#28332D" />
    <path
      d="M16 5.5C12.4159 5.5 9.5 8.41594 9.5 12C9.5 15.5841 12.4159 18.5 16 18.5C19.5841 18.5 22.5 15.5841 22.5 12C22.5 8.41594 19.5841 5.5 16 5.5ZM19.3828 9.82156L15.1828 14.8216C15.1367 14.8764 15.0794 14.9208 15.0147 14.9516C14.95 14.9823 14.8795 14.9989 14.8078 15H14.7994C14.7293 15 14.66 14.9852 14.596 14.9567C14.532 14.9282 14.4747 14.8865 14.4278 14.8344L12.6278 12.8344C12.5821 12.7859 12.5465 12.7288 12.5232 12.6663C12.4999 12.6039 12.4893 12.5374 12.492 12.4709C12.4948 12.4043 12.5108 12.3389 12.5391 12.2786C12.5675 12.2183 12.6076 12.1643 12.6571 12.1197C12.7067 12.0751 12.7646 12.0409 12.8276 12.019C12.8905 11.9972 12.9572 11.9881 13.0237 11.9924C13.0902 11.9967 13.1552 12.0142 13.2148 12.044C13.2744 12.0737 13.3275 12.1151 13.3709 12.1656L14.7863 13.7381L18.6172 9.17844C18.7031 9.07909 18.8247 9.01754 18.9556 9.00711C19.0866 8.99668 19.2164 9.03819 19.317 9.12268C19.4175 9.20717 19.4808 9.32784 19.4931 9.45862C19.5055 9.5894 19.4658 9.71977 19.3828 9.82156Z"
      fill="#ABE4B8"
    />
    <path
      d="M33.8295 9.45455C33.7784 9.02273 33.571 8.6875 33.2074 8.44886C32.8438 8.21023 32.3977 8.09091 31.8693 8.09091C31.483 8.09091 31.1449 8.15341 30.8551 8.27841C30.5682 8.40341 30.3438 8.57528 30.1818 8.79403C30.0227 9.01278 29.9432 9.26136 29.9432 9.53977C29.9432 9.77273 29.9986 9.97301 30.1094 10.1406C30.223 10.3054 30.3679 10.4432 30.544 10.554C30.7202 10.6619 30.9048 10.7514 31.098 10.8224C31.2912 10.8906 31.4688 10.946 31.6307 10.9886L32.517 11.2273C32.7443 11.2869 32.9972 11.3693 33.2756 11.4744C33.5568 11.5795 33.8253 11.723 34.081 11.9048C34.3395 12.0838 34.5526 12.3139 34.7202 12.5952C34.8878 12.8764 34.9716 13.2216 34.9716 13.6307C34.9716 14.1023 34.848 14.5284 34.6009 14.9091C34.3565 15.2898 33.9986 15.5923 33.527 15.8168C33.0582 16.0412 32.4886 16.1534 31.8182 16.1534C31.1932 16.1534 30.652 16.0526 30.1946 15.8509C29.7401 15.6491 29.3821 15.3679 29.1207 15.0071C28.8622 14.6463 28.7159 14.2273 28.6818 13.75H29.7727C29.8011 14.0795 29.9119 14.3523 30.1051 14.5682C30.3011 14.7812 30.5483 14.9403 30.8466 15.0455C31.1477 15.1477 31.4716 15.1989 31.8182 15.1989C32.2216 15.1989 32.5838 15.1335 32.9048 15.0028C33.2259 14.8693 33.4801 14.6847 33.6676 14.4489C33.8551 14.2102 33.9489 13.9318 33.9489 13.6136C33.9489 13.3239 33.8679 13.0881 33.706 12.9062C33.544 12.7244 33.331 12.5767 33.0668 12.4631C32.8026 12.3494 32.517 12.25 32.2102 12.1648L31.1364 11.858C30.4545 11.6619 29.9148 11.3821 29.517 11.0185C29.1193 10.6548 28.9205 10.179 28.9205 9.59091C28.9205 9.10227 29.0526 8.67614 29.3168 8.3125C29.5838 7.94602 29.9418 7.66193 30.3906 7.46023C30.8423 7.25568 31.3466 7.15341 31.9034 7.15341C32.4659 7.15341 32.9659 7.25426 33.4034 7.45597C33.8409 7.65483 34.1875 7.92756 34.4432 8.27415C34.7017 8.62074 34.8381 9.0142 34.8523 9.45455H33.8295ZM40.6978 13.3239V9.45455H41.7035V16H40.6978V14.892H40.6296C40.4762 15.2244 40.2376 15.5071 39.9137 15.7401C39.5898 15.9702 39.1808 16.0852 38.6864 16.0852C38.2773 16.0852 37.9137 15.9957 37.5955 15.8168C37.2773 15.6349 37.0273 15.3622 36.8455 14.9986C36.6637 14.6321 36.5728 14.1705 36.5728 13.6136V9.45455H37.5785V13.5455C37.5785 14.0227 37.712 14.4034 37.979 14.6875C38.2489 14.9716 38.5927 15.1136 39.0103 15.1136C39.2603 15.1136 39.5146 15.0497 39.7731 14.9219C40.0344 14.794 40.2532 14.598 40.4293 14.3338C40.6083 14.0696 40.6978 13.733 40.6978 13.3239ZM46.2045 16.1364C45.5909 16.1364 45.0625 15.9915 44.6193 15.7017C44.1761 15.4119 43.8352 15.0128 43.5966 14.5043C43.358 13.9957 43.2386 13.4148 43.2386 12.7614C43.2386 12.0966 43.3608 11.5099 43.6051 11.0014C43.8523 10.4901 44.196 10.0909 44.6364 9.80398C45.0795 9.5142 45.5966 9.36932 46.1875 9.36932C46.6477 9.36932 47.0625 9.45455 47.4318 9.625C47.8011 9.79545 48.1037 10.0341 48.3395 10.3409C48.5753 10.6477 48.7216 11.0057 48.7784 11.4148H47.7727C47.696 11.1165 47.5256 10.8523 47.2614 10.6222C47 10.3892 46.6477 10.2727 46.2045 10.2727C45.8125 10.2727 45.4688 10.375 45.1733 10.5795C44.8807 10.7812 44.652 11.0668 44.4872 11.4361C44.3253 11.8026 44.2443 12.233 44.2443 12.7273C44.2443 13.233 44.3239 13.6733 44.483 14.0483C44.6449 14.4233 44.8722 14.7145 45.1648 14.9219C45.4602 15.1293 45.8068 15.233 46.2045 15.233C46.4659 15.233 46.7031 15.1875 46.9162 15.0966C47.1293 15.0057 47.3097 14.875 47.4574 14.7045C47.6051 14.5341 47.7102 14.3295 47.7727 14.0909H48.7784C48.7216 14.4773 48.581 14.8253 48.3565 15.1349C48.1349 15.4418 47.8409 15.6861 47.4744 15.8679C47.1108 16.0469 46.6875 16.1364 46.2045 16.1364ZM52.9077 16.1364C52.294 16.1364 51.7656 15.9915 51.3224 15.7017C50.8793 15.4119 50.5384 15.0128 50.2997 14.5043C50.0611 13.9957 49.9418 13.4148 49.9418 12.7614C49.9418 12.0966 50.0639 11.5099 50.3082 11.0014C50.5554 10.4901 50.8991 10.0909 51.3395 9.80398C51.7827 9.5142 52.2997 9.36932 52.8906 9.36932C53.3509 9.36932 53.7656 9.45455 54.1349 9.625C54.5043 9.79545 54.8068 10.0341 55.0426 10.3409C55.2784 10.6477 55.4247 11.0057 55.4815 11.4148H54.4759C54.3991 11.1165 54.2287 10.8523 53.9645 10.6222C53.7031 10.3892 53.3509 10.2727 52.9077 10.2727C52.5156 10.2727 52.1719 10.375 51.8764 10.5795C51.5838 10.7812 51.3551 11.0668 51.1903 11.4361C51.0284 11.8026 50.9474 12.233 50.9474 12.7273C50.9474 13.233 51.027 13.6733 51.1861 14.0483C51.348 14.4233 51.5753 14.7145 51.8679 14.9219C52.1634 15.1293 52.5099 15.233 52.9077 15.233C53.169 15.233 53.4062 15.1875 53.6193 15.0966C53.8324 15.0057 54.0128 14.875 54.1605 14.7045C54.3082 14.5341 54.4134 14.3295 54.4759 14.0909H55.4815C55.4247 14.4773 55.2841 14.8253 55.0597 15.1349C54.8381 15.4418 54.544 15.6861 54.1776 15.8679C53.8139 16.0469 53.3906 16.1364 52.9077 16.1364ZM59.696 16.1364C59.0653 16.1364 58.5213 15.9972 58.0639 15.7188C57.6094 15.4375 57.2585 15.0455 57.0114 14.5426C56.767 14.0369 56.6449 13.4489 56.6449 12.7784C56.6449 12.108 56.767 11.517 57.0114 11.0057C57.2585 10.4915 57.6023 10.0909 58.0426 9.80398C58.4858 9.5142 59.0028 9.36932 59.5938 9.36932C59.9347 9.36932 60.2713 9.42614 60.6037 9.53977C60.9361 9.65341 61.2386 9.83807 61.5114 10.0938C61.7841 10.3466 62.0014 10.6818 62.1634 11.0994C62.3253 11.517 62.4062 12.0312 62.4062 12.642V13.0682H57.3608V12.1989H61.3835C61.3835 11.8295 61.3097 11.5 61.1619 11.2102C61.017 10.9205 60.8097 10.6918 60.5398 10.5241C60.2727 10.3565 59.9574 10.2727 59.5938 10.2727C59.1932 10.2727 58.8466 10.3722 58.554 10.571C58.2642 10.767 58.0412 11.0227 57.8849 11.3381C57.7287 11.6534 57.6506 11.9915 57.6506 12.3523V12.9318C57.6506 13.4261 57.7358 13.8452 57.9062 14.1889C58.0795 14.5298 58.3196 14.7898 58.6264 14.9688C58.9332 15.1449 59.2898 15.233 59.696 15.233C59.9602 15.233 60.1989 15.196 60.4119 15.1222C60.6278 15.0455 60.8139 14.9318 60.9702 14.7812C61.1264 14.6278 61.2472 14.4375 61.3324 14.2102L62.304 14.483C62.2017 14.8125 62.0298 15.1023 61.7884 15.3523C61.5469 15.5994 61.2486 15.7926 60.8935 15.9318C60.5384 16.0682 60.1392 16.1364 59.696 16.1364ZM68.5724 10.9205L67.669 11.1761C67.6122 11.0256 67.5284 10.8793 67.4176 10.7372C67.3097 10.5923 67.1619 10.473 66.9744 10.3793C66.7869 10.2855 66.5469 10.2386 66.2543 10.2386C65.8537 10.2386 65.5199 10.331 65.2528 10.5156C64.9886 10.6974 64.8565 10.929 64.8565 11.2102C64.8565 11.4602 64.9474 11.6577 65.1293 11.8026C65.3111 11.9474 65.5952 12.0682 65.9815 12.1648L66.9531 12.4034C67.5384 12.5455 67.9744 12.7628 68.2614 13.0554C68.5483 13.3452 68.6918 13.7187 68.6918 14.1761C68.6918 14.5511 68.5838 14.8864 68.3679 15.1818C68.1548 15.4773 67.8565 15.7102 67.473 15.8807C67.0895 16.0511 66.6435 16.1364 66.1349 16.1364C65.4673 16.1364 64.9148 15.9915 64.4773 15.7017C64.0398 15.4119 63.7628 14.9886 63.6463 14.4318L64.6009 14.1932C64.6918 14.5455 64.8636 14.8097 65.1165 14.9858C65.3722 15.1619 65.706 15.25 66.1179 15.25C66.5866 15.25 66.9588 15.1506 67.2344 14.9517C67.5128 14.75 67.652 14.5085 67.652 14.2273C67.652 14 67.5724 13.8097 67.4134 13.6562C67.2543 13.5 67.0099 13.3835 66.6804 13.3068L65.5895 13.0511C64.9901 12.9091 64.5497 12.6889 64.2685 12.3906C63.9901 12.0895 63.8509 11.7131 63.8509 11.2614C63.8509 10.892 63.9545 10.5653 64.1619 10.2812C64.3722 9.99716 64.6577 9.77415 65.0185 9.61222C65.3821 9.45028 65.794 9.36932 66.2543 9.36932C66.902 9.36932 67.4105 9.51136 67.7798 9.79545C68.152 10.0795 68.4162 10.4545 68.5724 10.9205ZM74.842 10.9205L73.9386 11.1761C73.8817 11.0256 73.7979 10.8793 73.6871 10.7372C73.5792 10.5923 73.4315 10.473 73.244 10.3793C73.0565 10.2855 72.8164 10.2386 72.5238 10.2386C72.1232 10.2386 71.7894 10.331 71.5224 10.5156C71.2582 10.6974 71.1261 10.929 71.1261 11.2102C71.1261 11.4602 71.217 11.6577 71.3988 11.8026C71.5806 11.9474 71.8647 12.0682 72.2511 12.1648L73.2227 12.4034C73.8079 12.5455 74.244 12.7628 74.5309 13.0554C74.8178 13.3452 74.9613 13.7187 74.9613 14.1761C74.9613 14.5511 74.8533 14.8864 74.6374 15.1818C74.4244 15.4773 74.1261 15.7102 73.7425 15.8807C73.359 16.0511 72.913 16.1364 72.4045 16.1364C71.7369 16.1364 71.1843 15.9915 70.7468 15.7017C70.3093 15.4119 70.0323 14.9886 69.9158 14.4318L70.8704 14.1932C70.9613 14.5455 71.1332 14.8097 71.386 14.9858C71.6417 15.1619 71.9755 15.25 72.3874 15.25C72.8562 15.25 73.2283 15.1506 73.5039 14.9517C73.7823 14.75 73.9215 14.5085 73.9215 14.2273C73.9215 14 73.842 13.8097 73.6829 13.6562C73.5238 13.5 73.2795 13.3835 72.9499 13.3068L71.859 13.0511C71.2596 12.9091 70.8192 12.6889 70.538 12.3906C70.2596 12.0895 70.1204 11.7131 70.1204 11.2614C70.1204 10.892 70.2241 10.5653 70.4315 10.2812C70.6417 9.99716 70.9272 9.77415 71.288 9.61222C71.6516 9.45028 72.0636 9.36932 72.5238 9.36932C73.1715 9.36932 73.68 9.51136 74.0494 9.79545C74.4215 10.0795 74.6857 10.4545 74.842 10.9205Z"
      fill="#ABE4B8"
    />
  </svg>
);

export const pendingSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="83"
    height="24"
    viewBox="0 0 83 24"
    fill="none"
  >
    <rect width="83" height="24" rx="4" fill="#323328" />
    <path
      d="M16 5.5C12.4103 5.5 9.5 8.41031 9.5 12C9.5 15.5897 12.4103 18.5 16 18.5C19.5897 18.5 22.5 15.5897 22.5 12C22.5 8.41031 19.5897 5.5 16 5.5ZM19 13H16C15.8674 13 15.7402 12.9473 15.6464 12.8536C15.5527 12.7598 15.5 12.6326 15.5 12.5V8C15.5 7.86739 15.5527 7.74021 15.6464 7.64645C15.7402 7.55268 15.8674 7.5 16 7.5C16.1326 7.5 16.2598 7.55268 16.3536 7.64645C16.4473 7.74021 16.5 7.86739 16.5 8V12H19C19.1326 12 19.2598 12.0527 19.3536 12.1464C19.4473 12.2402 19.5 12.3674 19.5 12.5C19.5 12.6326 19.4473 12.7598 19.3536 12.8536C19.2598 12.9473 19.1326 13 19 13Z"
      fill="#FFDA6A"
    />
    <path
      d="M29.0568 16V7.27273H32.0057C32.6903 7.27273 33.25 7.39631 33.6847 7.64347C34.1222 7.88778 34.446 8.21875 34.6562 8.63636C34.8665 9.05398 34.9716 9.51989 34.9716 10.0341C34.9716 10.5483 34.8665 11.0156 34.6562 11.4361C34.4489 11.8565 34.1278 12.1918 33.6932 12.4418C33.2585 12.6889 32.7017 12.8125 32.0227 12.8125H29.9091V11.875H31.9886C32.4574 11.875 32.8338 11.794 33.1179 11.6321C33.402 11.4702 33.608 11.2514 33.7358 10.9759C33.8665 10.6974 33.9318 10.3835 33.9318 10.0341C33.9318 9.68466 33.8665 9.37216 33.7358 9.09659C33.608 8.82102 33.4006 8.60511 33.1136 8.44886C32.8267 8.28977 32.446 8.21023 31.9716 8.21023H30.1136V16H29.0568ZM39.2116 16.1364C38.581 16.1364 38.0369 15.9972 37.5795 15.7188C37.125 15.4375 36.7741 15.0455 36.527 14.5426C36.2827 14.0369 36.1605 13.4489 36.1605 12.7784C36.1605 12.108 36.2827 11.517 36.527 11.0057C36.7741 10.4915 37.1179 10.0909 37.5582 9.80398C38.0014 9.5142 38.5185 9.36932 39.1094 9.36932C39.4503 9.36932 39.7869 9.42614 40.1193 9.53977C40.4517 9.65341 40.7543 9.83807 41.027 10.0938C41.2997 10.3466 41.517 10.6818 41.679 11.0994C41.8409 11.517 41.9219 12.0312 41.9219 12.642V13.0682H36.8764V12.1989H40.8991C40.8991 11.8295 40.8253 11.5 40.6776 11.2102C40.5327 10.9205 40.3253 10.6918 40.0554 10.5241C39.7884 10.3565 39.473 10.2727 39.1094 10.2727C38.7088 10.2727 38.3622 10.3722 38.0696 10.571C37.7798 10.767 37.5568 11.0227 37.4006 11.3381C37.2443 11.6534 37.1662 11.9915 37.1662 12.3523V12.9318C37.1662 13.4261 37.2514 13.8452 37.4219 14.1889C37.5952 14.5298 37.8352 14.7898 38.142 14.9688C38.4489 15.1449 38.8054 15.233 39.2116 15.233C39.4759 15.233 39.7145 15.196 39.9276 15.1222C40.1435 15.0455 40.3295 14.9318 40.4858 14.7812C40.642 14.6278 40.7628 14.4375 40.848 14.2102L41.8196 14.483C41.7173 14.8125 41.5455 15.1023 41.304 15.3523C41.0625 15.5994 40.7642 15.7926 40.4091 15.9318C40.054 16.0682 39.6548 16.1364 39.2116 16.1364ZM44.4574 12.0625V16H43.4517V9.45455H44.4233V10.4773H44.5085C44.6619 10.1449 44.8949 9.87784 45.2074 9.67614C45.5199 9.47159 45.9233 9.36932 46.4176 9.36932C46.8608 9.36932 47.2486 9.46023 47.581 9.64205C47.9134 9.82102 48.1719 10.0938 48.3565 10.4602C48.5412 10.8239 48.6335 11.2841 48.6335 11.8409V16H47.6278V11.9091C47.6278 11.3949 47.4943 10.9943 47.2273 10.7074C46.9602 10.4176 46.5938 10.2727 46.1278 10.2727C45.8068 10.2727 45.5199 10.3423 45.267 10.4815C45.017 10.6207 44.8196 10.8239 44.6747 11.0909C44.5298 11.358 44.4574 11.6818 44.4574 12.0625ZM52.9428 16.1364C52.3974 16.1364 51.9158 15.9986 51.4982 15.723C51.0806 15.4446 50.7539 15.0526 50.5181 14.5469C50.2823 14.0384 50.1644 13.4375 50.1644 12.7443C50.1644 12.0568 50.2823 11.4602 50.5181 10.9545C50.7539 10.4489 51.082 10.0582 51.5025 9.78267C51.9229 9.5071 52.4087 9.36932 52.9599 9.36932C53.386 9.36932 53.7227 9.44034 53.9698 9.58239C54.2198 9.72159 54.4102 9.88068 54.5408 10.0597C54.6744 10.2358 54.7781 10.3807 54.8519 10.4943H54.9371V7.27273H55.9428V16H54.9712V14.9943H54.8519C54.7781 15.1136 54.6729 15.2642 54.5366 15.446C54.4002 15.625 54.2056 15.7855 53.9528 15.9276C53.6999 16.0668 53.3633 16.1364 52.9428 16.1364ZM53.0792 15.233C53.4826 15.233 53.8235 15.1278 54.1019 14.9176C54.3803 14.7045 54.592 14.4105 54.7369 14.0355C54.8817 13.6577 54.9542 13.2216 54.9542 12.7273C54.9542 12.2386 54.8832 11.8111 54.7411 11.4446C54.5991 11.0753 54.3888 10.7884 54.1104 10.5838C53.832 10.3764 53.4883 10.2727 53.0792 10.2727C52.6531 10.2727 52.2979 10.3821 52.0138 10.6009C51.7326 10.8168 51.521 11.1108 51.3789 11.483C51.2397 11.8523 51.1701 12.267 51.1701 12.7273C51.1701 13.1932 51.2411 13.6165 51.3832 13.9972C51.5281 14.375 51.7411 14.6761 52.0224 14.9006C52.3065 15.1222 52.6587 15.233 53.0792 15.233ZM57.9244 16V9.45455H58.93V16H57.9244ZM58.4357 8.36364C58.2397 8.36364 58.0707 8.29688 57.9286 8.16335C57.7894 8.02983 57.7198 7.86932 57.7198 7.68182C57.7198 7.49432 57.7894 7.33381 57.9286 7.20028C58.0707 7.06676 58.2397 7 58.4357 7C58.6317 7 58.7994 7.06676 58.9386 7.20028C59.0806 7.33381 59.1516 7.49432 59.1516 7.68182C59.1516 7.86932 59.0806 8.02983 58.9386 8.16335C58.7994 8.29688 58.6317 8.36364 58.4357 8.36364ZM61.7777 12.0625V16H60.772V9.45455H61.7436V10.4773H61.8288C61.9822 10.1449 62.2152 9.87784 62.5277 9.67614C62.8402 9.47159 63.2436 9.36932 63.7379 9.36932C64.1811 9.36932 64.5689 9.46023 64.9013 9.64205C65.2337 9.82102 65.4922 10.0938 65.6768 10.4602C65.8615 10.8239 65.9538 11.2841 65.9538 11.8409V16H64.9482V11.9091C64.9482 11.3949 64.8146 10.9943 64.5476 10.7074C64.2805 10.4176 63.9141 10.2727 63.4482 10.2727C63.1271 10.2727 62.8402 10.3423 62.5874 10.4815C62.3374 10.6207 62.1399 10.8239 61.995 11.0909C61.8501 11.358 61.7777 11.6818 61.7777 12.0625ZM70.4336 18.5909C69.9478 18.5909 69.5302 18.5284 69.1808 18.4034C68.8313 18.2812 68.5401 18.1193 68.3072 17.9176C68.0771 17.7188 67.8938 17.5057 67.7575 17.2784L68.5586 16.7159C68.6495 16.8352 68.7646 16.9716 68.9038 17.125C69.043 17.2812 69.2333 17.4162 69.4748 17.5298C69.7191 17.6463 70.0387 17.7045 70.4336 17.7045C70.962 17.7045 71.3981 17.5767 71.7418 17.321C72.0856 17.0653 72.2575 16.6648 72.2575 16.1193V14.7898H72.1722C72.0984 14.9091 71.9933 15.0568 71.8569 15.233C71.7234 15.4062 71.5302 15.5611 71.2773 15.6974C71.0273 15.831 70.6893 15.8977 70.2631 15.8977C69.7347 15.8977 69.2603 15.7727 68.8398 15.5227C68.4222 15.2727 68.0913 14.9091 67.8469 14.4318C67.6055 13.9545 67.4847 13.375 67.4847 12.6932C67.4847 12.0227 67.6026 11.4389 67.8384 10.9418C68.0742 10.4418 68.4023 10.0554 68.8228 9.78267C69.2433 9.5071 69.729 9.36932 70.2802 9.36932C70.7063 9.36932 71.0444 9.44034 71.2944 9.58239C71.5472 9.72159 71.7404 9.88068 71.8739 10.0597C72.0103 10.2358 72.1154 10.3807 72.1893 10.4943H72.2915V9.45455H73.2631V16.1875C73.2631 16.75 73.1353 17.2074 72.8796 17.5597C72.6268 17.9148 72.2859 18.1747 71.8569 18.3395C71.4308 18.5071 70.9563 18.5909 70.4336 18.5909ZM70.3995 14.9943C70.8029 14.9943 71.1438 14.902 71.4222 14.7173C71.7006 14.5327 71.9123 14.267 72.0572 13.9205C72.2021 13.5739 72.2745 13.1591 72.2745 12.6761C72.2745 12.2045 72.2035 11.7884 72.0614 11.4276C71.9194 11.0668 71.7092 10.7841 71.4308 10.5795C71.1523 10.375 70.8086 10.2727 70.3995 10.2727C69.9734 10.2727 69.6183 10.3807 69.3342 10.5966C69.0529 10.8125 68.8413 11.1023 68.6992 11.4659C68.56 11.8295 68.4904 12.233 68.4904 12.6761C68.4904 13.1307 68.5614 13.5327 68.7035 13.8821C68.8484 14.2287 69.0614 14.5014 69.3427 14.7003C69.6268 14.8963 69.979 14.9943 70.3995 14.9943Z"
      fill="#FFDA6A"
    />
  </svg>
);
