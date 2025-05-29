import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import cv from "../cvconfig";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#ffffff",
    padding: 40,
    fontFamily: "Helvetica",
  },
  header: {
    marginBottom: 30,
    borderBottom: "2 solid #333333",
    paddingBottom: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    color: "#666666",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 12,
    color: "#888888",
    lineHeight: 1.5,
  },
  contactInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    fontSize: 10,
    color: "#666666",
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 12,
    borderBottom: "1 solid #cccccc",
    paddingBottom: 5,
  },
  jobContainer: {
    marginBottom: 15,
  },
  jobHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  jobTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#333333",
  },
  company: {
    fontSize: 11,
    color: "#666666",
    marginBottom: 5,
  },
  years: {
    fontSize: 10,
    color: "#888888",
  },
  description: {
    fontSize: 10,
    color: "#555555",
    lineHeight: 1.4,
    marginTop: 5,
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 15,
  },
  skillCategory: {
    marginRight: 30,
    marginBottom: 10,
    flex: 1,
    minWidth: "45%",
  },
  skillCategoryTitle: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 5,
  },
  skillsList: {
    fontSize: 9,
    color: "#666666",
    lineHeight: 1.3,
  },
  educationItem: {
    marginBottom: 10,
  },
  degree: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#333333",
  },
  school: {
    fontSize: 10,
    color: "#666666",
    marginTop: 2,
  },
  languageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  language: {
    fontSize: 10,
    color: "#666666",
  },
  level: {
    fontSize: 10,
    color: "#888888",
  },
});

// Helper function to extract text from React nodes
const extractTextFromReactNode = (node: React.ReactNode): string => {
  if (typeof node === "string") return node;
  if (typeof node === "number") return node.toString();
  if (!node) return "";

  if (React.isValidElement(node)) {
    const props = node.props as { children?: React.ReactNode };
    if (node.type === "p") {
      return extractTextFromReactNode(props.children) + "\n\n";
    }
    return extractTextFromReactNode(props.children);
  }

  if (Array.isArray(node)) {
    return node.map(extractTextFromReactNode).join("");
  }

  return "";
};

export const CVPdf: React.FC = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>{cv.personal.name}</Text>
        <Text style={styles.title}>{cv.personal.title}</Text>
        <Text style={styles.subtitle}>{cv.hero.subtext}</Text>
        <View style={styles.contactInfo}>
          <Text>Email: {cv.personal.email}</Text>
          <Text>Website: {cv.personal.website}</Text>
          <Text>GitHub: github.com/{cv.personal.github}</Text>
          <Text>LinkedIn: linkedin.com/in/{cv.personal.linkedin}</Text>
        </View>
      </View>

      {/* Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experience</Text>
        {cv.jobs.map((job, index) => (
          <View key={index} style={styles.jobContainer}>
            <View style={styles.jobHeader}>
              <Text style={styles.jobTitle}>{job.title}</Text>
              <Text style={styles.years}>{job.years}</Text>
            </View>
            <Text style={styles.company}>{job.company}</Text>
            <Text style={styles.description}>
              {extractTextFromReactNode(job.experience)}
            </Text>
          </View>
        ))}
      </View>

      {/* Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skills</Text>
        <View style={styles.skillsContainer}>
          {cv.skills.map((skillSet, index) => (
            <View key={index} style={styles.skillCategory}>
              <Text style={styles.skillCategoryTitle}>
                {skillSet.sectionName}
              </Text>
              <Text style={styles.skillsList}>
                {skillSet.skills.join(", ")}
              </Text>
            </View>
          ))}
        </View>
      </View>

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        {cv.education.map((edu, index) => (
          <View key={index} style={styles.educationItem}>
            <View style={styles.jobHeader}>
              <Text style={styles.degree}>{edu.degree}</Text>
              <Text style={styles.years}>{edu.years}</Text>
            </View>
            <Text style={styles.school}>{edu.school}</Text>
          </View>
        ))}
      </View>

      {/* Languages */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Languages</Text>
        {cv.languages.map((lang, index) => (
          <View key={index} style={styles.languageContainer}>
            <Text style={styles.language}>{lang.lang}</Text>
            <Text style={styles.level}>{lang.level}</Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);
