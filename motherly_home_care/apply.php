<?php include('nav.php'); ?>

<main>
    <div id="englishContent">
        <h1>Apply for Service</h1>
        <form action="submit_application.php" method="POST">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>
            
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            
            <label for="service">Service Needed:</label>
            <input type="text" id="service" name="service" required>
            
            <label for="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
            
            <button type="submit">Apply</button>
        </form>
    </div>

    <div id="vietnameseContent" style="display: none;">
        <h1>Đăng Ký Dịch Vụ</h1>
        <form action="submit_application.php" method="POST">
            <label for="name">Tên:</label>
            <input type="text" id="name" name="name" required>
            
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            
            <label for="service">Dịch vụ cần thiết:</label>
            <input type="text" id="service" name="service" required>
            
            <label for="message">Tin nhắn:</label>
            <textarea id="message" name="message" required></textarea>
            
            <button type="submit">Đăng Ký</button>
        </form>
    </div>
</main>

<?php include('footer.php'); ?>
