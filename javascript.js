var Body = {
    setBackgroundColor: function (color) {
        document.querySelector('body').style.backgroundColor = color;
    },
    setColor: function (color) {
        document.querySelector('body').style.color = color;
    }
}
function nightMod(self) {
    var list = document.querySelectorAll('a');
    if (self.value === 'Night') {
        Body.setBackgroundColor('#1A1B28');
        Body.setColor('#D7D7D7');
        self.value = 'Day';
        for (i = 0; i < list.length; ++i) {
            list[i].style.color = '#D7D7D7';
        }
    } else {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        self.value = 'Night';
        for (i = 0; i < list.length; ++i) {
            list[i].style.color = 'black';
        }
    }
}