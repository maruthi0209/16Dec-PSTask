// Question 1
/**
 * Determine if a given meter reading (in kWh) is even or odd. If the reading is even,
 * suggest a discount code 'EVENPOWER10'. If it's odd, suggest 'ODDSAVER5'
 */
let meter_reading = 490;
if (meter_reading % 2 == 0) {
    console.log("Even reading, use discount code: EVENPOWER10");
} else {
    console.log("Odd reading, use discount code: ODDSAVER5");
}

// Question 2
/**
 *  Allow the user to convert a temperature from Celsius to Fahrenheit. 
 *  Use the formula: (Celsius * 9/5) + 32.
 */
let celsius = 25;
let fahrenheit = (celsius * (9/5)) + 32;
console.log(fahrenheit);

// Question 3
/**
 * Check if an order number is divisible by 3, 5, or both: 
 * Divisible by 3 gives 'Free Shipping', 
 * divisible by 5 gives 'Cashback', 
 * and divisible by both gives 'Free Shipping and Cashback'
 */
let orderNumber = 3500;
if (orderNumber % 3 == 0) {
    console.log("Free Shipping");
} else {
    if (orderNumber % 5 == 0) {
        console.log("Cashback");
    } else {
        if (orderNumber % 3 == 0 && orderNumber % 5 == 0) {
            console.log("Free Shipping and Cashback");
        } else {
            console.log("Not divisible y 3 and 5");
        }
    }
}

// Question 4
/**
 * Based on the time of day, greet the user appropriately: 
 * Morning (6 AM-11:59 AM), 
 * Afternoon (12 PM-5 PM), 
 * Evening (5 PM-9 PM), and 
 * Night (9 PM-6 AM).
 */
let current_time = 200;
if (current_time >= 600 && current_time < 1200 ) {
    console.log("Good Morning!");
} 
if (current_time >= 1200 && current_time < 1700 ) {
    console.log("Good Afternoon!");
} 
if (current_time >= 1700 && current_time < 2100 ) {
    console.log("Good Evening!");
} 
if (current_time >= 2100 && current_time <= 2400 && current_time >= 0 && current_time < 600 ) {
    console.log("Good Night!");
} 

// Question 5
/**
 * Develop a program to assign teams based on event number: 
 * Divisible by 3 ('Handled by Team A'), 
 * divisible by 5 ('Handled by Team B'), 
 * divisible by both ('Handled by Special Team'), 
 * otherwise 'No team assigned'.
 */
let event_number = 30;
if (event_number % 3 == 0) {
    console.log("Handled by Team A");
} else {
    if (event_number % 5 == 0) {
        console.log("Handled by Team B");
    } else {
        if (event_number % 3 == 0 && event_number % 5 == 0) {
            console.log("Handled by Special Team");
        } else {
            console.log("No team assigned");
        }
    }
} 

// Question 6
/**
 * Check vehicle speed and respond: 
 * Speed < 60 ('Normal Speed'), 
 * 60-80 ('Warning: Close to Overspeeding'), 
 * > 80 ('Overspeeding! Penalty applied').
 */
let speed = 75;
if (speed < 60) {
    console.log("Normal Speed");
}
if (speed >= 60 && speed <= 80) {
    console.log("Warning: Close to Overspeeding");
}
if (speed > 80) {
    console.log("Overspeeding! Penalty applied");
}

// Question 7
/**
 * Assign grades based on scores: 
 * 90+ ('A+'), 80-89 ('A'), 70-79 ('B'), 
 * 60-69 ('C'), < 60 ('F').
 */
let score = 65;
if (score >= 90) {
    console.log("Grade: A+");
}
if (score >= 80 && score < 90) {
    console.log("Grade: A");
} 
if (score >= 70 && score < 80) {
    console.log("B");
} 
if (score >= 60 && score < 70) {
    console.log("C");
} 
if (score < 60) {
    console.log("F");
}

// Question 8
/**
 * Simulate an ATM withdrawal. Prompt for account balance and withdrawal amount. 
 * If the withdrawal amount exceeds balance, show 'Insufficient funds!'; 
 * otherwise, deduct and show 'Transaction successful!'.
 */
let balance = 2000, withdrawal = 2500;
if (withdrawal > balance) {
    console.log("Insufficient funds!");
} else {
    balance -= withdrawal;
    console.log("Transaction Successful!");
}

// Question 9
/**
 * Calculate the price after applying discounts: 
 * Purchase > $1000 (20% discount), 
 * $500-$1000 (10% discount), 
 * below $500 (no discount).
 */
let purchase_amount = 1200;
if (purchase_amount > 1000) {
    console.log(`Discounted price : ${purchase_amount * 0.8}`);
}
if (purchase_amount >= 500 && purchase_amount < 1000) {
    console.log(`Discounted price : ${purchase_amount * 0.9}`);
}
if (purchase_amount < 500) {
    console.log("No Discount");
}

// Question 10
/**
 * Assign ticket prices based on age: Age < 12 ($5), 12-60 ($10), > 60 ($7).
 */
let age = 65;
if (age < 12) {
    console.log("$5");
}
if (age >= 12 && age <= 60) {
    console.log("$10");
}
if (age > 60) {
    console.log("$7");
}
