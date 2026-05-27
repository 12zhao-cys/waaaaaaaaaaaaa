document.addEventListener('DOMContentLoaded', function() {
    var sousuoBtn = document.querySelector('.dh_search button');
    if (sousuoBtn) {
        sousuoBtn.addEventListener('click', function() {
            var input = document.querySelector('.dh_search input');
            if (input && input.value.trim()) {
                alert('正在搜索：' + input.value);
            } else {
                alert('请输入搜索内容');
            }
        });
    }

    var menuItems = document.querySelectorAll('.dh_menu li a');
    menuItems.forEach(function(item) {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    var allImg = document.querySelectorAll('img');
    allImg.forEach(function(img) {
        img.addEventListener('error', function() {
            this.style.background = '#e8d7b4';
        });
    });

    var jubenLi = document.querySelectorAll('.juben_liebiao li');
    jubenLi.forEach(function(li) {
        li.addEventListener('click', function() {
            var hua = this.getAttribute('data-hua');
            if (hua) {
                window.location.href = hua;
            }
        });
        li.style.cursor = 'pointer';
    });

    var dlForm = document.querySelector('.denglu_neirong:not(.zhuce_form)');
    if (dlForm) {
        var btns = dlForm.querySelectorAll('button');
        btns.forEach(function(b) {
            b.addEventListener('click', function(e) {
                e.preventDefault();
                var inputs = dlForm.querySelectorAll('input');
                var kong = false;
                inputs.forEach(function(ip) {
                    if (!ip.value.trim()) kong = true;
                });
                if (b.classList.contains('zhu')) {
                    if (kong) {
                        alert('请填写完整登录信息');
                    } else {
                        alert('登录成功，欢迎来到走马古镇');
                    }
                } else {
                    window.location.href = 'register.html';
                }
            });
        });
    }

    var zcForm = document.querySelector('.zhuce_form');
    if (zcForm) {
        zcForm.addEventListener('submit', function(e) {
            e.preventDefault();
            var inputs = zcForm.querySelectorAll('input');
            var kong = false;
            inputs.forEach(function(ip) {
                if (!ip.value.trim()) kong = true;
            });
            if (kong) {
                alert('请填写完整注册信息');
                return;
            }
            alert('注册成功，请使用新账号登录');
            window.location.href = 'login.html';
        });
    }

    var ypForm = document.querySelector('.yuyue_form');
    if (ypForm) {
        ypForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('预约提交成功，工作人员会尽快与您联系');
            ypForm.reset();
        });
    }

    var pinglunBtn = document.querySelector('.pinglun_btn');
    if (pinglunBtn) {
        pinglunBtn.addEventListener('click', function() {
            var ipt = document.querySelector('.pinglun_ipt');
            var liebiao = document.querySelector('.pinglun_liebiao');
            if (ipt && ipt.value.trim() && liebiao) {
                var li = document.createElement('li');
                var t = new Date();
                var hh = t.getHours().toString().padStart(2, '0');
                var mm = t.getMinutes().toString().padStart(2, '0');
                li.innerHTML = '<span class="plyhu">游客' + Math.floor(Math.random() * 9000 + 1000) + '</span>' +
                    '<span class="plnr">' + ipt.value + '</span>' +
                    '<span class="plsj">' + hh + ':' + mm + '</span>';
                liebiao.insertBefore(li, liebiao.firstChild);
                ipt.value = '';
            } else {
                alert('请输入评论内容');
            }
        });
    }
});
