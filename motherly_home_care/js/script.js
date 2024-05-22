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
                case 'About Us':
                    element.textContent = 'Về Chúng Tôi';
                    break;
                case 'We are a dedicated team providing home care services with a personal touch.':
                    element.textContent = 'Chúng tôi là một đội ngũ tận tâm cung cấp dịch vụ chăm sóc tại nhà với sự quan tâm cá nhân.';
                    break;
                case 'Our Services':
                    element.textContent = 'Dịch Vụ Của Chúng Tôi';
                    break;
                case 'Explore the wide range of home care services we offer to make your life easier.':
                    element.textContent = 'Khám phá các dịch vụ chăm sóc tại nhà mà chúng tôi cung cấp để làm cho cuộc sống của bạn dễ dàng hơn.';
                    break;
                case 'Contact Us':
                    element.textContent = 'Liên Hệ Chúng Tôi';
                    break;
                case 'Name:':
                    element.textContent = 'Tên:';
                    break;
                case 'Email:':
                    element.textContent = 'Email:';
                    break;
                case 'Message:':
                    element.textContent = 'Tin nhắn:';
                    break;
                case 'Send Message':
                    element.textContent = 'Gửi Tin Nhắn';
                    break;
                case 'Apply for Service':
                    element.textContent = 'Đăng Ký Dịch Vụ';
                    break;
                case 'Service Needed:':
                    element.textContent = 'Dịch vụ cần thiết:';
                    break;
                case 'Apply':
                    element.textContent = 'Đăng Ký';
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
                case 'Về Chúng Tôi':
                    element.textContent = 'About Us';
                    break;
                case 'Chúng tôi là một đội ngũ tận tâm cung cấp dịch vụ chăm sóc tại nhà với sự quan tâm cá nhân.':
                    element.textContent = 'We are a dedicated team providing home care services with a personal touch.';
                    break;
                case 'Dịch Vụ Của Chúng Tôi':
                    element.textContent = 'Our Services';
                    break;
                case 'Khám phá các dịch vụ chăm sóc tại nhà mà chúng tôi cung cấp để làm cho cuộc sống của bạn dễ dàng hơn.':
                    element.textContent = 'Explore the wide range of home care services we offer to make your life easier.';
                    break;
                case 'Liên Hệ Chúng Tôi':
                    element.textContent = 'Contact Us';
                    break;
                case 'Tên:':
                    element.textContent = 'Name:';
                    break;
                case 'Email:':
                    element.textContent = 'Email:';
                    break;
                case 'Tin nhắn:':
                    element.textContent = 'Message:';
                    break;
                case 'Gửi Tin Nhắn':
                    element.textContent = 'Send Message';
                    break;
                case 'Đăng Ký Dịch Vụ':
                    element.textContent = 'Apply for Service';
                    break;
                case 'Dịch vụ cần thiết:':
                    element.textContent = 'Service Needed:';
                    break;
                case 'Đăng Ký':
                    element.textContent = 'Apply';
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
