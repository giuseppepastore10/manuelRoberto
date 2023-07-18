import styled from "styled-components";

import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import { ImQuotesRight } from "react-icons/im";

export const SliderMenuProfileWrapper = styled.div`
  text-align: center;
  overflow: hidden;
  display: flex;
  flex: 1;
  flex-direction: column;
  &.current {
    transition: all 0.5s linear;
    position: relative;
    top: 0;
    left: 0;
    opacity: 1;
  }
  &.previous {
    position: absolute;
    top: 0;
    left: -120%;
    transition: all 0.3s linear;
    opacity: 0;
  }
  &.future {
    position: absolute;
    top: 0;
    left: 120%;
    transition: all 0.3s linear;
    opacity: 0;
  }
`;

export const SliderName = styled.h3`
  font-weight: 600;
  color: #ba5d2c;
  text-transform: uppercase;
  font-size: clamp(2rem, 8vw, 2rem);
  letter-spacing: 2px;
  padding: 0;
  margin-bottom: 0.3rem;
`;

export const SliderDescription = styled.p`
  color: #949494;
  font-size: clamp(2.5rem, 10vw, 2rem);
  width: 60%;
  overflow: hidden;
  margin: auto;
  margin-top: 2rem;
  font-family: sans-serif;
`;

export const SliderMenuContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

export const SliderMenuLeftSlider = styled(AiOutlineDoubleLeft)`
  position: absolute;
  left: 0;
  top: 215px;
  transform: translateY(-50%);
  padding: 10px;
  z-index: 10;
  &:hover {
    color: #ba5d2c;
    cursor: pointer;
    border: 1px solid #ba5d2c;
    border-radius: 10px;
    padding: 9px;
  }
`;

export const SliderMenuRightSlider = styled(AiOutlineDoubleRight)`
  position: absolute;
  right: 0;
  top: 215px;
  transform: translateY(-50%);
  padding: 10px;
  &:hover {
    color: #ba5d2c;
    cursor: pointer;
    border: 1px solid #ba5d2c;
    border-radius: 10px;
    padding: 9px;
  }
  z-index: 10;
`;
