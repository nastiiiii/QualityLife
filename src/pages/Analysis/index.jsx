import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";
import Header from "components/Header";

const AnalysisPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-manrope items-center justify-start mx-auto sm:px-5 px-[22px] w-full">
        <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
        <div className="sm:h-[712px] h-[752px] md:h-[945px] max-w-[1467px] mx-auto md:px-5 relative w-full">
          <div className="absolute md:h-[672px] h-[705px] p-3.5 right-[0] top-[0] w-1/5">
            <div className="bg-gray-200 h-[672px] m-auto rounded-[32px] w-[89%]"></div>
            <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[5%] w-[79%]">
              <div className="bg-white-A700 border-2 border-blue-A700 border-solid flex flex-col items-end justify-start pt-[7px] px-[7px] w-[98%] md:w-full">
                <Img
                  className="h-[22px] mt-[5px]"
                  src="images/img_rewind.svg"
                  alt="rewind"
                />
              </div>
              <Input
                name="groupFortySeven"
                placeholder="David Ride"
                className="font-semibold p-0 placeholder:text-white-A700 text-left text-xl w-full"
                wrapClassName="mt-[25px] w-full"
                shape="round"
                color="indigo_A700"
              ></Input>
              <div className="bg-gray-400 flex flex-col items-start justify-end mt-[13px] p-[9px] rounded-md w-full">
                <div className="h-7 md:h-[31px] mt-[3px] relative w-[59%]">
                  <Text
                    className="m-auto text-black-900 text-xl"
                    size="txtManropeSemiBold20"
                  >
                    Marcus Ride
                  </Text>
                  <Text
                    className="absolute h-full inset-[0] justify-center m-auto text-black-900 text-xl w-max"
                    size="txtManropeSemiBold20"
                  >
                    Marcus Ride
                  </Text>
                </div>
              </div>
              <Input
                name="groupFortyFive"
                placeholder="Marcus Ride"
                className="font-semibold p-0 placeholder:text-black-900 text-left text-xl w-full"
                wrapClassName="mt-[13px] w-full"
                shape="round"
              ></Input>
              <Input
                name="groupFortyFour"
                placeholder="Marcus Ride"
                className="font-semibold p-0 placeholder:text-black-900 text-left text-xl w-full"
                wrapClassName="mt-[13px] w-full"
                shape="round"
              ></Input>
            </div>
          </div>
          <div className="absolute bottom-[0] flex flex-row items-center justify-start p-1.5 right-[0] w-[19%]">
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
            <Text
              className="ml-4 my-0.5 text-red-600_b2 text-xl"
              size="txtManropeSemiBold20Red600b2"
            >
              exit
            </Text>
          </div>
          <div className="absolute sm:h-[712px] h-[738px] md:h-[945px] inset-y-[0] left-[0] my-auto p-1.5 w-[81%] md:w-full">
            <div className="h-[712px] md:h-[945px] m-auto w-[97%] md:w-full">
              <div className="h-[712px] md:h-[945px] m-auto w-full">
                <div className="bg-gray-200 h-[712px] m-auto rounded-[53px] w-full"></div>
                <div className="absolute flex md:flex-col flex-row md:gap-10 h-max inset-[0] items-start justify-between m-auto w-[94%]">
                  <div className="flex flex-col items-start justify-start w-[43%] md:w-full">
                    <Text
                      className="sm:text-[21px] md:text-[23px] text-[25px] text-indigo-A700"
                      size="txtManropeSemiBold25"
                    >
                      Patient
                    </Text>
                    <Text
                      className="ml-0.5 md:ml-[0] md:text-3xl sm:text-[28px] text-[32px] text-indigo-A700"
                      size="txtManropeBold32IndigoA700"
                    >
                      David Ride
                    </Text>
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-8 w-full">
                      <div className="bg-gray-400 h-[50px] rounded-md w-[14%]"></div>
                      <div className="bg-gray-400 h-[50px] rounded-md w-[19%]"></div>
                      <div className="bg-gray-400 h-[50px] rounded-md w-[32%]"></div>
                      <div className="bg-gray-400 h-[50px] rounded-md w-[28%]"></div>
                    </div>
                    <div className="bg-gray-400 h-[50px] ml-0.5 md:ml-[0] mt-[43px] rounded-md w-[34%]"></div>
                  </div>
                  <div className="flex flex-col gap-[53px] items-end justify-start md:mt-0 mt-1.5 w-[48%] md:w-full">
                    <Text
                      className="leading-[100.00%] md:text-3xl sm:text-[28px] text-[32px] text-indigo-A700 text-right w-[34%] sm:w-full"
                      size="txtManropeBold32IndigoA700"
                    >
                      Check Analysis
                    </Text>
                    <div className="flex flex-col gap-[29px] items-start justify-start w-full">
                      <div className="bg-white-A700 border-2 border-blue-A700 border-solid flex flex-col gap-4 justify-start p-[9px] rounded-[21px] w-[49%] md:w-full">
                        <Text
                          className="leading-[100.00%] text-2xl md:text-[22px] text-black-900_87 sm:text-xl w-[44%] sm:w-full"
                          size="txtManropeSemiBold24Black90087"
                        >
                          Choose Analysis
                        </Text>
                        <div className="flex flex-col items-center justify-start mb-[193px] mx-auto w-[93%] md:w-full">
                          <Input
                            name="date"
                            placeholder="18/12/2023"
                            className="font-semibold p-0 placeholder:text-white-A700 text-left text-xl w-full"
                            wrapClassName="w-full"
                            shape="round"
                            color="indigo_A700"
                          ></Input>
                          <Input
                            name="date_One"
                            placeholder="14/12/2023"
                            className="font-semibold p-0 placeholder:text-black-900 text-left text-xl w-full"
                            wrapClassName="mt-3.5 w-full"
                            shape="round"
                          ></Input>
                          <Input
                            name="date_Two"
                            placeholder="12/12/2023"
                            className="font-semibold p-0 placeholder:text-black-900 text-left text-xl w-full"
                            wrapClassName="mt-[18px] w-full"
                            shape="round"
                          ></Input>
                        </div>
                      </div>
                      <Text
                        className="common-pointer bg-blue-A700 h-[54px] justify-center pb-0.5 pt-2.5 sm:px-5 px-[35px] rounded-[24px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700 w-[512px]"
                        size="txtManropeMedium30"
                        onClick={() => navigate("/createanalysis")}
                      >
                        Create Analysis
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[6%] flex flex-col gap-6 items-center justify-start left-[4%] w-[45%]">
                <div className="bg-gray-400 h-[50px] rounded-md w-[32%]"></div>
                <div className="bg-white-A700 flex flex-col items-center justify-start p-40 md:px-10 sm:px-5 rounded-md w-full">
                  <Text
                    className="mb-[9px] text-black-900 text-xl"
                    size="txtManropeSemiBold20"
                  >
                    image
                  </Text>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[13%] flex flex-col inset-x-[0] justify-start mx-auto w-[91%]">
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-[41%] md:w-full">
                <Text
                  className="sm:mt-0 mt-0.5 text-black-900 text-xl"
                  size="txtManropeSemiBold20"
                >
                  r g b
                </Text>
                <Text
                  className="mb-0.5 sm:ml-[0] ml-[39px] text-black-900 text-xl"
                  size="txtManropeSemiBold20"
                >
                  Duration
                </Text>
                <Text
                  className="mb-0.5 ml-2.5 sm:ml-[0] text-black-900 text-xl"
                  size="txtManropeSemiBold20"
                >
                  Blood Pressure
                </Text>
                <Text
                  className="ml-11 sm:ml-[0] sm:mt-0 mt-0.5 text-black-900 text-xl"
                  size="txtManropeSemiBold20"
                >
                  Oxygen
                </Text>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[23px] w-[98%] md:w-full">
                <Text
                  className="md:mt-0 mt-[62px] text-black-900 text-xl"
                  size="txtManropeSemiBold20"
                >
                  Leukocytes
                </Text>
                <Text
                  className="ml-11 md:ml-[0] md:mt-0 mt-[62px] text-black-900 text-xl"
                  size="txtManropeSemiBold20"
                >
                  Sugar in Blood
                </Text>
                <div className="flex flex-col items-center justify-start md:ml-[0] ml-[26px] md:mt-0 mt-[59px] w-[12%] md:w-full">
                  <Text
                    className="text-black-900 text-xl"
                    size="txtManropeSemiBold20"
                  >
                    Pulse
                  </Text>
                  <div className="bg-gray-400 h-[50px] rounded-md w-full"></div>
                </div>
                <div className="bg-white-A700 border-2 border-blue-A700 border-solid flex flex-col justify-center md:ml-[0] ml-[360px] p-2.5 rounded-[21px] w-[24%] md:w-full">
                  <Text
                    className="leading-[100.00%] mr-32 text-2xl md:text-[22px] text-black-900_87 sm:text-xl w-[45%] sm:w-full"
                    size="txtManropeSemiBold24Black90087"
                  >
                    Choose Patches
                  </Text>
                  <div className="flex flex-col items-start justify-start mb-[315px] md:ml-[0] ml-[5px] mr-[13px]">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                      size="txtManropeSemiBold24"
                    >
                      1 - LeftUpperArm
                    </Text>
                    <Text
                      className="mt-0.5 text-2xl md:text-[22px] text-gray-400_01 sm:text-xl"
                      size="txtManropeSemiBold24Gray40001"
                    >
                      2 - RightUpperArm
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnalysisPage;