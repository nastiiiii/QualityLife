import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, List, Text } from "components";

const MainChatPage = () => {
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
                    Patient
                  </Text>
                  <div className="flex flex-row sm:gap-10 items-start justify-between mt-0.5 w-full">
                    <Text
                      className="mb-[19px] md:text-3xl sm:text-[28px] text-[32px] text-indigo-A700"
                      size="txtManropeBold32IndigoA700"
                    >
                      David Ride
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
                  src="images/img_settings.svg"
                  alt="settings"
                />
                <Img
                  className="h-[26px] md:ml-[0] ml-[31px] md:mt-0 mt-[17px]"
                  src="images/img_arrowright.svg"
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
                        src="images/img_rectangle69.png"
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
                        src="images/img_rectangle70.png"
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
                    className="ml-3 md:ml-[0] text-2xl md:text-[22px] text-black-900_87 sm:text-xl"
                    size="txtManropeSemiBold24Black90087"
                  >
                    Comments
                  </Text>
                  <Button
                    className="cursor-pointer font-medium mb-1.5 min-w-[157px] md:ml-[0] ml-[323px] mr-[21px] text-center text-xl"
                    shape="round"
                    color="indigo_A700"
                    size="xs"
                    variant="fill"
                  >
                    Publish
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[0] flex flex-row items-start justify-start right-[1%] w-[17%]">
            <Img
              className="h-[22px] mt-[3px] w-[21px]"
              src="images/img_search.svg"
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
              src="images/img_location.svg"
              alt="location"
            />
            <Text
              className="mb-0.5 ml-4 text-red-600_b2 text-xl"
              size="txtManropeSemiBold20Red600b2"
            >
              exit
            </Text>
          </div>
          <div className="absolute flex md:flex-col flex-row md:gap-5 inset-x-[0] items-start justify-start mx-auto p-[15px] top-[0] w-full">
            <div className="flex h-12 justify-end md:mt-0 mt-[19px] relative w-[155px]">
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
            <List
              className="md:flex-1 sm:flex-col flex-row gap-[27px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 md:ml-[0] ml-[104px] md:mt-0 mt-[67px] w-3/5 md:w-full"
              orientation="horizontal"
            >
              <div className="bg-gray-200 flex flex-col gap-3 h-[133px] md:h-auto items-start justify-start px-4 py-3 rounded-[24px] shadow-bs w-[265px]">
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
                        4.8%
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
              <div className="bg-gray-200 flex flex-col gap-3 h-[133px] md:h-auto items-start justify-start p-3 rounded-[24px] shadow-bs w-[264px]">
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
                        alt="arrowleft"
                      />
                      <Text
                        className="text-green-A700 text-sm w-auto"
                        size="txtManropeMedium14"
                      >
                        40%
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
              <div className="bg-gray-200 flex flex-col gap-3 h-[133px] md:h-auto items-start justify-start p-3 rounded-[24px] shadow-bs w-[265px]">
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
                        25%
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
            </List>
            <div className="h-[212px] md:h-[217px] mb-[7px] md:ml-[0] ml-[136px] md:mt-0 mt-9 relative w-[13%] md:w-full">
              <div className="md:h-[210px] h-[212px] m-auto w-full">
                <div className="absolute bg-blue_gray-100 flex flex-col gap-[7px] h-full inset-[0] items-start justify-center m-auto p-[19px] rounded-[47px]">
                  <Text
                    className="mt-24 text-black-900 text-xl"
                    size="txtManropeRegular20"
                  >
                    <>Patients -&gt;</>
                  </Text>
                  <Text
                    className="mb-[13px] text-black-900 text-xl"
                    size="txtManropeRegular20"
                  >
                    <>Add patient -&gt;</>
                  </Text>
                </div>
                <Text
                  className="absolute leading-[100.00%] right-[0] sm:text-[21px] md:text-[23px] text-[25px] text-indigo-A700 top-[24%]"
                  size="txtManropeBold25"
                >
                  <>
                    Hi, <br />
                    Dr. Marcus
                  </>
                </Text>
              </div>
              <div className="absolute bg-white-A700 h-[43px] left-[36%] rounded-[21px] top-[13%] w-[42px]"></div>
            </div>
          </div>
        </div>
        <div className="absolute bg-gray-200 bottom-[7%] flex flex-col items-center justify-start p-[13px] md:px-5 right-[1%] rounded-[32px] w-[17%]">
          <div className="bg-white-A700 border-2 border-blue-A700 border-solid flex flex-col items-end justify-end mt-[9px] p-[7px] w-[97%] md:w-full">
            <Img className="h-5 w-5" src="images/img_rewind.svg" alt="rewind" />
          </div>
          <Input
            name="groupFourteen"
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
            name="groupTwelve"
            placeholder="Marcus Ride"
            className="font-semibold p-0 placeholder:text-black-900 text-left text-xl w-full"
            wrapClassName="mt-[13px] w-full"
            shape="round"
          ></Input>
          <Input
            name="groupEleven"
            placeholder="Marcus Ride"
            className="font-semibold p-0 placeholder:text-black-900 text-left text-xl w-full"
            wrapClassName="mb-[281px] mt-[13px] w-full"
            shape="round"
          ></Input>
        </div>
      </div>
    </>
  );
};

export default MainChatPage;
