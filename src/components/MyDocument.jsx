import { Document, Page, Text, View } from "@react-pdf/renderer";

// Create styles
const styles = {
  page: {
    flexDirection: "column",
    backgroundColor: "tomato",
  },
  section: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 30,
  },
  header: {
    backgroundColor: "white",
    padding: 20,
  },
  pageBreak: {
    textAlign: "center",
    color: "white",
  }
};

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page} wrap>
      <View fixed style={styles.header}>
        <Text>Header</Text>
      </View>
      <View style={[styles.section, { color: "white" }]}>
        <Text>Section #1</Text>
        <Text>Section #1</Text>
      </View>
      <View style={[styles.section, { color: "white" }]}>
        <Text>Section #1</Text>
        <Text>Section #1</Text>
      </View>
      <View style={[styles.section, { color: "white" }]}>
        <Text>Section #1</Text>
        <Text>Section #1</Text>
      </View>
      <View style={[styles.section, { color: "white" }]}>
        <Text>Section #1</Text>
        <Text>Section #1</Text>
      </View>
      <View style={[styles.section, { color: "white" }]}>
        <Text>Section #1</Text>
        <Text>Section #1</Text>
      </View>
      <View wrap={false} style={styles.pageBreak}>
        <Text>Page 2</Text>
        <View style={[styles.section, { color: "white" }]}>
          <Text>Section #1</Text>
          <Text>Section #1</Text>
        </View>
        <View style={[styles.section, { color: "white" }]}>
          <Text>Section #1</Text>
          <Text>Section #1</Text>
        </View>
        <View style={[styles.section, { color: "white" }]}>
          <Text>Section #1</Text>
          <Text>Section #1</Text>
        </View>
        <View style={[styles.section, { color: "white" }]}>
          <Text>Section #1</Text>
          <Text>Section #1</Text>
        </View>
        <View style={[styles.section, { color: "white" }]}>
          <Text>Section #1</Text>
          <Text>Section #1</Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default MyDocument;
