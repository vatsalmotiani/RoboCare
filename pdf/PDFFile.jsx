import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 30,
    backgroundColor: "#F2F2F2",
  },
  section: {
    marginBottom: 20,
  },
  header: {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  content: {
    fontSize: 12,
    lineHeight: 1.5,
    color: "#4f4f4f",
    marginBottom: 8,
  },
  subheading: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#2563EB",
    marginBottom: 5,
  },
  diseaseItem: {
    marginBottom: 8,
  },
  diseaseTitle: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
    fontWeight: "bold",
  },
  diseaseName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  hr: {
    marginTop: 10,
    marginBottom: 10,
    borderBottom: "1px solid #DDD",
  },
  disclaimer: {
    fontSize: 10,
    color: "#999",
    textAlign: "justify",
  },
  robocareTitle: {
    backgroundColor: "#2563EB",
    padding: 10,
    width: "100%",
    textAlign: "center",
    marginBottom: 20,
  },
  robocareTitleText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFF",
  },
});

const PDFFile = ({ getFirstName, getData }) => (
  <Document>
    <Page
      size='A4'
      style={styles.page}
    >
      <View style={styles.section}>
        {/* RoboCare Title */}
        <View style={styles.robocareTitle}>
          <Text style={styles.robocareTitleText}>RoboCare</Text>
        </View>

        <View style={styles.header}>
          {/* <Text style={styles.title}>Health Assessment Results</Text> */}
          <Text style={styles.title}>{getFirstName()}&apos;s Health Assessment Results</Text>
        </View>

        {/* Disease Data */}
        <Text style={styles.content}>Based on the symptoms you entered, we have analyzed your health concerns and identified potential problems. Here are the results:</Text>
        <Text style={styles.hr} />

        <View>
          {getData().map(({ name, percentage, description, cause, cure }, i) => (
            <View
              key={i}
              style={styles.diseaseItem}
            >
              <View style={styles.diseaseTitle}>
                <Text style={styles.diseaseName}>{i + 1}. </Text>
                <Text style={styles.diseaseName}>{name}</Text>
              </View>
              <Text style={styles.subheading}>Probability:</Text>
              <Text style={styles.content}>{Math.floor(percentage)}%</Text>
              <Text style={styles.subheading}>Description:</Text>
              <Text style={styles.content}>{description}</Text>
              <Text style={styles.subheading}>Cause:</Text>
              <Text style={styles.content}>{cause}</Text>
              <Text style={styles.subheading}>Treatment:</Text>
              <View>
                {cure.map((point, j) => (
                  <Text
                    key={j}
                    style={styles.content}
                  >
                    - {point}
                  </Text>
                ))}
              </View>
              <Text style={styles.hr} />
            </View>
          ))}
        </View>
      </View>

      {/* Disclaimer */}
      <Text style={styles.disclaimer}>The information provided here is for informational purposes only and should not be construed as medical advice. Please consult a doctor for any medical concerns. For immediate medical assistance in India, call the national helpline number: 104.</Text>
    </Page>
  </Document>
);

export default PDFFile;
