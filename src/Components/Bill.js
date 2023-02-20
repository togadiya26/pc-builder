import { Button } from '@mui/material'
import React from 'react'
import ShareIcon from '@mui/icons-material/Share';
import PrintIcon from '@mui/icons-material/Print';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { Product } from './Array';
import { Document, Page, Text, PDFDownloadLink, View, StyleSheet, pdf } from '@react-pdf/renderer';


const styles = StyleSheet.create({
  page: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
    fontFamily: 'Helvetica',
  },

  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },

  table: {
    display: 'table',
    width: 'auto',
    margin: 'auto',
  },

  tableRow: {
    margin: 'auto',
    flexDirection: 'row',
  },

  tableCell1: {
    padding: 15,
    width: 200,
    border: '1px solid #000',
    textAlign: 'left',
    flexGrow: 1,
  },

  tableCell2: {
    padding: 15,
    width: 50,
    border: '1px solid #000',
    textAlign: 'right',
    flexGrow: 1,
  },

  tableCell3: {
    padding: 15,
    width: 70,
    border: '1px solid #000',
    textAlign: 'right',
    flexGrow: 1,
  },

  tableCell4: {
    padding: 15,
    width: 140,
    border: '1px solid #000',
    textAlign: 'right',
    flexGrow: 1,
  },

  tableCell02: {
    padding: 15,
    width: 50,
    border: '1px solid #000',
    flexGrow: 1,
  },

  tableCell03: {
    padding: 15,
    width: 70,
    border: '1px solid #000',
    flexGrow: 1,
  },

  tableCell04: {
    padding: 15,
    width: 140,
    border: '1px solid #000',
    flexGrow: 1,
  },

});


function Bill(props) {

  const [pdfData, setPdfData] = React.useState(null);

  const totalPrice = props.updatedProduct.map(product => {
    if (product.selectedItem) {
      const qty = product.selectedItem.qty;
      return qty * product.selectedItem.price;
    }
    return 0;
  }).reduce((acc, cur) => acc + cur, 0);

  const totalQty = props.updatedProduct.reduce((acc, item) => {
    if (item.selectedItem && item.selectedItem.qty) {
      const qty = parseInt(item.selectedItem.qty, 10);
      return acc + qty;
    } else {
      return acc;
    }
  }, 0);

  const removeAllItemHandler = () => {
    props.setData(Product)
    props.setQty(props.initialQty)
  }

  const handlePrint = async () => {
    const pdfBlob = await pdf(<MyDoc />).toBlob();
    const pdfUrl = URL.createObjectURL(pdfBlob);
    setPdfData(pdfUrl)

    if (pdfData !== null) {
      const frame = window.frames["pdfFrame"];
      setTimeout(() => frame.print(), 1000); // delay for 1 second (1000 ms)
    }

    // const pdfBlob = await pdf(<MyDoc />).toBlob();
    // const pdfUrl = URL.createObjectURL(pdfBlob);
    // console.log(pdfData)
    // const iFrame = document.createElement('iframe');
    // iFrame.src=pdfUrl;
    // iFrame.width="100%"
    // iFrame.height="600px"
    // iFrame.title="PC_Buider"
    // iFrame.name="pdfFrame"
    // if (document.children.length > 0) {
    //     document.removeChild(document.children[0]);
    // }
    // document.appendChild(iFrame);
    // window.frames["pdfFrame"].print();

  }

  const handleShare = async () => {
    const pdfBlob = await pdf(<MyDoc />).toBlob();
    const pdfUrl = URL.createObjectURL(pdfBlob);
    // const whatsappUrl = `whatsapp://send?text=${encodeURIComponent(pdfUrl)}`;
    // window.open(whatsappUrl, "_blank");
    const url = "https://wa.me/?text=" + encodeURI("Check out this PDF: ") + pdfUrl;
    window.open(url, "_blank");
  };


  const rows = props.updatedProduct.map((data, index) => {
    if (data.selectedItem === null) {
      return null;
    }
    return (
      <View style={styles.tableRow} key={index}>
        <Text style={styles.tableCell1}>
          {data.selectedItem !== null && data.selectedItem.item}
        </Text>
        <Text style={styles.tableCell2}>
          {data.selectedItem !== null && data.selectedItem.qty}
        </Text>
        <Text style={styles.tableCell3}>
          {data.selectedItem !== null && data.selectedItem.price}
        </Text>
        <Text style={styles.tableCell4}>
          {data.selectedItem !== null && data.selectedItem.qty * data.selectedItem.price}
        </Text>
      </View>
    );
  });


  const MyDoc = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={{ textAlign: 'right', fontSize: 15 }}>
            JENISH VIRADIYA
          </Text>
          <Text style={{ textAlign: 'right', fontSize: 15 }}>
            Address
          </Text>
          <Text style={{ textAlign: 'right', fontSize: 15 }}>
            Mobile
          </Text>
          <Text style={{ textAlign: 'right', fontSize: 15 }}>
            WebSite
          </Text>
          <Text style={{ textAlign: 'center', fontSize: 30 }}>
            PRODUCT BUILDER
          </Text>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell1}>
                PRODUCT NAME
              </Text>
              <Text style={styles.tableCell02}>
                QTY
              </Text>
              <Text style={styles.tableCell03}>
                PRICE
              </Text>
              <Text style={styles.tableCell04}>
                TOTAL PRICE
              </Text>
            </View>
            {rows}
            <View style={styles.tableRow}>
              <Text style={[styles.tableCell1, { fontWeight: 'bold' }]}>
                TOTAL
              </Text>
              <Text style={[styles.tableCell2, { fontWeight: 'bold' }]}>
                {totalQty}
              </Text>
              <Text style={[styles.tableCell3, { fontWeight: 'bold' }]}>
              </Text>
              <Text style={[styles.tableCell4, { fontWeight: 'bold' }]}>
                {totalPrice}
              </Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );

  return (
    <div className='main_div'>
      <div style={{ padding: "10px" }}>
        <b>Total: ₹{totalPrice}</b>
      </div>
      <div style={{ padding: "10px" }}>
        <Button sx={{ color: "red", '&:hover': { backgroundColor: 'burlywood' }, backgroundColor: "#deb88745", fontWeight: "600" }} onClick={removeAllItemHandler}>Remove All Item</Button>
      </div>
      <div className='display-none'>
        <iframe name="pdfFrame" src={pdfData} width="100%" height="600px" title="Example Website" ></iframe>
      </div>
      <div>
        <Button sx={{ color: "black", backgroundColor: "#deb88745", '&:hover': { backgroundColor: 'burlywood' }, marginRight: "5px" }} className='bill-button' onClick={handleShare} ><ShareIcon /></Button>
        <Button sx={{ color: "black", backgroundColor: "#deb88745", '&:hover': { backgroundColor: 'burlywood' }, marginLeft: "5px", marginRight: "5px" }} onClick={handlePrint} ><PrintIcon /></Button>
        <PDFDownloadLink document={<MyDoc />} fileName="PC_Builder.pdf">
          <Button sx={{ color: "black", backgroundColor: "#deb88745", '&:hover': { backgroundColor: 'burlywood' }, marginLeft: "5px" }} disabled={totalQty === 0} ><PictureAsPdfIcon /></Button>
        </PDFDownloadLink>
      </div>
    </div>
  )
}

export default Bill