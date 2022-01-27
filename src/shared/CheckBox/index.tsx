import { useState } from "react";

type CheckBoxProps = {
  checked: boolean;
};
export default function CheckBox({ checked }: CheckBoxProps) {
  const [status, setChecked] = useState(checked);

  const handleCheck = () => {
    setChecked(!status);
  };

  return (
    <input type="checkbox" checked={status} onChange={handleCheck}></input>
  );
}
