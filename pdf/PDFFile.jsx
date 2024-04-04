import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

// Create Document Component
const PDFFile = ({ data, firstName }) => (
  <Document>
    <Page
      size='A4'
      style={styles.page}
    >
      <View style={styles.section}>
        <Text>RoboCare</Text>
        <Text>{firstName}</Text>
        {/* {data.map((disease, i) => (
          <Text key={i}>{disease.name}</Text>
        ))} */}
      </View>
    </Page>
  </Document>
);

export default PDFFile;
