<footer>
    <div class="footer-content">
        <div id="englishContentFooter">
            <p>Address: 1725 Bethel Rd Garnet Valley, PA 19060</p>
            <p>Contact Office: 267-738-9969 </p>
            <p>Email: <a href="mailto:Motherly969@gmail.com" style="color: white;">Motherly969@gmail.com</a></p>
        </div>
        <div id="vietnameseContentFooter" style="display: none;">
            <p>Địa chỉ: 1725 Bethel Rd Garnet Valley, PA 19060</p>
            <p>Liên hệ: Office: 267-738-9969 </p>
            <p>Email: <a href="mailto:Motherly969@gmail.com" style="color: white;">Motherly969@gmail.com</a></p>
        </div>
    </div>
    <div class="footer-bottom">
        <p>&copy; <span id="year"></span> Designed and Developed by <strong>Ben The Bui</strong>. All Rights Reserved.</p>
    </div>
</footer>

<script>
    // Automatically update the year
    document.getElementById('year').textContent = new Date().getFullYear();
</script>

<style>
    .footer-content {
        text-align: center;
        padding: 20px;
        background-color: #333;
        color: white;
    }
    .footer-bottom {
        background-color: #222;
        padding: 10px;
        color: #ccc;
        text-align: center;
    }
</style>
