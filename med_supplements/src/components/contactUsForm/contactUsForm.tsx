"use client";

import { Box } from "@mui/system";
import "./contactUsForm.scss";
import React, { FC, useEffect, useState } from "react";
import { Button, FormControl, Input, TextField } from "@mui/material";
import jsonData from "../../data/contactUs.json";


const ContactUsForm: FC<{}> = () => {
    let data: any = jsonData;
    const formsDataInitialState = Object.keys(data.formSection.forms).reduce((stateObj, key) => {
        stateObj[key] = "";
        return stateObj
    }, {} as Record<string, string>);

    const [formsValues, setFormsValues] = useState(formsDataInitialState);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormsValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));
    };

    const handleSubmit = async () => {
        await fetch("api/send", {
            method: "POST",
            body: JSON.stringify({
                fname: formsValues["fname"],
                lname: formsValues["lname"],
                email: formsValues["email"],
                phone: formsValues["phone"],
                msg: formsValues["msg"]
            })
        })
    }


    return <>
        <Box>
            {Object.keys(formsValues).map((key) => {
                const config = data.formSection.forms[key];
                return (
                    <TextField
                        key={key}
                        label={config.label}
                        name={key}
                        value={formsValues[key]}
                        onChange={handleChange}
                        placeholder={config.placeholder}
                        {...config.formControlProps}
                    />
                );
            })}
            <Button onClick={handleSubmit}>Send</Button>
        </Box>
    </>
}

export default ContactUsForm;