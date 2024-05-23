document.getElementById('translateBtn').addEventListener('click', function() {
    const elementsToTranslate = document.querySelectorAll('[data-translate]');
    const currentLanguage = this.getAttribute('data-language');
    
    elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (currentLanguage === 'en') {
            switch (key) {
                case 'welcome':
                    element.innerHTML = 'Chào mừng đến với Motherly <br> Home Care';
                    break;
                case 'tagline':
                    element.textContent = 'Khi là gia đình...';
                    break;
                case 'description':
                    element.textContent = 'Motherly là một cơ quan chăm sóc sức khỏe tại nhà cho người lớn và người cao tuổi sống ở khu vực Philadelphia. Chúng tôi cung cấp dịch vụ bầu bạn và hỗ trợ các hoạt động sinh hoạt hàng ngày. Điều này bao gồm mặc quần áo, tắm rửa, chuẩn bị bữa ăn, nhắc nhở dùng thuốc và nhiều công việc gia đình khác cũng như các dịch vụ khác được cá nhân hóa cho sự chăm sóc của bạn.';
                    break;
                case 'everydayNeeds':
                    element.textContent = 'Cho nhu cầu hàng ngày của bạn trong sự thoải mái của ngôi nhà của bạn, chúng tôi ở đây cho bạn.';
                    break;
                case 'additionalDescription':
                    element.innerHTML = 'Motherly là một cơ quan chăm sóc sức khỏe tại nhà cho người lớn và người cao tuổi sống ở khu vực Philadelphia. Chúng tôi cung cấp dịch vụ bầu bạn và hỗ trợ các hoạt động sinh hoạt hàng ngày. Điều này bao gồm mặc quần áo, tắm rửa, chuẩn bị bữa ăn, nhắc nhở dùng thuốc và nhiều công việc gia đình khác & việc vặt. Xem danh sách đầy đủ các dịch vụ của chúng tôi.<br>Tại Motherly Home Care, an toàn & sự hài lòng là trên hết. Chúng tôi dành thời gian thêm để đảm bảo tất cả các nhu cầu của bạn được đáp ứng, và chúng tôi đi trên & hơn thế nữa để bạn có thể tận hưởng cuộc sống mà bạn xứng đáng có. Bạn sẽ luôn được đối xử như gia đình ở đây tại Motherly Home Care.';
                    break;
                case 'aboutTitle':
                    element.textContent = 'Về Chúng Tôi';
                    break;
                case 'ourMission':
                    element.textContent = 'Sứ Mệnh Của Chúng Tôi';
                    break;
                case 'missionDescription':
                    element.textContent = 'Sự an toàn và chăm sóc chất lượng của bạn là sứ mệnh của chúng tôi. Cung cấp cho khách hàng của chúng tôi những lựa chọn chăm sóc sức khỏe tốt nhất, chúng tôi cố gắng làm cho chất lượng cuộc sống trở nên phong phú hơn, khỏe mạnh hơn và hạnh phúc hơn.';
                    break;
                case 'address':
                    element.textContent = 'Địa chỉ: 1019 South 8th Street Philadelphia, PA 19147';
                    break;
                case 'contact':
                    element.textContent = 'Liên hệ: Mary Phan RN, BSN (Nurse)';
                    break;
                case 'phone':
                    element.textContent = 'Điện thoại: (215) 900-5880';
                    break;
                case 'email':
                    element.innerHTML = 'Email: <a href="mailto:marykphan@gmail.com" style="color: white;">marykphan@gmail.com</a>';
                    break;
                default:
                    element.textContent = element.textContent; // No change
            }
        } else {
            switch (key) {
                case 'welcome':
                    element.innerHTML = 'Motherly <br> Home Care';
                    break;
                case 'tagline':
                    element.textContent = 'When it\'s family...';
                    break;
                case 'description':
                    element.textContent = 'Motherly is a home health care agency for adults and seniors living in the Philadelphia area. We offer companionship service and assistance with activities of daily living. This includes dressing, bathing, meal preparation, medication reminders, and many other household tasks as well as other services personally tailored for your care.';
                    break;
                case 'everydayNeeds':
                    element.textContent = 'For your everyday needs in the comfort of your home, we are here for you.';
                    break;
                case 'additionalDescription':
                    element.innerHTML = 'Motherly is a home health care agency for adults and seniors living in the Philadelphia area. We offer companionship service and assistance with activities of daily living. This includes dressing, bathing, meal preparation, medication reminders, and many other household tasks & errands. Take a look at our full list of Services.<br>At Motherly Home Care, safety & satisfaction come first. We take the extra time to ensure all of your needs are met, and we go above & beyond so you can enjoy the life you deserve. You\'ll always be treated like family here at Motherly Home Care.';
                    break;
                case 'aboutTitle':
                    element.textContent = 'About Us';
                    break;
                case 'ourMission':
                    element.textContent = 'Our Mission';
                    break;
                case 'missionDescription':
                    element.textContent = 'Your safety and quality care is our mission. Providing our clients with the best health options, we strive to make the quality of life richer, healthier, and happier.';
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
