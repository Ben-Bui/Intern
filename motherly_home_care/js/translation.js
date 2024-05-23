document.getElementById('translateBtn').addEventListener('click', function() {
    const elementsToTranslate = document.querySelectorAll('h1, h2, h3, main p');
    const currentLanguage = this.getAttribute('data-language');
    
    elementsToTranslate.forEach(element => {
        switch (element.textContent.trim()) {
            case 'Motherly Home Care':
                element.textContent = 'Chăm sóc tại nhà Motherly';
                break;
            case 'When it\'s family...':
                element.textContent = 'Khi là gia đình...';
                break;
            case 'Motherly is a home health care agency for adults and seniors living in the Philadelphia area. We offer companionship service and assistance with activities of daily living. This includes dressing, bathing, meal preparation, medication reminders, and many other household tasks as well as other services personally tailored for your care.':
                element.textContent = 'Motherly là một công ty chăm sóc sức khỏe tại nhà cho người lớn và người cao tuổi sống trong khu vực Philadelphia. Chúng tôi cung cấp dịch vụ bạn bè và hỗ trợ với các hoạt động hàng ngày. Điều này bao gồm việc mặc quần áo, tắm, chuẩn bị bữa ăn, nhắc nhở đường dùng thuốc, và nhiều công việc hộ gia đình khác cũng như các dịch vụ khác được cá nhân hóa cho sự chăm sóc của bạn.';
                break;
            case 'About Us':
                element.textContent = 'Về Chúng Tôi';
                break;
            case 'Our Mission':
                element.textContent = 'Nhiệm Vụ Của Chúng Tôi';
                break;
            case 'Your safety and quality care is our mission. Providing our clients with the best health options, we strive to make the quality of life richer, healthier, and happier.':
                element.textContent = 'An toàn và chất lượng chăm sóc của bạn là nhiệm vụ của chúng tôi. Cung cấp cho khách hàng của chúng tôi các lựa chọn sức khỏe tốt nhất, chúng tôi cố gắng làm cho chất lượng cuộc sống của bạn giàu có, khỏe mạnh và hạnh phúc hơn.';
                break;                
            case 'Our Services':
                element.textContent = 'Dịch Vụ Của Chúng Tôi';
                break;
            case 'Explore the wide range of home care services we offer to make your life easier.':
                element.textContent = 'Khám phá loạt các dịch vụ chăm sóc tại nhà rộng lớn mà chúng tôi cung cấp để làm cuộc sống của bạn dễ dàng hơn.';
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
                // No change if not matched
                element.textContent = element.textContent;
        }
    });

    // Change the button text to "English" when content is translated to Vietnamese
    if (currentLanguage === 'en') {
        this.textContent = 'English';
        this.setAttribute('data-language', 'vi');
    } else {
        // Revert button text to "Tiếng Việt" when content is reverted to English
        this.textContent = 'Tiếng Việt';
        this.setAttribute('data-language', 'en');
    }
});
