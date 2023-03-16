export const getProcessor = async () => {
    const response = await fetch('https://pc-builder-backend-git-main-togadiya123.vercel.app/getitem/getprocessors');
    const data = await response.json();
    return data;
}

export const getMotherboard = async () => {
    const response = await fetch('https://pc-builder-backend-git-main-togadiya123.vercel.app/getitem/getmotherboard');
    const data = await response.json();
    return data;
}

export const getRAM = async () => {
    const response = await fetch('https://pc-builder-backend-git-main-togadiya123.vercel.app/getitem/getram');
    const data = await response.json();
    return data;
}

export const getStorage1 = async () => {
    const response = await fetch('https://pc-builder-backend-git-main-togadiya123.vercel.app/getitem/getstorage1 ');
    const data = await response.json();
    return data;
}

export const getStorage2 = async () => {
    const response = await fetch('https://pc-builder-backend-git-main-togadiya123.vercel.app/getitem/getstorage2');
    const data = await response.json();
    return data;
}

export const getCabinet = async () => {
    const response = await fetch('https://pc-builder-backend-git-main-togadiya123.vercel.app/getitem/getcabinet');
    const data = await response.json();
    return data;
}

export const getCabinetFan = async () => {
    const response = await fetch('https://pc-builder-backend-git-main-togadiya123.vercel.app/getitem/getcabinetfan');
    const data = await response.json();
    return data;
}

export const getCooler = async () => {
    const response = await fetch('https://pc-builder-backend-git-main-togadiya123.vercel.app/getitem/getcooler');
    const data = await response.json();
    return data;
}

export const getGraphicsCard = async () => {
    const response = await fetch('https://pc-builder-backend-git-main-togadiya123.vercel.app/getitem/getgraphicscard');
    const data = await response.json();
    return data;
}

export const getPowerSupplyUnit = async () => {
    const response = await fetch('https://pc-builder-backend-git-main-togadiya123.vercel.app/getitem/getpowersupplyunit');
    const data = await response.json();
    return data;
}

export const getMonitor = async () => {
    const response = await fetch('https://pc-builder-backend-git-main-togadiya123.vercel.app/getitem/getmonitor');
    const data = await response.json();
    return data;
}

export const getKeyboard = async () => {
    const response = await fetch('https://pc-builder-backend-git-main-togadiya123.vercel.app/getitem/getkeyboard');
    const data = await response.json();
    return data;
}

export const getMouse = async () => {
    const response = await fetch('https://pc-builder-backend-git-main-togadiya123.vercel.app/getitem/getmouse');
    const data = await response.json();
    return data;
}

export const getAccessories = async () => {
    const response = await fetch('https://pc-builder-backend-git-main-togadiya123.vercel.app/getitem/getaccessories');
    const data = await response.json();
    return data;
}