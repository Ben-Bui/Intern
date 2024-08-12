<?php include('nav.php'); ?>

<main>
<div id="englishContent" class="contact-container">
        <div class="contact-info">
            <h2>Contact Information</h2>
            <p>Address: 1725 Bethel Rd Garnet Valley PA 19060</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3063.384620062405!2d-75.47266812359402!3d39.843212890345214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6e5ae0593f70b%3A0x8e9e31738d7d40c6!2s1725%20Bethel%20Rd%2C%20Garnet%20Valley%2C%20PA%2019060!5e0!3m2!1sen!2sus!4v1722017255726!5m2!1sen!2sus" 
                width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <p>Phone: 267-738-9969</p>
            <p>Email: <a href="mailto:Motherly969@gmail.com" style="color: #4b0082;">Motherly969@gmail.com</a></p>
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
            <p>Địa chỉ: 1725 Bethel Rd Garnet Valley PA 19060</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3063.384620062405!2d-75.47266812359402!3d39.843212890345214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6e5ae0593f70b%3A0x8e9e31738d7d40c6!2s1725%20Bethel%20Rd%2C%20Garnet%20Valley%2C%20PA%2019060!5e0!3m2!1sen!2sus!4v1722017255726!5m2!1sen!2sus" 
                width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <p>Điện thoại: 267-738-9969</p>
            <p>Email: <a href="mailto:Motherly969@gmail.com" style="color: #4b0082;">marykphan@gmail.com</a></p>
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
