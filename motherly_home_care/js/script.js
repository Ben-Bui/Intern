document.getElementById('translateBtn').addEventListener('click', function() {
    const elementsToTranslate = document.querySelectorAll('main h1, main p, form label, form button');
    
    elementsToTranslate.forEach(element => {
        if (element.dataset.translated !== "true") {
            switch (element.textContent) {
                case 'Welcome to Motherly Home Care':
                    element.textContent = 'Chào mừng đến với Chăm sóc tại nhà Mẫu Tử';
                    break;
                case 'Providing compassionate home care for your loved ones.':
                    element.textContent = 'Cung cấp dịch vụ chăm sóc tại nhà tận tâm cho những người thân yêu của bạn.';
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
            element.dataset.translated = "true";
        }
    });
});
