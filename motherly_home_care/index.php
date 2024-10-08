<?php include('nav.php'); ?>
<main>
    <div class="slideshow-container">
        <!-- Slides -->
        <div class="slide fade">
            <img src="img/elder_couple.jpg" alt="Home">
            <a href="index.php" class="slide-link">Home</a>
        </div>
        <div class="slide fade">
            <img src="img/elder_care.jpg" alt="About">
            <a href="about.php" class="slide-link">About</a>
        </div>
        <div class="slide fade">
            <img src="img/services.jpg" alt="Services">
            <a href="services.php" class="slide-link">Services</a>
        </div>
        <div class="slide fade">
            <img src="img/contact.jpg" alt="Contact Us">
            <a href="contact.php" class="slide-link">Contact Us</a>
        </div>
        <div class="slide fade">
            <img src="img/apply.jpg" alt="Apply for Service">
            <a href="apply.php" class="slide-link">Apply for Service</a>
        </div>

        <!-- Next and previous buttons -->
        <button class="prev" onclick="changeSlide(-1)">&#10094;</button>
        <button class="next" onclick="changeSlide(1)">&#10095;</button>
    </div>
    <!-- <figure class="hero">
        <img class="picture" src="img/elder_couple.jpg" id="pic" alt="elder couple">
        <figcaption>
            <h1>Motherly Home Care</h1>
        </figcaption>
    </figure> -->

    <div id="englishContent">
        <h2>When it's family...</h2>
            <p>Motherly is a home health care agency for adults and seniors living in the Philadelphia area. We offer companionship service and assistance with activities of daily living. This includes dressing, bathing, meal preparation, medication reminders, and many other household tasks as well as other services personally tailored for your care.</p>
            <h3>For your everyday needs in the comfort of your home, we are here for you.</h3>
            <p>Motherly is a home health care agency for adults and seniors living in the Philadelphia area. We offer companionship service and assistance with activities of daily living. This includes dressing, bathing, meal preparation, medication reminders, and many other household tasks & errands. Take a look at our full list of Services.<br> At Motherly Home Care, safety & satisfaction come first. We take the extra time to ensure all of your needs are met, and we go above & beyond so you can enjoy life you deserve. You'll always be treated like family here at Motherly Home Care
            </p>
        <h2>Our Mission</h2>
            <p>Your safety and quality care is our mission. Providing our clients with the best health options, we strive to make the quality of life richer, healthier, and happier.</p>
    </div>        

    <div id="vietnameseContent" style="display: none;">
        <h2 a href="about.php">Khi là gia đình...</h2>
            <p>Motherly là một công ty chăm sóc sức khỏe tại nhà cho người lớn và người cao tuổi sống trong khu vực Philadelphia. Chúng tôi cung cấp dịch vụ bạn bè và hỗ trợ với các hoạt động hàng ngày. Điều này bao gồm việc mặc quần áo, tắm, chuẩn bị bữa ăn, nhắc nhở đường dùng thuốc, và nhiều công việc hộ gia đình khác cũng như các dịch vụ khác được cá nhân hóa cho sự chăm sóc của bạn.</p>
        <h2>Trong sự thoải mái của ngôi nhà của bạn</h3>
            <p>Chúng tôi đồng hành và hỗ trợ trong các hoạt động sinh hoạt hàng ngày bao gồm thay quần áo, tắm rửa, chuẩn bị bữa ăn, nhắc nhở thuốc men, và nhiều công việc gia đình & việc lặt vặt khác. Hãy xem danh sách đây đủ các Dịch vụ của chúng tôi.</p>
        
        <h2a href="about.php">Nhiệm Vụ Của Chúng Tôi</h2>
            <p>Chúng tôi hứa sẽ chăm sóc bạn, người bệnh của gia đình bạn, cũng như chính chúng tôi đang chăm sóc cho người thân của mình với lòng kiên nhẫn, thấu hiểu và tôn trọng.</p>
        
    </div>

    <!-- Service -->
    <div id="englishContent">
       <h2 a href="services.php">Our Services</h2>
        <div class="services-grid">
            <div class="service-item">
                <img class="picture" src="img/elder_care2.jpg" id="pic" alt="elder care">
                <p>Home Care</p>
            </div>
            <div class="service-item">
                <img class="picture" src="img/appointment.jpg" id="pic" alt="appointment">
                <p>Errands</p>
            </div>
            <div class="service-item">
                <img class="picture" src="img/companion.jpg" id="pic" alt="companion">
                <p>Companion</p>
            </div>
            <div class="service-item">
                <img class="picture" src="img/meal_prep.jpg" id="pic" alt="mealprep">
                <p>Meal prep</p>
            </div>
            <div class="service-item">
                <img class="picture" src="img/elder_care3.jpg" id="pic" alt="elder care" width="50%">
                <p>House Keeping</p>
            </div>
        </div>
    </div>

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
    <div id="vietnameseContent" style="display: none;">
        <h2>Chăm Sóc Yêu Thương</h2>
        <div class="services-grid">
            <div class="service-item">
                <img class="picture" src="img/elder_care2.jpg" id="pic" alt="elder care">
                <p>Chăm Sóc Tại nhà</p>
            </div>
            <div class="service-item">
                <img class="picture" src="img/medicine.jpeg" id="pic" alt="medicine" width="50%">
                <p>Thuốc Men</p>
            </div>
            <div class="service-item">
                <img class="picture" src="img/elder_care4.jpg" id="pic" alt="elder care">
                <p>Theo dõi </p>
            </div>
            <div class="service-item">
                <img class="picture" src="img/meal_prep.jpg" id="pic" alt="mealprep">
                <p>Bữa Ăn</p>
            </div>
            <div class="service-item">
                <img class="picture" src="img/appointment.jpg" id="pic" alt="appointment">
                <p>Bạn đồng hành</p>
            </div>
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
<script src="js/slider.js"></script>
<?php include('footer.php'); ?>
