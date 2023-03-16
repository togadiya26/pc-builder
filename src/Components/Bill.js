import { Button } from '@mui/material'
import React from 'react'
import ShareIcon from '@mui/icons-material/Share';
import PrintIcon from '@mui/icons-material/Print';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { Product } from './Array';
import { Document, Page, Text, PDFDownloadLink, View, StyleSheet, pdf, Image } from '@react-pdf/renderer';


const styles = StyleSheet.create({
  page: {
    paddingTop: 10,
    // paddingBottom: 65,
    paddingHorizontal: 35,
    fontFamily: 'Times-Roman',
  },

  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },

  table: {
    display: 'table',
    width: 'auto',
    margin: 10,
  },

  tableRow: {
    margin: 'auto',
    flexDirection: 'row',
  },

  tableCell1: {
    padding: 10,
    width: 120,
    border: '1px solid #000',
    textAlign: 'left',
    flexGrow: 1,
    fontWeight: 'bold',
    fontSize: '12px'
  },

  tableCell2: {
    padding: 10,
    width: 190,
    border: '1px solid #000',
    textAlign: 'left',
    flexGrow: 1,
    fontWeight: 'bold',
    fontSize: '12px'
  },

  tableCell3: {
    padding: 10,
    width: 50,
    border: '1px solid #000',
    textAlign: 'right',
    flexGrow: 1,
    fontWeight: 'bold',
    fontSize: '12px'
  },

  tableCell4: {
    padding: 10,
    width: 50,
    border: '1px solid #000',
    textAlign: 'right',
    flexGrow: 1,
    fontWeight: 'bold',
    fontSize: '12px'
  },

  tableCell5: {
    padding: 10,
    width: 60,
    border: '1px solid #000',
    textAlign: 'right',
    flexGrow: 1,
    fontWeight: 'bold',
    fontSize: '12px'
  },

  tableCell01: {
    padding: 10,
    width: 120,
    border: '1px solid #000',
    textAlign: 'center',
    flexGrow: 1,
    fontSize: '15px'
  },

  tableCell02: {
    padding: 10,
    width: 190,
    border: '1px solid #000',
    textAlign: 'center',
    flexGrow: 1,
    fontSize: '15px'
  },

  tableCell03: {
    padding: 10,
    width: 50,
    border: '1px solid #000',
    flexGrow: 1,
    textAlign: 'center',
    fontSize: '15px'
  },

  tableCell04: {
    paddingTop: 10,
    width: 50,
    border: '1px solid #000',
    flexGrow: 1,
    textAlign: 'center',
    fontSize: '15px'
  },

  tableCell05: {
    paddingTop: 10,
    width: 60,
    border: '1px solid #000',
    flexGrow: 1,
    textAlign: 'center',
    fontSize: '15px'
  },

  tableCell001: {
    padding: 10,
    width: 120,
    border: '1px solid #000',
    textAlign: 'center',
    flexGrow: 1,
    fontSize: '15px'
  },

  tableCell002: {
    padding: 10,
    width: 190,
    border: '1px solid #000',
    textAlign: 'center',
    flexGrow: 1,
    fontSize: '15px'
  },

  tableCell003: {
    padding: 10,
    width: 50,
    border: '1px solid #000',
    flexGrow: 1,
    textAlign: 'right',
    fontSize: '15px'
  },

  tableCell004: {
    paddingTop: 10,
    width: 50,
    border: '1px solid #000',
    flexGrow: 1,
    textAlign: 'right',
    fontSize: '15px'
  },

  tableCell005: {
    paddingTop: 10,
    width: 60,
    border: '1px solid #000',
    flexGrow: 1,
    textAlign: 'right',
    fontSize: '15px'
  }

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

    const frame = window.frames["pdfFrame"];
    setTimeout(() => frame.print(), 1000);

  }

  const handleShare = async () => {
    const pdfBlob = await pdf(<MyDoc />).toBlob();
    const pdfUrl = URL.createObjectURL(pdfBlob);
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
          {data.selectedItem !== null && data.selectedItem.name}
        </Text>
        <Text style={styles.tableCell2}>
          {data.selectedItem !== null && data.selectedItem.productname}
        </Text>
        <Text style={styles.tableCell3}>
          {data.selectedItem !== null && data.selectedItem.qty}
        </Text>
        <Text style={styles.tableCell4}>
          {data.selectedItem !== null && data.selectedItem.price}
        </Text>
        <Text style={styles.tableCell5}>
          {data.selectedItem !== null && data.selectedItem.qty * data.selectedItem.price}
        </Text>
      </View>
    );
  });


  const MyDoc = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <Text style={{ fontSize: 30, width: 100, border: '1px solid #000', textAlign: "center", paddingTop: 12 }}>
                <Image src="https://imgs.search.brave.com/jgkR5n9dcPFn1yKtgvbIl0cHxdNNtP_qKinyFrw1Bpc/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9waXhl/bGNsZXJrcy5jb20v/cGljcy8wMDAvMzU1/LzIyOS85ZjAxMDIy/NTBmYzMxMjVjMzMx/YjdhZmI0MTdmNzc0/My5qcGc" style={{ height: 30, width: 30 }} />
              </Text>
              <Text style={{ fontSize: 30, width: 370, border: '1px solid #000', textAlign: "center", paddingTop: 8 }}>
                PRODUCT BUILDER
              </Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={{ fontSize: 15, width: 470, border: '1px solid #000', textAlign: "center", padding: 10 }}>
                ADDRESS: PRODUCT BUILDER
              </Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={{ fontSize: 15, width: 470, border: '1px solid #000', textAlign: "center", padding: 10 }}>
                E-mail: test@admin.com, Phone No: 9874563210
              </Text>
            </View>
          </View>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell01}>
                {new Date().getDate()}/{new Date().getMonth()}/{new Date().getFullYear()}
              </Text>
              <Text style={styles.tableCell02}>
                PRODUCT NAME
              </Text>
              <Text style={styles.tableCell03}>
                QTY
              </Text>
              <Text style={styles.tableCell04}>
                RATE
              </Text>
              <Text style={styles.tableCell05}>
                TOTAL
              </Text>
            </View>
            {rows}
            <View style={styles.tableRow}>
              <Text style={[styles.tableCell001, { fontWeight: 'bold' }]}>
                TOTAL
              </Text>
              <Text style={[styles.tableCell002, { fontWeight: 'bold' }]}>
              </Text>
              <Text style={[styles.tableCell003, { fontWeight: 'bold' }]}>
                {totalQty}
              </Text>
              <Text style={[styles.tableCell004, { fontWeight: 'bold' }]}>
              </Text>
              <Text style={[styles.tableCell005, { fontWeight: 'bold' }]}>
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
        <Button sx={{
          color: "red",
          '&:hover': { backgroundColor: 'burlywood' },
          backgroundColor: "#deb88745", fontWeight: "600"
        }}
          onClick={removeAllItemHandler}
        >
          Remove All Item
        </Button>
      </div>
      <div className='display-none'>
        <iframe name="pdfFrame" src={pdfData} width="100%" height="600px" title="Example Website" ></iframe>
      </div>
      <div>
        <Button sx={{
          color: "black",
          minWidth: "40px",
          backgroundColor: "#deb88745",
          '&:hover': { backgroundColor: 'burlywood' },
          marginRight: "5px"
        }}
          className='bill-button'
          onClick={handleShare} >
          <ShareIcon />
        </Button>
        <Button sx={{
          color: "black",
          minWidth: "40px",
          backgroundColor: "#deb88745",
          '&:hover': { backgroundColor: 'burlywood' },
          marginLeft: "5px",
          marginRight: "5px"
        }}
          onClick={handlePrint} >
          <PrintIcon />
        </Button>
        <PDFDownloadLink document={<MyDoc />} fileName="PC_Builder.pdf">
          <Button sx={{
            color: "black",
            minWidth: "40px",
            backgroundColor: "#deb88745",
            '&:hover': { backgroundColor: 'burlywood' },
            marginLeft: "5px"
          }}
            disabled={totalQty === 0} >
            <PictureAsPdfIcon />
          </Button>
        </PDFDownloadLink>
      </div>
    </div>
  )
}

export default Bill