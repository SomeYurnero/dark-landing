// Проверка сенсорного экрана
function isTouchDeviceCheck() {
    var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
    var mq = function(query) {
        return window.matchMedia(query).matches;
    }

    if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
        return true;
    }

    // include the 'heartz' as a way to have a non matching MQ to help terminate the join
    // https://git.io/vznFH
    var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
    return mq(query);
}

// Добавляем класс к body в зависимости от типа экрана
if (isTouchDeviceCheck()) {
document.body.classList.add("touch-device");
} else {
document.body.classList.add("pointer-device");
}