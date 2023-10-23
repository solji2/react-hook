import React from "react";
import PropsTypes from "prop-types";

const MyComponent = ({ name, favoriteNumber, children }) => {
  //const { name, children } = props;
  return (
    <div>
      안녕하세요, 제 이름은 {name}입니다.
      <br />
      children 값은 {children}입니다.
      <br />
      제가 좋아하는 숫자는 {favoriteNumber}입니다.
    </div>
  );
};

MyComponent.defaultProps = {
  name: "기본 이름",
};

MyComponent.prototype = {
  name: PropsTypes.string, //name 값은 무조건 String 형태로 전달되어야한다.
  favoriteNumber: PropsTypes.number.isRequired,
};

export default MyComponent;
