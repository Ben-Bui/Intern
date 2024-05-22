<?php include('nav.php'); ?>
<main>
    <h1>Apply for Service</h1>
    <form action="php/apply_form.php" method="post">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        <label for="service">Service Needed:</label>
        <textarea id="service" name="service" required></textarea>
        <button type="submit">Apply</button>
    </form>
</main>
