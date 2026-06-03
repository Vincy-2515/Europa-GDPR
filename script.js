function showPage(p) {
    document.querySelectorAll('.page').forEach(x => x.classList.remove('active'));
    document.getElementById('page-' + p).classList.add('active');
    document.getElementById('nav-home').classList.toggle('active', p === 'home');
    document.getElementById('nav-content').classList.toggle('active', p === 'content1' || p === 'content2');
    window.scrollTo(0, 0);
}
