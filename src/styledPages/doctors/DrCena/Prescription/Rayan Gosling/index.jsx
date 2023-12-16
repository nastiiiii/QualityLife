import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, List, Text } from "components";

const PrescriptionsPageCenaRayan = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 font-manrope h-[982px] mx-auto px-[18px] relative w-full">
        <div className="absolute flex md:flex-col flex-row md:gap-5 inset-x-[0] items-start justify-start max-w-[1461px] mx-auto p-[15px] md:px-5 top-[0] w-full">
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
            <div className="bg-gray-200 flex flex-col gap-3 h-[133px] md:h-auto items-start justify-start px-4 py-3 rounded-[24px] shadow-bs w-[265px]">
              <div className="flex flex-row gap-3 items-center justify-start w-auto">
                <div className="bg-indigo-50 flex flex-col h-16 items-center justify-start p-3 rounded-[50%] w-16">
                  <Img
                    className="h-10 md:h-auto object-cover w-[93%]"
                    src={process.env.PUBLIC_URL + "/images/img_calendarwithc.png"}
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
                      src={process.env.PUBLIC_URL + "/images/img_arrowleft.svg"}
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
                    src={process.env.PUBLIC_URL + "/images/img_group1387.png"}
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
                      src={process.env.PUBLIC_URL + "/images/img_arrowleft.svg"}
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
                    src={process.env.PUBLIC_URL + "/images/img_3dsyringe1.png"}
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
                      src={process.env.PUBLIC_URL + "/images/img_arrowup.svg"}
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
          <div className="h-[164px] md:h-[178px] mb-[15px] md:ml-[0] ml-[136px] mr-[18px] md:mt-0 mt-[51px] relative w-[13%] md:w-full">
            <div className="md:h-[163px] h-[164px] m-auto w-full">
              <div className="absolute bg-blue_gray-100 flex flex-col h-full inset-[0] items-start justify-center m-auto p-5 rounded-[47px]">
                <Text
                  className="common-pointer mt-[95px] text-black-900 text-xl"
                  size="txtManropeRegular20"
                  onClick={() => navigate("/main/cena/rayan")}
                >
                  <>&lt;- Go Back</>
                </Text>
              </div>
              <Text
                className="absolute leading-[100.00%] right-[40px] sm:text-[21px] md:text-[23px] text-[25px] text-indigo-A700 top-[30%]"
                size="txtManropeBold25"
              >
                <>
                  Hi, <br />
                  Dr. Cena
                </>
              </Text>
            </div>
            <div className="absolute bg-white-A700 h-[43px] left-[36%] rounded-[21px] top-[17%] w-[42px]"></div>
          </div>
        </div>
        <div className="absolute bottom-[0] flex flex-col items-end justify-start md:px-5 right-[2%] w-[19%]">
          <div className="md:h-[674px] h-[705px] p-3.5 relative w-full">
            <div className="bg-gray-200 h-[674px] m-auto rounded-[32px] w-[89%]"></div>
            <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[5%] w-[79%]">
              <input className="bg-white-A700 border-2 border-blue-A700 border-solid flex flex-col items-end justify-end p-[5px] w-[98%] md:w-full"/>
              <div className="bg-indigo-A700 flex flex-col items-start justify-end mt-[13px] p-[9px] rounded-md w-full">
                <div className="h-7 md:h-[31px] mt-[3px] relative w-[59%]">
                  <Text
                    className="m-auto text-white-A700 text-xl"
                    size="txtManropeSemiBold20"
                  >
                    Rayan Gos
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-end p-1.5 w-[96%] md:w-full">
            <Img
              className="h-[22px] w-[21px]"
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
              className="ml-4 mr-[9px] my-0.5 text-red-600_b2 text-xl"
              size="txtManropeSemiBold20Red600b2"
              onClick={() => navigate("/")}
            >
              exit
            </Button>
          </div>
        </div>
        <div className="absolute bottom-[2%] md:h-[1280px] sm:h-[712px] h-[738px] left-[2%] p-1.5 md:px-5 w-[79%] md:w-full">
          <div className="bg-gray-200 h-[712px] m-auto rounded-[53px] w-[97%]"></div>
          <div className="absolute flex md:flex-col flex-row gap-[21px] h-max inset-[0] items-center justify-center m-auto w-[92%]">
            <div className="flex flex-col gap-[17px] justify-start mb-1 w-[64%] md:w-full">
              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[17px]">
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
              </div>
              <div className="bg-white-A700 border-2 border-blue-A700 border-solid flex flex-col items-start justify-start p-3 rounded-[21px] w-full">
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
                  Загляніть до нас щоб ваш опік не луснув
                </Text>
                <Text
                  className="mb-3 md:ml-[0] ml-[490px] mt-[421px] text-white-A700 text-xl"
                  size="txtManropeMedium20WhiteA700"
                >
                  Publish
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-4 justify-start w-[35%] md:w-full">
              <Text
                className="leading-[100.00%] md:ml-[0] ml-[174px] md:text-3xl sm:text-[28px] text-[32px] text-indigo-A700 text-right w-[54%] sm:w-full"
                size="txtManropeBold32IndigoA700"
              >
                Check Prescription
              </Text>
              <div className="flex flex-col md:gap-10 gap-[76px] items-start justify-start mr-[27px] w-[93%] md:w-full">
                <div className="bg-white-A700 border-2 border-blue-A700 border-solid flex flex-col items-start justify-start p-2.5 rounded-[21px] w-full">
                  <Text
                    className="leading-[100.00%] md:ml-[0] ml-[3px] text-2xl md:text-[22px] text-black-900_87 sm:text-xl w-[44%] sm:w-full"
                    size="txtManropeSemiBold24Black90087"
                  >
                    Choose Prescription
                  </Text>
                  <Input
                    name="date"
                    placeholder="15/12/2023"
                    className="font-semibold p-0 placeholder:text-white-A700 text-left text-xl w-full"
                    wrapClassName="md:ml-[0] ml-[3px] mt-4 w-[97%]"
                    shape="round"
                    color="indigo_A700"
                  ></Input>

                </div>
                <Text
                  className="common-pointer bg-blue-A700 h-[54px] justify-center pb-0.5 pt-2.5 sm:px-5 px-[21px] rounded-[24px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700 w-[318px]"
                  size="txtManropeMedium30"
                  onClick={() => navigate("/create/prescription/cena/rayan")}
                >
                  Create Prescription
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrescriptionsPageCenaRayan;
