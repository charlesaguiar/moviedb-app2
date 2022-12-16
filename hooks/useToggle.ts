import { useCallback, useState } from "react";

interface IToggleParams {
  force: boolean;
  forcedValue: boolean;
}

const useToggle = (
  initialValue = false
): [boolean, (params?: IToggleParams) => void] => {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback((params?: IToggleParams) => {
    if (params?.force) {
      setValue(params?.forcedValue);
      return;
    }

    setValue((prev) => !prev);
  }, []);

  return [value, toggle];
};

export default useToggle;
