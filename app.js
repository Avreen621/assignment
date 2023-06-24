document.querySelector('nav').addEventListener('click', function(e) {
    if (e.target.tagName === 'A') {
        e.preventDefault();
        var targetId = e.target.getAttribute('href').substring(1);
        var targetContent = document.getElementById(targetId);
        var allContent = document.querySelectorAll('.content > div');
        for (var i = 0; i < allContent.length; i++) {
            allContent[i].style.display = 'none';
        }
        targetContent.style.display = 'block';
     }
});