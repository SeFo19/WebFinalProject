document.addEventListener('DOMContentLoaded', function () {
    // Select menu items
    const subBtns = document.querySelectorAll('.sub-btn');

    // Add event listener for each sub-menu button
    subBtns.forEach(subBtn => {
        subBtn.addEventListener('click', function () {
            // Find the sub-menu of the clicked menu item
            const subMenu = this.nextElementSibling;

            // Toggle the display of the sub-menu
            subMenu.style.display = subMenu.style.display === 'block' ? 'none' : 'block';
        });
    });
});
