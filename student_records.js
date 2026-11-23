// Scenario 1.1 - Student Records (MongoDB CRUD Operations)
// Database: college | Collection: students

// Switch to 'college' database (works in mongosh, load(), piped input, and copy-paste)
db = db.getSiblingDB("college");

// Reset collection so script runs cleanly every time
db.students.drop();

// 1. Create database 'college' and insert one student using insertOne()
print("--- Step 1: Insert One Student ---");
printjson(
  db.students.insertOne({
    rollNo: 101,
    name: "Arun",
    dept: "CSE",
    marks: 78,
    city: "Chennai"
  })
);

// 2. Insert four more students in a single command using insertMany()
print("\n--- Step 2: Insert Four More Students ---");
printjson(
  db.students.insertMany([
    { rollNo: 102, name: "Priya", dept: "ECE", marks: 85, city: "Madurai" },
    { rollNo: 103, name: "Karthik", dept: "CSE", marks: 62, city: "Chennai" },
    { rollNo: 104, name: "Divya", dept: "IT", marks: 74, city: "Coimbatore" },
    { rollNo: 105, name: "Suresh", dept: "CSE", marks: 91, city: "Trichy" }
  ])
);

// 3. Display all students, then display only the students of the CSE department
print("\n--- Step 3a: All Students ---");
printjson(db.students.find().toArray());

print("\n--- Step 3b: CSE Department Students ---");
printjson(db.students.find({ dept: "CSE" }).toArray());

// 4. Correct the marks of roll number 103 to 68
print("\n--- Step 4: Update Marks of Roll No 103 to 68 ---");
printjson(
  db.students.updateOne(
    { rollNo: 103 },
    { $set: { marks: 68 } }
  )
);

// 5. Add a field semester with the value 3 to every CSE student
print("\n--- Step 5: Add semester: 3 to all CSE Students ---");
printjson(
  db.students.updateMany(
    { dept: "CSE" },
    { $set: { semester: 3 } }
  )
);

// 6. Delete the record of roll number 104 (the student has left the college)
print("\n--- Step 6: Delete Roll No 104 ---");
printjson(
  db.students.deleteOne({ rollNo: 104 })
);

// 7. Display the total number of students that remain
print("\n--- Step 7: Remaining Student Count ---");
print("Total remaining students: " + db.students.countDocuments());
