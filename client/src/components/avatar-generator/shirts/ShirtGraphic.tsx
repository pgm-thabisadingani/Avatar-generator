/**
 * Graphic shirt
 */
const ShirtGraphic = ({ color }: { color: string }) => {
  return (
    <svg
      id="Clothing_Graphic_Shirt"
      data-name="Clothing/Graphic Shirt"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="200"
      height="80.804"
      viewBox="0 0 200 80.804"
    >
      <defs>
        <clipPath id="shirtpath">
          <path
            id="Clothes"
            d="M32,110v-8.949A71.717,71.717,0,0,1,51.59,51.684a72.25,72.25,0,0,1,21.4-15.632,71.394,71.394,0,0,1,26.4-6.855A14.171,14.171,0,0,0,99,32.5a15.047,15.047,0,0,0,2.632,8.369,23.9,23.9,0,0,0,7.179,6.834,38.173,38.173,0,0,0,10.649,4.608,51.171,51.171,0,0,0,26.079,0A38.179,38.179,0,0,0,156.188,47.7a23.888,23.888,0,0,0,7.179-6.834A15.048,15.048,0,0,0,166,32.5a14.166,14.166,0,0,0-.376-3.232,71.372,71.372,0,0,1,26.038,7.1A72.082,72.082,0,0,1,232,101.051V110H32Z"
            fill="none"
          />
        </clipPath>
      </defs>
      <g id="Group_4" data-name="Group 4" transform="translate(-32 -29.196)">
        <g id="Clothes-2" data-name="Clothes">
          <path
            id="Clothes-3"
            data-name="Clothes"
            d="M200,80.8H0V71.852A71.716,71.716,0,0,1,19.59,22.485a72.216,72.216,0,0,1,21.4-15.632A71.382,71.382,0,0,1,67.393,0,14.156,14.156,0,0,0,67,3.3a15.046,15.046,0,0,0,2.633,8.369A23.907,23.907,0,0,0,76.812,18.5,38.19,38.19,0,0,0,87.46,23.112,49.794,49.794,0,0,0,100.5,24.8a49.791,49.791,0,0,0,13.04-1.69A38.189,38.189,0,0,0,124.188,18.5a23.906,23.906,0,0,0,7.179-6.834A15.046,15.046,0,0,0,134,3.3a14.154,14.154,0,0,0-.376-3.232,71.361,71.361,0,0,1,26.038,7.1A72.078,72.078,0,0,1,200,71.852V80.8Z"
            transform="translate(32 29.199)"
            fill="#e6e6e6"
          />
          <path
            id="Clothes-4"
            data-name="Clothes"
            d="M200,80.8H0V71.852A71.716,71.716,0,0,1,19.59,22.485a72.216,72.216,0,0,1,21.4-15.632A71.382,71.382,0,0,1,67.393,0,14.156,14.156,0,0,0,67,3.3a15.046,15.046,0,0,0,2.633,8.369A23.907,23.907,0,0,0,76.812,18.5,38.19,38.19,0,0,0,87.46,23.112,49.794,49.794,0,0,0,100.5,24.8a49.791,49.791,0,0,0,13.04-1.69A38.189,38.189,0,0,0,124.188,18.5a23.906,23.906,0,0,0,7.179-6.834A15.046,15.046,0,0,0,134,3.3a14.154,14.154,0,0,0-.376-3.232,71.361,71.361,0,0,1,26.038,7.1A72.078,72.078,0,0,1,200,71.852V80.8Z"
            transform="translate(32 29.199)"
            fill="none"
          />
        </g>
        <g
          id="Mask_Group_4"
          data-name="Mask Group 4"
          clipPath="url(#shirtpath)"
        >
          <g id="_Color_Fabric" data-name="↳ Color Fabric">
            <g id="_Color" data-name="🖍Color">
              <rect
                id="_Color-2"
                data-name="🖍Color"
                width="264"
                height="110"
                fill={color}
              />
              <rect
                id="_Color-3"
                data-name="🖍Color"
                width="264"
                height="110"
                fill="none"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default ShirtGraphic;
