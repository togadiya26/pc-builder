import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { Button } from '@mui/material';
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf';
import { Cabinet, CoolingSystem, Graphics, Monitor, Motherboard, OS, Power, Processor, Ram, UPs, SSD, HDD } from './Array';

const PDF = () => {

    const { state } = useLocation();

    const [pdfUrl, setPdfUrl] = useState(null);

    const handlePrint = () => {
        html2canvas(document.getElementById("rooot")).then(canvas => {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF({
                format:[250,500]
            });
            pdf.addImage(imgData, "PNG", 0, 0);
            pdf.save("PC_Builder.pdf");
            // setPdfUrl(pdf.output("blob"));
            setPdfUrl(URL.createObjectURL(pdf.output("blob")));
        });
    };

    const handleShare = () => {
        if (pdfUrl) {
          const url = "https://wa.me/?text=" + encodeURI("Check out this PDF: ") + pdfUrl;
          window.open(url, "_blank");
        }
      };

    return (
        <div>
        <div >
            <table align='center' border={1} id='rooot'>
                <thead>
                    <tr>
                        <td><b>ITEMS</b></td>
                        <td><b>MODEL</b></td>
                        <td><b>QTY</b></td>
                        <td><b>RATE</b></td>
                        <td><b>TOTAL AMOUNT</b></td>
                    </tr>
                </thead>
                <tbody>
                    <tr key={1}>
                        <td>Processor</td>
                        {state.data.Processor !== "" ?
                            <><td>{Processor.find(obj => obj.id === state.data.Processor).Processor}</td>
                                <td>{state.Quantity.ProcessorQty}</td>
                                <td>{Processor.find(obj => obj.id === state.data.Processor).price}</td>
                                <td>{Processor.find(obj => obj.id === state.data.Processor).price}</td></> :
                            <>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td></>}
                    </tr>
                    <tr key={2}>
                        <td>Motherboard</td>
                        {state.data.Motherboard !== "" ?
                            <><td>{Motherboard.find(obj => obj.id === state.data.Motherboard).Motherboard}</td>
                                <td>{state.Quantity.MotherboardQty}</td>
                                <td>{Motherboard.find(obj => obj.id === state.data.Motherboard).price}</td>
                                <td>{Motherboard.find(obj => obj.id === state.data.Motherboard).price}</td></> :
                            <>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td></>}
                    </tr>
                    <tr key={3}>
                        <td>CoolingSystem</td>
                        {state.data.CoolingSystem !== "" ?
                            <><td>{CoolingSystem.find(obj => obj.id === state.data.CoolingSystem).CoolingSystem}</td>
                                <td>{state.Quantity.CoolingSystemQty}</td>
                                <td>{CoolingSystem.find(obj => obj.id === state.data.CoolingSystem).price}</td>
                                <td>{CoolingSystem.find(obj => obj.id === state.data.CoolingSystem).price}</td></> :
                            <>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td></>}
                    </tr>
                    <tr key={4}>
                        <td>Ram</td>
                        {state.data.Ram !== "" ?
                            <><td>{Ram.find(obj => obj.id === state.data.Ram).Ram}</td>
                                <td>{state.Quantity.RamQty}</td>
                                <td>{(Ram.find(obj => obj.id === state.data.Ram).price)}</td>
                                <td>{((state.data.Ram !== "" && Ram.find(obj => obj.id === state.data.Ram).price) * (state.Quantity.RamQty !== "" && parseInt(state.Quantity.RamQty)))}</td></> :
                            <>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td></>}
                    </tr>
                    <tr key={5}>
                        <td>SSD</td>
                        {state.data.SSD !== "" ?
                            <><td>{SSD.find(obj => obj.id === state.data.SSD).SSD}</td>
                                <td>{state.Quantity.SSDQty}</td>
                                <td>{SSD.find(obj => obj.id === state.data.SSD).price}</td>
                                <td>{SSD.find(obj => obj.id === state.data.SSD).price}</td></> :
                            <>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td></>}
                    </tr>
                    <tr key={6}>
                        <td>HDD</td>
                        {state.data.HDD !== "" ?
                            <><td>{HDD.find(obj => obj.id === state.data.HDD).HDD}</td>
                                <td>{state.Quantity.HDDQty}</td>
                                <td>{HDD.find(obj => obj.id === state.data.HDD).price}</td>
                                <td>{((state.data.HDD !== "" && HDD.find(obj => obj.id === state.data.HDD).price) * (state.Quantity.HDDQty !== "" && parseInt(state.Quantity.HDDQty)))}</td></> :
                            <>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td></>}
                    </tr>
                    <tr key={7}>
                        <td>Graphics</td>
                        {state.data.Graphics !== "" ?
                            <><td>{Graphics.find(obj => obj.id === state.data.Graphics).Graphics}</td>
                                <td>{state.Quantity.GraphicsQty}</td>
                                <td>{Graphics.find(obj => obj.id === state.data.Graphics).price}</td>
                                <td>{Graphics.find(obj => obj.id === state.data.Graphics).price}</td></> :
                            <>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td></>}
                    </tr>
                    <tr key={8}>
                        <td>Power</td>
                        {state.data.Power !== "" ?
                            <><td>{Power.find(obj => obj.id === state.data.Power).Power}</td>
                                <td>{state.Quantity.PowerQty}</td>
                                <td>{Power.find(obj => obj.id === state.data.Power).price}</td>
                                <td>{Power.find(obj => obj.id === state.data.Power).price}</td></> :
                            <>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td></>}
                    </tr>
                    <tr key={9}>
                        <td>Cabinet</td>
                        {state.data.Cabinet !== "" ?
                            <><td>{Cabinet.find(obj => obj.id === state.data.Cabinet).Cabinet}</td>
                                <td>{state.Quantity.CabinetQty}</td>
                                <td>{Cabinet.find(obj => obj.id === state.data.Cabinet).price}</td>
                                <td>{Cabinet.find(obj => obj.id === state.data.Cabinet).price}</td></> :
                            <>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td></>}
                    </tr>
                    <tr key={10}>
                        <td>Monitor</td>
                        {state.data.Monitor !== "" ?
                            <><td>{Monitor.find(obj => obj.id === state.data.Monitor).Monitor}</td>
                                <td>{state.Quantity.MonitorQty}</td>
                                <td>{Monitor.find(obj => obj.id === state.data.Monitor).price}</td>
                                <td>{Monitor.find(obj => obj.id === state.data.Monitor).price}</td></> :
                            <>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td></>}
                    </tr>
                    <tr key={11}>
                        <td>OS</td>
                        {state.data.OS !== "" ?
                            <><td>{OS.find(obj => obj.id === state.data.OS).OS}</td>
                                <td>{state.Quantity.OSQty}</td>
                                <td>{OS.find(obj => obj.id === state.data.OS).price}</td>
                                <td>{OS.find(obj => obj.id === state.data.OS).price}</td></> :
                            <>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td></>}
                    </tr>
                    <tr key={12}>
                        <td>UPs</td>
                        {state.data.UPs !== "" ?
                            <><td>{UPs.find(obj => obj.id === state.data.UPs).UPs}</td>
                                <td>{state.Quantity.UPsQty}</td>
                                <td>{UPs.find(obj => obj.id === state.data.UPs).price}</td>
                                <td>{UPs.find(obj => obj.id === state.data.UPs).price}</td></> :
                            <>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td></>}
                    </tr>
                    <tr key={13}>
                        <td><h4>TOTAL</h4></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>{
                            (state.data.Processor !== "" && Processor.find(obj => obj.id === state.data.Processor).price) +
                            (state.data.Motherboard !== "" && Motherboard.find(obj => obj.id === state.data.Motherboard).price) +
                            (state.data.CoolingSystem !== "" && CoolingSystem.find(obj => obj.id === state.data.CoolingSystem).price) +
                            ((state.data.Ram !== "" && Ram.find(obj => obj.id === state.data.Ram).price) * (state.Quantity.RamQty !== "" && parseInt(state.Quantity.RamQty))) +
                            (state.data.SSD !== "" && SSD.find(obj => obj.id === state.data.SSD).price) +
                            ((state.data.HDD !== "" && HDD.find(obj => obj.id === state.data.HDD).price) * (state.Quantity.HDDQty !== "" && parseInt(state.Quantity.HDDQty))) +
                            (state.data.Graphics !== "" && Graphics.find(obj => obj.id === state.data.Graphics).price) +
                            (state.data.Power !== "" && Power.find(obj => obj.id === state.data.Power).price) +
                            (state.data.Cabinet !== "" && Cabinet.find(obj => obj.id === state.data.Cabinet).price) +
                            (state.data.Monitor !== "" && Monitor.find(obj => obj.id === state.data.Monitor).price) +
                            (state.data.OS !== "" && OS.find(obj => obj.id === state.data.OS).price) +
                            (state.data.UPs !== "" && UPs.find(obj => obj.id === state.data.UPs).price)}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="but">
        <Button variant="contained" sx={{backgroundColor:"#ff0303de", boxShadow: "0px 3px 1px -2px rgb(0 0 0 / 23%), 0px 2px 2px 0px #f8f9fa, 0px 1px 5px 0px rgb(255 54 54 / 12%)", color:"rgb(0 0 0 / 87%)", marginBottom:"5px"}} onClick={handlePrint}>
        Export as a PDF
        </Button>
        <Button variant="contained" sx={{backgroundColor:"#ff0303de", boxShadow: "0px 3px 1px -2px rgb(0 0 0 / 23%), 0px 2px 2px 0px #f8f9fa, 0px 1px 5px 0px rgb(255 54 54 / 12%)", color:"rgb(0 0 0 / 87%)", marginBottom:"5px"}} onClick={handleShare}>
        SHARE
        </Button>
        </div>
        </div>
    )
}


export default PDF;