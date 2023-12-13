import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";
import Header from "components/Header";

const CreateCheckUpPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-manrope items-center justify-start mx-auto sm:px-5 px-[25px] w-full">
        <div className="flex flex-col gap-[23px] items-center justify-start max-w-[1461px] mx-auto md:px-5 w-full">
          <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full" />
          <div className="flex md:flex-col flex-row gap-[13px] items-center justify-between w-[99%] md:w-full">
            <div className="bg-gray-200 flex flex-col items-center justify-end mb-[17px] p-[17px] rounded-[53px] w-4/5 md:w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-4 w-[97%] md:w-full">
                <div className="flex flex-col items-start justify-start w-[43%] md:w-full">
                  <Text
                    className="sm:text-[21px] md:text-[23px] text-[25px] text-indigo-A700"
                    size="txtManropeSemiBold25"
                  >
                    Patient
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[3px] md:text-3xl sm:text-[28px] text-[32px] text-indigo-A700"
                    size="txtManropeBold32IndigoA700"
                  >
                    David Ride
                  </Text>
                  <div className="flex flex-row gap-[18px] items-center justify-start mt-[30px] w-[77%] md:w-full">
                    <Text
                      className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                      size="txtManropeSemiBold25Black900"
                    >
                      You want to invite
                    </Text>
                    <Text
                      className="text-2xl md:text-[22px] text-indigo-A700 sm:text-xl"
                      size="txtManropeSemiBold24IndigoA700"
                    >
                      David Ride
                    </Text>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[3px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                    size="txtManropeSemiBold25Black900"
                  >
                    in dates{" "}
                  </Text>
                  <Text
                    className="bg-white-A700 border-2 border-blue-A700 border-solid h-[50px] justify-center md:ml-[0] ml-[3px] mt-2 pl-5 sm:pr-5 pr-[35px] py-2 rounded-[21px] text-2xl md:text-[22px] text-black-900_87 sm:text-xl w-[450px]"
                    size="txtManropeSemiBold24Black90087"
                  >
                    dd/mm/yyyy
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[7px] mt-[11px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                    size="txtManropeSemiBold25Black900"
                  >
                    at
                  </Text>
                  <Text
                    className="bg-white-A700 border-2 border-blue-A700 border-solid h-[50px] justify-center md:ml-[0] ml-[3px] mt-[11px] pb-2.5 pl-5 sm:pr-5 pr-[35px] pt-1.5 rounded-[21px] text-2xl md:text-[22px] text-black-900_87 sm:text-xl w-[450px]"
                    size="txtManropeSemiBold24Black90087"
                  >
                    hh/mm
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[3px] mt-[11px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                    size="txtManropeSemiBold25Black900"
                  >
                    Remind him in
                  </Text>
                  <div className="flex flex-row gap-[15px] items-end justify-start md:ml-[0] ml-[7px] mt-2 w-[65%] md:w-full">
                    <Img
                      className="h-[50px] rounded-[21px]"
                      src="images/img_group31.svg"
                      alt="group427318878"
                    />
                    <Text
                      className="mb-[3px] mt-[11px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                      size="txtManropeSemiBold25Black900"
                    >
                      days
                    </Text>
                  </div>
                  <div className="border border-black-900_4c border-solid flex sm:flex-col flex-row gap-[18px] items-center justify-center md:ml-[0] ml-[23px] mt-16 p-1.5 w-[88%] md:w-full">
                    <Img
                      className="h-[26px] sm:ml-[0] ml-[95px]"
                      src="images/img_vector.svg"
                      alt="vector"
                    />
                    <Text
                      className="mr-[59px] sm:mt-0 mt-[7px] text-black-900 text-xl"
                      size="txtManropeMedium20"
                    >
                      drop signature here
                    </Text>
                  </div>
                  <Text
                    className="common-pointer bg-blue-A700 h-[54px] justify-center md:ml-[0] ml-[3px] mt-8 pb-0.5 pt-2.5 sm:px-5 px-[35px] rounded-[24px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700 w-[438px]"
                    size="txtManropeMedium30"
                    onClick={() => navigate(-1)}
                  >
                    Approve
                  </Text>
                </div>
                <div className="flex flex-col gap-[29px] justify-start md:mt-0 mt-1.5 w-[26%] md:w-full">
                  <Text
                    className="leading-[100.00%] md:ml-[0] ml-[105px] md:text-3xl sm:text-[28px] text-[32px] text-indigo-A700 text-right w-[62%] sm:w-full"
                    size="txtManropeBold32IndigoA700"
                  >
                    Create CheckUp
                  </Text>
                  <div className="bg-white-A700 border-2 border-blue-A700 border-solid flex flex-col justify-center mr-[29px] p-[9px] rounded-[21px] w-[90%] md:w-full">
                    <Text
                      className="leading-[100.00%] mr-[125px] mt-[3px] text-2xl md:text-[22px] text-black-900_87 sm:text-xl w-[44%] sm:w-full"
                      size="txtManropeSemiBold24Black90087"
                    >
                      Busy Dates
                    </Text>
                    <div className="flex flex-col items-center justify-start mb-[298px] mt-[3px] w-[93%] md:w-full">
                      <Input
                        name="date"
                        placeholder="18/12/2023"
                        className="font-semibold p-0 placeholder:text-black-900 text-left text-xl w-full"
                        wrapClassName="w-full"
                        shape="round"
                      ></Input>
                      <Text
                        className="bg-gray-400 h-[50px] justify-center mt-3.5 pb-[9px] pl-[15px] sm:pr-5 pr-[35px] pt-3 rounded-md text-black-900 text-xl w-[212px]"
                        size="txtManropeSemiBold20"
                      >
                        14/12/2023
                      </Text>
                      <Text
                        className="bg-gray-400 h-[50px] justify-center mt-[18px] pb-[9px] pl-[15px] sm:pr-5 pr-[35px] pt-3 rounded-md text-black-900 text-xl w-[212px]"
                        size="txtManropeSemiBold20"
                      >
                        12/12/2023
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[21px] items-end justify-start w-1/5 md:w-full">
              <div className="md:h-[646px] h-[660px] pt-3.5 px-3.5 relative w-full">
                <div className="bg-gray-200 h-[646px] m-auto rounded-[32px] w-[89%]"></div>
                <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[5%] w-[79%]">
                  <div className="bg-white-A700 border-2 border-blue-A700 border-solid flex flex-col items-end justify-end p-[5px] w-[98%] md:w-full">
                    <Img
                      className="h-5 mt-1 w-5"
                      src="images/img_rewind.svg"
                      alt="rewind"
                    />
                  </div>
                  <Input
                    name="groupSixtyTwo"
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
                  <Text
                    className="bg-gray-400 h-[50px] justify-center mt-[13px] pb-[9px] pl-[9px] sm:pr-5 pr-[35px] pt-3 rounded-md text-black-900 text-xl w-[219px]"
                    size="txtManropeSemiBold20"
                  >
                    Marcus Ride
                  </Text>
                  <Text
                    className="bg-gray-400 h-[50px] justify-center mt-[13px] pb-[9px] pl-[9px] sm:pr-5 pr-[35px] pt-3 rounded-md text-black-900 text-xl w-[219px]"
                    size="txtManropeSemiBold20"
                  >
                    Marcus Ride
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
                <Text
                  className="ml-4 mr-[9px] my-0.5 text-red-600_b2 text-xl"
                  size="txtManropeSemiBold20Red600b2"
                >
                  exit
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateCheckUpPage;
