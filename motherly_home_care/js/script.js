document.getElementById('translateBtn').addEventListener('click', function() {
    const elementsToTranslate = document.querySelectorAll('main h1, main h2, main p, form label, form button');
    const currentLanguage = this.getAttribute('data-language');
    
    elementsToTranslate.forEach(element => {
        if (currentLanguage === 'en') {
            switch (element.textContent.trim()) {
                case 'Welcome to Motherly Home Care':
                    element.textContent = 'Chào mừng đến với Motherly Home Care';
                    break;
                case 'When it\'s family...':
                    element.textContent = 'Khi là gia đình...';
                    break;
                case 'Motherly is a home health care agency for adults and seniors living in the Philadelphia area. We offer companionship service and assistance with activities of daily living. This includes dressing, bathing, meal preparation, medication reminders, and many other household tasks as well as other services personally tailored for your care.':
                    element.textContent = 'Motherly là một cơ quan chăm sóc sức khỏe tại nhà cho người lớn và người cao tuổi sống ở khu vực Philadelphia. Chúng tôi cung cấp dịch vụ bầu bạn và hỗ trợ các hoạt động sinh hoạt hàng ngày. Điều này bao gồm mặc quần áo, tắm rửa, chuẩn bị bữa ăn, nhắc nhở dùng thuốc và nhiều công việc gia đình khác cũng như các dịch vụ khác được cá nhân hóa cho sự chăm sóc của bạn.';
                    break;
                default:
                    element.textContent = element.textContent; // No change
            }
        } else {
            switch (element.textContent.trim()) {
                case 'Chào mừng đến với Motherly Home Care':
                    element.textContent = 'Welcome to Motherly Home Care';
                    break;
                case 'Khi là gia đình...':
                    element.textContent = 'When it\'s family...';
                    break;
                case 'Motherly là một cơ quan chăm sóc sức khỏe tại nhà cho người lớn và người cao tuổi sống ở khu vực Philadelphia. Chúng tôi cung cấp dịch vụ bầu bạn và hỗ trợ các hoạt động sinh hoạt hàng ngày. Điều này bao gồm mặc quần áo, tắm rửa, chuẩn bị bữa ăn, nhắc nhở dùng thuốc và nhiều công việc gia đình khác cũng như các dịch vụ khác được cá nhân hóa cho sự chăm sóc của bạn.':
                    element.textContent = 'Motherly is a home health care agency for adults and seniors living in the Philadelphia area. We offer companionship service and assistance with activities of daily living. This includes dressing, bathing, meal preparation, medication reminders, and many other household tasks as well as other services personally tailored for your care.';
                    break;
                default:
                    element.textContent = element.textContent; // No change
            }
        }
    });

    // Toggle the language data attribute and button text
    if (currentLanguage === 'en') {
        this.setAttribute('data-language', 'vi');
        this.textContent = 'English';
    } else {
        this.setAttribute('data-language', 'en');
        this.textContent = 'Tiếng Việt';
    }
});
