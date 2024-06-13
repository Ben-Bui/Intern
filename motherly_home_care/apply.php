<?php include('nav.php'); ?>

<main>
    <div id="englishContent">
        <h1>Apply for Service</h1>
        <!-- Contact Information Form -->
        <h2>Contact Information</h2>
        <form action="submit_application.php" method="POST">
            <label for="service">Service Requested:</label>
            <input type="text" id="service" name="service" required>
            
            <label for="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" required>
            
            <label for="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" required>
            
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            
            <label for="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" required>
            
            <button type="submit">Apply</button>
        </form>
        
        <!-- Patient Information Form -->
        <h2>Patient Information</h2>
        <form action="submit_application.php" method="POST">
            <label for="patientFirstName">Patient First Name:</label>
            <input type="text" id="patientFirstName" name="patientFirstName" required>
            
            <label for="patientLastName">Patient Last Name:</label>
            <input type="text" id="patientLastName" name="patientLastName" required>
            
            <label for="dob">Date of Birth:</label>
            <input type="date" id="dob" name="dob" required>
            
            <label for="state">State:</label>
            <input type="text" id="state" name="state" required>
            
            <label for="city">City:</label>
            <input type="text" id="city" name="city" required>
            
            <label for="address">Address:</label>
            <input type="text" id="address" name="address" required>
            
            <label for="zip">Zip Code:</label>
            <input type="text" id="zip" name="zip" required>
            
            <label for="patientPhone">Patient Phone Number:</label>
            <input type="tel" id="patientPhone" name="patientPhone" required>
            
            <button type="submit">Apply</button>
        </form>
    </div>

    <!-- Vietnamese content -->
    <div id="vietnameseContent" style="display: none;">
    <h1>Đăng Ký Dịch Vụ</h1>
        <!-- Form thông tin liên hệ -->
        <h2>Thông Tin Liên Hệ</h2>
        <form action="submit_application.php" method="POST">
            <label for="service">Dịch Vụ Yêu Cầu:</label>
            <input type="text" id="service" name="service" required>
            
            <label for="firstName">Tên:</label>
            <input type="text" id="firstName" name="firstName" required>
            
            <label for="lastName">Họ:</label>
            <input type="text" id="lastName" name="lastName" required>
            
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            
            <label for="phone">Số Điện Thoại:</label>
            <input type="tel" id="phone" name="phone" required>
            
            <button type="submit">Đăng Ký</button>
        </form>
        
        <!-- Form thông tin bệnh nhân -->
        <h2>Thông Tin Bệnh Nhân</h2>
        <form action="submit_application.php" method="POST">
            <label for="patientFirstName">Tên Bệnh Nhân:</label>
            <input type="text" id="patientFirstName" name="patientFirstName" required>
            
            <label for="patientLastName">Họ Bệnh Nhân:</label>
            <input type="text" id="patientLastName" name="patientLastName" required>
            
            <label for="dob">Ngày Sinh:</label>
            <input type="date" id="dob" name="dob" required>
            
            <label for="state">Tiểu Bang:</label>
            <input type="text" id="state" name="state" required>
            
            <label for="city">Thành Phố:</label>
            <input type="text" id="city" name="city" required>
            
            <label for="address">Địa Chỉ:</label>
            <input type="text" id="address" name="address" required>
            
            <label for="zip">Mã Zip:</label>
            <input type="text" id="zip" name="zip" required>
            
            <label for="patientPhone">Số Điện Thoại Bệnh Nhân:</label>
            <input type="tel" id="patientPhone" name="patientPhone" required>
            
            <button type="submit">Đăng Ký</button>
        </form>
    </div>
    </div>
</main>

<?php include('footer.php'); ?>
