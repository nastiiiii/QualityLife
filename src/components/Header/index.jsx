import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

import "./local.css"

const Header = (props) => {
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
        <div className="bg-gray-200 flex flex-col gap-3 h-[150px] md:h-auto items-start justify-start mb-[15px] md:ml-[0] ml-[104px] md:mt-0 mt-[82px] px-4 py-3 rounded-[24px] shadow-bs w-[265px]">
          <div className="flex flex-row gap-3 items-center justify-start w-auto">
            <div className="bg-indigo-50 flex flex-col h-16 items-center justify-start p-3 rounded-[50%] w-16">
              <Img
                className="h-10 md:h-auto object-cover w-[93%]"
                src="images/img_calendarwithc.png"
                alt="calendarwithc"
              />
            </div>
            <Text
              className="text-blue_gray-900 text-lg w-auto"
              size="txtManropeMedium18"
            >
              Appointments
            </Text>
          </div>
          <div className="flex flex-row gap-3 items-end justify-start w-[98%] md:w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
              size="txtManropeMedium32"
            >
              1,250
            </Text>
            <div className="flex flex-row gap-1.5 items-center justify-start mb-[5px] mt-4 w-auto">
              <div className="flex flex-row items-center justify-start w-auto">
                <Img
                  className="h-[17px] w-[17px]"
                  src="images/img_arrowleft.svg"
                  alt="arrowleft"
                />
                <Text
                  className="text-green-A700 text-sm w-auto"
                  size="txtManropeMedium14"
                >
                  <span className="percent-offset">4.8%</span>
                </Text>
              </div>
              <Text
                className="text-gray-500 text-xs w-auto"
                size="txtManropeRegular12"
              >
                from last week
              </Text>
            </div>
          </div>
        </div>
        <div className="bg-gray-200 flex flex-col gap-3 h-[150px] md:h-auto items-start justify-start mb-[15px] md:ml-[0] ml-[27px] md:mt-0 mt-[82px] p-3 rounded-[24px] shadow-bs w-[264px]">
          <div className="flex flex-row gap-3 items-center justify-start w-auto">
            <Button
              className="flex h-16 items-center justify-center w-16"
              shape="circle"
              color="pink_50"
              size="sm"
              variant="fill"
            >
              <Img
                className="h-9"
                src="images/img_group1387.png"
                alt="group1387"
              />
            </Button>
            <Text
              className="text-blue_gray-900 text-lg w-auto"
              size="txtManropeMedium18"
            >
              Call Consultancy
            </Text>
          </div>
          <div className="flex flex-row gap-3 items-end justify-start w-[95%] md:w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
              size="txtManropeMedium32"
            >
              1,002
            </Text>
            <div className="flex flex-row gap-1.5 items-center justify-start mb-[5px] mt-4 w-auto">
              <div className="flex flex-row items-center justify-start w-auto">
                <Img
                  className="h-[17px] w-[17px]"
                  src="images/img_arrowleft.svg"
                  alt="arrowleft_One"
                />
                <Text
                  className="text-green-A700 text-sm w-auto"
                  size="txtManropeMedium14"
                >
                  <span className="percent-offset">40%</span>
                </Text>
              </div>
              <Text
                className="text-gray-500 text-xs w-auto"
                size="txtManropeRegular12"
              >
                from last week
              </Text>
            </div>
          </div>
        </div>
        <div className="bg-gray-200 flex flex-col gap-3 h-[150px] md:h-auto items-start justify-start mb-[15px] md:ml-[0] ml-[27px] md:mt-0 mt-[82px] p-3 rounded-[24px] shadow-bs w-[265px]">
          <div className="flex flex-row gap-3 items-center justify-start w-auto">
            <div className="bg-green-50 flex flex-col h-16 items-center justify-start p-3 rounded-[50%] w-16">
              <Img
                className="h-10 md:h-auto object-cover w-[68%]"
                src="images/img_3dsyringe1.png"
                alt="3dsyringeOne"
              />
            </div>
            <Text
              className="text-blue_gray-900 text-lg w-auto"
              size="txtManropeMedium18"
            >
              Surgeries
            </Text>
          </div>
          <div className="flex flex-row gap-3 items-end justify-start w-[77%] md:w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
              size="txtManropeMedium32"
            >
              60
            </Text>
            <div className="flex flex-row gap-1.5 items-center justify-start mb-[5px] mt-[18px] w-auto">
              <div className="flex flex-row items-center justify-start w-auto">
                <Img
                  className="h-[17px] w-[17px]"
                  src="images/img_arrowup.svg"
                  alt="arrowup"
                />
                <Text
                  className="text-red-600 text-sm w-auto"
                  size="txtManropeMedium14Red600"
                >
                  <span className="percent-offset">25%</span>
                </Text>
              </div>
              <Text
                className="text-gray-500 text-xs w-auto"
                size="txtManropeRegular12"
              >
                from last week
              </Text>
            </div>
          </div>
        </div>
        <div className="h-[164px] md:h-[178px] mb-[15px] md:ml-[0] ml-[136px] mr-[18px] md:mt-0 mt-[51px] relative w-[13%] md:w-full">
          <div className="md:h-[163px] h-[164px] m-auto w-full">
            <div className="absolute bg-blue_gray-100 flex flex-col h-full inset-[0] items-start justify-center m-auto p-5 rounded-[47px]">
              <Text
                className="common-pointer mt-[95px] text-black-900 text-xl"
                size="txtManropeRegular20"
                onClick={() => navigate("/main")}
              >
                <>&lt;- Go Back</>
              </Text>
            </div>
            <Text
              className="relative leading-[100.00%] sm:text-[21px] md:text-[23px] text-[25px] text-indigo-A700 top-[30%] left-[10%]"
              size="txtManropeBold25"
            >
              <>
                Hi, <br />
                {props.doctor_name}
              </>
            </Text>
          </div>
          <div className="absolute bg-white-A700 h-[43px] left-[36%] rounded-[21px] top-[17%] w-[42px]"></div>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
