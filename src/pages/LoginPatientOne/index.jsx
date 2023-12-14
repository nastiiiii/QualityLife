import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";

const LoginPatientOnePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-manrope items-center justify-start mx-auto sm:pl-5 pl-[33px] w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1479px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-1 flex-col justify-start md:mt-0 mt-[43px] w-[36%] md:w-full">
            <div className="flex flex-col items-center justify-start shadow-bs1 w-3/4 md:w-full">
              <div className="flex sm:flex-col flex-row gap-2 h-[115px] md:h-auto items-center justify-start w-[393px] sm:w-full">
                <Img
                  className="h-[114px] md:h-auto object-cover w-[116px] sm:w-full"
                  src="images/img_image15.png"
                  alt="imageFifteen"
                />
                <Text
                  className="md:text-5xl text-[70px] text-blue-A700 w-auto"
                  size="txtManropeBold70"
                >
                  Medbay
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-[27px] items-start justify-start md:ml-[0] ml-[18px] mt-[63px]">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-indigo-A700"
                size="txtManropeBold32IndigoA700"
              >
                I’m a patient
              </Text>
              <Text
                className="leading-[100.00%] md:text-3xl sm:text-[28px] text-[32px] text-indigo-A700 w-full"
                size="txtManropeBold32IndigoA700"
              >
                Welcome newcomer... introduce yourself{" "}
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[7px] mt-[54px] w-[99%] md:w-full">
              <Input
                name="group427318867"
                placeholder="Username"
                className="font-semibold md:text-[22px] p-0 placeholder:text-black-900_87 sm:text-xl text-2xl text-left w-full"
                wrapClassName="border-2 border-blue-A700 border-solid rounded-[21px] w-full"
                type="text"
                color="white_A700"
                size="lg"
              ></Input>
              <Input
                name="group427318870"
                placeholder="Password"
                className="font-semibold md:text-[22px] p-0 placeholder:text-black-900_87 sm:text-xl text-2xl text-left w-full"
                wrapClassName="border-2 border-blue-A700 border-solid mt-[33px] rounded-[21px] w-full"
                type="password"
                color="white_A700"
                size="lg"
              ></Input>
              <Button
                className="common-pointer cursor-pointer font-bold min-w-[519px] sm:min-w-full mt-24 text-2xl md:text-[22px] text-center sm:text-xl"
                onClick={() => navigate("/mainone")}
                shape="round"
                color="blue_A700"
                size="sm"
                variant="fill"
              >
                Log In
              </Button>
            </div>
          </div>
          <Img
            className="common-pointer h-[26px] md:ml-[0] ml-[189px] md:mt-0 mt-11"
            src="images/img_arrowright.svg"
            alt="arrowright"
            onClick={() => navigate("/loginpatient")}
          />
          <div className="bg-blue_gray-100 flex md:flex-1 flex-col items-start justify-end md:ml-[0] ml-[22px] p-11 md:px-10 sm:px-5 w-1/2 md:w-full">
            <Text
              className="md:ml-[0] ml-[26px] mt-10 md:text-3xl sm:text-[28px] text-[32px] text-indigo-A700_7f"
              size="txtManropeBold32"
            >
              Medbay
            </Text>
            <Text
              className="md:ml-[0] ml-[26px] mt-6 md:text-3xl sm:text-[28px] text-[32px] text-indigo-A700_7f"
              size="txtManropeBold32"
            >
              I’m a doctor
            </Text>
            <div className="border border-black-900_4c border-solid flex flex-row gap-9 items-center justify-start md:ml-[0] ml-[26px] mt-[33px] p-[19px] w-[71%] md:w-full">
              <Img
                className="h-8 ml-[86px] w-[31px]"
                src="images/img_vector.svg"
                alt="vector"
              />
              <Text
                className="text-black-900_7f text-xl"
                size="txtManropeMedium20Black9007f"
              >
                drop signature here
              </Text>
            </div>
            <Button
              className="cursor-pointer font-bold min-w-[448px] sm:min-w-full md:ml-[0] ml-[26px] mt-[49px] text-2xl md:text-[22px] text-center sm:text-xl"
              shape="round"
              color="blue_A700_7f"
              size="sm"
              variant="fill"
            >
              Log In
            </Button>
            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[238px] mt-[408px] shadow-bs1 w-[62%] md:w-full">
              <div className="flex sm:flex-col flex-row gap-2 h-[115px] md:h-auto items-center justify-start w-[393px] sm:w-full">
                <Img
                  className="h-[114px] md:h-auto object-cover w-[116px] sm:w-full"
                  src="images/img_image15.png"
                  alt="imageFifteen_One"
                />
                <Text
                  className="md:text-5xl text-[70px] text-blue-A700 w-auto"
                  size="txtManropeBold70"
                >
                  Medbay
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPatientOnePage;
