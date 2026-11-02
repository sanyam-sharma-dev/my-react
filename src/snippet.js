console.log("--- 1. DATA TYPES ---");
const treatmentName = "Physiotherapy"; // String
let treatmentCost = 50;               // Number
const isAvailable = true;             // Boolean
let appointmentDate;                  // Undefined
const notes = null;                   // Null
const treatment = { id: "T001", name: "Physiotherapy" }; // Object
const treatmentTypes = ["Dental", "Physiotherapy"];       // Array

console.log("Types:", typeof treatmentName, typeof treatmentCost, typeof isAvailable);
console.log("Treatment Object:", treatment);
console.log("Treatment Types:", treatmentTypes);

console.log("\n--- 2. ARITHMETIC OPERATORS ---");
const costPerUnit = 50;
const quantity = 3;
const totalCost = costPerUnit * quantity;
console.log("Total Cost Calculation:", totalCost); // Output: 150

console.log("\n--- 3. CONDITIONAL STATEMENTS ---");
const availableSlots = 3;
if (availableSlots === 0) {
  console.log("Fully Booked");
} else if (availableSlots < 5) {
  console.log("Limited Availability"); // Expected Output
} else {
  console.log("Available");
}

console.log("\n--- 4. ACTIVITY 1 (DISCOUNT FUNCTION) ---");
function calculateDiscountedPrice(age) {
  const baseCost = 100;
  if (age < 18) {
    return { discount: "20%", price: baseCost * 0.8 };
  } else if (age >= 65) {
    return { discount: "15%", price: baseCost * 0.85 };
  } else {
    return { discount: "0%", price: baseCost };
  }
}

// Question 1: Patient is 16 years old -> Option B (Age < 18 -> 20% discount -> £80)
console.log("Q1 (Age 16):", calculateDiscountedPrice(16));

// Question 2: Patient is 45 years old -> Option C (Neither condition is met -> No discount -> £100)
console.log("Q2 (Age 45):", calculateDiscountedPrice(45));

// Question 3: Patient is 70 years old -> Option D (Age >= 65 -> 15% discount -> £85)
console.log("Q3 (Age 70):", calculateDiscountedPrice(70));


console.log("\n--- 5. LOOPS ---");
console.log("For Loop:");
for (let i = 1; i <= 5; i++) {
  console.log("Treatment " + i);
}

console.log("While Loop:");
let slotsLeft = 3;
while (slotsLeft > 0) {
  console.log("Slot " + slotsLeft);
  slotsLeft--;
}

console.log("\n--- 6. FUNCTIONS ---");
function calculateTotalCost(cost, qty) {
  const total = cost * qty;
  return total;
}
const finalCost = calculateTotalCost(50, 3);
console.log("Total Cost: £" + finalCost); // Output: £150

console.log("\n--- 7. VARIABLE SCOPE ---");
const clinicName = "LH Medical"; // Global scope

function showTreatment() {
  const scopedTreatmentName = "Dental"; // Function scope
  console.log("Global clinic name inside function:", clinicName);
  console.log("Local treatment name inside function:", scopedTreatmentName);
}
showTreatment();
  console.log(scopedTreatmentName);


console.log("\n--- 8. ARRAY METHODS ---");
const treatments = ["Dental", "Physiotherapy"];
treatments.push("Vaccination");
console.log("After push:", treatments); // ["Dental", "Physiotherapy", "Vaccination"]

treatments.pop();
console.log("After pop:", treatments);   // ["Dental", "Physiotherapy"]
console.log("Length:", treatments.length); // 2

console.log("\n--- 9. FILTERING OBJECTS ---");
const clinicRecords = [
  { id: "T001", type: "Dental", name: "Teeth Cleaning" },
  { id: "T002", type: "Physiotherapy", name: "Back Therapy" },
  { id: "T003", type: "Dental", name: "Tooth Extraction" }
];

const dentalTreatments = clinicRecords.filter(
  (treatment) => treatment.type === "Dental"
);
console.log("Dental Treatments:", dentalTreatments);

console.log("\n--- 10. ACTIVITY 2 VALIDATION ---");
const activityTreatments = [
  { id: "T001", type: "Dental", name: "Teeth Cleaning" },
  { id: "T002", type: "Physiotherapy", name: "Back Therapy" },
  { id: "T003", type: "Dental", name: "Tooth Extraction" },
  { id: "T004", type: "Vaccination", name: "Flu Vaccine" },
  { id: "T005", type: "Physiotherapy", name: "Knee Rehabilitation" }
];
const results= activityTreatments.filter(
    (treatment) => treatment.type === "Physiotherapy");
    console.log(results);
    


