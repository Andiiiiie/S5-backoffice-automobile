'use client';
import {addLocale} from "primereact/api";
import frPrimeReact from "@/app/(core)/ui/fr.json";
import {useEffect, useState} from "react";
import $ from 'jquery';
import 'parsleyjs';


export default function PrimeConfig() {
    addLocale("fr", frPrimeReact);
    useEffect(() => {
        window.onload = () => {
            const theme = window.localStorage.getItem("tablerTheme") || undefined;
            if (theme === "dark") {
                // @ts-ignore
                import("primereact/resources/themes/lara-dark-blue/theme.css")
            } else {
                // @ts-ignore
                import("primereact/resources/themes/lara-light-blue/theme.css")
            }

            // @ts-ignore
            $('#form').parsley({
                errorClass: 'is-invalid',
                successClass: 'is-valid is-valid-lite',
                errorsWrapper: '<span class="invalid-feedback"></span>',
                errorTemplate: '<span></span>',
                trigger: 'change'
            });

            $('#loader-div').fadeOut(300);
        }
        $('#loader-div').fadeOut(300);
    });
    return(<>
    </>);
}