import Image from "next/image";
import React, { useState } from "react";

interface SelectInputProps {
  label: string;
  options: { value: string; label: string }[];
  defaultValue?: string;
  icon?: string;
}

const SelectInput = ({
  label,
  options,
  defaultValue,
  icon,
}: SelectInputProps) => {
  const [selectedValue, setSelectedValue] = useState(
    defaultValue || options[0]?.value
  );

  // Handler for the select input change event
  const handleValueChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="flex gap-6 ">
      <div className="border border-black px-3 p-2 rounded-2xl">
        {/* Conditionally render icon */}
        {icon && (
          <Image
            src={icon}
            alt={label}
            width={30}
            height={30}
            className="size-8"
          />
        )}
      </div>

      <div>
        {/* Styled select element */}
        <select
          name={label}
          id={label}
          className="focus:outline-none "
          onChange={handleValueChange}
          value={selectedValue} // This binds the value to the state
        >
          {/* Default empty option */}
          <option value="">Select {label}</option>
          {/* Map through the options */}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        {/* Display selected value */}
        {selectedValue && selectedValue !== "" && (
          <h4 className="mt-2 text-xl font-bold text-black capitalize">
            {selectedValue}
          </h4>
        )}
      </div>
    </div>
  );
};

export default SelectInput;
