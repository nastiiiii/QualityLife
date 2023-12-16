import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, List, Text } from "components";

const MainChatPageRayanJoker = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 font-manrope h-[982px] mx-auto p-3 relative w-full">
        <div className="md:h-[1004px] sm:h-[711px] h-[953px] m-auto max-w-[1461px] md:px-5 w-full">
          <div className="absolute bg-gray-200 bottom-[0] flex flex-col items-end justify-start left-[1%] p-2 rounded-[53px] w-[79%]">
            <div className="flex flex-col gap-[21px] items-start justify-start mb-[21px] mt-[13px] w-[96%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                <div className="flex md:flex-1 flex-col items-start justify-start w-[94%] md:w-full">
                  <Text
                    className="sm:text-[21px] md:text-[23px] text-[25px] text-indigo-A700"
                    size="txtManropeSemiBold25"
                  >
                    Doctor
                  </Text>
                  <div className="flex flex-row sm:gap-10 items-start justify-between mt-0.5 w-full">
                    <Text
                      className="mb-[19px] md:text-3xl sm:text-[28px] text-[32px] text-indigo-A700"
                      size="txtManropeBold32IndigoA700"
                    >
                      Dr Joker
                    </Text>
                    <Button
                      className="common-pointer cursor-pointer font-medium min-w-[157px] mt-5 text-center text-xl"
                      onClick={() => navigate("/main")}
                      shape="round"
                      color="indigo_A700"
                      size="xs"
                      variant="fill"
                    >
                      Comments
                    </Button>
                  </div>
                </div>
                <Img
                  className="h-[26px] md:mt-0 mt-[17px]"
                  src={process.env.PUBLIC_URL + "/images/img_settings.svg"}
                  alt="settings"
                />
                <Img
                  className="h-[26px] md:ml-[0] ml-[31px] md:mt-0 mt-[17px]"
                  src={process.env.PUBLIC_URL + "/images/img_arrowright.svg"}
                  alt="arrowright"
                />
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 gap-[90px] items-start justify-start w-[94%] md:w-full">
                <div className="flex flex-col gap-10 items-center justify-start w-2/5 md:w-full">
                  <div className="flex flex-col gap-12 items-center justify-start w-full">
                    <div
                      className="common-pointer bg-white-A700 flex flex-row items-start justify-between p-[13px] rounded-[47px] w-full"
                      onClick={() => navigate("/analysis")}
                    >
                      <Text
                        className="ml-4 mt-[60px] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                        size="txtManropeMedium40"
                      >
                        Analysis
                      </Text>
                      <Img
                        className="h-[71px] md:h-auto mb-3 mr-[27px] mt-[31px] object-cover rounded-lg"
                        src={process.env.PUBLIC_URL + "/images/img_rectangle69.png"}
                        alt="rectangleSixtyFour"
                      />
                    </div>
                    <div
                      className="common-pointer bg-white-A700 flex flex-row gap-[22px] items-end justify-start p-2 rounded-[47px] w-full"
                      onClick={() => navigate("/prescriptions")}
                    >
                      <Text
                        className="mb-0.5 ml-3.5 mt-[68px] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                        size="txtManropeMedium40"
                      >
                        Prescription
                      </Text>
                      <Img
                        className="h-[71px] md:h-auto mt-[55px] object-cover rounded-lg w-[26%]"
                        src={process.env.PUBLIC_URL + "/images/img_rectangle70.png"}
                        alt="rectangleSixtyFive"
                      />
                    </div>
                  </div>
                  <div
                    className="common-pointer bg-white-A700 flex flex-col items-end justify-end p-6 sm:px-5 rounded-[47px] w-full"
                    onClick={() => navigate("/createcheckup")}
                  >
                    <Text
                      className="leading-[100.00%] mt-[58px] text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-right w-1/2 sm:w-full"
                      size="txtManropeMedium30Black900"
                    >
                      Make checkup
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 border-2 border-blue-A700 border-solid flex flex-col md:gap-10 gap-[414px] justify-start mb-[25px] p-2 rounded-[21px] w-[52%] md:w-full">
                  <Text
                    className="ml-3 md:ml-[0] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtManropeSemiBold24Black90087"
                  >
                    Коментар Dr Joker для Rayan Gos
                  </Text>
                  <Button
                    className="cursor-none font-medium mb-1.5 min-w-[157px] md:ml-[0] ml-[323px] mr-[21px] text-center text-xl"
                    shape="round"
                    color="white_A700"
                    size="xs"
                    variant="fill"
                  >

                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[0] flex flex-row items-start justify-start right-[1%] w-[17%]">
            <Img
              className="h-[22px] mt-[3px] w-[21px]"
              src={process.env.PUBLIC_URL + "/images/img_search.svg"}
              alt="search"
            />
            <Text
              className="ml-[7px] mt-0.5 text-indigo-A700 text-xl"
              size="txtManropeSemiBold20IndigoA700"
            >
              settings
            </Text>
            <Img
              className="h-[21px] ml-[61px] mt-[3px]"
              src={process.env.PUBLIC_URL + "/images/img_location.svg"}
              alt="location"
            />
            <Button
              className="mb-0.5 ml-4 text-red-600_b2 text-xl"
              size="txtManropeSemiBold20Red600b2"
              onClick={() => navigate("/")}
            >
              exit
            </Button>
          </div>
          <div className="absolute flex md:flex-col flex-row md:gap-5 inset-x-[0] items-start justify-start mx-auto p-[15px] top-[0] w-full">
            <div className="flex h-12 justify-end md:mt-0 mt-[19px] relative w-[155px]">
              <Img
                className="absolute h-7 inset-y-[0] left-[0] my-auto object-cover w-[27px]"
                src={process.env.PUBLIC_URL + "/images/img_image15.png"}
                alt="imageFifteen"
              />

              <div className="absolute flex flex-row gap-2 md:h-auto h-full inset-[0] items-center justify-start m-auto w-[155px]">
                <Img
                  className="h-7 md:h-auto object-cover w-[27px]"
                  src={process.env.PUBLIC_URL + "/images/img_image15.png"}
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
            <List
              className="md:flex-1 sm:flex-col flex-row gap-[27px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 md:ml-[0] ml-[104px] md:mt-0 mt-[67px] w-3/5 md:w-full"
              orientation="horizontal"
            >

            </List>
            <div className="h-[139px] md:h-[255px] mb-20 ml-[170px] mt-9 relative w-[13%]">
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
                  Dr Cena
                </Text>
              </div>
            </div>
            <div className="bg-indigo-A700 flex flex-col items-start justify-end mt-[13px] p-[9px] rounded-md w-full">
              <div className="h-7 md:h-[31px] mt-[3px] relative w-[59%]">
                <Text
                  className="m-auto text-white-A700 text-xl"
                  size="txtManropeSemiBold20"
                >
                  Dr Joker
                </Text>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default MainChatPageRayanJoker;
