import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const Header2 = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <header className={props.className}>
        <div className="flex h-12 md:h-[196px] justify-end mb-[148px] md:ml-[0] ml-[15px] md:mt-0 mt-[34px] relative w-[155px]">
          <Img
            className="absolute h-7 inset-y-[0] left-[0] my-auto object-cover w-[27px]"
            src="images/img_image15.png"
            alt="imageFifteen"
          />
          <div className="absolute flex flex-row gap-2 md:h-auto h-full inset-[0] items-center justify-start m-auto w-[155px]">
            <Img
              className="h-7 md:h-auto object-cover w-[27px]"
              src="images/img_image15.png"
              alt="imageFifteen_One"
            />
            <Text
              className="text-3xl sm:text-[26px] md:text-[28px] text-blue-A700 w-[114px]"
              size="txtManropeBold30"
            >
              Medbay
            </Text>
          </div>
        </div>

        <div className="h-[164px] md:h-[178px] mb-[15px] md:ml-[0] ml-[136px] mr-[18px] md:mt-0 mt-[51px] relative w-[13%] md:w-full">
          <div className="md:h-[163px] h-[164px] m-auto w-full">
            <div className="absolute bg-blue_gray-100 flex flex-col h-full inset-[0] items-start justify-center m-auto p-5 rounded-[47px]">
              <Text
                className="common-pointer mt-[95px] text-black-900 text-xl"
                size="txtManropeRegular20"
                onClick={() => navigate("/mainone")}
              >
                <>&lt;- Go Back</>
              </Text>
            </div>
            <Text
              className="absolute inset-0 flex items-center justify-center text-center sm:text-[21px] md:text-[23px] text-[25px] text-indigo-A700"
              size="txtManropeBold25"
            >
              <>
                Hi, <br />
                Dr. Marcus
              </>
            </Text>
          </div>
        </div>
      </header>
    </>
  );
};

Header2.defaultProps = {};

export default Header2;
