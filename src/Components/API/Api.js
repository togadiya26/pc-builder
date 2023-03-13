export const getProcessor = async () => {
    const response = await fetch('http://pc-biult-backend-git-main-togadiya123.vercel.app/api/user/getuiprocessor');
    const data = await response.json();
    return data;
}

export const getMotherboard = async () => {
    const response = await fetch('http://pc-biult-backend-git-main-togadiya123.vercel.app/api/user/getuimotherboard');
    const data = await response.json();
    return data;
}

export const getRAM = async () => {
    const response = await fetch('http://pc-biult-backend-git-main-togadiya123.vercel.app/api/user/getuiram');
    const data = await response.json();
    return data;
}

export const getStorage1 = async () => {
    const response = await fetch('http://pc-biult-backend-git-main-togadiya123.vercel.app/api/user/getuistorage1 ');
    const data = await response.json();
    return data;
}

export const getStorage2 = async () => {
    const response = await fetch('http://pc-biult-backend-git-main-togadiya123.vercel.app/api/user/getuistorage2');
    const data = await response.json();
    return data;
}

export const getCabinet = async () => {
    const response = await fetch('http://pc-biult-backend-git-main-togadiya123.vercel.app/api/user/getuicabinet');
    const data = await response.json();
    return data;
}

export const getCabinetFan = async () => {
    const response = await fetch('http://pc-biult-backend-git-main-togadiya123.vercel.app/api/user/getuicabinetfan');
    const data = await response.json();
    return data;
}

export const getCooler = async () => {
    const response = await fetch('http://pc-biult-backend-git-main-togadiya123.vercel.app/api/user/getuicooler');
    const data = await response.json();
    return data;
}

export const getGraphicsCard = async () => {
    const response = await fetch('http://pc-biult-backend-git-main-togadiya123.vercel.app/api/user/getuigraphicscard');
    const data = await response.json();
    return data;
}

export const getPowerSupplyUnit = async () => {
    const response = await fetch('http://pc-biult-backend-git-main-togadiya123.vercel.app/api/user/getuipowersupplyunit');
    const data = await response.json();
    return data;
}

export const getMonitor = async () => {
    const response = await fetch('http://pc-biult-backend-git-main-togadiya123.vercel.app/api/user/getuimonitor');
    const data = await response.json();
    return data;
}

export const getKeyboard = async () => {
    const response = await fetch('http://pc-biult-backend-git-main-togadiya123.vercel.app/api/user/getuikeyboard');
    const data = await response.json();
    return data;
}

export const getMouse = async () => {
    const response = await fetch('http://pc-biult-backend-git-main-togadiya123.vercel.app/api/user/getuimouse');
    const data = await response.json();
    return data;
}

export const getAccessories = async () => {
    const response = await fetch('http://pc-biult-backend-git-main-togadiya123.vercel.app/api/user/getuiaccessories');
    const data = await response.json();
    return data;
}