import { TypeAnimation } from "react-type-animation";

const ExampleComponent = () => {
  return (
    <div>
      <TypeAnimation
        sequence={[
          "I try to develop visuals.",
          1000,
          "I try to develop user interfaces.",
          1000,
          "I try to develop web applications.",
          1000,
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: "2em", display: "inline-block" }}
        repeat={Infinity}
      />
    </div>
  );
};
export default ExampleComponent;
