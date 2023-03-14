export const getProcessor = async () => {
    const response = await fetch('http://pc-builder-backend-git-main-togadiya123.vercel.app/getitem/getprocessors');
    const data = await response.json();
    return data;
}

export const getMotherboard = async (token) => {
    const response = await fetch('http://pc-biult-backend-git-main-togadiya123.vercel.app/api/user/getmotherboard', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
    const data = await response.json();
    return data;
}

export const getRAM = async (token) => {
    const response = await fetch('http://pc-biult-backend-git-main-togadiya123.vercel.app/api/user/getram', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
    const data = await response.json();
    return data;
}

export const getStorage1 = async (token) => {
    const response = await fetch('http://pc-biult-backend-git-main-togadiya123.vercel.app/api/user/getstorage1', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
    const data = await response.json();
    return data;
}

export const getStorage2 = async (token) => {
    const response = await fetch('http://pc-biult-backend-git-main-togadiya123.vercel.app/api/user/getstorage2', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
    const data = await response.json();
    return data;
}

export const getCabinet = async (token) => {
    const response = await fetch('http://pc-biult-backend-git-main-togadiya123.vercel.app/api/user/getcabinet', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
    const data = await response.json();
    return data;
}

export const getCabinetFan = async (token) => {
    const response = await fetch('http://pc-biult-backend-git-main-togadiya123.vercel.app/api/user/getcabinetfan', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
    const data = await response.json();
    return data;
}

export const getCooler = async (token) => {
    const response = await fetch('http://pc-biult-backend-git-main-togadiya123.vercel.app/api/user/getcooler', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
    const data = await response.json();
    return data;
}

export const getGraphicsCard = async (token) => {
    const response = await fetch('http://pc-biult-backend-git-main-togadiya123.vercel.app/api/user/getgraphicscard', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
    const data = await response.json();
    return data;
}

export const getPowerSupplyUnit = async (token) => {
    const response = await fetch('http://pc-biult-backend-git-main-togadiya123.vercel.app/api/user/getpowersupplyunit', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
    const data = await response.json();
    return data;
}

export const getMonitor = async (token) => {
    const response = await fetch('http://pc-biult-backend-git-main-togadiya123.vercel.app/api/user/getmonitor', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
    const data = await response.json();
    return data;
}

export const getKeyboard = async (token) => {
    const response = await fetch('http://pc-biult-backend-git-main-togadiya123.vercel.app/api/user/getkeyboard', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
    const data = await response.json();
    return data;
}

export const getMouse = async (token) => {
    const response = await fetch('http://pc-biult-backend-git-main-togadiya123.vercel.app/api/user/getmouse', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
    const data = await response.json();
    return data;
}

export const getAccessories = async (token) => {
    const response = await fetch('http://pc-biult-backend-git-main-togadiya123.vercel.app/api/user/getaccessories', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
    const data = await response.json();
    return data;
}