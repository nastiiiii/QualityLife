import React from "react";

import { Img, Input, Text } from "components";

const AnalysisOnePage = () => {
  return (
    <>
      <div className="bg-white-A700 font-manrope h-[982px] mx-auto sm:px-5 px-[22px] relative w-full">
        <div className="absolute flex sm:flex-col flex-row md:gap-10 inset-x-[0] items-start justify-between max-w-[1461px] mx-auto p-[15px] md:px-5 top-[0] w-full">
          <div className="flex h-12 md:h-[67px] justify-end sm:mt-0 mt-[19px] relative w-[155px]">
            <Img
              className="absolute h-7 inset-y-[0] left-[0] my-auto object-cover w-[27px]"
              src="images/img_image15.png"
              alt="imageFifteen"
            />
            <Text
              className="ml-auto mt-auto text-3xl sm:text-[26px] md:text-[28px] text-blue-A700 w-[114px]"
              size="txtManropeBold30"
            >
              Medbay
            </Text>
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
                className="absolute leading-[100.00%] right-[0] sm:text-[21px] md:text-[23px] text-[25px] text-indigo-A700 top-[30%]"
                size="txtManropeBold25"
              >
                <>
                  Hi, <br />
                  Dr. Marcus
                </>
              </Text>
            </div>
            <div className="absolute bg-white-A700 h-[43px] left-[36%] rounded-[21px] top-[17%] w-[42px]"></div>
          </div>
        </div>
        <div className="absolute bottom-[0] flex flex-col items-start justify-start md:px-5 right-[2%] w-[18%]">
          <div className="bg-gray-200 flex flex-col items-center justify-start md:ml-[0] ml-[3px] p-[13px] rounded-[32px] w-[93%] md:w-full">
            <div className="bg-white-A700 border-2 border-blue-A700 border-solid h-[38px] mt-3 w-[97%]"></div>
            <Input
              name="groupEightySix"
              placeholder="Dr Marcus"
              className="font-semibold p-0 placeholder:text-white-A700 text-left text-xl w-full"
              wrapClassName="mt-7 w-full"
              shape="round"
              color="indigo_A700"
              size="md"
            ></Input>
            <Input
              name="groupEightyFive"
              placeholder="Dr. Rider"
              className="font-semibold p-0 placeholder:text-black-900 text-left text-xl w-full"
              wrapClassName="mt-[15px] w-full"
              shape="round"
              size="md"
            ></Input>
            <Input
              name="groupEightyFour"
              placeholder="Dr. Master"
              className="font-semibold p-0 placeholder:text-black-900 text-left text-xl w-full"
              wrapClassName="mb-[385px] mt-[15px] w-full"
              shape="round"
              size="md"
            ></Input>
          </div>
          <div className="flex flex-row items-center justify-start p-1.5 w-full">
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
        </div>
        <div className="absolute bottom-[1%] sm:h-[819px] h-[860px] md:h-[937px] left-[2%] p-[13px] md:px-5 w-[79%] md:w-full">
          <div className="h-[819px] md:h-[937px] m-auto w-[97%] md:w-full">
            <div className="h-[819px] md:h-[937px] m-auto w-full">
              <div className="bg-gray-200 h-[819px] m-auto rounded-[53px] w-full"></div>
              <div className="absolute bottom-[7%] flex md:flex-col flex-row md:gap-10 inset-x-[0] items-start justify-between mx-auto w-[94%]">
                <div className="flex flex-col items-start justify-start">
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
                    Dr. Marcus
                  </Text>
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-8 w-full">
                    <div className="bg-gray-400 h-[50px] rounded-md w-[14%]"></div>
                    <div className="bg-gray-400 h-[50px] rounded-md w-[19%]"></div>
                    <div className="bg-gray-400 h-[50px] rounded-md w-[32%]"></div>
                    <div className="bg-gray-400 h-[50px] rounded-md w-[28%]"></div>
                  </div>
                  <div className="bg-gray-400 h-[50px] ml-0.5 md:ml-[0] mt-[43px] rounded-md w-[34%]"></div>
                </div>
                <div className="bg-white-A700 border-2 border-blue-A700 border-solid flex flex-col gap-1.5 justify-center md:mt-0 mt-[123px] p-[9px] rounded-[21px]">
                  <Text
                    className="leading-[100.00%] mr-[125px] mt-[3px] text-2xl md:text-[22px] text-black-900_87 sm:text-xl w-[44%] sm:w-full"
                    size="txtManropeSemiBold24Black90087"
                  >
                    Choose Analysis
                  </Text>
                  <div className="flex flex-col items-center justify-start mb-[278px] w-[93%] md:w-full">
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
                  className="leading-[100.00%] md:mt-0 mt-1.5 md:text-3xl sm:text-[28px] text-[32px] text-indigo-A700 text-right"
                  size="txtManropeBold32IndigoA700"
                >
                  Check Analysis
                </Text>
              </div>
            </div>
            <div className="absolute bottom-[11%] flex flex-col gap-6 items-center justify-start left-[3%] w-[45%]">
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
          <div className="absolute bottom-[9%] flex flex-col inset-x-[0] justify-start mx-auto w-[91%]">
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
                <div className="h-24 md:h-[73px] mr-8 mt-[3px] relative w-[86%]">
                  <Text
                    className="absolute leading-[100.00%] left-[0] text-2xl md:text-[22px] text-black-900_87 sm:text-xl top-[0] w-[52%] sm:w-full"
                    size="txtManropeSemiBold24Black90087"
                  >
                    Choose Patches
                  </Text>
                  <Text
                    className="absolute bottom-[0] inset-x-[0] mx-auto text-2xl md:text-[22px] text-black-900 sm:text-xl w-max"
                    size="txtManropeSemiBold24"
                  >
                    1 - LeftUpperArm
                  </Text>
                </div>
                <Text
                  className="mb-[393px] md:ml-[0] ml-[5px] mr-[13px] mt-0.5 text-2xl md:text-[22px] text-gray-400_01 sm:text-xl"
                  size="txtManropeSemiBold24Gray40001"
                >
                  2 - RightUpperArm
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnalysisOnePage;
