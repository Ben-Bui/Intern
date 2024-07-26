<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Motherly Home Care</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <header>
        <nav>
            <div class="nav-container">
                <div class="logo">MHC</div>
                <ul id="navMenu">
                    <li id="englishContentNav" class="navItems">
                        <a href="index.php">| Home </a>
                        <a href="about.php">| About </a>
                        <a href="services.php">| Services </a>
                        <a href="contact.php">| Contact Us </a>
                        <a href="apply.php">| Apply for Service |</a>
                    </li>
                    <li id="vietnameseContentNav" class="navItems" style="display: none;">
                        <a href="index.php">| Trang Chủ </a>
                        <a href="about.php">| Về Chúng Tôi </a>
                        <a href="services.php">| Dịch Vụ </a>
                        <a href="contact.php">| Liên Hệ </a>
                        <a href="apply.php">| Đăng Ký Dịch Vụ |</a>
                    </li>
                    <li><button id="translateBtn" data-language="en">Tiếng Việt</button></li>
                </ul>
                <button class="hamburger" onclick="toggleDrawer()">&#9776;</button>
            </div>
        </nav>
    </header>
        <div id="sideDrawer" class="drawer">
            <button class="closebtn" onclick="toggleDrawer()">&times;</button>
            <div class="drawer-content">
                <button id="translateBtnDrawer" data-language="en">Tiếng Việt</button>
                <ul id="drawerMenu">
                    <li><a href="index.php">Home</a></li>
                    <li><a href="about.php">About</a></li>
                    <li><a href="services.php">Services</a></li>
                    <li><a href="contact.php">Contact Us</a></li>
                    <li><a href="apply.php">Apply for Service</a></li>
                </ul>
            </div>
        </div>
    <script src="js/hide.js"></script>
    <script src="js/menuToggle.js"></script>
</body>
</html>
