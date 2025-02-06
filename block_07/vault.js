// 1. Create a string for the user saying: You have received this message because you have been chosen to open an important vault. Here is the secret combination:
// 2. Assign a variable with an arithmetic equation for 10
// 3. Assign a variable with an arithmetic equation for 40
// 4. Assign a variable with an arithmetic equation for 39
// 5. Create a popup dialog displaying the vault codes

// Adding the whole message in one variable
const message = "You have received this message because you have been chosen to open an important vault. Here is the secret combination:"

// Breaking the combination into three variables - each with a different arithmetic equation
const var1 = 20 / 2
const var2 = 4 * 10
const var3 = 40 - 1

// A dialog that includes the message and each combination value
// Used template literals instead of concatenated strings
// \n is a page break within a dialog box, so the combination is on a separate line from the message
alert(`${message}\n${var1} - ${var2} - ${var3}`)