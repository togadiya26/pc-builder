import { Button } from '@mui/material';
import React from 'react'
import { Product } from './Array'
import ScrollDialog from './ScrollDialog'
import DeleteIcon from '@mui/icons-material/Delete';
import Bill from './Bill';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function PcBuilder() {

  const initialQty = {
    "Processor": "1",
    "Motherboard": "1",
    "Ram": "1",
    "Storage1": "1",
    "Storage2": "1",
    "Cabinet": "1",
    "Cabinetfan": "1",
    "Cooler": "1",
    "Graphicscard": "1",
    "Powersupplyunit": "1",
    "Monitor": "1",
    "Keyboard": "1",
    "Mouse": "1",
    "Accessories": "1"
  }

  const [data, setData] = React.useState(Product)
  const [qty, setQty] = React.useState(initialQty)


  const onItemSelectChangeHandler = (itemObject) => {

    const obj = itemObject
    const newData = data.map(item => {
      if (item.name === obj.name) {
        return { ...item, selectedItem: obj };
      }
      return item;
    });
    setData(newData);

  };

  const removeSelectItemHandler = (name) => {

    const newData = data.map(item => {
      if (item.name === name) {
        return { ...item, selectedItem: null };
      }
      return item;
    });
    setData(newData);

    setQty(prevQty => ({
      ...prevQty,
      [name]: initialQty[name]
    }));

  }

  const handleIncrement = (item) => {
    setQty((prevQty) => ({
      ...prevQty,
      [item]: (parseInt(prevQty[item]) + 1).toString()
    }));
  };

  const handleDecrement = (item) => {
    setQty((prevQty) => ({
      ...prevQty,
      [item]: (parseInt(prevQty[item]) - 1).toString()
    }));
  };

  function addQtyToSelectedItem(Product, Qty) {
    return Product.map(item => {
      if (item.selectedItem !== null) {
        item.selectedItem.qty = Qty[item.Qty];
      }
      return item;
    });
  }

  const updatedProduct = addQtyToSelectedItem(data, qty)

  return (
    <React.Fragment>
      <div className="App">
        <div className='PC'>
          {updatedProduct.map((data, index) => (
            <div className='main_div' key={index}>
              <div className='child_div'>
                {data.selectedItem === null ? <img src={data.img} height={50} width={50} alt="product" /> : <img src={data.selectedItem.image} height={50} width={50} alt="product" />}
              </div>
              <div className='child_div'>
                {data.selectedItem === null ? <div style={{fontSize: 'xx-large'}}><b>{data.title}</b></div> :
                  <>
                    <div style={{fontSize: 'xx-large'}}><b>{data.selectedItem.name}</b></div>
                    <div style={{fontSize: 'x-large'}}>{data.selectedItem.productname}</div>
                    <div>
                      ₹{data.selectedItem.price}
                      <Button sx={{ color: 'red', minWidth: "40px", '&:hover': { backgroundColor: '#ff000029' }, marginLeft: "10px", marginRight: "10px" }} onClick={() => handleDecrement(data.selectedItem.name)} disabled={data.selectedItem.qty === '1'}><RemoveIcon /></Button>
                      {data.selectedItem.qty}
                      <Button sx={{ color: 'blue', minWidth: "40px", '&:hover': { backgroundColor: '#0000ff21' }, marginLeft: "10px" }} onClick={() => handleIncrement(data.selectedItem.name)}><AddIcon /></Button>
                    </div></>}
              </div>
              <div style={{ textAlign: "end", paddingBottom: "5px", paddingRight: "5px" }}>
                {data.selectedItem === null ? <ScrollDialog initialQty={initialQty} setQty={setQty} onChange={onItemSelectChangeHandler} title={data.name} /> :
                  <div style={{ display: "inline-flex" }}>
                    ₹{data.selectedItem.price * data.selectedItem.qty}
                    <ScrollDialog initialQty={initialQty} setQty={setQty} onChange={onItemSelectChangeHandler} title={data.name} />
                    <Button sx={{ color: "red", minWidth: "50px", backgroundColor: "#00008bab", '&:hover': { backgroundColor: 'darkblue' }, marginLeft: "10px" }}
                      onClick={() => removeSelectItemHandler(data.name)
                      }><DeleteIcon /></Button>
                  </div>}
              </div>
            </div>))}
        </div>
        <div className='Bill'><Bill updatedProduct={updatedProduct} data={data} qty={qty} setData={setData} setQty={setQty} initialQty={initialQty} /></div>
      </div>
    </React.Fragment>
  )
}

export default PcBuilder