/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function MyComponentsNavigation(props) {
  const { overrides, ...rest } = props;
  const OnClick = useNavigateAction({ type: "url", url: "/enter" });
  return (
    <View
      width="1440px"
      height="100px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "MyComponentsNavigation")}
      {...rest}
    >
      <View
        padding="0px 0px 0px 0px"
        width="1440px"
        height="100px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="0px"
        {...getOverrideProps(overrides, "header")}
      >
        <View
          width="1440px"
          height="100px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Rectangle 1")}
        ></View>
        <Flex
          gap="60px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          position="absolute"
          top="37px"
          left="970px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Frame 1")}
        >
          <Text
            fontFamily="Noto Sans KR"
            fontSize="18px"
            fontWeight="700"
            color="rgba(34,34,34,1)"
            lineHeight="26.06399917602539px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="서비스소개"
            onClick={() => {
              OnClick();
            }}
            {...getOverrideProps(overrides, "\uC11C\uBE44\uC2A4\uC18C\uAC1C")}
          ></Text>
          <Text
            fontFamily="Noto Sans KR"
            fontSize="18px"
            fontWeight="400"
            color="rgba(34,34,34,1)"
            lineHeight="26.06399917602539px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="회사소개"
            {...getOverrideProps(overrides, "\uD68C\uC0AC\uC18C\uAC1C")}
          ></Text>
          <Text
            fontFamily="Noto Sans KR"
            fontSize="18px"
            fontWeight="400"
            color="rgba(34,34,34,1)"
            lineHeight="26.06399917602539px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="문의하기"
            {...getOverrideProps(overrides, "\uBB38\uC758\uD558\uAE30")}
          ></Text>
        </Flex>
        <View
          width="200px"
          height="56px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="22px"
          left="135px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "logo")}
        >
          <View
            padding="0px 0px 0px 0px"
            width="77.13px"
            height="56px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="61.43%"
            {...getOverrideProps(overrides, "Group386110765")}
          >
            <Icon
              width="30.84px"
              height="35.64px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 30.8447265625,
                height: 35.63525390625,
              }}
              paths={[
                {
                  d: "M17.995 0L15.4223 5.08781L12.8496 10.1824L10.2769 15.2702L7.71114 20.3649L2.56578 30.5473L0 35.6351L12.8496 35.6351L15.4223 30.5473L17.995 25.4527L20.5607 20.3649L23.1334 15.2702L28.2788 5.08781L30.8446 0L17.995 0Z",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="18.18%"
              bottom="18.18%"
              left="30%"
              right="30.01%"
              {...getOverrideProps(overrides, "Vector386110766")}
            ></Icon>
            <Icon
              width="51.42px"
              height="40.73px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 51.4189453125,
                height: 40.72998046875,
              }}
              paths={[
                {
                  d: "M30.8446 0L20.5607 0L18.5054 4.07024L15.4223 10.1824L30.8446 10.1824C36.521 10.1824 41.1284 14.7444 41.1284 20.3649C41.1284 25.9854 36.521 30.5473 30.8446 30.5473L5.13846 30.5473L0 40.7298L30.8515 40.7298C42.2113 40.7298 51.4191 31.6127 51.4191 20.3649C51.4191 9.11707 42.2044 0 30.8446 0Z",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0%"
              bottom="27.27%"
              left="33.34%"
              right="0%"
              {...getOverrideProps(overrides, "Vector386110767")}
            ></Icon>
            <Icon
              width="51.41px"
              height="40.73px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 51.412109375,
                height: 40.729736328125,
              }}
              paths={[
                {
                  d: "M38.5626 0L20.5676 0C9.20785 0 0 9.11707 0 20.3649C0 30.7727 7.89047 39.3571 18.0708 40.5727C18.8916 40.6683 19.7193 40.7298 20.5607 40.7298L30.8446 40.7298L32.9 36.6595L35.983 30.5473L20.5676 30.5473C14.8912 30.5473 10.2838 25.9854 10.2838 20.3649C10.2838 14.7444 14.8912 10.1824 20.5676 10.1824L46.2738 10.1824L51.4122 0L38.5557 0L38.5626 0Z",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="27.27%"
              bottom="0%"
              left="0%"
              right="33.35%"
              {...getOverrideProps(overrides, "Vector386110768")}
            ></Icon>
          </View>
          <View
            padding="0px 0px 0px 0px"
            width="113.52px"
            height="33.37px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="20.2%"
            bottom="20.21%"
            left="43.24%"
            right="0%"
            {...getOverrideProps(overrides, "Group386110769")}
          >
            <View
              padding="0px 0px 0px 0px"
              width="90.11px"
              height="18.73px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0%"
              bottom="43.89%"
              left="0.86%"
              right="19.76%"
              {...getOverrideProps(overrides, "Group386110770")}
            >
              <Icon
                width="3.19px"
                height="18.19px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 3.193359375,
                  height: 18.193359375,
                }}
                paths={[
                  {
                    d: "M3.19343 18.1932L0 18.1932L0 0L3.19343 0L3.19343 18.1932Z",
                    fill: "rgba(34,34,34,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="1.46%"
                bottom="1.39%"
                left="0%"
                right="96.46%"
                {...getOverrideProps(overrides, "Vector386110771")}
              ></Icon>
              <Icon
                width="14.33px"
                height="18.73px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 14.32568359375,
                  height: 18.725830078125,
                }}
                paths={[
                  {
                    d: "M8.38708 18.7122C3.26931 18.7122 0 15.079 0 9.36976C0 3.66049 3.26931 0 8.38708 0C10.808 0 13.1048 0.84 14.3256 2.15122L13.2772 4.65073C11.9047 3.41463 10.1045 2.72488 8.38708 2.72488C5.21433 2.72488 3.39345 5.14927 3.39345 9.37659C3.39345 13.6039 5.21433 16.0283 8.38708 16.0283C10.1114 16.0283 11.9047 15.3385 13.2772 14.1024L14.3256 16.5746C13.1048 17.9132 10.808 18.7259 8.38708 18.7259L8.38708 18.7122Z",
                    fill: "rgba(34,34,34,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="0%"
                bottom="0%"
                left="7.26%"
                right="76.84%"
                {...getOverrideProps(overrides, "Vector386110772")}
              ></Icon>
              <Icon
                width="17.8px"
                height="18.19px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 17.8017578125,
                  height: 18.193359375,
                }}
                paths={[
                  {
                    d: "M7.49043 0L10.2631 0L17.8018 18.1932L14.5049 18.1932L12.8082 13.8702L4.96603 13.8702L3.26931 18.1932L0 18.1932L7.49043 0ZM11.8564 11.4663L8.88368 3.92683L5.91096 11.4663L11.8495 11.4663L11.8564 11.4663Z",
                    fill: "rgba(34,34,34,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="1.46%"
                bottom="1.39%"
                left="23.95%"
                right="56.29%"
                {...getOverrideProps(overrides, "Vector386110773")}
              ></Icon>
              <Icon
                width="14.6px"
                height="18.2px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 14.6015625,
                  height: 18.2001953125,
                }}
                paths={[
                  {
                    d: "M0 0L7.26283 0C11.2081 0 13.6014 2.19903 13.6014 5.61366C13.6014 7.93561 12.4289 9.67024 10.408 10.5102L14.6015 18.2L11.2081 18.2L7.33869 11.0839L3.19344 11.0839L3.19344 18.2L0 18.2L0 0L0 0ZM7.26283 8.67317C9.31132 8.67317 10.5114 7.58732 10.5114 5.60683C10.5114 3.62634 9.29063 2.69073 7.26283 2.69073L3.19344 2.69073L3.19344 8.67317L7.26283 8.67317L7.26283 8.67317Z",
                    fill: "rgba(34,34,34,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="1.46%"
                bottom="1.35%"
                left="45.92%"
                right="37.88%"
                {...getOverrideProps(overrides, "Vector386110774")}
              ></Icon>
              <Icon
                width="14.75px"
                height="18.44px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 14.75341796875,
                  height: 18.43896484375,
                }}
                paths={[
                  {
                    d: "M7.38697 15.7415C10.0355 15.7415 11.5805 13.9863 11.5805 10.8995L11.5805 0L14.7533 0L14.7533 10.8995C14.7533 15.5434 11.9047 18.439 7.38697 18.439C2.86926 18.439 0 15.5434 0 10.8995L0 0L3.19343 0L3.19343 10.8995C3.19343 13.9863 4.71772 15.7415 7.38697 15.7415L7.38697 15.7415Z",
                    fill: "rgba(34,34,34,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="1.5%"
                bottom="0.04%"
                left="64.96%"
                right="18.67%"
                {...getOverrideProps(overrides, "Vector386110775")}
              ></Icon>
              <Icon
                width="13.7px"
                height="18.71px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 13.705078125,
                  height: 18.71240234375,
                }}
                paths={[
                  {
                    d: "M6.78691 16.0146C9.11129 16.0146 10.4838 15.0244 10.4838 13.3717C10.4838 12.3063 9.51132 11.4937 7.78701 11.0976C7.49043 11.0498 6.71103 10.8722 5.58678 10.6263C2.21402 9.88195 0.317268 8.07902 0.317268 5.63415C0.317268 2.27415 3.11066 0 7.18005 0C9.60099 0 11.8978 0.792195 13.1462 2.04878L12.1944 4.39805C10.6701 3.3122 8.84918 2.69073 7.18005 2.69073C4.91085 2.69073 3.53829 3.77659 3.53829 5.63415C3.53829 6.76781 4.5108 7.61463 6.18684 7.98342L8.38707 8.47512C11.7805 9.24 13.7049 10.9951 13.7049 13.3717C13.7049 16.5337 10.9115 18.7122 6.78691 18.7122C4.06249 18.7122 1.44153 17.92 0 16.6634L0.972507 14.1434C2.7451 15.3317 4.89016 16.0215 6.78691 16.0215L6.78691 16.0146Z",
                    fill: "rgba(34,34,34,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="0.04%"
                bottom="0.04%"
                left="84.79%"
                right="0%"
                {...getOverrideProps(overrides, "Vector386110776")}
              ></Icon>
            </View>
            <View
              padding="0px 0px 0px 0px"
              width="113.52px"
              height="9.93px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="70.25%"
              bottom="0%"
              left="0%"
              right="0%"
              {...getOverrideProps(overrides, "Group386110777")}
            >
              <Icon
                width="5.23px"
                height="7.55px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 5.22802734375,
                  height: 7.54638671875,
                }}
                paths={[
                  {
                    d: "M5.035 1.96C5.035 2.73854 4.58668 3.39415 3.88316 3.69463C4.71083 3.96098 5.22813 4.67122 5.22813 5.53854C5.22813 6.78146 4.2832 7.54634 2.7727 7.54634L0 7.54634L0 0L2.68993 0C4.13146 0 5.02811 0.737563 5.02811 1.96L5.035 1.96ZM2.62096 3.49659C3.81418 3.49659 4.47632 2.95024 4.47632 1.98049C4.47632 1.01073 3.81418 0.46439 2.62096 0.46439L0.551783 0.46439L0.551783 3.49659L2.62096 3.49659ZM2.75891 7.08195C3.99352 7.08195 4.67635 6.51512 4.67635 5.52488C4.67635 4.53463 3.99352 3.95415 2.75891 3.95415L0.551783 3.95415L0.551783 7.08195L2.75891 7.08195Z",
                    fill: "rgba(34,34,34,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="3.3%"
                bottom="20.7%"
                left="0%"
                right="95.39%"
                {...getOverrideProps(overrides, "Vector386110778")}
              ></Icon>
              <Icon
                width="5px"
                height="5.84px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 5.00048828125,
                  height: 5.8388671875,
                }}
                paths={[
                  {
                    d: "M0 2.92293C0 1.09951 1.007 0 2.66234 0C4.16595 0 5.00052 0.983414 5.00052 2.77951L5.00052 2.97756L0.54489 2.97756C0.558684 4.50732 1.38635 5.37463 2.79339 5.37463C3.5383 5.37463 4.15905 5.12878 4.67634 4.62341L4.91775 5.00586C4.46253 5.53171 3.66245 5.83902 2.76581 5.83902C1.0277 5.83902 0 4.76 0 2.92976L0 2.92293ZM4.49702 2.56098C4.44184 1.13366 3.84178 0.450732 2.65545 0.450732C1.46912 0.450732 0.689732 1.22244 0.565581 2.56098L4.50391 2.56098L4.49702 2.56098Z",
                    fill: "rgba(34,34,34,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="21.39%"
                bottom="19.81%"
                left="5.78%"
                right="89.81%"
                {...getOverrideProps(overrides, "Vector386110779")}
              ></Icon>
              <Icon
                width="5.48px"
                height="7.72px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 5.4833984375,
                  height: 7.71728515625,
                }}
                paths={[
                  {
                    d: "M5.47643 0L2.95892 5.84585C2.48301 6.97268 2.13125 7.62146 1.03459 7.68975L0.537986 7.71707L0.496604 7.26634L0.986304 7.22536C1.78639 7.17073 2.03469 6.69268 2.38645 5.87317L2.45542 5.70927L0 0L0.572474 0L2.73822 5.05366L4.90396 0L5.48332 0L5.47643 0Z",
                    fill: "rgba(34,34,34,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="22.28%"
                bottom="0%"
                left="10.87%"
                right="84.3%"
                {...getOverrideProps(overrides, "Vector386110780")}
              ></Icon>
              <Icon
                width="5.16px"
                height="5.83px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 5.1591796875,
                  height: 5.83203125,
                }}
                paths={[
                  {
                    d: "M0 2.90927C0 1.08585 0.96561 0 2.57957 0C4.19353 0 5.15915 1.08585 5.15915 2.90927C5.15915 4.73268 4.20732 5.8322 2.57957 5.8322C0.951816 5.8322 0 4.74634 0 2.90927ZM2.57957 5.36781C3.84177 5.36781 4.60047 4.45268 4.60047 2.90927C4.60047 1.36585 3.84177 0.471219 2.57957 0.471219C1.31737 0.471219 0.572464 1.37268 0.572464 2.90927C0.572464 4.44585 1.31737 5.36781 2.57957 5.36781Z",
                    fill: "rgba(34,34,34,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="21.39%"
                bottom="19.88%"
                left="16.37%"
                right="79.09%"
                {...getOverrideProps(overrides, "Vector386110781")}
              ></Icon>
              <Icon
                width="4.56px"
                height="5.75px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 4.55908203125,
                  height: 5.75,
                }}
                paths={[
                  {
                    d: "M0 0.0956093L0.551773 0.0956093L0.551773 1.07902C0.93802 0.402925 1.64155 0 2.5313 0C3.89695 0 4.55909 0.710243 4.55909 2.16488L4.55909 5.75024L4.0211 5.75024L4.0211 2.19902C4.0211 0.997071 3.55209 0.464388 2.5106 0.464388C1.33117 0.464388 0.551773 1.25659 0.551773 2.45171L0.551773 5.74341L0 5.74341L0 0.0819505L0 0.0956093Z",
                    fill: "rgba(34,34,34,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="21.32%"
                bottom="20.77%"
                left="22.31%"
                right="73.67%"
                {...getOverrideProps(overrides, "Vector386110782")}
              ></Icon>
              <Icon
                width="5.1px"
                height="7.63px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 5.09716796875,
                  height: 7.62841796875,
                }}
                paths={[
                  {
                    d: "M0 4.71219C0 2.88878 0.944921 1.78927 2.5175 1.78927C3.46242 1.78927 4.20733 2.23317 4.55909 2.97073L4.55909 0L5.09708 0L5.09708 7.54634L4.55909 7.54634L4.55909 6.44683C4.19354 7.19805 3.46242 7.62829 2.5175 7.62829C0.944921 7.62829 0 6.54244 0 4.71902L0 4.71219ZM2.55889 7.1639C3.81419 7.1639 4.55909 6.26244 4.55909 4.71219C4.55909 3.16195 3.81419 2.26049 2.55889 2.26049C1.30359 2.26049 0.558677 3.16195 0.558677 4.71219C0.558677 6.26244 1.29669 7.1639 2.55889 7.1639Z",
                    fill: "rgba(34,34,34,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="3.37%"
                bottom="19.81%"
                left="27.74%"
                right="67.77%"
                {...getOverrideProps(overrides, "Vector386110783")}
              ></Icon>
              <Icon
                width="4.33px"
                height="5.83px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 4.33154296875,
                  height: 5.8251953125,
                }}
                paths={[
                  {
                    d: "M0.006904 4.11122C0.006904 2.9639 0.731109 2.55415 3.29689 2.55415L3.7935 2.55415L3.7935 1.93951C3.7935 0.901464 3.36587 0.46439 2.39335 0.46439C1.64845 0.46439 1.05529 0.648782 0.448329 1.07903L0.220718 0.635122C0.779396 0.239025 1.60017 0 2.37266 0C3.69004 0 4.33148 0.635122 4.33148 1.93951L4.33148 5.74341L3.7935 5.74341L3.7935 4.80098C3.46243 5.42927 2.80718 5.82537 1.95882 5.82537C0.827669 5.82537 0 5.11512 0 4.11122L0.006904 4.11122ZM2.0278 5.38146C3.06239 5.38146 3.8004 4.58927 3.8004 3.48293L3.8004 2.95707L3.31069 2.95707C1.08287 2.95707 0.558677 3.2439 0.558677 4.09756C0.558677 4.8761 1.15184 5.38146 2.0278 5.38146L2.0278 5.38146Z",
                    fill: "rgba(34,34,34,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="21.46%"
                bottom="19.88%"
                left="35.82%"
                right="60.36%"
                {...getOverrideProps(overrides, "Vector386110784")}
              ></Icon>
              <Icon
                width="5.1px"
                height="7.63px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 5.09716796875,
                  height: 7.62841796875,
                }}
                paths={[
                  {
                    d: "M0 4.71219C0 2.88878 0.944932 1.78927 2.51751 1.78927C3.46243 1.78927 4.20733 2.23317 4.55909 2.97073L4.55909 0L5.09709 0L5.09709 7.54634L4.55909 7.54634L4.55909 6.44683C4.19354 7.19805 3.46243 7.62829 2.51751 7.62829C0.944932 7.62829 0 6.54244 0 4.71902L0 4.71219ZM2.55889 7.1639C3.81419 7.1639 4.55909 6.26244 4.55909 4.71219C4.55909 3.16195 3.81419 2.26049 2.55889 2.26049C1.30359 2.26049 0.558687 3.16195 0.558687 4.71219C0.558687 6.26244 1.29669 7.1639 2.55889 7.1639Z",
                    fill: "rgba(34,34,34,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="3.37%"
                bottom="19.81%"
                left="41.04%"
                right="54.47%"
                {...getOverrideProps(overrides, "Vector386110785")}
              ></Icon>
              <Icon
                width="5.47px"
                height="5.66px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 5.4697265625,
                  height: 5.66162109375,
                }}
                paths={[
                  {
                    d: "M0 0L0.62075 0L2.74511 5.08781L4.85567 0L5.46953 0L3.04859 5.66146L2.43473 5.66146L0 0L0 0Z",
                    fill: "rgba(34,34,34,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="22.28%"
                bottom="20.7%"
                left="46.6%"
                right="48.58%"
                {...getOverrideProps(overrides, "Vector386110786")}
              ></Icon>
              <Icon
                width="5px"
                height="5.84px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 5.00048828125,
                  height: 5.8388671875,
                }}
                paths={[
                  {
                    d: "M0 2.92293C0 1.09951 1.007 0 2.66234 0C4.16595 0 5.00052 0.983414 5.00052 2.77951L5.00052 2.97756L0.544879 2.97756C0.558674 4.50732 1.38634 5.37463 2.79338 5.37463C3.53829 5.37463 4.15905 5.12878 4.67634 4.62341L4.91774 5.00586C4.46252 5.53171 3.66244 5.83902 2.7658 5.83902C1.02769 5.83902 0 4.76 0 2.92976L0 2.92293ZM4.49701 2.56098C4.44183 1.13366 3.84177 0.450732 2.65544 0.450732C1.46911 0.450732 0.689721 1.22244 0.56557 2.56098L4.50391 2.56098L4.49701 2.56098Z",
                    fill: "rgba(34,34,34,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="21.39%"
                bottom="19.81%"
                left="52.1%"
                right="43.5%"
                {...getOverrideProps(overrides, "Vector386110787")}
              ></Icon>
              <Icon
                width="2.76px"
                height="5.79px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 2.7587890625,
                  height: 5.791015625,
                }}
                paths={[
                  {
                    d: "M0 0.129758L0.537996 0.129758L0.537996 1.10634C0.889757 0.409758 1.5243 0.102441 2.47613 0.0204896L2.75891 0L2.75891 0.48488L2.44853 0.512195C1.21392 0.635122 0.551783 1.2839 0.551783 2.31512L0.551783 5.79122L0 5.79122L0 0.129758Z",
                    fill: "rgba(34,34,34,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="20.98%"
                bottom="20.7%"
                left="57.9%"
                right="39.67%"
                {...getOverrideProps(overrides, "Vector386110788")}
              ></Icon>
              <Icon
                width="3.84px"
                height="7.21px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 3.841796875,
                  height: 7.2119140625,
                }}
                paths={[
                  {
                    d: "M1.13805 5.36781L1.13805 1.93268L0 1.93268L0 1.46829L1.13805 1.46829L1.13805 0L1.67604 0L1.67604 1.46829L3.5383 1.46829L3.5383 1.93268L1.67604 1.93268L1.67604 5.26537C1.67604 6.24195 2.08297 6.74049 2.97272 6.74049C3.2624 6.74049 3.5245 6.65854 3.71763 6.58341L3.84178 7.02732C3.68314 7.12293 3.2693 7.21171 2.91754 7.21171C1.7657 7.21171 1.13805 6.5561 1.13805 5.36781L1.13805 5.36781Z",
                    fill: "rgba(34,34,34,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="7.5%"
                bottom="19.88%"
                left="60.8%"
                right="35.82%"
                {...getOverrideProps(overrides, "Vector386110789")}
              ></Icon>
              <Icon
                width="0.55px"
                height="7.87px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 0.5517578125,
                  height: 7.8740234375,
                }}
                paths={[
                  {
                    d: "M0 0L0.551783 0L0.551783 0.860489L0 0.860489L0 0ZM0 2.21268L0.551783 2.21268L0.551783 7.87415L0 7.87415L0 2.21268Z",
                    fill: "rgba(34,34,34,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="0%"
                bottom="20.7%"
                left="64.94%"
                right="34.58%"
                {...getOverrideProps(overrides, "Vector386110790")}
              ></Icon>
              <Icon
                width="4.26px"
                height="5.84px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 4.25537109375,
                  height: 5.8388671875,
                }}
                paths={[
                  {
                    d: "M0 5.11512L0.248302 4.72585C0.765597 5.17659 1.42083 5.40195 2.17263 5.40195C3.14515 5.40195 3.71763 4.9922 3.71763 4.28195C3.71763 3.77659 3.35207 3.44878 2.62096 3.30537L1.62776 3.10049C0.675932 2.90244 0.179325 2.39024 0.179325 1.63219C0.179325 0.64878 1.0001 0 2.22781 0C3.05549 0 3.77281 0.28683 4.15216 0.758049L3.90385 1.14049C3.45553 0.676099 2.89685 0.450732 2.22781 0.450732C1.30358 0.450732 0.717311 0.901464 0.717311 1.61171C0.717311 2.11707 1.04148 2.4722 1.73121 2.61561L2.72442 2.81366C3.75211 3.03219 4.25561 3.51024 4.25561 4.28195C4.25561 5.23805 3.42794 5.83902 2.15194 5.83902C1.2415 5.83902 0.441425 5.57268 0 5.10829L0 5.11512Z",
                    fill: "rgba(34,34,34,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="21.25%"
                bottom="19.94%"
                left="66.87%"
                right="29.38%"
                {...getOverrideProps(overrides, "Vector386110791")}
              ></Icon>
              <Icon
                width="5px"
                height="5.84px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 5.00048828125,
                  height: 5.8388671875,
                }}
                paths={[
                  {
                    d: "M0 2.92293C0 1.09951 1.007 0 2.66234 0C4.16595 0 5.00052 0.983414 5.00052 2.77951L5.00052 2.97756L0.544879 2.97756C0.558674 4.50732 1.38635 5.37463 2.79339 5.37463C3.5383 5.37463 4.15905 5.12878 4.67634 4.62341L4.91775 5.00586C4.46253 5.53171 3.66244 5.83902 2.7658 5.83902C1.02769 5.83902 0 4.76 0 2.92976L0 2.92293ZM4.49702 2.56098C4.44184 1.13366 3.84177 0.450732 2.65544 0.450732C1.46911 0.450732 0.689721 1.22244 0.56557 2.56098L4.50391 2.56098L4.49702 2.56098Z",
                    fill: "rgba(34,34,34,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="21.39%"
                bottom="19.81%"
                left="71.73%"
                right="23.87%"
                {...getOverrideProps(overrides, "Vector386110792")}
              ></Icon>
              <Icon
                width="7.9px"
                height="5.75px"
                viewBox={{ minX: 0, minY: 0, width: 7.904296875, height: 5.75 }}
                paths={[
                  {
                    d: "M0 0.0887812L0.551773 0.0887812L0.551773 1.08585C0.903533 0.396098 1.54498 0 2.33127 0C3.27619 0 3.85558 0.375609 4.09008 1.1678C4.41426 0.430243 5.10398 0 6.00752 0C7.29041 0 7.90427 0.696584 7.90427 2.16488L7.90427 5.75024L7.35248 5.75024L7.35248 2.19903C7.35248 0.990245 6.93865 0.46439 5.98683 0.46439C4.91086 0.46439 4.22802 1.24293 4.22802 2.45171L4.22802 5.74341L3.67624 5.74341L3.67624 2.19219C3.67624 0.983414 3.2624 0.45756 2.31058 0.45756C1.2346 0.45756 0.551773 1.2361 0.551773 2.44488L0.551773 5.73659L0 5.73659L0 0.0751224L0 0.0887812Z",
                    fill: "rgba(34,34,34,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="21.39%"
                bottom="20.7%"
                left="77.53%"
                right="15.51%"
                {...getOverrideProps(overrides, "Vector386110793")}
              ></Icon>
              <Icon
                width="5px"
                height="5.84px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 5.00048828125,
                  height: 5.8388671875,
                }}
                paths={[
                  {
                    d: "M0 2.92293C0 1.09951 1.00699 0 2.66233 0C4.16594 0 5.00052 0.983414 5.00052 2.77951L5.00052 2.97756L0.54489 2.97756C0.558684 4.50732 1.38634 5.37463 2.79338 5.37463C3.53829 5.37463 4.15905 5.12878 4.67634 4.62341L4.91775 5.00586C4.46253 5.53171 3.66245 5.83902 2.76581 5.83902C1.0277 5.83902 0 4.76 0 2.92976L0 2.92293ZM4.49701 2.56098C4.44183 1.13366 3.84178 0.450732 2.65545 0.450732C1.46912 0.450732 0.689732 1.22244 0.565581 2.56098L4.50391 2.56098L4.49701 2.56098Z",
                    fill: "rgba(34,34,34,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="21.39%"
                bottom="19.81%"
                left="85.89%"
                right="9.7%"
                {...getOverrideProps(overrides, "Vector386110794")}
              ></Icon>
              <Icon
                width="4.56px"
                height="5.75px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 4.55908203125,
                  height: 5.75,
                }}
                paths={[
                  {
                    d: "M0 0.0956093L0.551794 0.0956093L0.551794 1.07902C0.938041 0.402925 1.64156 0 2.53131 0C3.89696 0 4.5591 0.710243 4.5591 2.16488L4.5591 5.75024L4.02112 5.75024L4.02112 2.19902C4.02112 0.997071 3.5521 0.464388 2.51061 0.464388C1.33118 0.464388 0.551794 1.25659 0.551794 2.45171L0.551794 5.74341L0 5.74341L0 0.0819505L0 0.0956093Z",
                    fill: "rgba(34,34,34,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="21.32%"
                bottom="20.77%"
                left="91.69%"
                right="4.29%"
                {...getOverrideProps(overrides, "Vector386110795")}
              ></Icon>
              <Icon
                width="3.84px"
                height="7.21px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 3.841796875,
                  height: 7.2119140625,
                }}
                paths={[
                  {
                    d: "M1.13804 5.36781L1.13804 1.93268L0 1.93268L0 1.46829L1.13804 1.46829L1.13804 0L1.67603 0L1.67603 1.46829L3.5383 1.46829L3.5383 1.93268L1.67603 1.93268L1.67603 5.26537C1.67603 6.24195 2.08297 6.74049 2.97272 6.74049C3.2624 6.74049 3.52451 6.65854 3.71764 6.58341L3.84178 7.02732C3.68314 7.12293 3.26931 7.21171 2.91755 7.21171C1.76571 7.21171 1.13804 6.5561 1.13804 5.36781L1.13804 5.36781Z",
                    fill: "rgba(34,34,34,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="7.5%"
                bottom="19.88%"
                left="96.62%"
                right="0%"
                {...getOverrideProps(overrides, "Vector386110796")}
              ></Icon>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
