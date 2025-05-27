function checkSubmit(event) {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            event.target.form.submit();
        }
    }

function handleSubmit(event) {
    // Cho phép submit bình thường
    return true;
}
document.addEventListener('DOMContentLoaded', () => {
    const collapseAllBtn = document.getElementById('collapseAllBtn');
    const outputBoxes = document.querySelectorAll('.output-box');

    // Hàm cập nhật chiều cao khi collapsed (bằng chiều cao .output-header)
    function updateCollapsedHeight(box) {
        const header = box.querySelector('.output-header');
        box.style.height = header.offsetHeight + 'px';
        box.classList.add('collapsed');
    }

    // Hàm reset chiều cao khi expanded
    function resetHeight(box) {
        box.style.height = 'auto';
        box.classList.remove('collapsed');
    }

    outputBoxes.forEach(box => {
        const toggleBtn = box.querySelector('.toggle-btn');
        const content = box.querySelector('.output-content');

        toggleBtn.addEventListener('click', () => {
            if (content.classList.contains('collapsed')) {
                // Mở rộng
                content.classList.remove('collapsed');
                toggleBtn.textContent = 'Collapse';
                resetHeight(box);
            } else {
                // Thu gọn
                content.classList.add('collapsed');
                toggleBtn.textContent = 'Mở rộng';
                updateCollapsedHeight(box);
            }
        });
    });

    collapseAllBtn.addEventListener('click', () => {
        const allCollapsed = Array.from(outputBoxes).every(box =>
            box.querySelector('.output-content').classList.contains('collapsed')
        );

        if (allCollapsed) {
            // Mở hết
            outputBoxes.forEach(box => {
                const content = box.querySelector('.output-content');
                const toggleBtn = box.querySelector('.toggle-btn');
                content.classList.remove('collapsed');
                toggleBtn.textContent = 'Collapse';
                resetHeight(box);
            });
            collapseAllBtn.textContent = 'Collapse All';
        } else {
            // Thu gọn hết
            outputBoxes.forEach(box => {
                const content = box.querySelector('.output-content');
                const toggleBtn = box.querySelector('.toggle-btn');
                content.classList.add('collapsed');
                toggleBtn.textContent = 'Mở rộng';
                updateCollapsedHeight(box);
            });
            collapseAllBtn.textContent = 'Expand All';
        }
    });
});

