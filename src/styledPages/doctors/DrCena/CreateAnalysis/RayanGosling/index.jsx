import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";
import Header from "components/Header";

const CreateAnalysisPageCenaRayan = () => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-manrope items-center justify-start mx-auto sm:px-5 px-[25px] w-full">
        <div className="flex flex-col gap-[23px] items-center justify-start max-w-[1461px] mx-auto md:px-5 w-full">
          <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full" />
          <div className="flex md:flex-col flex-row gap-[13px] items-center justify-between w-[99%] md:w-full">
            <div className="bg-gray-200 flex flex-col items-center justify-end mb-[17px] p-3.5 rounded-[53px] w-4/5 md:w-full">
              <div className="flex md:flex-col flex-row gap-[29px] items-center justify-start mt-[19px] w-[97%] md:w-full">
                <div className="flex flex-col gap-5 justify-start w-[49%] md:w-full">
                  <div className="flex flex-col items-start justify-start ml-1.5 md:ml-[0]">
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
                  <div className="bg-white-A700 border-2 border-blue-A700 border-solid flex flex-col items-start justify-start p-[9px] rounded-[21px] w-full">
                    <div className="flex flex-col items-start justify-start mb-[404px] md:ml-[0] ml-[11px] w-[87%] md:w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-black-900_87 sm:text-xl"
                        size="txtManropeSemiBold24Black90087"
                      >
                        Choose Patches
                      </Text>
                      <div className="flex flex-row items-start justify-between mt-[15px] w-full">
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
                <div className="flex flex-col gap-[57px] justify-start md:mt-0 mt-1.5 w-1/2 md:w-full">
                  <Text
                    className="leading-[100.00%] md:ml-[0] ml-[358px] md:text-3xl sm:text-[28px] text-[32px] text-indigo-A700 text-right w-[33%] sm:w-full"
                    size="txtManropeBold32IndigoA700"
                  >
                    Create Analysis
                  </Text>
                  <div className="flex flex-col items-start justify-start mr-[7px] w-[99%] md:w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                        size="txtManropeSemiBold25Black900"
                      >
                        Patch
                      </Text>
                      <Text
                        className="sm:mt-0 mt-[3px] text-2xl md:text-[22px] text-indigo-A700 sm:text-xl"
                        size="txtManropeSemiBold24IndigoA700"
                      >
                        1 - LeftUpperArm
                      </Text>
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                        size="txtManropeSemiBold25Black900"
                      >
                        were chosoosen
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2.5 items-center justify-start md:ml-[0] ml-[3px] mt-[9px] w-[32%] md:w-full">
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                        size="txtManropeSemiBold25Black900"
                      >
                        for
                      </Text>
                      <Text
                        className="text-2xl md:text-[22px] text-indigo-A700 sm:text-xl"
                        size="txtManropeSemiBold24IndigoA700"
                      >
                        Rayan Gos
                      </Text>
                    </div>
                    <Text
                      className="md:ml-[0] ml-[3px] mt-[11px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                      size="txtManropeSemiBold25Black900"
                    >
                      starting from
                    </Text>
                    <Input
                      name="group427318876"
                      placeholder="dd/mm/yyyy"
                      className="font-semibold md:text-[22px] p-0 text-black-900 placeholder:text-black-900_87 sm:text-xl text-2xl text-left w-full"
                      wrapClassName="border-2 border-blue-A700 border-solid md:ml-[0] ml-[3px] mt-[5px] rounded-[21px] w-[87%]"
                      color="white_A700"
                      size="xs"
                    ></Input>
                    <Text
                      className="md:ml-[0] ml-[7px] mt-3.5 sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                      size="txtManropeSemiBold25Black900"
                    >
                      ending with
                    </Text>
                    <Input
                      name="group427318877"
                      placeholder="dd/mm/yyyy"
                      className="font-semibold md:text-[22px] p-0 text-black-900 placeholder:text-black-900_87 sm:text-xl text-2xl text-left w-full"
                      wrapClassName="border-2 border-blue-A700 border-solid md:ml-[0] ml-[3px] mt-[9px] rounded-[21px] w-[87%]"
                      color="white_A700"
                      size="xs"
                    ></Input>
                    <Text
                      className="md:ml-[0] ml-[3px] mt-3.5 sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                      size="txtManropeSemiBold25Black900"
                    >
                      repeat every
                    </Text>
                    <div className="flex flex-row gap-[15px] items-end justify-start md:ml-[0] ml-[7px] mt-[5px] w-[56%] md:w-full">
                      <Input
                        name="group427318877"
                        placeholder=""
                        className="font-semibold md:text-[22px] p-0 text-black-900 placeholder:text-black-900_87 sm:text-xl text-2xl text-left w-full"
                        wrapClassName="border-2 border-blue-A700 border-solid md:ml-[0] ml-[3px] mt-[9px] rounded-[21px] w-[87%]"
                        color="white_A700"
                        size="xs"
                      ></Input>
                      <Text
                        className="mb-[3px] mt-[11px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                        size="txtManropeSemiBold25Black900"
                      >
                        days
                      </Text>
                    </div>
                    <div className="border border-black-900_4c border-solid flex flex-row gap-9 items-center justify-start mt-[33px] p-[19px] w-3/4 md:w-full">
                      <img
                        className="h-8 ml-[86px] w-[31px]"
                        src="images/img_vector.svg"
                        alt="vector"
                      />
                      <label className="text-black-900 text-xl" htmlFor="fileInput">
                        {selectedFile ? selectedFile.name : 'Drop signature here'}
                      </label>
                      <input
                        type="file"
                        id="fileInput"
                        style={{ display: 'none' }}
                        onChange={handleFileChange}
                      />
                    </div>
                    <Text
                      className="common-pointer bg-blue-A700 h-[54px] flex justify-center items-center mt-5 pb-0.5 pt-2.5 sm:px-5 px-[35px] rounded-[24px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700 w-[438px]"
                      size="txtManropeMedium30"
                      onClick={() => navigate(-1)}
                    >
                      Approve
                    </Text>

                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[21px] items-end justify-start w-1/5 md:w-full">
              <div className="md:h-[646px] h-[660px] pt-3.5 px-3.5 relative w-full">
                <div className="bg-gray-200 h-[646px] m-auto rounded-[32px] w-[89%]"></div>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateAnalysisPageCenaRayan;
