# Scenario 1.1 – Student Records (MongoDB)

## Overview
This project implements basic MongoDB CRUD operations for managing a small college's student register.

- **Database:** `college`
- **Collection:** `students`
- **Topics:** `insertOne()`, `insertMany()`, `find()`, `updateOne()`, `updateMany()`, `deleteOne()`, `countDocuments()`

## Files Included
- `student_records.js`: Error-free executable `mongosh` script covering Steps 1 through 7.
- `output_screenshot.png`: Terminal output screenshot of the executed script.
- `README.md`: Setup and execution instructions.

## How to Run
Make sure MongoDB (`mongod`) is running, then run:

```bash
mongosh --file student_records.js
```

Or inside `mongosh`:
```javascript
load("student_records.js")
```
