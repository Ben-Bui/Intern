<?php include('nav.php'); ?>

<main>
    <div id="englishContent" class="contact-container">
        <div class="contact-info">
            <h2>Contact Information</h2>
            <p>Address: 1019 South 8th Street Philadelphia, PA 19147</p>
            <p>Phone: (215) 900-5880</p>
            <p>Email: <a href="mailto:marykphan@gmail.com" style="color: #4b0082;">marykphan@gmail.com</a></p>
        </div>
        <div class="contact-form">
            <h2>Contact Us</h2>
            <form action="submit_contact.php" method="POST">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>
                
                <label for="phone">Phone Number:</label>
                <input type="tel" id="phone" name="phone" required>
                
                <label for="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
                
                <button type="submit">Send Message</button>
            </form>
        </div>
    </div>

    <div id="vietnameseContent" class="contact-container" style="display: none;">
        <div class="contact-info">
            <h2>Thông Tin Liên Hệ</h2>
            <p>Địa chỉ: 1019 South 8th Street Philadelphia, PA 19147</p>
            <p>Điện thoại: (215) 900-5880</p>
            <p>Email: <a href="mailto:marykphan@gmail.com" style="color: #4b0082;">marykphan@gmail.com</a></p>
        </div>
        <div class="contact-form">
            <h2>Liên Hệ Chúng Tôi</h2>
            <form action="submit_contact.php" method="POST">
                <label for="name">Tên:</label>
                <input type="text" id="name" name="name" required>
                
                <label for="phone">Số Điện Thoại:</label>
                <input type="tel" id="phone" name="phone" required>
                
                <label for="message">Tin Nhắn:</label>
                <textarea id="message" name="message" required></textarea>
                
                <button type="submit">Gửi Tin Nhắn</button>
            </form>
        </div>
    </div>
</main>

<?php include('footer.php'); ?>
