function generatePassword() {
  const passwordLength = document.getElementById("passwordLength").value
  const useUpperCase = document.getElementById("useUpperCase").checked
  const useLowerCase = document.getElementById("useLowerCase").checked
  const useNumbers = document.getElementById("useNumbers").checked
  const useSpecialChars = document.getElementById("useSpecialChars").checked
  let characters = ""
  let password = ""

  if (useUpperCase) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
  if (useLowerCase) {
    characters += "abcdefghijklmnopqrstuvwxyz"
  }
  if (useNumbers) {
    characters += "0123456789"
  }
  if (useSpecialChars) {
    characters += "!@#$%^&*()_+"
  }

  for (let i = 0; i < passwordLength; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length))
  }

  document.getElementById("password").innerHTML = password
}
