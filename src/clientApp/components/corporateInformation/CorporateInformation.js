import React from "react";
import "./CorporateInformation.css";
import OutlinedInput from "../outlinedInput/OutlinedInput";
import OutlinedSelect from "../outlinedSelect/OutlinedSelect";
import Checkbox from "../checkbox/Checkbox";

const resident = [
  { value: "yes", label: "Canadian" },
  { value: "no", label: "Non Canadian" },
];

const province = [
  { label: "Alberta", value: "AB", country: "Canada" },
  { label: "British Columbia", value: "BC", country: "Canada" },
  { label: "Manitoba", value: "MB", country: "Canada" },
  { label: "New Brunswick", value: "NB", country: "Canada" },
  { label: "Newfoundland and Labrador", value: "NL", country: "Canada" },
  { label: "Nova Scotia", value: "NS", country: "Canada" },
  { label: "Ontario", value: "ON", country: "Canada" },
  { label: "Prince Edward Island", value: "PE", country: "Canada" },
  { label: "Quebec", value: "QC", country: "Canada" },
  { label: "Yukon", value: "YT", country: "Canada" },
  { value: "SK", label: "Saskatchewan", country: "Canada" },
  { value: "NT", label: "Northwest Territories", country: "Canada" },
  { value: "NU", label: "Nunavut", country: "Canada" },
];

const CorporateInformation = (props) => {
  return (
    <>
      <div className="corporate-paper">
        <p>The street address of its registered head office will be</p>
        <form>
          <div className="corporate-form">
            <OutlinedInput
              type="text"
              name="street-address"
              placeholder="Street Address"
              id="street-address"
              autoComplete="street-address"
            />
            <OutlinedInput
              type="text"
              name="city"
              placeholder="City"
              id="city"
              autoComplete="city"
            />
          </div>
          <div className="corporate-form">
            <OutlinedInput
              type="text"
              name="unit"
              placeholder="Unit"
              id="unit"
              autoComplete="unit"
            />
            <OutlinedSelect
              name="province"
              placeholder="Province"
              id="province"
              options={province}
            />
          </div>
          <div className="corporate-form">
            <OutlinedSelect
              name="resident"
              placeholder="Resident"
              id="resident"
              options={resident}
              disabled={true}
            />
          </div>
          <div>
            <Checkbox
              type="checkbox"
              name="check"
              label="same as account Information"
              id="unit"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default CorporateInformation;
