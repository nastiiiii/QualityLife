import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";

const MainOnePageRayanJoker = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 font-manrope h-[982px] mx-auto p-[5px] relative w-full">
        <div className="absolute md:h-[1415px] sm:h-[842px] h-[944px] inset-[0] justify-center m-auto max-w-[1461px] md:px-5 w-full">
          <div className="absolute bg-gray-200 bottom-[0] flex flex-col items-center justify-start left-[2%] p-[35px] sm:px-5 rounded-[53px] w-[79%]">
            <div className="flex flex-col items-start justify-start mb-[77px] mt-[34px] w-[96%] md:w-full">
              <Text
                className="sm:text-[21px] md:text-[23px] text-[25px] text-indigo-A700"
                size="txtManropeSemiBold25"
              >
                Doctor
              </Text>
              <div className="flex flex-row md:gap-10 items-start justify-between mt-[3px] w-full">
                <Text
                  className="mb-6 md:text-3xl sm:text-[28px] text-[32px] text-indigo-A700"
                  size="txtManropeBold32IndigoA700"
                >
                  Dr. Joker
                </Text>
                <Button
                  className="cursor-pointer font-medium min-w-[157px] mt-[25px] text-center text-xl"
                  shape="round"
                  color="white_A700"
                  size="xs"
                  variant="fill"
                >
                  Comments
                </Button>
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-2 w-full">
                <div className="flex md:flex-1 flex-col gap-12 items-center justify-start w-2/5 md:w-full">
                  <div
                    className="common-pointer bg-white-A700 flex flex-row items-start justify-between p-[13px] rounded-[47px] w-full"
                    onClick={() => navigate("/analysisone")}
                  >
                    <Text
                      className="ml-4 mt-[60px] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                      size="txtManropeMedium40"
                    >
                      Analysis
                    </Text>
                    <Img
                      className="h-[71px] md:h-auto mb-3 mr-[27px] mt-[31px] object-cover rounded-lg"
                      src="images/img_rectangle69.png"
                      alt="rectangleFortyFive"
                    />
                  </div>
                  <div
                    className="common-pointer bg-white-A700 flex flex-row gap-[22px] items-end justify-start p-2 rounded-[47px] w-full"
                    onClick={() => navigate("/prescriptionsone")}
                  >
                    <Text
                      className="mb-0.5 ml-3.5 mt-[68px] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                      size="txtManropeMedium40"
                    >
                      Prescription
                    </Text>
                    <Img
                      className="h-[71px] md:h-auto mt-[55px] object-cover rounded-lg w-[26%]"
                      src="images/img_rectangle70.png"
                      alt="rectangleFortySix"
                    />
                  </div>
                  <div className="bg-white-A700 flex flex-col items-start justify-start p-[22px] sm:px-5 rounded-[47px] w-full">
                    <div className="flex flex-col gap-4 justify-start mb-[18px] mt-1.5 w-[92%] md:w-full">
                      <Text
                        className="text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                        size="txtManropeExtraBold30"
                      >
                        You have checkup
                      </Text>
                      <div className="flex flex-row items-center justify-between ml-1.5 md:ml-[0] w-[98%] md:w-full">
                        <Text
                          className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-right"
                          size="txtManropeMedium30Black900"
                        >
                          18/12/2023
                        </Text>
                        <Text
                          className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-right"
                          size="txtManropeMedium30Black900"
                        >
                          
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 border-2 border-blue-A700 border-solid flex md:flex-1 flex-col items-start justify-start mb-5 md:mt-0 mt-[13px] p-[9px] rounded-[21px] w-[51%] md:w-full">
                  <div className="flex flex-col gap-[9px] items-start justify-start mb-[379px] md:ml-[0] ml-[11px] w-[90%] md:w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900_87 sm:text-xl"
                      size="txtManropeSemiBold24Black90087"
                    >
                      Patches
                    </Text>
                    <div className="flex flex-row items-start justify-between w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                        size="txtManropeSemiBold24"
                      >
                        1 - LeftUpperArm
                      </Text>
                      <div className="bg-green-800 h-5 mb-[11px] rounded-[10px] w-[21px]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex flex-row md:gap-10 inset-x-[0] items-start justify-between mx-auto p-[15px] top-[0] w-full">
            <div className="flex h-12 md:h-[67px] justify-end mt-[19px] relative w-[155px]">
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
            <div className="h-[139px] md:h-[255px] mb-20 mr-[3px] mt-9 relative w-[13%]">
              <div className="absolute bg-blue_gray-100 h-[139px] inset-[0] justify-center m-auto rounded-[47px] w-[98%]"></div>
              <Text
                className="absolute inset-0 flex items-center justify-center text-center sm:text-[21px] md:text-[23px] text-[25px] text-indigo-A700"
                size="txtManropeBold25"
              >
                <>
                  Hi, <br />
                  Rayan Gos
                </>
              </Text>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[6%] md:h-[615px] h-[641px] p-3 md:px-5 right-[1%] w-[19%]">
          <div className="bg-gray-200 h-[615px] m-auto rounded-[32px] w-[89%]"></div>
          <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[6%] w-[79%]">
            <div className="bg-white-A700 border-2 border-blue-A700 border-solid h-[35px] w-[98%]"></div>
            <div className="bg-gray-400 flex flex-col items-start justify-end mt-[13px] p-[9px] rounded-md w-full">
              <div className="h-7 md:h-[31px] mt-[3px] relative w-[59%]">
                <Text
                  className="m-auto text-black-900 text-xl"
                  size="txtManropeSemiBold20"
                >
                  Dr.Cena
                </Text>
              </div>
            </div>
            <div className="bg-indigo-A700 flex flex-col items-start justify-end mt-[13px] p-[9px] rounded-md w-full">
              <div className="h-7 md:h-[31px] mt-[3px] relative w-[59%]">
                <Text
                  className="m-auto text-white-A700 text-xl"
                  size="txtManropeSemiBold20"
                >
                  Dr.Joker
                </Text>
              </div>
            </div>

          </div>
        </div>
        <div className="absolute bottom-[1%] flex flex-row items-center justify-start p-1.5 md:px-5 right-[1%] w-[18%]">
          <Img
            className="h-[22px] ml-[5px] w-[21px]"
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
            className="ml-4 my-0.5 text-red-600_b2 text-xl"
            size="txtManropeSemiBold20Red600b2"
            onClick={() => navigate("/")}
          >
            exit
          </Button>
        </div>
      </div>
    </>
  );
};

export default MainOnePageRayanJoker;
