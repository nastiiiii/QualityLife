import React from "react";

import { Button, Img, Input, Text } from "components";
import { useNavigate } from "react-router-dom";

const PrescriptionsOnePageRayanJokerSecond = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-white-A700 font-manrope h-[982px] mx-auto px-[18px] relative w-full">
        <div className="absolute flex sm:flex-col flex-row md:gap-10 inset-x-[0] items-start justify-between max-w-[1461px] mx-auto p-[15px] md:px-5 top-[0] w-full">
          <div className="flex h-12 md:h-[67px] justify-end sm:mt-0 mt-[19px] relative w-[155px]">
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
          <div className="sm:h-[163px] h-[164px] md:h-[199px] mr-[3px] sm:mt-0 mt-9 relative w-[13%] sm:w-full">
            <div className="md:h-[163px] h-[164px] m-auto w-full">
              <div className="absolute bg-blue_gray-100 flex flex-col h-full inset-[0] items-start justify-center m-auto p-5 rounded-[47px]">
                <Text
                  className="mt-[95px] text-black-900 text-xl"
                  size="txtManropeRegular20"
                >
                  <>&lt;- Go Back</>
                </Text>
              </div>
              <Text
                className="absolute inset-0 flex items-center justify-center text-center sm:text-[21px] md:text-[23px] text-[25px] text-indigo-A700"
                size="txtManropeBold25">
                <>
                  Hi, <br />
                  Rayan Gos
                </>
              </Text>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[0] flex flex-col items-end justify-start md:px-5 right-[2%] w-[19%]">
          <div className="md:h-[672px] h-[705px] p-3.5 relative w-full">
            <div className="bg-gray-200 h-[672px] m-auto rounded-[32px] w-[89%]"></div>
            <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[5%] w-[79%]">
              <div className="bg-white-A700 border-2 border-blue-A700 border-solid h-[35px] w-[98%]"></div>
              <Text
                className="bg-gray-400 h-[50px] justify-center mt-[25px] pb-[9px] pl-2.5 sm:pr-5 pr-[35px] pt-3 rounded-md text-black-900 text-xl w-[219px]"
                size="txtManropeSemiBold20WhiteA700"
              >
                Dr Cena
              </Text>
              <Text
                className="bg-indigo-A700 h-[50px] justify-center mt-[13px] pb-[9px] pl-2.5 sm:pr-5 pr-[35px] pt-3 rounded-md text-white-A700 text-xl w-[219px]"
                size="txtManropeSemiBold20"
              >
                Dr Joker
              </Text>
            </div>
          </div>
          <div className="flex flex-row items-center justify-end p-1.5 w-[96%] md:w-full">
            <Img
              className="h-[22px] w-[21px]"
              src="images/img_search.svg"
              alt="search"
            />
            <Text
              className="ml-[7px] mt-[5px] text-indigo-A700 text-xl"
              size="txtManropeSemiBold20IndigoA700"
            >
              settings
            </Text>
            <Img
              className="h-[21px] ml-[61px]"
              src="images/img_location.svg"
              alt="location"
            />
            <Button
              className="ml-4 mr-[9px] my-0.5 text-red-600_b2 text-xl"
              size="txtManropeSemiBold20Red600b2"
              onClick={() => navigate("/")}
            >
              exit
            </Button>
          </div>
        </div>
        <div className="absolute bottom-[2%] md:h-[1239px] sm:h-[820px] h-[840px] left-[2%] pt-[13px] md:px-5 px-[13px] w-[79%] md:w-full">
          <div className="bg-gray-200 h-[820px] m-auto rounded-[53px] w-[97%]"></div>
          <div className="absolute flex flex-col gap-[7px] h-max inset-[0] items-center justify-center m-auto w-[92%]">
            <div className="flex flex-row md:gap-10 items-center justify-between w-[99%] md:w-full">
              <div className="flex flex-col items-start justify-start">
                <Text
                  className="sm:text-[21px] md:text-[23px] text-[25px] text-indigo-A700"
                  size="txtManropeSemiBold25"
                >
                  Doctor
                </Text>
                <Text
                  className="ml-0.5 md:ml-[0] md:text-3xl sm:text-[28px] text-[32px] text-indigo-A700"
                  size="txtManropeBold32IndigoA700"
                >
                  Dr Joker
                </Text>
              </div>
              <Text
                className="leading-[100.00%] md:text-3xl sm:text-[28px] text-[32px] text-indigo-A700 text-right"
                size="txtManropeBold32IndigoA700"
              >
                Check Prescription
              </Text>
            </div>
            <div className="flex md:flex-col flex-row gap-[21px] items-center justify-between w-[98%] md:w-full">
              <div className="bg-white-A700 border-2 border-blue-A700 border-solid flex flex-col items-start justify-start md:mt-0 my-2 p-3 rounded-[21px]">
                <Text
                  className="md:ml-[0] ml-[15px] text-2xl md:text-[22px] text-black-900_87 sm:text-xl"
                  size="txtManropeSemiBold24Black90087"
                >
                  Prescription
                </Text>
                <Text
                  className="md:ml-[0] ml-[15px] mt-[7px] text-black-900 text-xl"
                  size="txtManropeSemiBold20"
                >
                  Будьте обережні
                </Text>
                <Text
                  className="mb-3 md:ml-[0] ml-[490px] mt-[421px] text-white-A700 text-xl"
                  size="txtManropeMedium20WhiteA700"
                >
                  Publish
                </Text>
              </div>
              <div className="bg-white-A700 border-2 border-blue-A700 border-solid flex flex-col items-start justify-start p-3.5 rounded-[21px] w-[33%] md:w-full">
                <Text
                  className="leading-[100.00%] text-2xl md:text-[22px] text-black-900_87 sm:text-xl w-[45%] sm:w-full"
                  size="txtManropeSemiBold24Black90087"
                >
                  Choose Prescription
                </Text>
                <Text
                  className="bg-gray-400 h-[50px] justify-center pb-[9px] pl-4 sm:pr-5 pr-[35px] pt-3 rounded-md text-black-900 text-xl w-[318px]"
                  size="txtManropeSemiBold20WhiteA700"
                >
                  18/12/2023
                </Text>
                <div className={"mt-4"}>
                  <Text
                    className="bg-indigo-A700 h-[50px] justify-center pb-[9px] pl-4 sm:pr-5 pr-[35px] pt-3 rounded-md text-white-A700 text-xl w-[318px]"
                    size="txtManropeSemiBold20WhiteA700"
                  >
                    12/12/2023
                  </Text>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrescriptionsOnePageRayanJokerSecond;
