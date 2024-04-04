function calculateBMI() {
    var age = document.getElementById("age").value; // mengambil nilai dari input dengan id="age"
    var weight = document.getElementById("weight").value; // mengambil nilai dari input dengan id="weight"
    var height = document.getElementById("height").value; // mengambil nilai dari input dengan id="height" 
    var gender = document.getElementById("gender").value; // mengambil nilai dari input dengan 

    // Validate input
    if (age === "" || weight === "" || height === "" || gender === "") { // jika input kosong
        alert("Please fill all fields!");
        return;
    } else if (isNaN(age) || isNaN(weight) || isNaN(height)) { // jika input bukan angka
        alert("Please enter valid numbers!");
        return;
    } else if (age <= 0 || weight <= 0 || height <= 0) { // jika input angka negatif
        alert("Please enter positive numbers!");
        return;
    }

    // Calculate BMI
    var bmi = weight / ((height/100) * (height/100)); // rumus menghitung BMI 

    // Determine BMI category
    var kategori; // variabel untuk menyimpan kategori BMI
    var penjelasan; // variabel untuk menyimpan penjelasan BMI
    if (bmi < 18.5) { // jika hasil BMI kurang dari 18.5
        kategori = "Kekurangan Berat Badan"; // kategori BMI kekurangan berat badan
        penjelasan = "Anda mempunyai berat badan yang kurang ideal, sebaiknya perbanyak makan makanan bergizi dan olahraga secara teratur."; // penjelasan untuk kategori BMI kekurangan berat badan
    } else if (bmi >= 18.5 && bmi < 25) { // jika hasil BMI lebih dari sama dengan 18.5 dan kurang dari 25
        kategori = "Normal (Ideal)"; // kategori BMI normal
        penjelasan = "Berat badan anda sudah ideal, jaga pola makan dan olahraga secara teratur."; // penjelasan untuk kategori BMI normal
    } else if (bmi >= 25 && bmi < 30) { // jika hasil BMI lebih dari sama dengan 25 dan kurang dari 30
        kategori = "Kelebihan Berat Badan"; // kategori BMI kelebihan berat badan
        penjelasan = "Anda mempunyai berat badan yang berlebih, sebaiknya kurangi makanan berlemak dan olahraga secara teratur."; // penjelasan untuk kategori BMI kelebihan berat badan
    } else { // jika hasil BMI lebih dari sama dengan 30
        kategori = "Kegemukan (Obesitas)"; // kategori BMI kegemukan
        penjelasan = "Anda mempunyai berat badan yang sangat berlebih, sebaiknya konsultasikan dengan dokter atau ahli gizi."; // penjelasan untuk kategori BMI kegemukan
    }

    // Display result
    var result = "Umur: " + age + "<br>" +
                 "Jenis Kelamin: " + gender + "<br>" +
                 "Kategori: " + kategori + "<br>" +
                 "Penjelasan: " + penjelasan;
    document.getElementById("result").innerHTML = result;
}
