document.getElementById('translateBtn').addEventListener('click', function() {
    const elementsToTranslate = document.querySelectorAll('main h1, main h2, main p, form label, form button');
    const currentLanguage = this.getAttribute('data-language');
    
    elementsToTranslate.forEach(element => {
        switch (element.textContent.trim()) {
            // English to Vietnamese translations
            case 'Welcome to Motherly Home Care':
                element.textContent = 'Chào mừng đến với Motherly Home Care';
                break;
            case 'When it\'s family...':
                element.textContent = 'Khi là gia đình...';
                break;
            case 'Motherly is a home health care agency for adults and seniors living in the Philadelphia area. We offer companionship service and assistance with activities of daily living. This includes dressing, bathing, meal preparation, medication reminders, and many other household tasks as well as other services personally tailored for your care.':
                element.textContent = 'Motherly Home Care là dịch vụ chăm sóc sức khỏe tại nhà cho người lớn và người cao niên sống trong khu vực Philadelphia.';
                break;
            case 'About Us':
                element.textContent = 'Về Chúng Tôi';
                break;
            case 'Our Mission':
                element.textContent = 'Nhiệm Vụ Của Chúng Tôi';
                break;
            case 'Your safety and quality care is our mission. Providing our clients with the best health options, we strive to make the quality of life richer, healthier, and happier.':
                element.textContent = 'Chúng tôi hứa sẽ chăm sóc bạn, người bệnh của gia đình bạn, cũng như chính chúng tôi đang chăm sóc cho người thân của mình với lòng kiên nhẫn, thấu hiểu và tôn trọng.';
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
            case 'address':
                element.textContent = 'Address: 1019 South 8th Street Philadelphia, PA 19147';
                break;
            case 'contact':
                element.textContent = 'Contact: Mary Phan RN, BSN (Nurse)';
                break;
            case 'phone':
                element.textContent = 'Phone: (215) 900-5880';
                break;
            case 'email':
                element.innerHTML = 'Email: <a href="mailto:marykphan@gmail.com" style="color: white;">marykphan@gmail.com</a>';
                break;
            default:
                // No change if not matched
                element.textContent = element.textContent;
        }
    });

    // Change the button text to "English" when content is translated to Vietnamese
    if (currentLanguage === 'en') {
        this.textContent = 'English';
    } else {
        // Revert button text to "Tiếng Việt" when content is reverted to English
        this.textContent = 'Tiếng Việt';
    }
});
