function generatePassword() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let password = "";
    for (let i = 0; i < 12; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById("password").value = password;
    checkStrength(password);
}

function copyToClipboard() {
    const passwordField = document.getElementById("password");
    passwordField.select();
    document.execCommand("copy");
    alert("Contraseña copiada al portapapeles");
}

function checkStrength(password) {
    let strengthText = "";
    let strength = 0;
    if (password.length >= 12) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[@#$%^&*()]/.test(password)) strength++;
    
    switch (strength) {
        case 5:
            strengthText = "Muy Fuerte";
            break;
        case 4:
            strengthText = "Fuerte";
            break;
        case 3:
            strengthText = "Media";
            break;
        default:
            strengthText = "Débil";
    }
    document.getElementById("strength").textContent = "Fortaleza: " + strengthText;
}
