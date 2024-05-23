document.getElementById('translateBtn').addEventListener('click', function() {
    const elementsToTranslate = document.querySelectorAll('[data-translate]');
    const currentLanguage = this.getAttribute('data-language');

    const translations = {
        en: {
            welcome: 'Motherly <br> Home Care',
            tagline: 'When it\'s family...',
            description: 'Motherly is a home health care agency for adults and seniors living in the Philadelphia area. We offer companionship service and assistance with activities of daily living. This includes dressing, bathing, meal preparation, medication reminders, and many other household tasks as well as other services personally tailored for your care.',
            everydayNeeds: 'For your everyday needs in the comfort of your home, we are here for you.',
            additionalDescription: 'Motherly is a home health care agency for adults and seniors living in the Philadelphia area. We offer companionship service and assistance with activities of daily living. This includes dressing, bathing, meal preparation, medication reminders, and many other household tasks & errands. Take a look at our full list of Services.<br>At Motherly Home Care, safety & satisfaction come first. We take the extra time to ensure all of your needs are met, and we go above & beyond so you can enjoy the life you deserve. You\'ll always be treated like family here at Motherly Home Care.',
            aboutTitle: 'About Us',
            ourMission: 'Our Mission',
            missionDescription: 'Your safety and quality care is our mission. Providing our clients with the best health options, we strive to make the quality of life richer, healthier, and happier.',
            address: 'Address: 1019 South 8th Street Philadelphia, PA 19147',
            contact: 'Contact: Mary Phan RN, BSN (Nurse)',
            phone: 'Phone: (215) 900-5880',
            email: 'Email: <a href="mailto:marykphan@gmail.com" style="color: white;">marykphan@gmail.com</a>'
        },
        vi: {
            welcome: 'Chào mừng đến với Motherly <br> Home Care',
            tagline: 'Khi là gia đình...',
            description: 'Motherly là một cơ quan chăm sóc sức khỏe tại nhà cho người lớn và người cao tuổi sống ở khu vực Philadelphia. Chúng tôi cung cấp dịch vụ bầu bạn và hỗ trợ các hoạt động sinh hoạt hàng ngày. Điều này bao gồm mặc quần áo, tắm rửa, chuẩn bị bữa ăn, nhắc nhở dùng thuốc và nhiều công việc gia đình khác cũng như các dịch vụ khác được cá nhân hóa cho sự chăm sóc của bạn.',
            everydayNeeds: 'Cho nhu cầu hàng ngày của bạn trong sự thoải mái của ngôi nhà của bạn, chúng tôi ở đây cho bạn.',
            additionalDescription: 'Motherly là một cơ quan chăm sóc sức khỏe tại nhà cho người lớn và người cao tuổi sống ở khu vực Philadelphia. Chúng tôi cung cấp dịch vụ bầu bạn và hỗ trợ các hoạt động sinh hoạt hàng ngày. Điều này bao gồm mặc quần áo, tắm rửa, chuẩn bị bữa ăn, nhắc nhở dùng thuốc và nhiều công việc gia đình khác & việc vặt. Xem danh sách đầy đủ các dịch vụ của chúng tôi.<br>Tại Motherly Home Care, an toàn & sự hài lòng là trên hết. Chúng tôi dành thời gian thêm để đảm bảo tất cả các nhu cầu của bạn được đáp ứng, và chúng tôi đi trên & hơn thế nữa để bạn có thể tận hưởng cuộc sống mà bạn xứng đáng có. Bạn sẽ luôn được đối xử như gia đình ở đây tại Motherly Home Care.',
            aboutTitle: 'Về Chúng Tôi',
            ourMission: 'Sứ Mệnh Của Chúng Tôi',
            missionDescription: 'Sự an toàn và chăm sóc chất lượng của bạn là sứ mệnh của chúng tôi. Cung cấp cho khách hàng của chúng tôi những lựa chọn chăm sóc sức khỏe tốt nhất, chúng tôi cố gắng làm cho chất lượng cuộc sống trở nên phong phú hơn, khỏe mạnh hơn và hạnh phúc hơn.',
            address: 'Địa chỉ: 1019 South 8th Street Philadelphia, PA 19147',
            contact: 'Liên hệ: Mary Phan RN, BSN (Nurse)',
            phone: 'Điện thoại: (215) 900-5880',
            email: 'Email: <a href="mailto:marykphan@gmail.com" style="color: white;">marykphan@gmail.com</a>'
        }
    };

    elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            element.innerHTML = translations[currentLanguage][key];
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
