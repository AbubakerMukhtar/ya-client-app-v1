import React, { useState } from 'react';
import './Dialog.css';
import { Button, Tab, Tabs } from '@mui/material';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import CloseIcon from '@mui/icons-material/Close';
import Input from '../input/Input';
import Select from '../select/Select';

const resident = [
  { value: 'yes', label: 'Canadian' },
  { value: 'no', label: 'Non Canadian' }
];

const country = [{ value: 'Canada', label: 'Canada' }];

const province = [
  { label: 'Alberta', value: 'AB', country: 'Canada' },
  { label: 'British Columbia', value: 'BC', country: 'Canada' },
  { label: 'Manitoba', value: 'MB', country: 'Canada' },
  { label: 'New Brunswick', value: 'NB', country: 'Canada' },
  { label: 'Newfoundland and Labrador', value: 'NL', country: 'Canada' },
  { label: 'Nova Scotia', value: 'NS', country: 'Canada' },
  { label: 'Ontario', value: 'ON', country: 'Canada' },
  { label: 'Prince Edward Island', value: 'PE', country: 'Canada' },
  { label: 'Quebec', value: 'QC', country: 'Canada' },
  { label: 'Yukon', value: 'YT', country: 'Canada' },
  { value: 'SK', label: 'Saskatchewan', country: 'Canada' },
  { value: 'NT', label: 'Northwest Territories', country: 'Canada' },
  { value: 'NU', label: 'Nunavut', country: 'Canada' }
];

const Dialog = ({ show, onClose, details }) => {
  const [valueTab, setValueTab] = useState(0);
  const handleChange = (event, newValue) => {
    setValueTab(newValue);
  };

  if (!show) {
    return null;
  }

  return (
    <div className="dialog-overlay">
      <div className="dialog">
        <div className="dialog-header">
          <h6 className="dialog-title">
            <AddCircleRoundedIcon className="add-icon" />
            Shareholder
          </h6>
          <button className="dialog-close" onClick={onClose}>
            <CloseIcon className="dialog-close-icon" />
          </button>
        </div>
        <div className="dialog-content">
          <Tabs
            value={valueTab}
            onChange={handleChange}
            // textColor="secondary"
            indicatorColor="secondary"
            // aria-label="secondary"
            className="dialog-tabs"
          >
            <Tab className="dialog-tab" value={0} label="Person" />
            <Tab className="dialog-tab" value={1} label="Company" />
          </Tabs>
          {valueTab === 0 && (
            <>
              <form>
                <div className="flex justify-between items-center mb-[10px]">
                  <div className="flexable-field">
                    <Input
                      type="text"
                      name="first-name"
                      placeholder="First Name"
                      id="first-name"
                      autoComplete="given-name"
                    />
                  </div>
                  <div className="flexable-field">
                    <Input
                      type="text"
                      name="last-name"
                      placeholder="Last Name"
                      id="last-name"
                      autoComplete="family-name"
                    />
                  </div>
                </div>
                <div className="flex justify-between items-center mb-[10px]">
                  <div className="flexable-field">
                    <Input
                      type="number"
                      name="phone-number"
                      placeholder="Phone Number"
                      id="phone-number"
                      autoComplete="phone-number"
                    />
                  </div>
                  <div className="flexable-field">
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email"
                      id="email"
                      autoComplete="email"
                    />
                  </div>
                </div>
                <div className="flex justify-between items-center mb-[10px]">
                  <div className="flexable-field">
                    <Input
                      type="text"
                      name="street-address"
                      placeholder="Street Address"
                      id="street-address"
                      autoComplete="street-address"
                    />
                  </div>
                  <div className="flexable-field">
                    <Input
                      type="text"
                      name="unit"
                      placeholder="Unit"
                      id="unit"
                      autoComplete="unit"
                    />
                  </div>
                </div>
                <div className="flex justify-between items-center mb-[10px]">
                  <div className="flexable-field">
                    <Select name="country" placeholder="Country" id="country" options={country} />
                  </div>
                  <div className="flexable-field">
                    <Select
                      name="province"
                      placeholder="Province"
                      id="province"
                      options={province}
                    />
                  </div>
                </div>
                <div className="flex justify-between items-center mb-[10px]">
                  <div className="flexable-field">
                    <Input
                      type="text"
                      name="city"
                      placeholder="City"
                      id="city"
                      autoComplete="city"
                    />
                  </div>
                  <div className="flexable-field">
                    <Select
                      name="resident"
                      placeholder="Resident"
                      id="resident"
                      options={resident}
                    />
                  </div>
                </div>
              </form>
            </>
          )}
          {valueTab === 1 && (
            <>
              <form>
                <div className="flex justify-between items-center mb-[10px]">
                  <div className="flexable-field">
                    <Input
                      type="text"
                      name="company-name"
                      placeholder="Company Name"
                      id="company-name"
                      autoComplete="company-name"
                    />
                  </div>
                  <div className="flexable-field">
                    <Input
                      type="number"
                      name="company-phone-number"
                      placeholder="Company Phone Number"
                      id="company-phone-number"
                      autoComplete="company-phone-number"
                    />
                  </div>
                </div>
                <div className="flex justify-between items-center mb-[10px]">
                  <div className="flexable-field">
                    <Input
                      type="text"
                      name="street-address"
                      placeholder="Street Address"
                      id="street-address"
                      autoComplete="street-address"
                    />
                  </div>
                  <div className="flexable-field">
                    <Input
                      type="text"
                      name="unit"
                      placeholder="Unit"
                      id="unit"
                      autoComplete="unit"
                    />
                  </div>
                </div>
                <div className="flex justify-between items-center mb-[10px]">
                  <div className="flexable-field">
                    <Select name="country" placeholder="Country" id="country" options={country} />
                  </div>
                  <div className="flexable-field">
                    <Select
                      name="province"
                      placeholder="Province"
                      id="province"
                      options={province}
                    />
                  </div>
                </div>
                <div className="mb-[10px]">
                  <div>
                    <Input
                      type="text"
                      name="city"
                      placeholder="City"
                      id="city"
                      autoComplete="city"
                    />
                  </div>
                </div>
                <div className="mb-[10px]">
                  <p className="company-rep">Company Representative</p>
                </div>
                <div className="flex justify-between items-center mb-[10px]">
                  <div className="flexable-field">
                    <Input
                      type="text"
                      name="first-name"
                      placeholder="First Name"
                      id="first-name"
                      autoComplete="given-name"
                    />
                  </div>
                  <div className="flexable-field">
                    <Input
                      type="text"
                      name="last-name"
                      placeholder="Last Name"
                      id="last-name"
                      autoComplete="family-name"
                    />
                  </div>
                </div>
                <div className="flex justify-between items-center mb-[10px]">
                  <div className="flexable-field">
                    <Input
                      type="number"
                      name="phone-number"
                      placeholder="Phone Number"
                      id="phone-number"
                      autoComplete="phone-number"
                    />
                  </div>
                  <div className="flexable-field">
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email"
                      id="email"
                      autoComplete="email"
                    />
                  </div>
                </div>
              </form>
            </>
          )}
        </div>
        <div className="dialog-footer">
          <div className="flex justify-between items-center mb-[10px]">
            <div className="flexable-field">
              <Button
                fullWidth
                className="w-full h-[55px]"
                variant="outlined"
                color="secondary"
                onClick={onClose}
              >
                Cancel
              </Button>
            </div>
            <div className="flexable-field">
              <Button
                fullWidth
                className="w-full h-[55px]"
                variant="contained"
                color="secondary"
                type="submit"
                disabled
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
