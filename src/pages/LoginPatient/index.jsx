import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";

const LoginPatientPage = () => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  return (
    <>
      <div className="bg-blue_gray-100 flex flex-col font-manrope items-center justify-start mx-auto sm:pl-5 pl-[33px] w-full">
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1479px] mx-auto md:px-5 w-full">
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
                className="md:text-3xl sm:text-[28px] text-[32px] text-indigo-A700_7f"
                size="txtManropeBold32"
              >
                I’m a patient
              </Text>
              <Text
                className="leading-[100.00%] md:text-3xl sm:text-[28px] text-[32px] text-indigo-A700_7f w-full"
                size="txtManropeBold32"
              >
                Welcome newcomer... introduce yourself{" "}
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[7px] mt-[54px] w-[99%] md:w-full">
              <Input
                name="group427318867"
                placeholder="Username"
                className="!placeholder:text-black-900_5a !text-black-900_5a font-semibold md:text-[22px] p-0 sm:text-xl text-2xl text-left w-full"
                wrapClassName="border-2 border-blue-A700_7f border-solid rounded-[21px] w-full"
                type="text"
                color="white_A700"
                size="lg"
              ></Input>
              <Input
                name="group427318870"
                placeholder="Password"
                className="!placeholder:text-black-900_5a !text-black-900_5a font-semibold md:text-[22px] p-0 sm:text-xl text-2xl text-left w-full"
                wrapClassName="border-2 border-blue-A700_7f border-solid mt-[33px] rounded-[21px] w-full"
                type="password"
                color="white_A700"
                size="lg"
              ></Input>
              <Button
                className="cursor-pointer font-bold min-w-[519px] sm:min-w-full mt-24 text-2xl md:text-[22px] text-center sm:text-xl"
                shape="round"
                color="blue_A700_7f"
                size="sm"
                variant="fill"
              >
                Log In
              </Button>
            </div>
          </div>
          <div className="bg-white-A700 flex md:flex-1 flex-col gap-[27px] justify-center p-[19px] w-1/2 md:w-full">
            <Img
              className="h-[26px] mr-[670px] mt-3"
              src="images/img_settings.svg"
              alt="settings"
            />
            <div className="flex flex-col items-start justify-start mb-8 md:ml-[0] ml-[52px] mr-[30px] w-[89%] md:w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-indigo-A700"
                size="txtManropeBold32IndigoA700"
              >
                Medbay
              </Text>
              <Text
                className="mt-6 md:text-3xl sm:text-[28px] text-[32px] text-indigo-A700"
                size="txtManropeBold32IndigoA700"
              >
                I’m a doctor
              </Text>
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
              <Button
                className="common-pointer cursor-pointer font-bold min-w-[448px] sm:min-w-full mt-[49px] text-2xl md:text-[22px] text-center sm:text-xl"
                onClick={() => navigate("/main")}
                shape="round"
                color="blue_A700"
                size="sm"
                variant="fill"
              >
                Log In
              </Button>
              <div className="flex flex-col items-center justify-start md:ml-[0] ml-[212px] mt-[401px] shadow-bs1 w-[65%] md:w-full">
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
      </div>
    </>
  );
};

export default LoginPatientPage;
