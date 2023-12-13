import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Input, Text } from "components";

const CreatePatientsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-manrope items-center justify-end mx-auto p-[37px] sm:px-5 w-full">
        <div className="flex flex-col items-start justify-start max-w-[1410px] mt-[3px] mx-auto md:px-5 w-full">
          <Img
            className="common-pointer h-[26px]"
            src="images/img_settings.svg"
            alt="settings"
            onClick={() => navigate("/analysis")}
          />
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between md:ml-[0] ml-[5px] mt-7 w-[99%] md:w-full">
            <Text
              className="leading-[100.00%] md:text-3xl sm:text-[28px] text-[32px] text-blue-A700"
              size="txtManropeBold32BlueA700"
            >
              Introduce your new patient..
            </Text>
            <Text
              className="leading-[100.00%] md:text-3xl sm:text-[28px] text-[32px] text-blue-A700 text-right"
              size="txtManropeBold32BlueA700"
            >
              <span className="text-blue-A700 font-manrope font-bold">
                <>
                  Patch List
                  <br />
                  <br />
                </>
              </span>
              <span className="text-black-900_b2 font-manrope text-xl font-bold">
                If patch is missed or connection is bad check the patch
              </span>
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between md:ml-[0] ml-[5px] mt-[33px] w-full">
            <div className="flex md:flex-1 flex-col items-center justify-start w-[38%] md:w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[69px] items-start justify-start p-[17px] rounded-[21px]"
                style={{ backgroundImage: "url('images/img_group31.svg')" }}
              >
                <Text
                  className="md:ml-[0] ml-[15px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtManropeSemiBold24"
                >
                  Patient1
                </Text>
              </div>
              <Input
                name="group427318871"
                placeholder="Password"
                className="font-semibold md:text-[22px] p-0 placeholder:text-black-900_87 sm:text-xl text-2xl text-left w-full"
                wrapClassName="border-2 border-blue-A700 border-solid mt-[33px] rounded-[21px] w-full"
                type="password"
                color="white_A700"
                size="lg"
              ></Input>
              <Input
                name="group427318872"
                placeholder="Confirm Password"
                className="font-semibold md:text-[22px] p-0 placeholder:text-black-900_87 sm:text-xl text-2xl text-left w-full"
                wrapClassName="border-2 border-blue-A700 border-solid mt-[33px] rounded-[21px] w-full"
                type="password"
                color="white_A700"
                size="lg"
              ></Input>
              <Text
                className="leading-[100.00%] mt-[17px] sm:text-2xl md:text-[26px] text-[28px] text-black-900_99 w-[93%] sm:w-full"
                size="txtManropeSemiBold28"
              >
                <span className="text-black-900_99 font-manrope text-left font-semibold">
                  <>
                    Please enter data correctly. Check your information before
                    approving with a signature..
                    <br />
                    <br />
                  </>
                </span>
                <span className="text-indigo-A700_01 font-manrope text-left font-semibold">
                  Take care. Give some info about patient
                </span>
              </Text>
              <Input
                name="group427318875"
                placeholder="Name Surname"
                className="font-semibold md:text-[22px] p-0 placeholder:text-black-900_87 sm:text-xl text-2xl text-left w-full"
                wrapClassName="border-2 border-blue-A700 border-solid mt-[33px] rounded-[21px] w-full"
                type="text"
                color="white_A700"
                size="lg"
              ></Input>
            </div>
            <div className="bg-white-A700 border-2 border-blue-A700 border-solid flex md:flex-1 flex-col items-center justify-start mb-1.5 md:mt-0 mt-[22px] p-[9px] rounded-[21px] w-[37%] md:w-full">
              <div className="flex flex-col items-start justify-start mb-[383px] w-[95%] md:w-full">
                <Text
                  className="text-2xl md:text-[22px] text-black-900_87 sm:text-xl"
                  size="txtManropeSemiBold24Black90087"
                >
                  Patches
                </Text>
                <div className="flex flex-row items-start justify-between mt-[9px] w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtManropeSemiBold24"
                  >
                    1 - LeftUpperArm
                  </Text>
                  <div className="bg-red-A700 h-5 mb-[11px] rounded-[10px] w-[21px]"></div>
                </div>
                <div className="flex flex-row items-start justify-between mt-1 w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtManropeSemiBold24"
                  >
                    2 - RightUpperArm
                  </Text>
                  <div className="bg-red-A700 h-5 mb-2.5 mt-0.5 rounded-[10px] w-[21px]"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between ml-2 md:ml-[0] mt-[17px] w-full">
            <Input
              name="group427318873"
              placeholder="dd/mm/yyyy"
              className="font-semibold md:text-[22px] p-0 placeholder:text-black-900_87 sm:text-xl text-2xl text-left w-full"
              wrapClassName="border-2 border-blue-A700 border-solid md:flex-1 mb-6 rounded-[21px] md:w-full"
              color="white_A700"
              size="lg"
            ></Input>
            <div className="border border-black-900_4c border-solid flex sm:flex-col flex-row gap-[19px] items-center justify-center md:mt-0 mt-[18px] p-[18px]">
              <Img
                className="h-[39px] sm:ml-[0] ml-[102px]"
                src="images/img_vector.svg"
                alt="vector"
              />
              <Text
                className="mr-[143px] text-black-900 text-xl"
                size="txtManropeMedium20"
              >
                drop signature here
              </Text>
            </div>
          </div>
          <Text
            className="common-pointer bg-blue-A700 h-[54px] justify-center max-w-[722px] md:max-w-full md:ml-[0] ml-[688px] mt-[38px] pb-0.5 pt-2.5 sm:px-5 px-[35px] rounded-[24px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700 w-full"
            size="txtManropeMedium30"
            onClick={() => navigate("/main")}
          >
            Approve
          </Text>
        </div>
      </div>
    </>
  );
};

export default CreatePatientsPage;
