import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "components";

const CreatePrescriptionPageCenaRayan = () => {
  const navigate = useNavigate();

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

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
              <input className="bg-white-A700 border-2 border-blue-A700 border-solid flex flex-col items-end justify-end p-[5px] w-[98%] md:w-full"/> <div className="bg-indigo-A700 flex flex-col items-start justify-end mt-[13px] p-[9px] rounded-md w-full">
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
        <div className="absolute bottom-[2%] sm:h-[712px] h-[738px] md:h-[954px] left-[2%] p-1.5 md:px-5 w-[79%] md:w-full">
          <div className="bg-gray-200 h-[712px] m-auto rounded-[53px] w-[97%]"></div>
          <div className="absolute bottom-[3%] flex md:flex-col flex-row md:gap-[55px] inset-x-[0] items-center justify-between mx-auto w-[91%]">
            <div className="flex flex-col gap-[18px] items-start justify-start w-[49%] md:w-full">
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
                  Rayan Gos
                </Text>
              </div>


                <textarea
                  name="group427318876"
                  placeholder="Prescription"
                  type={"text"}
                  cols="500" rows="16"
                  className="
                  font-semibold md:text-[22px] p-3 text-black-900 placeholder:text-black-900_87 sm:text-xl text-2xl
                  text-left w-full bg-white-A700 border-2 border-blue-A700 border-solid flex flex-col md:gap-10 gap-[447px]
                  justify-start rounded-[21px] h-100"
                  color="white_A700"
                  size="xs"
                />

            </div>
            <div className="flex flex-col justify-start md:mt-0 mt-1.5 w-[47%] md:w-full">
              <Text
                className="leading-[100.00%] md:ml-[0] ml-[277px] md:text-3xl sm:text-[28px] text-[32px] text-indigo-A700 text-right w-[45%] sm:w-full"
                size="txtManropeBold32IndigoA700"
              >
                Create Prescription
              </Text>
              <div className="flex flex-col gap-[29px] items-start justify-start mt-[333px] mx-auto w-[92%] md:w-full">
                <Text
                  className="leading-[100.00%] sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                  size="txtManropeSemiBold25Black900"
                >
                  <span className="text-black-900 font-manrope text-left font-semibold">
                    Prescription is written to{" "}
                  </span>
                  <span className="text-indigo-A700 font-manrope text-left font-semibold">
                    <>
                      Rayan Gos
                      <br />
                    </>
                  </span>
                  <span className="text-black-900 font-manrope text-left font-semibold">
                    Today date{" "}
                  </span>
                  <span className="text-indigo-A700 font-manrope text-left font-semibold">
                    19/12/2023
                  </span>
                </Text>
                <div className="border border-black-900_4c border-solid flex flex-row gap-9 items-center justify-start mt-[33px] p-[19px] w-200 md:w-full">
                  <img
                    className="h-8 ml-[86px] w-[31px]"
                    src={process.env.PUBLIC_URL + "/images/img_vector.svg"}
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

              </div>
              <Text
                className="common-pointer bg-blue-A700 h-[54px] flex items-center justify-center mt-5 pb-0.5 pt-2.5 sm:px-5 px-[35px] rounded-[24px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700 w-[438px]"
                size="txtManropeMedium30"
                onClick={() => navigate(-1)}
              >
                Approve
              </Text>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePrescriptionPageCenaRayan;
