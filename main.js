var navbarSupportedContent = document.getElementById('navbarTogglerDemo02');

// Lấy phần tử toggle button
var toggleButton = document.querySelector('.navbar-toggler');

// Bắt sự kiện click trên toggle button
toggleButton.addEventListener('click', function() {
  // Kiểm tra xem navbarSupportedContent có chứa lớp CSS 'show' hay không
  var isShow = navbarSupportedContent.classList.contains('show');

  // Nếu có lớp 'show', xóa lớp đó; ngược lại, thêm lớp 'show'
  if (isShow) {
    navbarSupportedContent.classList.remove('show');
  } else {
    navbarSupportedContent.classList.add('show');
  }
});