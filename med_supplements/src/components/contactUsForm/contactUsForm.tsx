"use client";

import { Box } from "@mui/system";
import "./contactUsForm.scss";
import React, { FC, useState } from "react";
import { Button, TextField } from "@mui/material";
import jsonData from "../../data/contactUs.json";

interface formValuesObject {
    value: string,
    error: boolean
}

const ContactUsForm: FC<{}> = () => {
    const data: any = jsonData;
    const formsDataInitialState = Object.keys(data.formSection.forms).reduce((stateObj, key) => {
        stateObj[key] = {
            value: "",
            error: false
        };
        return stateObj
    }, {} as Record<string, formValuesObject>);

    const [formsValues, setFormsValues] = useState(formsDataInitialState);

    const handleFormsValuesChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        let errorVal = formsValues[name].error;
        if (typeof data.formSection.forms[name].regex != "undefined") {
            let regex = new RegExp(data.formSection.forms[name]["regex"]);
            regex.test(value) ? errorVal = false : errorVal = true;
        }
        else if (data.formSection.forms[name].required == true) {
            if (value == "")
                errorVal = true;
            else {
                errorVal = false;
            }
        }
        if ((typeof data.formSection.forms[name].required == "undefined" || data.formSection.forms[name].required == false) && value == "") {
            errorVal = false;
        }
        setFormsValues(prevValues => ({
            ...prevValues,
            [name]: {
                value: value,
                error: errorVal
            }
        }));
    };

    const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.currentTarget.disabled = true;
        let errorInForm = false;
        for (let key of Object.keys(formsValues)) {
            if (formsValues[key].error == true) {
                errorInForm = true;
                break;
            }
            else if (data.formSection.forms[key].required == true && formsValues[key].value == "") {
                errorInForm = true;
                break;
            }
        }
        if (!errorInForm) {
            await fetch("api/send", {
                method: "POST",
                body: JSON.stringify({
                    fname: formsValues["fname"].value,
                    lname: formsValues["lname"].value,
                    email: formsValues["email"].value,
                    phone: formsValues["phone"].value,
                    msg: formsValues["msg"].value
                })
            }).then((response) => {
                if (response) {
                    alert(jsonData.formSection.submitSuccessMessage);
                    clearFormValues();
                }
                else {
                    alert(jsonData.formSection.submitFailureMessage);
                }
            }).catch(() => alert(jsonData.formSection.submitFailureMessage));
        }
        else {
            alert(jsonData.formSection.submitBadFormMessage)
        }
        event.currentTarget.disabled = false;
    }

    const clearFormValues = () => {
        for (let key of Object.keys(formsValues)) {
            setFormsValues(prevValues => ({
                ...prevValues,
                [key]: {
                    value: "",
                    error: false
                }
            }));
        }
    };

    return <>
        <Box>
            {Object.keys(formsValues).map((key) => {
                const config = data.formSection.forms[key];
                return (
                    <TextField
                        key={key}
                        label={config.label}
                        name={key}
                        value={formsValues[key].value}
                        onChange={handleFormsValuesChange}
                        placeholder={config.placeholder}
                        error={formsValues[key].error}
                        required={config.required}
                        {...config.formControlProps}
                    />
                );
            })}
            <Button className="form-submit-button" onClick={handleSubmit}>{data.formSection.submitButtonText}</Button>
        </Box>
    </>
}

export default ContactUsForm;