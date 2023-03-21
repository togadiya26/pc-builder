
export const getProcessor = async () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const response = await fetch('https://pc-builder-backend-git-main-togadiya123.vercel.app/item/getitem/processors', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  const data = await response.json();
  return data;
}

export const getMotherboard = async () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const response = await fetch('https://pc-builder-backend-git-main-togadiya123.vercel.app/item/getitem/motherboards', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  const data = await response.json();
  return data;
}

export const getRAM = async () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const response = await fetch('https://pc-builder-backend-git-main-togadiya123.vercel.app/item/getitem/rams', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  const data = await response.json();
  return data;
}

export const getStorage1 = async () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const response = await fetch('https://pc-builder-backend-git-main-togadiya123.vercel.app/item/getitem/storage1', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  const data = await response.json();
  return data;
}

export const getStorage2 = async () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const response = await fetch('https://pc-builder-backend-git-main-togadiya123.vercel.app/item/getitem/storage2', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  const data = await response.json();
  return data;
}

export const getCabinet = async () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const response = await fetch('https://pc-builder-backend-git-main-togadiya123.vercel.app/item/getitem/cabinets', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  const data = await response.json();
  return data;
}

export const getCabinetFan = async () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const response = await fetch('https://pc-builder-backend-git-main-togadiya123.vercel.app/item/getitem/cabinetfans', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  const data = await response.json();
  return data;
}

export const getCooler = async () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const response = await fetch('https://pc-builder-backend-git-main-togadiya123.vercel.app/item/getitem/coolers', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  const data = await response.json();
  return data;
}

export const getGraphicsCard = async () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const response = await fetch('https://pc-builder-backend-git-main-togadiya123.vercel.app/item/getitem/graphicscards', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  const data = await response.json();
  return data;
}

export const getPowerSupplyUnit = async () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const response = await fetch('https://pc-builder-backend-git-main-togadiya123.vercel.app/item/getitem/powersupplyunits', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  const data = await response.json();
  return data;
}

export const getMonitor = async () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const response = await fetch('https://pc-builder-backend-git-main-togadiya123.vercel.app/item/getitem/monitors', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  const data = await response.json();
  return data;
}

export const getKeyboard = async () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const response = await fetch('https://pc-builder-backend-git-main-togadiya123.vercel.app/item/getitem/keyboards', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  const data = await response.json();
  return data;
}

export const getMouse = async () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const response = await fetch('https://pc-builder-backend-git-main-togadiya123.vercel.app/item/getitem/mouses', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  const data = await response.json();
  return data;
}

export const getAccessories = async () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const response = await fetch('https://pc-builder-backend-git-main-togadiya123.vercel.app/item/getitem/accessories', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  const data = await response.json();
  return data;
}

export const getCompanyDetails = async () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const response = await fetch('https://pc-builder-backend-git-main-togadiya123.vercel.app/user/getuserdetails', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  const data = await response.json();
  return data;
}

export const getAllProducts = async () => {
  const response = await fetch('https://pc-builder-backend-git-main-togadiya123.vercel.app/getallitem');
  const data = await response.json();
  return data;
}