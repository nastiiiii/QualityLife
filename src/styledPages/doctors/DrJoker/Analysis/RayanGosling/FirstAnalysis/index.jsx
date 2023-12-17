import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";
import Header from "components/Header";

const AnalysisPageRayanDrJokerOne = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-manrope items-center justify-start mx-auto sm:px-5 px-[22px] w-full">
        <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" doctor_name="Dr. Joker" redirect="/main/joker/rayan"/>
        <div className="sm:h-[712px] h-[752px] md:h-[945px] max-w-[1467px] mx-auto md:px-5 relative w-full">
          <div className="absolute md:h-[672px] h-[705px] p-3.5 right-[0] top-[0] w-1/5">
            <div className="bg-gray-200 h-[672px] m-auto rounded-[32px] w-[89%]"></div>
            <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[5%] w-[79%]">
              <input className="bg-white-A700 border-2 border-blue-A700 border-solid flex flex-col items-end justify-end p-[5px] w-[98%] md:w-full"/>
              <div className="bg-gray-400 flex flex-col items-start justify-end mt-[13px] p-[9px] rounded-md w-full">
                <div className="h-7 md:h-[31px] mt-[3px] relative w-[59%]" onClick={() => navigate("/analysis/joker/john")}>
                  <Text
                    className="m-auto text-black-900 text-xl"
                    size="txtManropeSemiBold20"
                  >
                    John Wick
                  </Text>
                </div>
              </div>
              <div className="bg-indigo-A700 flex flex-col items-start justify-end mt-[13px] p-[9px] rounded-md w-full">
                <div className="h-7 md:h-[31px] mt-[3px] relative w-[59%]" onClick={() => navigate("/analysis/joker/rayan/first")}>
                  <Text
                    className="m-auto text-white-A700 text-xl cursor-pointer"
                    size="txtManropeSemiBold20"
                  >
                    Rayan Gos
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[0] flex flex-row items-center justify-start p-1.5 right-[0] w-[19%]">
            <Img
              className="h-[22px] ml-[5px] w-[21px]"
              src={process.env.PUBLIC_URL + "/images/img_search.svg"}
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
              src={process.env.PUBLIC_URL + "/images/img_location.svg"}
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
          <div className="absolute sm:h-[712px] h-[738px] md:h-[945px] inset-y-[0] left-[0] my-auto p-1.5 w-[81%] md:w-full">
            <div className="h-[712px] md:h-[945px] m-auto w-[97%] md:w-full">
              <div className="h-[712px] md:h-[945px] m-auto w-full">
                <div className="bg-gray-200 h-[712px] m-auto rounded-[53px] w-full"></div>
                <div className="absolute flex md:flex-col flex-row md:gap-10 h-[650px] inset-[0] items-start justify-between m-auto w-[94%]">
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
                      Rayan Gos
                    </Text>
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-8 w-full">
                      <div className="bg-red-A700 h-[50px] rounded-md w-[14%] mt-3"></div>
                      <div className="bg-gray-400 h-[50px] rounded-md w-[19%] mt-3 flex justify-center items-center">80</div>
                      <div className="bg-gray-400 h-[50px] rounded-md w-[32%] mt-3 flex justify-center items-center">100</div>
                      <div className="bg-gray-400 h-[50px] rounded-md w-[28%] mt-3 flex justify-center items-center">99</div>
                    </div>
                    <div className="bg-gray-400 h-[50px] ml-0.5 md:ml-[0] mt-[55px] rounded-md w-[34%] flex justify-center items-center">100</div>
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
                          <div className={"mt-3 cursor-pointer cur"}>
                            <Input
                              name="date"
                              placeholder="12/12/2023"
                              className="font-semibold p-0 placeholder:text-black-900 text-left text-xl w-full cursor-pointer"
                              wrapClassName="w-full"
                              shape="round"
                              color="gray_400"
                            ></Input>
                          </div>
                          </div>

                      </div>

                      <div className={"mt-20"}>
                        <Text
                          className="common-pointer bg-blue-A700 h-[54px] flex justify-center items-center pb-0.5 pt-2.5 sm:px-5 px-[35px] rounded-[24px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700 w-[512px]"
                          size="txtManropeMedium30"
                          onClick={() => navigate("/create/analysis/joker/rayan")}
                        >
                          Create Analysis
                        </Text>
                      </div>


                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[6%] flex flex-col gap-6 items-center justify-start left-[4%] w-[45%]">
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
            <div className="absolute bottom-[21%] flex flex-col inset-x-[0] justify-start mx-auto w-[91%]">
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-[50%] md:w-full mt-40">
                <Text
                  className="sm:mt-0 mt-0.5 text-black-900 text-l"
                  size="txtManropeSemiBold20"
                >
                  r g b
                </Text>
                <Text
                  className="mb-0.5 sm:ml-[0] ml-[39px] text-black-900 text-l"
                  size="txtManropeSemiBold20"
                >
                  Duration
                </Text>
                <Text
                  className="mb-0.5 ml-10 sm:ml-[10] text-black-900 text-l"
                  size="txtManropeSemiBold20"
                >
                  Blood Pressure
                </Text>
                <Text
                  className="ml-11 sm:ml-[0] sm:mt-0 mt-0.5 text-black-900 text-l"
                  size="txtManropeSemiBold20"
                >
                  Oxygen
                </Text>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[23px] w-[98%] md:w-full">
                <Text
                  className="md:mt-0 mt-[80px] text-black-900 text-l"
                  size="txtManropeSemiBold20"
                >
                  Leukocytes
                </Text>
                <Text
                  className="ml-11 md:ml-[0] md:mt-0 mt-[62px] text-black-900 text-l "
                  size="txtManropeSemiBold20"
                >
                  Sugar in Blood
                  <div className="bg-gray-400 h-[50px] rounded-md w-[150%] flex justify-center items-center">900</div>
                </Text>
                <div className="flex flex-col items-center justify-start md:ml-[0] ml-[26px] md:mt-0 mt-[84px] w-[12%] md:w-full">
                  <Text
                    className="text-black-900 text-l"
                    size="txtManropeSemiBold20"
                  >
                    Pulse
                  </Text>
                  <div className="bg-gray-400 h-[50px] rounded-md w-full ml-20 flex justify-center items-center">90</div>

                </div>
                <div className="bg-white-A700 border-2 border-blue-A700 border-solid flex flex-col justify-center md:ml-[0] ml-[390px] p-2.5 rounded-[21px] w-[24%] md:w-full ">
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

export default AnalysisPageRayanDrJokerOne;
